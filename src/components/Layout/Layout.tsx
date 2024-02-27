import { Outlet, useMatch } from 'react-router-dom';
import { Header, StyledLink } from './Layout.styled';

function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
  const match = useMatch(to);
  const isactive = match !== null && match !== undefined;

  return (
    <li>
      <StyledLink to={to} isactive={isactive.toString()}>
        {children}
      </StyledLink>
    </li>
  );
}

export const Layout = () => {
  return (
    <>
      <Header>
        <NavLinkItem to="/">
          Button <div>{'>'}</div>
        </NavLinkItem>
        <NavLinkItem to="/year">
          Year <div>{'>'}</div>
        </NavLinkItem>
        <NavLinkItem to="/form">
          Form <div>{'>'}</div>
        </NavLinkItem>
      </Header>
      <Outlet />
    </>
  );
};
