import React, { useRef } from 'react';
import ClipboardJS from 'clipboard';

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => text
      });

      clipboard.on('success', () => {
        console.log('Text copied to clipboard!');
      });

      clipboard.on('error', (error) => {
        console.error('Failed to copy text: ', error);
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, [text]);

  return (
    <button ref={buttonRef}>Copy</button>
  );
};

export default CopyButton;
