import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface MembersCardProps {
  avatar: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

const MembersCard: React.FC<MembersCardProps> = ({
  avatar,
  name,
  role,
  description,
  linkedin,
  github,
  website,
}) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-xl overflow-hidden rounded bg-white px-5 py-10 shadow-lg">
        <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt="Avatar"
            className="h-full w-full cursor-pointer object-cover transition-all duration-500 hover:scale-125"
            width={500}
            height={500}
          />
        </div>

        <div className="px-6 py-4 text-center">
          <p className="text-normal pt-2 font-bold text-gray-600 transition-colors duration-300">
            {name}
          </p>
          <p className="mb-3 text-sm font-semibold text-gray-600">{role}</p>
          <p className="mx-auto max-w-md text-sm lg:text-gray-800">
            {description}
          </p>

          <div className="mt-10 flex justify-center space-x-4">
            {linkedin && (
              <a
                href={linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-5 w-5 text-gray-200 hover:text-blue-200"
                />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-5 w-5 text-gray-200 hover:text-gray-100"
                />
              </a>
            )}
            {website && (
              <a
                href={website}
                aria-label="Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="h-5 w-5 text-gray-200 hover:text-blue-200"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
