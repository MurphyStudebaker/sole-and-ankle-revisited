/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <Close>
        <UnstyledButton onClick={onDismiss}>
        <Icon id="close" />
        <VisuallyHidden>
        Dismiss menu
        </VisuallyHidden>  
      </UnstyledButton>
        </Close>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
      </Content>
      </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.gray["overlay"]};
`

 const Close = styled.div`
   position: absolute; 
   top: 32px;
   right: 22px;
 `

const Content = styled(DialogContent)`
  padding: 32px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 300px;
  background: ${COLORS.white};
  opacity: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  gap: 22px;
  flex: 1;

  a:first-of-type {
    color: ${COLORS.secondary};
  }

  a {
    color: ${COLORS.gray[900]};
    text-decoration: none;
    text-transform: uppercase;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  a { 
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`

export default MobileMenu;
