import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 4.5rem;
  min-width: 4.5rem;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-right: 0.01rem solid ${(props) => props.theme.border.color.light};
`;

export const Tool = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.editor.gray};
    width: 2.3rem;
    height: 2.3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${(props) => props.theme.colors.editor.blue};
    }
  }
`;
