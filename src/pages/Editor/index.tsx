import { Editor, Frame, Element } from '@craftjs/core';
import { Container, Text } from 'components/selector';
import { MainContainer } from 'components/editor/MainContainer';
import { RenderNode } from 'components/editor/RenderNode';
import { Viewport } from 'components/editor/Viewport';

export const EditorPage = () => {
  return (
    <Editor resolver={{ MainContainer, Container, Text }} onRender={RenderNode}>
      <Viewport>
        <Frame>
          <Element is={MainContainer} canvas>
            <Container>
              <h1>Oi 1</h1>
            </Container>
            <h1>Oi 2</h1>
          </Element>
        </Frame>
      </Viewport>
    </Editor>
  );
};
