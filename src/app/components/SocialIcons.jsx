import { FaGithub} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import Link from "next/link";

export const SocialIcons = () => {
  return (
    <div className="md:flex gap-6 text-xl items-center hidden">
        <Link href="https://x.com/arsalanlal414" target="_blank" className="text-gray-900 hover:text-gray-600">
            <CiTwitter />
        </Link>
        <Link href="https://linkedin.com/in/arsalanlal414" target="_blank" className="text-gray-900 hover:text-gray-600">
            <CiLinkedin />
        </Link>
        <Link href="https://github.com/arsalanlal414" target="_blank" className="text-gray-900 hover:text-gray-600">
            <FaGithub />
        </Link>
        <Link href="https://arsalanportfol.vercel.app" target="_blank" className="text-gray-900 hover:text-gray-600">
            <TbWorld />
        </Link>
    </div>
  )
}
