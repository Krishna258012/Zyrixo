"use client";
import Image from "next/image";
import SplitText from "../components/SplitText";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroImageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroBtnRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, []);

    // gsap animation 
    useEffect(() => {
        if (heroImageRef && heroImageRef.current) {
            gsap.set(heroImageRef.current, { y: 200, opacity: 0.5 });
            gsap.to(heroImageRef.current, { y: 0, duration: 1, ease: "power3.out", opacity: 1 });
        }

        if (heroContentRef && heroContentRef.current) {
            gsap.set(heroContentRef.current, { y: 200, opacity: 0.5 });
            gsap.to(heroContentRef.current, { y: 0, duration: 1, ease: "power3.out", opacity: 1 });
        }

        if (heroBtnRef && heroBtnRef.current) {
            gsap.set(heroBtnRef.current, { y: 200, opacity: 0.5 });
            gsap.to(heroBtnRef.current, { y: 0, duration: 1, ease: "power3.out", opacity: 1 });
        }

        return () => {
            if (heroImageRef && heroImageRef.current) {
                gsap.killTweensOf(heroImageRef.current);
            }
            if (heroContentRef && heroContentRef.current) {
                gsap.killTweensOf(heroContentRef.current);
            }
            if (heroBtnRef && heroBtnRef.current) {
                gsap.killTweensOf(heroBtnRef.current);
            }
        };
    }, []);


    return (
        <>
            <div className="hero_section w-full pt-16 flex items-center justify-between max-[900px]:flex-col min-[1300px]:px-10 px-5 max-[600px]:px-3">
                <div className="w-[50%] max-[900px]:w-full flex justify-center flex-col max-[900px]:text-center max-[900px]:mt-10">
                    {/* <h1 className="min-[1300px]:text-[60px] font-montserrat min-[1300px]:leading-18 text-5xl max-[900px]:leading-15 font-bold max-[600px]:text-[35px] max-[600px]:leading-10">Transforming ideas into Reality with Technology</h1> */}
                    <SplitText
                        text="Transforming ideas into Reality with Technology"
                        className="min-[1300px]:text-[60px] font-montserrat min-[1300px]:leading-20 text-5xl max-[900px]:leading-15 font-bold max-[600px]:text-[35px] max-[600px]:leading-10"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <p className="text-md font-medium mt-5 max-[600px]:text-sm" ref={heroContentRef}>Your all-in-one partner for Web Development, App Development, Cybersecurity, Digital Marketing, and innovative tech solutions to drive your business forward.</p>
                    <div ref={heroBtnRef} className="w-full flex max-[900px]:items-center max-[900px]:justify-center my-5">
                        <Link title="Get Started" aria-label="Whatsapp" target="_blank"
                            rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_WHATSAPP}
                            className={`main__button shadow-2xl !py-3 !text-[15px] !px-8 max-[600px]:!text-[17px]`}>
                            <span>Connect with us</span>
                            <svg className="!-mr-1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="w-[40%] max-[900px]:w-full flex items-center max-[900px]:justify-center">
                    <Image ref={heroImageRef} className="w-[700px] max-[900px]:w-[500px]" src='https://ik.imagekit.io/9kvz9l4o8/zyrixo/hero.webp' alt="hero image" width={700} height={0} />
                </div>
            </div>
        </>
    );
}
