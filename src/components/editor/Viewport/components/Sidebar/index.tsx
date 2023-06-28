import { useMenu } from 'stores/menu';
import * as S from './styles';
import { AddElements } from './components/AddElements';

export const Sidebar = () => {
  const { menu } = useMenu((state) => state);

  return (
    <S.Container>
      {menu === 'tools' ? <AddElements /> : null}
      {menu === 'styling' ? <p>Styling</p> : null}
    </S.Container>
  );
};
