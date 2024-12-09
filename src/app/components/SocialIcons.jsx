import { FaGithub} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

export const SocialIcons = () => {
  return (
    <div className="flex gap-6 text-xl items-center">
        <a href="#" className="text-gray-900 hover:text-gray-600">
            <CiTwitter />
        </a>
        <a href="#" className="text-gray-900 hover:text-gray-600">
            <CiLinkedin />
        </a>
        <a href="#" className="text-gray-900 hover:text-gray-600">
            <FaGithub />
        </a>
        <a href="#" className="text-gray-900 hover:text-gray-600">
            <TbWorld />
        </a>
    </div>
  )
}
