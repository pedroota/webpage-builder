import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 25rem;
  min-width: 25rem;
  border-left: 0.01rem solid ${(props) => props.theme.border.color.light};
`;
