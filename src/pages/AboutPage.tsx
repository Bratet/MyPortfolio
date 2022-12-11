// components
import About from "../components/About";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Page from "../components/Page";
import Footer from "../components/Footer"
import { Center } from "@mantine/core"

// -------------------------------------------------

export default function AboutPage() {
  return (
    <>

      <ParticlesWrapper />
      <Center>
      <About />
      </Center>
    
    <Footer />
    </>
  );
}
