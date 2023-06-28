import { Button } from 'components/editor/Button';
import * as S from './styles';
import Logo from 'assets/logo.svg';

export const Header = () => {
  return (
    <S.Container>
      <S.WrapperLogo>
        <img src={Logo} alt="Logo" width="32px" height="32px" />
      </S.WrapperLogo>
      2
      <S.WrapperTools>
        <Button>Publish</Button>
      </S.WrapperTools>
    </S.Container>
  );
};
