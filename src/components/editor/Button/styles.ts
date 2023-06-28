import styled from 'styled-components';
import { theme } from 'styles';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary';
}

const BackgroundColor = {
  primary: theme.colors.editor.blue,
  secondary: theme.colors.editor.gray,
};

const Colors = {
  primary: 'white',
  secondary: 'black',
};

export const Container = styled.button<ButtonContainerProps>`
  width: 100%;
  border: none;
  color: ${(props) => Colors[props.variant]};
  padding-block: 0.9rem;
  border-radius: ${(props) => props.theme.border.radius.xl};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  background-color: ${(props) => BackgroundColor[props.variant]};
`;
