import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

export interface HeaderContent {
  // we're using local assets, so the way we change the image is by assigning different class
  // for each background image. That way, the relative path used can be resolved at build time
  // so we use the "srcId" field as the class name for that purpose
  srcId: string;
  title: string;
  subtitle: string;
  cta: {
    to: string;
    text: string;
  };
}
const headers: HeaderContent[] = [
  {
    srcId: "header-1",
    title: "Chase The Flavors",
    subtitle: "FOOD IS THE INGREDIENT THAT BINDS US TOGETHER.",
    cta: {
      to: "/",
      text: "Taste now",
    },
  },
  {
    srcId: "header-2",
    title: "Pizza and divine taste",
    subtitle: "YOU CAN'T MAKE EVERYONE HAPPY. YOU ARE NOT PIZZA.",
    cta: {
      to: "/",
      text: "order now",
    },
  },
  {
    srcId: "header-3",
    title: "Paradise on your plate",
    subtitle: " PEOPLE WHO LOVE TO EAT ARE ALWAYS THE BEST PEOPLE.",
    cta: {
      to: "/",
      text: "learn more",
    },
  },
];

let currentHeaderContentIdx = 0;
function getNextHeaderContent() {
  return headers[currentHeaderContentIdx % headers.length];
}

const Header = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent>(
    headers[currentHeaderContentIdx]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderContent(getNextHeaderContent());
      currentHeaderContentIdx += 1;
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="header"
      className={`${headerContent.srcId} header text-white text-center 
        d-flex flex-column align-items-center justify-content-center p-4`}
    >
      <h1 className="fw-bold mb-4">{headerContent.title}</h1>
      <p className="text-uppercase mb-4">{headerContent.subtitle}</p>
      <Button
        variant="outline-light"
        className="rounded-0 text-uppercase px-4 py-2 border-3"
        href={headerContent.cta.to}
      >
        {headerContent.cta.text}
      </Button>
    </header>
  );
};

export default Header;
