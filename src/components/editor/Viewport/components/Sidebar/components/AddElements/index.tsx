import * as S from './styles';

import { RxContainer } from 'react-icons/rx';
import { BiText } from 'react-icons/bi';
import { useEditor } from '@craftjs/core';
import { Container, Text } from 'components/selector';

export const AddElements = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <S.Container>
      <S.WrapperElement
        ref={(ref: HTMLDivElement) => create(ref, <Container />)}
      >
        <RxContainer />
        <label>Container</label>
      </S.WrapperElement>

      <S.WrapperElement ref={(ref: HTMLDivElement) => create(ref, <Text />)}>
        <BiText />
        <label>Text</label>
      </S.WrapperElement>
    </S.Container>
  );
};
