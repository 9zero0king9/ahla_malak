import Image from "next/image";
import Layout from "./components/layout.jsx"; 
import Layout2 from "./components/layout2.jsx";
import Layout3 from "./components/layout3.jsx";
import Footer from "./components/footer.jsx";
import Phone_layout from "./components/phone_layout.jsx";
import SEOContent from "./components/SEOContent.jsx";
import FAQSection from "./components/FAQSection.jsx";

export default function Home() {
  return (
    <div className=" bg-white">

      <div className="md:block hidden">  <Layout /> </div>
      <div className="md:hidden block">  <Phone_layout /> </div>

      {/* SEO Enhancement */}
      <SEOContent />
     
      <Layout2 />
      <Layout3 />
      
      {/* FAQ Section */}
      <FAQSection />
      
      <Footer bgColor="bg-red-800" />

      
      
    </div>
  );
}
