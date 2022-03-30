import ReactModal from "react-modal";
import { Wrapper } from "../DatePicker/styles";
import { Props } from "./props";

const Modal: React.FC<Props> = (props) => {
  const { isOpen, children } = props;

  return (
    <Wrapper>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "448px",
            padding: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        {children}
      </ReactModal>
    </Wrapper>
  );
};

export default Modal;
