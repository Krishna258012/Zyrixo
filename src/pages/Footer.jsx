import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import '@/assets/css/footer.css';
import { FaXTwitter } from "react-icons/fa6";
import {
    Link
} from "react-scroll";

export default function Footer() {
    return (
        <>
            <footer className="footer_container">
                <div className="w-full px-5 max-[600px]:px-2">
                    <div className="flex items-center justify-center flex-col gap-3">
                        <Image src={'https://ik.imagekit.io/9kvz9l4o8/zyrixo/logo.webp'} alt="Zyrixo Logo" width={40} height={40} className="rounded-md" />
                        <span className="text-xl font-bold tracking-wider uppercase font-montserrat">Zyrixo</span>
                    </div>
                    <h2 className="text-3xl font-semibold tracking-wide text-center my-3 font-montserrat max-[768px]:text-2xl max-[600px]:text-xl">Transforming ideas into Reality with Technology</h2>
                    <p className="text-sm text-center font-medium tracking-wide mb-5 text-[#b8b8b8]">Your all-in-one partner for Web Development, App Development, Cybersecurity, Digital Marketing, and innovative tech solutions to drive your business forward.</p>

                    <div className="w-full max-w-[1100px] mx-auto py-5 flex items-center justify-between max-[768px]:flex-col">
                        <nav className="flex gap-5 max-[768px]:mb-8 max-[600px]:flex-wrap max-[600px]:gap-5">
                            <Link
                                href="#"
                                activeClass="active"
                                to='home'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={0}
                                className="cursor-pointer text-[16px] border-[1.5px] border-gray-400 px-4 rounded-full hover:text-gray-400 py-1 capitalize font-medium tracking-wide">Home</Link>
                            <Link
                                href="#"
                                activeClass="active"
                                to='services'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={0}
                                className="cursor-pointer text-[16px] border-[1.5px] border-gray-400 px-4 rounded-full hover:text-gray-400 py-1 capitalize font-medium tracking-wide">Services</Link>
                            <Link
                                href="#"
                                activeClass="active"
                                to='about'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={0}
                                className="cursor-pointer text-[16px] border-[1.5px] border-gray-400 px-4 rounded-full hover:text-gray-400 py-1 capitalize font-medium tracking-wide">About</Link>
                        </nav>
                        <div className="footer_socal_media flex gap-4 text-xl max-[600px]:gap-5">
                            <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram p-3 text-md border border-white rounded-full">
                                <FaInstagram />
                            </a>
                            <a href={process.env.NEXT_PUBLIC_YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="youtube p-3 text-md border border-white rounded-full">
                                <FaYoutube />
                            </a>
                            <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="twitter p-3 text-md border border-white rounded-full">
                                <FaXTwitter />
                            </a>
                            <a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="faLinkedin p-3 text-md border border-white rounded-full">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom_text tracking-wide">&copy; {new Date().getFullYear()} Zyrixo. All rights reserved.</div>
            </footer>
        </>
    );
}