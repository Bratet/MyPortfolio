// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Hero from "../components/Hero";
import Page from "../components/Page";
import Footer from "../components/Footer";
import { Center } from "@mantine/core";


// ----------------------------------------

export default function LandingPage() {
  return (
    <>
   
      <ParticlesWrapper />
      <Center>
      <Hero />
      </Center>
 
    <Footer />
    </>
  );
}
