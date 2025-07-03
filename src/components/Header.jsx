"use client";
import Image from "next/image";
import '@/assets/css/get-started-button.css';
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import {
    Link as ScrollLink,
} from "react-scroll";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "home" },
        { label: "Services", href: "services" },
        { label: "About", href: "about" },
    ];

    return (
        <>
            <header className="w-full max-[800px]:h-14 h-16 px-5 py-2.5 fixed top-0 left-0 z-[40] bg-[#ffffffb2] backdrop-blur-sm flex items-center justify-between">
                <ScrollLink
                    activeClass="activelogo"
                    to="home"
                    href="#"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0} className="flex items-center gap-2 select-none cursor-pointer">
                    <Image src={'https://ik.imagekit.io/9kvz9l4o8/zyrixo/logo.webp'} alt="header logo" className="max-[800px]:w-9 max-[800px]:h-9" width={40} height={40} />
                    <h1 className="text-xl max-[800px]:text-[18px] font-bold uppercase tracking-wider">Zyrixo</h1>
                </ScrollLink>
                <nav className="max-[800px]:hidden flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ul className="flex items-center gap-4">
                        {
                            navItems.map((item) => (
                                <li key={item.label} className={`text-md uppercase font-bold tracking-wide text-[#363636] cursor-pointer transition-all duration-300 hover:text-[var(--primary-color)]`}>
                                    <ScrollLink href="#" activeClass="active"
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={0}>
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Link title="Get Started" aria-label="Whatsapp" target="_blank"
                    rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_WHATSAPP} className={`main__button max-[800px]:!hidden`}>
                    <span>Get Started</span>
                    <svg className="!-mr-1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Link>

                <div className="min-[800px]:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <IoMenu size={30} className="text-[#363636]" />
                </div>
            </header>
            {/* sidebar */}
            {
                isSidebarOpen && (
                    <div className="min-[800px]:hidden fixed top-0 left-0 w-full h-screen bg-black/10 z-40" onClick={() => setIsSidebarOpen(false)}></div>
                )
            }
            <div className={`min-[800px]:hidden w-[250px] h-screen bg-[#ffffff] fixed top-0 right-0 z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="w-full h-full flex flex-col items-center gap-4">
                    <ul className="flex flex-col gap-5 mt-20">
                        {
                            navItems.map((item) => (
                                <li key={item.label} className={`text-[16px] uppercase font-bold tracking-wide text-[#363636] cursor-pointer transition-all duration-300 hover:text-[var(--primary-color)]`}>
                                    <ScrollLink activeClass="active"
                                        to={item.href}
                                        href="#"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={0}
                                        onSetActive={() => setIsSidebarOpen(false)}>
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
}
