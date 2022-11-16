// components
import About from "../components/About";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Page from "../components/Page";
import Footer from "../components/Footer"

// -------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="About me" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <About />
    </Page>
  );
}
