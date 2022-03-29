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
          maxWidth: "414px",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
