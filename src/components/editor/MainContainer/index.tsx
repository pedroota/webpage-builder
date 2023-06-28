import * as S from './styles';

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

MainContainer.craft = {
  props: {},
  rules: {
    canDrop: () => false,
    canDrag: () => false,
    canMoveOut: () => false,
  },
  related: {},
};
