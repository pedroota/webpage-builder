import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Toolbox } from './components/Toolbox';
import * as S from './styles';

interface ViewportProps {
  children: React.ReactNode;
}

export const Viewport = ({ children }: ViewportProps) => {
  return (
    <S.Container>
      <Header />

      <S.Wrapper>
        <Toolbox />
        <S.Editor>{children}</S.Editor>
        <Sidebar />
      </S.Wrapper>
    </S.Container>
  );
};
