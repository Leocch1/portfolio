import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiTwitterLine, RiTiktokLine, RiTelegramLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link
                href="https://www.facebook.com/hiddenbladesueeeee/"
                aria-label="Visit my Facebook profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiFacebookLine />
            </Link>
            <Link
                href="https://www.instagram.com/leeeeeeeyoooww/"
                aria-label="Visit my Instagram profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiInstagramLine />
            </Link>
            <Link
                href="https://x.com/leolouise261"
                aria-label="Visit my Twitter profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiTwitterLine />
            </Link>
            <Link
                href="https://t.me/Leocchi"
                aria-label="Visit my Telegram profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiTelegramLine />
            </Link>
            <Link
                href="https://www.tiktok.com/@leocchi26?lang=en"
                aria-label="Visit my TikTok profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiTiktokLine />
            </Link>
            <Link
                href="https://github.com/Leolouise26"
                aria-label="Visit my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
            >
                <RiGithubLine />
            </Link>
        </div>
    );
};

export default Socials;
