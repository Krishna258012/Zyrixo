"use client";
import ScrollFloat from "@/components/ScrollFloat";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
// import webDevlopment from '@/assets/images/web-development.webp';
// import appDevelopment from '@/assets/images/app-development.webp';
// import cybersecurity from '@/assets/images/cybersecurity.webp';
// import digitalMarketing from '@/assets/images/digital-marketing.webp';
// import domainHosting from '@/assets/images/domain-hosting.webp';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {

    const services = [
        {
            title: "Web Development & Design",
            description: "We build custom web applications that are tailored to your business needs. Our team of developers uses the latest technologies to create web applications that are fast, secure, and scalable. We offer a range of web development services, including website design, development, and maintenance.",
            image: 'https://ik.imagekit.io/9kvz9l4o8/zyrixo/web-development.webp',
            points: [
                "Responsive and User-Friendly Websites",
                "SEO and High-Performance Optimization",
                "Custom Web Development Solutions",
                "Regular Updates and Maintenance",
            ]
        },
        {
            title: "App Development Android & iOS",
            description: "We build custom mobile applications that are tailored to your business needs. Our team of developers uses the latest technologies to create mobile applications that are fast, secure, and scalable. We offer a range of app development services, including app design, development, and maintenance.",
            image: 'https://ik.imagekit.io/9kvz9l4o8/zyrixo/app-development.webp',
            points: [
                "Custom App Development for Android & iOS",
                "Easy-to-Use and Attractive Designs",
                "Powerful Features and Scalable Solutions",
                "Regular Updates and Maintenance",
            ]
        },
        {
            title: "Cyber Security Solutions",
            description: "We provide cybersecurity services to protect your business from cyber threats. Our team of experts uses the latest technologies to protect your business from cyber threats. We offer a range of cybersecurity services, including threat assessment, risk management, and incident response.",
            image: 'https://ik.imagekit.io/9kvz9l4o8/zyrixo/cybersecurity.webp',
            points: [
                "Secure App and Website Development",
                "Built-in Cyber Security Measures for Protection",
                "Seamless User Experience with Strong Security",
                "Proactive Monitoring and Real-Time Threat Prevention"
            ]
        },
        {
            title: "Digital Marketing & SEO",
            description: "We provide digital marketing services to help your business grow. Our team of experts uses the latest technologies to help your business grow. We offer a range of digital marketing services, including search engine optimization, social media marketing, and email marketing.",
            image: 'https://ik.imagekit.io/9kvz9l4o8/zyrixo/digital-marketing.webp',
            points: [
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Targeted Digital Marketing for Apps & Websites",
                "SEO, Social Media, and Content Strategies"
            ]
        },
        {
            title: "Domain Hosting & Database Setup (Server Setup)",
            description: "We provide domain hosting and database setup services to help your business grow. Our team of experts uses the latest technologies to help your business grow. We offer a range of domain hosting and database setup services, including domain registration, hosting, and database management.",
            image: 'https://ik.imagekit.io/9kvz9l4o8/zyrixo/domain-hosting.webp',
            points: [
                "Domain Registration and Hosting",
                "Database Management and Optimization",
                "Secure and Scalable Server Setup",
                "Regular Updates and Maintenance"
            ]
        }
    ];

    // gsap animation 
    const serviceRefs = useRef([]);


    useEffect(() => {
        serviceRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    y: 200,
                    x: index % 2 === 0 ? -200 : 200,
                    scale: 0.8,
                    opacity: 0.5
                },
                {
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "center bottom+=60%",
                        end: "bottom bottom-=40%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            serviceRefs.current.forEach((el) => {
                gsap.killTweensOf(el);
            });
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up triggers
        };
    }, []);


    return (
        <div className="w-full border-t border-t-[#d6d6d6]">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                containerClassName="text-center"
                textClassName="text-center font-montserrat mt-10 font-bold uppercase text-[var(--primary-text-color)]"
            >
                Our Services
            </ScrollFloat>

            <div className="w-full px-10 max-[900px]:px-3 overflow-hidden">
                {
                    services.map((service, index) => (
                        <div key={index} ref={(el) => serviceRefs.current[index] = el} className={`w-full flex gap-10 max-[800px]:flex-col my-22 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                            <div className="w-1/2 max-[800px]:w-full items-center justify-center">
                                <Image className="w-[560px] h-[400px] max-[800px]:w-full max-[800px]:h-auto rounded-xl" src={service.image} alt={service.title} width={560} height={400} />
                            </div>
                            <div className="w-1/2 max-[800px]:w-full flex flex-col gap-5 max-[800px]:mt-5 max-[600px]:px-1">
                                <h2 className="text-4xl font-bold text-[#292929] max-[600px]:text-2xl">{service.title}</h2>
                                <p className="text-md text-[#000] font-medium w-[80%] max-[1000px]:w-full max-[600px]:text-[15px]">{service.description}</p>
                                <div className="flex flex-col gap-5">
                                    {service.points.map((point, index) => (
                                        <span key={index} className="flex items-center gap-4 text-md font-[600] text-[#000000] max-[600px]:text-[14px]">
                                            <FiCheckCircle size={20} className="text-[#0a6652]" />
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
