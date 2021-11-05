import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { Document, Page } from "react-pdf";

// import Pdf from "src/components/pdf/CV.pdf";

// const onResumeClick = () => {
//   window.open(Pdf);
// };

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br />
        I'm Chaitanya
      </SectionTitle>
      <SectionText>
        I am currently working as a researcher at TCS Research. My research
        interests include online learning, image processing, machine learning,
        deep learning, reinforcement learning.
      </SectionText>
      {/* <Button onClick={() => window.open("/src/pdf/CV.pdf", "_blank")}>
        Check out my CV
      </Button>
      <a href={Pdf} target="_blank">
        Download Pdf
      </a> */}
      <Button
        onClick={() =>
          (window.location = "https://mailto:amballachaitanya@gmail.com")
        }
      >
        Contact me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
