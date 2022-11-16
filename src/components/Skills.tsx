// Mantine
import {
  Container,
  createStyles,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// motion
import { motion } from "framer-motion";
// mock
import { tech } from "../_mock/tech";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.teal[4]
        : theme.colors.teal[8],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: theme.fontSizes.lg,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    padding: 5,
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    // shadow color based on theme
    boxShadow: `0 0 10px ${
      theme.colorScheme === "dark"
        ? theme.colors.white[3]
        : theme.colors.gray[7]
    }`,
  },
}));

export default function Skills() {
  const { classes } = useStyles();
  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={true}>
        {tech.map((item: any, index: number) => (
          <div key={index}>
            <Title
              order={3}
              sx={(theme) => ({
                marginBottom: 10,
                marginTop: 10,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[5]
                    : theme.colors.teal[9],
              })}
            >
              {item.title}
            </Title>
            <Text>{item.description}</Text>
            {item.data.map((dataItem: any, index: number) => (
              <div key={index}>
                <Text className={classes.title}>{dataItem.type}</Text>
                <SimpleGrid
                  cols={12}
                  spacing="lg"
                  breakpoints={[
                    { maxWidth: 980, cols: 7, spacing: "md" },
                    { maxWidth: 755, cols: 5, spacing: "sm" },
                    { maxWidth: 600, cols: 4, spacing: "sm" },
                    { maxWidth: 450, cols: 3, spacing: "sm" },
                  ]}
                >
                  {dataItem.png.map((subDataitem: any) => (
                    <motion.img
                      key={subDataitem}
                      className={classes.img}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      src={subDataitem}
                      // alt={subDataitem}
                    />
                  ))}
                </SimpleGrid>
              </div>
            ))}
          </div>
        ))}
      </BoxWrapper>
    </Container>
  );
}
