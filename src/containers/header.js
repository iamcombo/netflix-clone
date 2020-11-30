import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt='netflix'/>
        <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
