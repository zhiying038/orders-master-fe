import ReactModal from "react-modal";
import { Props } from "./props";

const Modal: React.FC<Props> = (props) => {
  const { isOpen, children } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "500px",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
