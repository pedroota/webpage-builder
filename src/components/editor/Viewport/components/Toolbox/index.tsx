import * as S from './styles';
import { CgAddR } from 'react-icons/cg';
import { MdOutlineColorLens } from 'react-icons/md';
import { useMenu } from 'stores/menu';

export const Toolbox = () => {
  const { updateViewMenu } = useMenu((state) => state.actions);

  return (
    <S.Container>
      <S.Tool onClick={() => updateViewMenu('tools')}>
        <CgAddR />
      </S.Tool>

      <S.Tool onClick={() => updateViewMenu('styling')}>
        <MdOutlineColorLens />
      </S.Tool>
    </S.Container>
  );
};
