import Link from "next/link";
import '@/assets/css/get-started-button.css';

export default function GetStarted({
    className
}) {
    return (
        <Link title="Get Started" aria-label="Whatsapp" target="_blank"
            rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_WHATSAPP} className={`main__button ${className} hidden`}>
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </Link>
    );
}
