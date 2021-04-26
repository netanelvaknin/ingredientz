import { Dialog } from "@material-ui/core";

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
}

export const Modal = ({ open, children }: ModalProps) => {
  return <Dialog open={open}>{children}</Dialog>;
};

export default Modal;
