import Banner from "@/components/Banner";
import Navbar from "../components/Navbar"
import Features from "@/components/Features";
import "./globals.css";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Athletes from "@/components/Athletes";
import Footer from '../components/Footer'
import FAQS from "@/components/FAQS";

const page = () => {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <Features/>
      <HowItWorks/>
      <Athletes/>
      <Pricing/>
      <Banner/>
      <FAQS/>
      <Footer/>
    </div>
  )
}

export default page