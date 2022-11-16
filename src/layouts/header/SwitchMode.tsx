// Mantine
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
// Motion
import { AnimatePresence, motion } from "framer-motion";
// Icons
import { MoonStars, Sun } from "tabler-icons-react";
// sounds
import useSound from "use-sound";
// mp3
import LightSwitch from "/src/assets/sounds/lightswitch.mp3?url";

// ------------------------------------------------------------

export default function SwitchMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [play] = useSound(LightSwitch, {
    volume: 0.25,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    colorScheme === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorScheme();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={colorScheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ActionIcon
          size="xl"
          onClick={handleClick}
          variant="filled"
          radius="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.gray[8]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[0]
                : theme.colors.gray[8],
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[9]
                  : theme.colors.gray[1],
            },
          })}
        >
          {colorScheme !== "dark" ? <Sun size={24} /> : <MoonStars />}
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  );
}
