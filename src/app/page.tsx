import Image from "next/image";
import NavBar from "./_Components/Navbar";
import HomeSection from "./_Components/HomeSection";
import "./module.page.css";
import Body from "./_Components/Body";
import Footer from "./_Components/Footer";

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <HomeSection></HomeSection>
    <Body></Body>
    <Footer></Footer>
    </>
  );
}
