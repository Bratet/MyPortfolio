import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
  Popover,
} from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import BoxWrapper from "./BoxWrapper";
import { ContactIconsList } from "./ContactIcons";
import { useRef,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    minWidth: 600,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.teal[8]} 0%, ${theme.colors.white[7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  description: {
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    // color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.teal[5]
        : theme.colors.teal[4],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.teal[6]
          : theme.colors.teal[8],
    },
  },
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function Contact() {
  const { classes } = useStyles();

  const form: any = useRef();

  const [emailIssent, setEmailIssent] = useState(false);

  const sendEmail = (e : any) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_xv5m6e7', form.current, 'jkEwOHiY1oD0XODTO')
      .then((result) => {
          console.log(result.text);
          setEmailIssent(true);
          console.log(emailIssent);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
    };
  

  // const icons = social.map((Icon, index) => (
  //   <ActionIcon
  //     key={index}
  //     size={28}
  //     className={classes.social}
  //     variant="transparent"
  //   >
  //     <Icon size={22} />
  //   </ActionIcon>
  // ));

  // useEffect(() => {
  //   console.log(emailIssent);
  // }, [emailIssent]);

  return (

    <Container size="md">
    <BoxWrapper>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          {/* <Group mt="xl">{icons}</Group> */}
        </div>
        <form ref={form} className={classes.form}  method="post" onSubmit={sendEmail}>
          <TextInput
            label="Email"
            name="user_email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            name="user_name"
            placeholder="Your name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            label="Message"
            required
            name="message"
            placeholder="I like your hoodie"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md"> 
            <Popover opened={emailIssent} onChange={setEmailIssent} width={150} position="bottom" withArrow shadow="md">
              <Popover.Target>
            <Button className={classes.control} type="submit" value='send'>
              Send Message
            </Button>
            </Popover.Target>
            <Popover.Dropdown>
            <Text size="sm"> Message Sent ✔️ </Text>
            </Popover.Dropdown>
    </Popover>
          </Group>
        </form>
      </SimpleGrid>
    </BoxWrapper>
    </Container>
  );
}
