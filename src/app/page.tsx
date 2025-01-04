import Footer from "@/component/footer";
import Navbar from "@/component/Navbar";
import AuthoreCard from "@/component/AuthoreCard";
import Mega from "@/component/Mega";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Mega/>
      <AuthoreCard/>
      <Footer/>
    </div>
    
  );
}
