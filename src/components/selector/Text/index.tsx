import { useEditor, useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

interface TextProps {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Text = ({ text, type }: Partial<TextProps>) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ContentEditable
      innerRef={connect}
      html={`${text ?? ''}`}
      disabled={!enabled}
      onChange={(event) =>
        setProp((prop) => (prop.text = event.target.value), 500)
      }
      tagName={type ?? 'p'}
    />
  );
};

Text.craft = {
  displayName: 'Text',
  related: {},
};
