import styled from 'styled-components';
import { commonWrapper, padBorderCursor } from '../../commonStyles';
import { StyledInputProps } from '../../types';

export const FormWrapper = styled.div`
  ${commonWrapper}
  flex-direction: row;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<StyledInputProps>`
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(21, 23, 26);
  border: ${(props) => props.errorbg};
`;

export const SubmitButton = styled.button`
  ${padBorderCursor}

  margin: 5px 0;
  background-color: rgb(23, 246, 248);
`;

export const RedText = styled.span`
  color: rgb(244, 67, 54);
  font-size: 10px;
  min-height: 15px;
`;

export const SubmitResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 250px;
`;
