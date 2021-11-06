import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { GiBrain } from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on technologies and problems ranging from sequential decision
      making, machine leaning, deep learning, multi-agent reinforcement
      learning, convex optimization, wireless communication{" "}
    </SectionText>
    <List>
      <ListItem>
        <GiBrain size="3rem" />
        <ListContainer>
          <ListTitle>Machine learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Tensorflow, Pytorch.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML, CSS, Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Node, Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
