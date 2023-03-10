import React from 'react';
import styled from 'styled-components';

import fida from 'assets/logos/fida.png';
import linkedin from 'assets/icons/socials/linkedin.png';
import telegram from 'assets/icons/socials/telegram.png';
import twitter from 'assets/icons/socials/twitter.png';
import whatsApp from 'assets/icons/socials/whatsApp.png';
import { menuItems } from 'data/menuItems';

import { colors } from 'theme';

import { MenuButton } from './MenuButton';
import { Text } from './_common/Text';

const socials = [{
  src: twitter,
  name: 'twitter',
  link: '#'
}, {
  src: telegram,
  name: 'telegram',
  link: '#'
}, {
  src: linkedin,
  name: 'linkedin',
  link: '#'
}, {
  src: whatsApp,
  name: 'whatsApp',
  link: '#'
}];

const text = {
  frida: '©Fida 2023'
};

export const Footer = () => {
  const { iterableItems, joinCommunity } = menuItems;

  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={fida} alt="fida logo" />
      </LogoWrapper>
      <MenuButtonsWrapper>
        <IterableButtonsWrapper>
          {iterableItems.map(({ label, link }) => (
            <div className="mr-5 flex align-items-center">
              <StyledLink href={link}>
                <Text size={16} label={label} fontWeight={700} toUpperCase />
              </StyledLink>
            </div>
          ))}
        </IterableButtonsWrapper>
        <MenuButton label={joinCommunity.label} link={joinCommunity.link} backgroundColor={colors.textGradient} />
      </MenuButtonsWrapper>
      <SocialsWrapper>
        {socials.map(({ name, link, src }) => (
          <div className="mr-5">
            <a href={link}>
              <img src={src} alt={name} />
            </a>
          </div>
        ))}
      </SocialsWrapper>
      <RadiantBar />
      <div className="pb-5">
        <Text size={14} label={text.frida} fontWeight={400} />
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
`;
const LogoWrapper = styled.div`
    margin-bottom: 24px;
`;
const MenuButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
`;
const IterableButtonsWrapper = styled.div`
    display: flex;
    
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const SocialsWrapper = styled.div`
    display: flex;
    margin-bottom: 18px;
`;
const RadiantBar = styled.div`
    width: 100%;
    margin: 0 auto 24px 0;
    height: 2px;
    background: ${colors.textGradient};
`;
