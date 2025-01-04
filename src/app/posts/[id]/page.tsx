'use client';
import React from "react";
import CommentSection from "@/component/CommentSection";
import AuthoreCard from "@/component/AuthoreCard";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { title } from "process";

const posts =[
    {
        id: '1',
        title: "AI-Powered Healthcare: Revolutionizing Patient Care in 2024",
        description:" Explore how AI is transforming healthcare, from predictive analytics to personalized treatment plans, and what this means for the future of patient care.",
        date: '2024/27/12',
        image:"../image/doctor.png",
    },
    {
        id: "2",
        title: " The Rise of AI in Education: Personalized Learning Experiences",
        description:" Discover how AI is shaping the future of education by providing tailored learning experiences and enhancing student engagement in 2024.",
        date: '2024/27/12',
        image:"../image/classroom.jpg",
    },
    {
        id: '3',
        title: "AI and Automation: The Future of Work in 2024",
        description:" Examine the impact of AI and automation on the workforce, including the types of jobs that may evolve or disappear, and how employees can adapt.",
        date: '2024/27/12',
        image:"/public/ai-va.png",
    },
    {
        id: '4',
        title: "Ethical AI: Ensuring Responsible Development and Usage",
        description:"  Discuss the importance of ethical considerations in AI development, highlighting the need for transparency, fairness, and accountability in 2024.",
        date: '2024/27/12',
        image:"/public/ethical.avif",
    },
    {
        id: '5',
        title: "AI in Cybersecurity: Protecting Our Digital World",
        description:"  Learn how AI is becoming a crucial player in cybersecurity, detecting threats in real-time and enhancing data protection strategies for businesses.",
        date: '2024/27/12',
        image:"/public/lock.jpg",
    },
    {
        id: '6',
        title: "Natural Language Processing: The Future of Human-Machine Interaction",
        description:"  Explore advancements in natural language processing and how they are improving communication between humans and machines in various applications.",
        date: '2024/27/12',
        image:"/public/whatis-ai.jpg",
    },
    {
        id: '7',
        title: "AI and Sustainable Development: A Greener Future",
        description:"Discover how AI technologies are being leveraged to address environmental challenges and promote sustainability across various industries.",
        date: '2024/27/12',
        image:"/public/solar.jpg",
    },
    {
        id: '8',
        title: "The Evolution of AI in Creative Industries: Art, Music, and Beyond",
        description:" Investigate how AI is influencing creative fields, including music composition, art generation, and content creation, and its implications for artists.",
        date: '2024/27/12',
        image:"/public/industries.jpg",
    },
    {
        id: '9',
        title: "AI in Finance: Transforming Investment Strategies",
        description:"Learn how AI is changing the finance sector, from algorithmic trading to risk assessment, and what this means for investors in 2024.",
        date: '2024/27/12',
        image:"/public/finance.jpg",
    },
    {
        id: '10',
        title: "Future Trends in AI Research: What to Expect in 2024 and Beyond",
        description:"Delve into the latest trends in AI research, including emerging technologies and innovations that are expected to shape the field in the coming years.",
        date: '2024/27/12',
        image:"/public/ai-future.jpg",
    },
];

export default function Post({ params}:{params: {id: string}}){
    const {id} = params;
    const post = posts.find((p) => p.id === id);

    if (!post){
        return(
            <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
        );
    }

    const renderParagraphs =(description: string) => {
        return description.split("/n").map((para, index) => {
            <p key={index} className="mt-4 text-justify">{para.trim()}</p>
        });
    };

    return(
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
                
                {post.title}
            </h1>
            {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                < img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-md mt-4"/>
            )}
            <div className="mt-6 text-lg text-slate-700">
                {renderParagraphs(post.description)}
                 
            </div>
            <CommentSection postId={post.id}/>
            <AuthoreCard/>
        </div>
    )
}