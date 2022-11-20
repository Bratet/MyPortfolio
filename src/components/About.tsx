// Mantine
import { Button, Container, Group, Text, Title, createStyles} from "@mantine/core";
import { Prism } from "@mantine/prism";
import github from "prism-react-renderer/themes/github";
import vsDark from "prism-react-renderer/themes/dracula";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import { useMediaQuery } from "@mantine/hooks";
import { aboutMe, getAge } from "../_mock/aboutme";
import { useState } from "react";

// ----------------------------------------------------------------------------

const useStyles: any = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("md")]: {
      fontSize: 34,
    },
  },

  box: {
    [theme.fn.smallerThan("md")]: {
      marginTop: 100,
      marginRight: 0,
    },
    [theme.fn.largerThan("md")]: {
      maxWidth: 800,
      minWidth: 600,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    background:
      theme.colorScheme === "dark"
        ? theme.colors.teal[4]
        : theme.colors.teal[4],
    color: theme.colorScheme === "dark" ? theme.colors.gray[9] : theme.white,
    "&:hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.teal[5]
          : theme.colors.teal[4],
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.teal[6], 0.55)
        : theme.colors.teal[4],
    borderRadius: theme.radius.lg,
    padding: "4px 12px",
    
  },
}));

const aboutMeCode = `from Earth import Ahmed

// -----------------------------------------------------------------------------

Class Props(self):
  self.first_name = "Ahmed"
  self.last_name = "Mrabet"
  self.age = ${getAge()}
  self.location: "Rabat, Morocco"
  self.email: "ahmedmrabet.002@gmail.com"

  AboutMe():
  return (
    { ${aboutMe.details.map(
      (item: any) =>
        `
      ${item.icon} = {${item.text}}`
    )}
    }
  )
}`;

export default function About() {
  const match = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles();
  const [mode, setMode] = useState(false);

  return (
    <Container px="xl" size="lg">
      <Group position='right'>
      <Button radius="lg" size="md" className={classes.control} onClick={
        () => setMode(false && !match)
        
      }
      disabled={mode === false || match}
      >
        Normal Mode
      </Button>
      <Button radius="lg" size="md" className={classes.control} onClick={
        () => setMode(true && !match)
      }
      disabled={!match && mode === true}

      >
        Developer Mode
      </Button>
      </Group>
      <BoxWrapper withBackground={false}>
        { mode && !match ? (
          <Prism
            noCopy
            language="python"
            getPrismTheme={(_theme, colorScheme) =>
              colorScheme === "dark" ? vsDark : github
            }
          >
            {aboutMeCode}
          </Prism>
        ) : (
          <>
            <Title
              order={3}
              sx={(theme) => ({
                marginBottom: 25,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[5]
                    : theme.colors.teal[9],
              })}
            >
              {aboutMe.title}
            </Title>

            {aboutMe.details.map((item: any, index: number) => (
              <div key={index}>
                <Text size="lg" key={item.id} className="text" mt={5}>
                  <span style={{ marginRight: 5 }}>{item.icon}</span>
                  {item.text}
                </Text>
              </div>
            ))}
          </>
        )}
      </BoxWrapper>
    </Container>
  );
}
