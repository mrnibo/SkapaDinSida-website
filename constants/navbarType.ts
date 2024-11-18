export interface NavbarItem {
    buttonPrimaryText: string;
    buttonPrimaryLink: string;
    navbarLinks: NavbarLink[];
  }
  export interface NavbarLink {
    title: string;
    link: string;
  }

export const NavbarConstant: NavbarItem = {
    buttonPrimaryText: "Kom igång",
    buttonPrimaryLink: "/get-started",
    navbarLinks: [
      { link: "/", title: "Hem" },
      { link: "/about", title: "Om" },
      { link: "/service", title: "Tjänster" },
      { link: "/contact", title: "Kontakt" }
    ]
  }