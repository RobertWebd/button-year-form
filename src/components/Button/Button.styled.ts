import styled from 'styled-components';
import { buttonCommonStyle } from '../../commonStyles';

export const Button = styled.button`
  ${buttonCommonStyle}

  font-size: 30px;
  transition: background-color 0.3s;
  background-color: ${(props) => props.style?.backgroundColor};
  color: ${(props) => props.style?.color};
  border: ${(props) => props.style?.border};

  color: ${(props) => props.color};
`;
