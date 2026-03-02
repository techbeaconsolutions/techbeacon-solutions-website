"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "./Portfolio";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ✅ Add home id here */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}