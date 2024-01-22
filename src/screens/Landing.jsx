import React, {Suspense, lazy} from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
// import Services from "../components/Sections/Services";
// import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
// import Contact from "../components/Sections/Contact";
// import Footer from "../components/Sections/Footer"

// import FlyingBlocks from "./FlyingBlocks"
// import YandexMap from "../components/YandexMap/YandexMap"
import "./particles.css"

const TopNavbar = lazy(() => import('../components/Nav/TopNavbar'));
const Header = lazy(() => import('../components/Sections/Header'));
const Services = lazy(() => import('../components/Sections/Services'));
const Projects = lazy(() => import('../components/Sections/Projects'));
const Blog = lazy(() => import('../components/Sections/Blog'));
const Pricing = lazy(() => import('../components/Sections/Pricing'));
const Contact = lazy(() => import('../components/Sections/Contact'));
const Footer = lazy(() => import('../components/Sections/Footer'));
const YandexMap = lazy(() => import('../components/YandexMap/YandexMap'));

export default function Landing() {

  return (
    <Suspense fallback={<>Загрузка....</>}>
      {/*<FlyingBlocks/>  Анимация огнетушителей */}
      <TopNavbar />

      <Suspense fallback={<>Загрузка....</>}>
        <Header />
        <Projects />
        <Services />
        <Blog />
        {/* <Pricing /> */}
        <Contact />
        <YandexMap />
      </Suspense>
      
      <Footer />
    </Suspense>
  );
}


