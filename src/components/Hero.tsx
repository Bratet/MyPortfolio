// mantine
import {
  Box,
  Button,
  Center,
  createStyles,
  Grid,
  Group,
  Paper,
  Title,
} from "@mantine/core";
// icons
import Type from "./animations/Type";
// svg
//
import { useNavigate } from "react-router-dom";
import HeroCanvas from "./HeroCanvas";
import CV from "../assets/Ahmed Mrabet.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";
// --------------------------------------------------

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

export default function Hero() {
  const { classes } = useStyles();
  const [active, setActive] = useState("/about");
  const navigate = useNavigate();
  return (
    
    <Group pr={10}>
      <Grid justify="space-between" align="center">
        <Grid.Col lg={6} md={7} sm={12} mt={75}>
          <Center>
            <Box className={classes.box}>
              <Title className={classes.title}>
                I'm <span className={classes.highlight}>Mrabet Ahmed</span> {" "}
                <br />{" "}
              </Title>
              <Title
                sx={(theme) => ({
                  marginTop: 25,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.teal[4]
                      : theme.colors.teal[3],
                  [theme.fn.smallerThan("md")]: {
                    fontSize: 25,
                  },
                })}
              >
                <Type />
              </Title>
              <Group mt={30}>
                <Link to="/about">
                  <Button radius="lg" size="md" className={classes.control}>
                    Find out
                  </Button>   
                </Link>
                <a href={CV}>
                  <Button variant="default" radius="lg" size="md" >
                  Download CV
                </Button>
                </a>
              </Group>
            </Box>
          </Center>
        </Grid.Col>
        <Grid.Col lg={6} md={5} sm={12}>
          <Center>
            <Paper
              shadow="lg"
              p="md"
              radius="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[2]
                    : theme.colors.teal[4],

                [theme.fn.smallerThan("sm")]: {
                  marginTop: 100,
                  width: 225,
                  height: 225,
                },
                [theme.fn.largerThan("sm")]: {
                  marginTop: 100,
                  minWidth: 400,
                  minHeight: 400,
                },
                boxShadow: `0 0 10px ${
                  theme.colorScheme === "dark"
                    ? theme.colors.white[3]
                    : theme.colors.white[4]
                } !important`,
              })}
            >
              <HeroCanvas />
            </Paper>
          </Center>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
