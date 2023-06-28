import { useRef } from 'react';
import { useEditor, useNode } from '@craftjs/core';
import * as S from './styles';
import { AiTwotoneDelete as Delete } from 'react-icons/ai';

interface RenderNodeProps {
  render: React.ReactNode;
}

export const RenderNode = ({ render }: RenderNodeProps) => {
  const { id } = useNode();
  const { actions, query } = useEditor();

  const { isHover, name, deletable } = useNode((node) => ({
    isHover: node.events.hovered,
    name: node.data.custom.displayName ?? node.data.displayName,
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  return (
    <S.Container isActive={isHover}>
      {isHover ? (
        <S.Tools ref={currentRef}>
          <span>{`${name}_${id}`}</span>

          {deletable ? (
            <S.Button
              onMouseDown={(event: React.MouseEvent) => {
                event.stopPropagation();
                actions.delete(id);
              }}
            >
              <Delete />
            </S.Button>
          ) : null}
        </S.Tools>
      ) : null}
      {render}
    </S.Container>
  );
};
