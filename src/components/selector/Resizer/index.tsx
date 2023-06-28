import { useRef } from 'react';
import { useNode } from '@craftjs/core';
import { Resizable } from 're-resizable';

interface ResizerProps {
  children: React.ReactNode;
  propKey: { width: string; height: string };
}

export const Resizer = ({ propKey, children }: ResizerProps) => {
  const {
    actions: { setProp },
    connectors: { connect },
    nodeWidth,
    nodeHeight,
  } = useNode((node) => ({
    nodeWidth: node.data.props[propKey.width],
    nodeHeight: node.data.props[propKey.height],
  }));

  const resizable = useRef<Resizable>(null);

  return (
    <Resizable
      ref={(ref) => {
        if (ref) {
          resizable.current = ref;
          connect(resizable.current.resizable);
        }
      }}
      onResize={(_, __, ___, d) => {
        console.log(d);
        setProp((prop: any) => {
          console.log(prop);
        }, 500);
      }}
      size={{ width: nodeWidth, height: nodeHeight }}
    >
      {children}
    </Resizable>
  );
};
