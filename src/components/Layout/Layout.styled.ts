import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledNavLinkProps } from '../../types';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 20%;
  height: 100%;
  border-right: 1px solid rgb(23, 246, 247);
  border-radius: 5px;
`;

export const StyledLink = styled(Link)<StyledNavLinkProps>`
  color: rgb(23, 246, 247);
  margin: 5px 30px;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: rgb(48, 50, 53);
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: rgb(48, 50, 53);
  `}
`;
