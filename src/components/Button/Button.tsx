import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as UI from './Button.styled';

type ButtonProps<T> = ButtonHTMLAttributes<T> & {
  children: ReactNode;
};

export const Button = <T extends HTMLButtonElement>({ children, onClick, style }: ButtonProps<T>) => {
  return (
    <UI.Button onClick={onClick} style={style}>
      {children}
    </UI.Button>
  );
};
