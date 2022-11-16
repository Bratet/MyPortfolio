
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Work from "../components/Resume";
import Studies from "../components/Studies";
import Page from "../components/Page";

export default function ResumePage() {

  return (
    <Page title="Resume" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <Work />
    </Page>
  );
}
