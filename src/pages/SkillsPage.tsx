// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { Center } from "@mantine/core"

// -------------------------------------------------

export default function SkillsPage() {
  return (
    <>
    
      <ParticlesWrapper />
      <Center>
      <Skills />
      </Center>
    <Center>
    <Footer />
    </Center>
    </>
  );
}
