import { useEffect, useState } from "react";
// Mantine
import {
  Center,
  Title,
  Text,
  Box,
  Avatar,
  Group,
  createStyles,
  Grid,
  Container
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import github from "../_mock/github.json";
import RepositoryCard from "./RepositoryCard";


// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Github() {
  const { classes } = useStyles();

  //   const { get, loading } = useFetch("https://api.github.com");
  const [repos, setRepos] = useState<any>([]);

    // useEffect(() => {
    //   get("/users/Bratet/repos").then(res => {
    //     setRepos(
    //       res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 16)
    //     );
    //   });
    //   // eslint-disable-next-line
    // }, []);

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users/Bratet/repos");
    const data = await res.json();
    setRepos(
      data
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 9)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
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
          {github.project}
        </Title>
        <BoxWrapper withBackground={true}>
          <Grid>
            {repos.map((repo: any, index: number) => (
              <Grid.Col lg={4} md={5} sm={12} >
                <RepositoryCard
                  key={index}
                  title={repo.name}
                  description={repo.description}
                  language={repo.language}
                  url={repo.svn_url}
                  created_at={repo.created_at}
                  stargazers_count={repo.stargazers_count}
                  forks_count={repo.forks_count}
                />
              </Grid.Col>
            ))}
          </Grid>
        </BoxWrapper>
      </BoxWrapper>
    </Container>
  );
}
