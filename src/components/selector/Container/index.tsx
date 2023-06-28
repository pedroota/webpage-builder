import { useNode } from '@craftjs/core';
import * as S from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: Partial<ContainerProps>) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <S.Container ref={(dom: HTMLElement) => connect(drag(dom))}>
      {children}
    </S.Container>
  );
};
