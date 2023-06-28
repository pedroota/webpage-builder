import styled from 'styled-components';

export const Container = styled.header`
  height: 100%;
  max-height: 6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.border.color.light};
  display: flex;
  justify-content: space-between;
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 4.5rem;
  border-right: 0.1rem solid ${(props) => props.theme.border.color.light};
`;

export const WrapperTools = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 1.8rem;
  border-left: 0.1rem solid ${(props) => props.theme.border.color.light};

  > button {
    padding-block: 1.2rem;
  }
`;
