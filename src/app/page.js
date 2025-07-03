"use client";
import Hero from "../pages/Hero";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Footer from "@/pages/Footer";
import { Element } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/components/Header";

export default function Home() {

    return (
        <div className="w-full max-w-[1500px] mx-auto">
            <Header />
            <a aria-label="Whatsapp" target="_blank"
                rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_WHATSAPP} className="whatsapp__button">
                <span><FaWhatsapp /></span>
            </a>
            <Element name="home" id="home">
                <Hero />
            </Element>
            <Element name="services" id="services">
                <Services />
            </Element>
            <Element name="about" id="about">
                <About />
            </Element>
            <Footer />
        </div>
    );
}
