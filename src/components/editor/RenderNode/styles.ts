import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  border: ${(props) =>
    props.isActive
      ? `0.1rem dashed ${props.theme.colors.editor.blue}`
      : `none`};
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.editor.blue};
  padding: 0.5rem 1rem;
  gap: 1rem;
  position: absolute;
  top: -2.53rem;
  right: 0;
  color: white;
  font-size: 1.2rem;

  svg {
    fill: white;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Button = styled.a`
  opacity: 0.9;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
