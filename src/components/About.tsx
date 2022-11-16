// Mantine
import { Container, Text, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";
import github from "prism-react-renderer/themes/github";
import vsDark from "prism-react-renderer/themes/dracula";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import { useMediaQuery } from "@mantine/hooks";
import { aboutMe } from "../_mock/aboutme";

// ----------------------------------------------------------------------------

const aboutMeCode = `from Earth import Ahmed

// -----------------------------------------------------------------------------

Class Props(self):
  self.first_name = "Ahmed"
  self.last_name = "Mrabet"
  self.age = 20
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
  const match = useMediaQuery("(max-width: 1000px)");
  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        {!match ? (
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
