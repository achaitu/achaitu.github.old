import React from "react";
import Link from "next/link";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, BoxLink } from "./AcomplishmentsStyles";

const data = [
  {
    conf: "AAAI 2021",
    text: "Computing an Efficient Exploration Basis for Learning with Univariate Polynomial Features ",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/16821",
  },
  {
    conf: "ICML 2020 workshop",
    text: "Learning Algorithms for Dynamic Pricing: A Comparative Study",
    link: "https://realworldml.github.io/files/cr/51_dynamic_pricing_cr.pdf",
  },
  {
    conf: "SPCOM 2020",
    text: "Coexistence of LTE‑Unlicensed and WiFi: optimization and Game‑Theoretic Frameworks",
    link: "https://ieeexplore.ieee.org/document/9179532",
  },
  {
    conf: "COMSNETS 2021",
    text: "Coexistence of LTE‑Unlicensed and WiFi: A Reinforcement Learning Framework",
    link: "https://ieeexplore.ieee.org/document/9352942",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Publications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.conf}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxLink href={card.link}>check it out!</BoxLink>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
