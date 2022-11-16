// React
import { Outlet } from "react-router-dom";
// Manatine UI
import { AppShell, useMantineTheme } from "@mantine/core";
// header
import HeaderResponsive from "./header/HeaderResponsive";

//-----------------------------------------------------------------------------

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About me",
    link: "/about",
  },
  // {
  //   label: "Path",
  //   link: "/path",
  // },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Resume",
    link: "/resume",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Contact me",
    link: "/contact",
  },
];

export default function MainLayout(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <AppShell
      navbarOffsetBreakpoint={theme.breakpoints.md}
      fixed
      header={<HeaderResponsive links={links} />}
    >
      <Outlet />
    </AppShell>
  );
}
