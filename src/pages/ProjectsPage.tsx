import { useState } from "react";
// Mantine
import { ActionIcon, createStyles, Center } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
// components
import About from "../components/About";
import Github from "../components/Github";
import Project from "../components/Project";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";
// // icons
import { ArrowUp } from "tabler-icons-react";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Footer from "../components/Footer";

// -------------------------------------------------

const useStyles = createStyles((theme) => ({
  sticky: {
    position: "sticky",
    zIndex: 9999,
    bottom: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.fn.largerThan("md")]: {
      paddingBottom: 75,
      marginRight: 75,
    },
    [theme.fn.smallerThan("md")]: {
      paddingBottom: 25,
      marginRight: 25,
    },
  },
}));

export default function LandingPage() {
  const [currentOffset, setCurrentOffset] = useState(0);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { classes } = useStyles();

  const handleParallaxNavigationUp = () => {
    scrollIntoView({ alignment: "center" });
  };

  return (
    <>
      <div ref={targetRef} />
      <ParticlesWrapper />
        <Center>
        <Github />
        </Center>
        <Center>
        <Project />
        </Center>
      <div className={classes.sticky}>
        <ActionIcon
          variant="filled"
          color="gray"
          radius={50}
          onClick={handleParallaxNavigationUp}
          // disabled={currentOffset >= 2}
          size={45}
          mr={25}
        >
          <ArrowUp />
        </ActionIcon>
      </div>
      <Footer />
    </>
  );
}
