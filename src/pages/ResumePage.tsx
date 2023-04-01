
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Work from "../components/Resume";
import Footer from "../components/Footer";
import { ActionIcon, createStyles, Center } from "@mantine/core"
import { ArrowUp } from "tabler-icons-react";
// Mantine

import { useScrollIntoView } from "@mantine/hooks";



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

export default function ResumePage() {
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
      <Work />
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
