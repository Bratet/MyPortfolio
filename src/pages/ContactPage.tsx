// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import { Center } from "@mantine/core";
// -------------------------------------------------

export default function LandingPage() {
  return (
    <>

      <ParticlesWrapper />
      <Center>
      <Contact />
      </Center>

    <Footer />
    </>
  );
}
