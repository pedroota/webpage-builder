import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 1rem;
  overflow: auto;
`;

export const WrapperElement = styled.button`
  border-radius: ${(props) => props.theme.border.radius.sm};
  padding: 2rem;
  max-width: 9rem;
  max-height: 9rem;
  background-color: white;
  border: 0.1rem solid ${(props) => props.theme.colors.editor.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  cursor: grab;

  &:focus {
    border: 0.1rem solid ${(props) => props.theme.colors.editor.blue};
  }

  > label {
    font-size: ${(props) => props.theme.font.size.ssm};
    font-weight: ${(props) => props.theme.font.weight.normal};
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }
`;
