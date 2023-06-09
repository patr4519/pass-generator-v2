import React, { useRef } from "react";
import ClipboardJS from "clipboard";
import styles from "./Generator/Generator.module.scss";
import checkmark from "../assets/checkmark.svg";

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => text,
      });

      clipboard.on("success", () => {
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 2000);
      });

      clipboard.on("error", (error) => {
        alert("Password don't save!");
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, [text]);

  return (
    <div className={styles.svgWrapper} ref={buttonRef}>
      {isVisible && (
        <>
          <svg
            width={23}
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ContentCopyRoundedIcon"
          >
            <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"></path>
          </svg>
        </>
      )}
      {!isVisible && (
        <>
          <img width={17} src={checkmark} alt="copied" />
        </>
      )}
    </div>
  );
};

export default CopyButton;
