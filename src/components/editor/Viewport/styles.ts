import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 6rem);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.editor.lightGray};
`;

export const Editor = styled.div`
  width: calc(100vw - 40rem);
  height: 100%;
  padding: 3rem;
  overflow: auto;
`;
