import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import Upload from "@/components/ui/Upload";
import { triggerToast } from "@/stores/toast";
import Navbar from "@/components/layout/Navbar";

const CareerApplication = () => {
  const router = useRouter();
  const { position: positionParam } = router.query;

  const [position, setPosition] = useState("");
  const [type, setType] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (router.isReady) {
      if (typeof positionParam === "string") {
        setPosition(positionParam.replace(/-/g, " "));
      }
      const typeParam = router.query.type;
      const modeParam = router.query.mode;
      setType(
        typeof typeParam === "string" ? typeParam.replace(/-/g, " ") : ""
      );
      setMode(
        typeof modeParam === "string" ? modeParam.replace(/-/g, " ") : ""
      );
    }
  }, [router.isReady, positionParam, router.query.type, router.query.mode]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const validateForm = (): boolean => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !portfolio.trim() ||
      !cvFile
    ) {
      triggerToast(
        "Please fill in all required fields before submitting.",
        3000
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      triggerToast("Please enter a valid email address.", 3000);
      return false;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      triggerToast("Please enter a valid phone number (10-15 digits).", 3000);
      return false;
    }

    try {
      new URL(portfolio);
    } catch {
      triggerToast("Please enter a valid portfolio URL.", 3000);
      return false;
    }

    return true;
  };

  const submitApplication = async () => {
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("position", position);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("portfolio", portfolio);
    if (cvFile) {
      formData.append("cvFile", cvFile);
    }

    try {
      const response = await fetch("/api/jobs/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        triggerToast(
          `Your application for ${position} (${type}, ${mode}) has been submitted successfully!`,
          3000
        );
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPortfolio("");
        setCvFile(null);
      } else {
        triggerToast(data.error || "Failed to submit application.", 3000);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      triggerToast("Failed to submit application. Please try again.", 3000);
    }
  };

  const cancelApplication = () => {
    router.back();
  };

  return (
    <>
      <Navbar signIn />
      <div className="mx-auto my-24 max-w-3xl p-6 sm:my-24">
        <h2 className="text-2xl font-semibold uppercase">{position}</h2>
        <p className="mb-4 text-lg text-gray-600">
          <span>{type}</span> ⋅ <span>{mode}</span>
        </p>

        <h3 className="my-4 text-xl uppercase sm:my-4">Your Application</h3>
        <p className="text-sm sm:mt-2 sm:mb-8">
          We are pleased that you are interested in Graminate ERP Solutions.
          Please fill out the following short form. If you have any problems
          uploading your data, please send an email to{" "}
          <a href="mailto:career@graminate.com">career@graminate.com</a>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitApplication();
          }}
          className="space-y-4"
        >
          <div className="flex flex-row gap-4">
            <TextField
              label="First Name *"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e as unknown as string)}
            />
            <TextField
              label="Last Name *"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e as unknown as string)}
            />
          </div>

          <TextField
            label="Email *"
            placeholder="e.g. john.doe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e as unknown as string)}
          />
          <TextField
            label="Phone Number *"
            placeholder="Your Active Phone Number"
            value={phone}
            onChange={(e) => setPhone(e as unknown as string)}
          />
          <TextField
            label="Portfolio *"
            placeholder="LinkedIn / Xing / Website"
            value={portfolio}
            onChange={(e) => setPortfolio(e as unknown as string)}
          />

          <Upload label="CV *" onFileSelect={setCvFile} />

          <div className="flex justify-between">
            <Button
              text="Submit"
              style="primary"
              width="medium"
              type="submit"
            />
            <Button
              text="Cancel"
              style="secondary"
              width="medium"
              type="button"
              onClick={cancelApplication}
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default CareerApplication;
