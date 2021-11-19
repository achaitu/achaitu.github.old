import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <section id="projects">
    {/* <SectionDivider /> */}
    <br />
    <SectionTitle style={{marginLeft:"120px"}}> Projects </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, code, link }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={code}>Code</ExternalLinks>
            <ExternalLinks href={link}>Check it out</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </section>
);

export default Projects;
