import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
          <SocialIcons href="https://www.instagram.com/achaitu_/">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
