import React from "react";
import Link from "next/link";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

// style: CinemiqLayout converted to styled-components (mobile-first)
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #071025 0%, #071625 100%);
  color: #e6eef8;
`;

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.03);
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (min-width: 768px) {
    padding: 16px 20px;
  }
`;

const Brand = styled.div`
  font-weight: 800;
  font-size: 1.05rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;

  a {
    color: #9fb0c8;
    padding: 8px 10px;
    border-radius: 8px;
    transition: background 160ms ease, transform 160ms ease, color 160ms ease;
  }

  a:hover {
    background: rgba(255,255,255,0.03);
    transform: translateY(-2px);
    color: #ffffff;
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
  padding: 20px 16px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 28px 20px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.02);
  color: #94a4b6;
  font-size: 0.95rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px;
  text-align: center;
`;

export default function CinemiqLayout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <GlobalStyles />

      <Header>
        <HeaderInner>
          <Brand>
            <Link href="/">Cinemiq</Link>
          </Brand>

          <Nav aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/favorites">Favorites</Link>
          </Nav>
        </HeaderInner>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <FooterInner>© {new Date().getFullYear()} Cinemiq — Built with Next.js.</FooterInner>
      </Footer>
    </Container>
  );
}
