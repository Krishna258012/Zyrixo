"use client";
import ScrollFloat from "@/components/ScrollFloat";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {

    const aboutRef1 = useRef(null);
    const aboutRef2 = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(aboutRef1.current, { y: 200, opacity: 0 },
            {
                y: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
                scrollTrigger: {
                    trigger: aboutRef1.current,
                    start: "center bottom+=60%",
                    end: "bottom bottom-=40%",
                    toggleActions: "play none none reverse",

                },
            }
        );

        gsap.fromTo(aboutRef2.current, { y: 200, opacity: 0 },
            {
                y: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
                scrollTrigger: {
                    trigger: aboutRef2.current,
                    start: "center bottom+=60%",
                    end: "bottom bottom-=40%",
                    toggleActions: "play none none reverse",

                },
            }
        );

        gsap.fromTo(headingRef.current, { y: 200, opacity: 0 },
            {
                y: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "center bottom+=60%",
                    end: "bottom bottom-=40%",
                    toggleActions: "play none none reverse",

                },
            }
        );

        return () => {
            gsap.killTweensOf(aboutRef1.current);
            gsap.killTweensOf(aboutRef2.current);
            gsap.killTweensOf(headingRef.current);
        };
    }, [])

    return (
        <div className="w-full border-t border-t-[#d6d6d6]">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                containerClassName="text-center"
                textClassName="text-center font-montserrat mt-10 font-bold uppercase text-[var(--primary-text-color)]">
                About Us
            </ScrollFloat>

            <div className="w-full flex flex-col items-center justify-center gap-10 px-10 max-[900px]:px-3">
                <p ref={aboutRef1} className="w-[80%] max-[900px]:w-[90%] max-[600px]:w-full text-[17px] max-[600px]:text-[15px] max-[600px]:font-semibold text-[#3a3a3a] font-semibold text-center mt-10">Welcome to Zyrixo, where we combine innovation, expertise, and dedication to help businesses succeed in the digital world. Our team of skilled developers, designers, and strategists is committed to creating exceptional digital solutions tailored to your needs. From building cutting-edge websites and mobile applications to ensuring robust security and seamless performance, we focus on empowering businesses to thrive in today’s competitive landscape. With a strong emphasis on quality, user experience, and scalability, we aim to deliver solutions that not only meet your expectations but exceed them. Whether you're looking to build a new digital presence, enhance an existing one, or secure your online platforms, we’re here to help every step of the way.</p>
                <h2 ref={headingRef} className="text-5xl my-5 font-bold max-[600px]:text-2xl bg-gradient-to-b from-[#438b67] via-[#097c74] to-[#026d66] bg-clip-text text-transparent text-center">Let’s Build Something Great Together!</h2>
                <p ref={aboutRef2} className="w-[80%] max-[900px]:w-[90%] max-[600px]:w-full text-[17px] max-[600px]:text-[15px] max-[600px]:font-semibold text-[#3a3a3a] font-semibold text-center">At Zyrixo, we believe in turning ideas into reality. Let’s collaborate to create impactful digital solutions that drive success. Contact us today and take the first step toward your digital transformation!</p>
            </div>
        </div>
    );
}
