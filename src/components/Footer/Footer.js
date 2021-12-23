import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 6305037536">+91 6305037536 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:amballachaitanya@gmail.com">
            amballachaitanya@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <CompanyContainer>
            <Slogan>Persistence is the key!</Slogan>
          </CompanyContainer>
        </SocialContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/achaitu/">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/chaitanya-amballa/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://scholar.google.com/citations?user=xWSXomQAAAAJ&hl=en/">
            <SiGooglescholar size="3rem"></SiGooglescholar>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
