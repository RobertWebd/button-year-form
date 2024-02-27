import styled from 'styled-components';
import { buttonCommonStyle, commonWrapper, padBorderCursor } from '../../commonStyles';

export const ButtonWrapper = styled.div`
  ${commonWrapper}
`;

export const ChangeText = styled.input`
  ${buttonCommonStyle}
`;

export const StylesWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ErrorStyle = styled.button`
  ${padBorderCursor}

  color: rgb(244, 67, 54);
  border: 1px solid rgb(244, 67, 54);
  background-color: rgb(17, 22, 27);
`;

export const SuccessStyle = styled.button`
  ${padBorderCursor}

  background-color: rgb(102, 187, 106);
  color: rgb(13, 24, 13);
`;

export const Primary = styled.button`
  ${padBorderCursor}

  background-color: inherit;
  color: rgb(207, 148, 216);
`;
