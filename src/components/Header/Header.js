import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
        <SubscribeButtonWrapper>
          <Button>Subscribe</Button>
          <Link>Already a subscriber?</Link>

        </SubscribeButtonWrapper>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: baseline;
    justify-content: space-between;
    /* padding-bottom: 48px; */
  }
`

const SubscribeButtonWrapper = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: grid;
    gap: 8px;
    justify-items: center;
  }
`

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  text-decoration: underline;
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    background-color: unset;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  :nth-of-type(2) {
    @media ${QUERIES.desktopAndUp} {
      display: none;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

`;

export default Header;
