import { useState } from 'react';
import { ButtonWrapper, ChangeText, ErrorStyle, Primary, StylesWrapper, SuccessStyle } from './ButtonPage.styled';
import { getRandomColor } from '../../utils';
import { Style } from '../../types';
import { Button } from '../../components';

export const ButtonPage = () => {
  const [text, setText] = useState('Button');
  const [currentStyle, setCurrentStyle] = useState<Style>({
    backgroundColor: 'rgb(102, 187, 106)',
    color: 'rgb(13, 24, 13)',
  });

  const changeColor = () => {
    setCurrentStyle({ color: getRandomColor(), backgroundColor: getRandomColor() });
  };

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = (style: Style) => {
    setCurrentStyle(style);
  };

  return (
    <ButtonWrapper>
      <Button onClick={changeColor} style={currentStyle}>
        {text}
      </Button>
      <ChangeText placeholder="Изменить текст" onChange={changeText}></ChangeText>
      <StylesWrapper>
        <ErrorStyle
          onClick={() =>
            handleButtonClick({
              color: 'rgb(244, 67, 54)',
              border: '1px solid rgb(244, 67, 54)',
              backgroundColor: 'rgb(17, 22, 27)',
            })
          }
        >
          ERROR
        </ErrorStyle>
        <SuccessStyle
          onClick={() =>
            handleButtonClick({
              backgroundColor: 'rgb(102, 187, 106)',
              color: 'rgb(13, 24, 13)',
            })
          }
        >
          SUCCESS
        </SuccessStyle>
        <Primary
          onClick={() =>
            handleButtonClick({
              backgroundColor: 'inherit',
              color: 'rgb(207, 148, 216)',
            })
          }
        >
          PRIMARY
        </Primary>
      </StylesWrapper>
    </ButtonWrapper>
  );
};
