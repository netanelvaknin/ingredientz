import { Dialog, Slide, makeStyles } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { forwardRef } from "react";
import { useSmallScreen } from "../../hooks/useSmallScreen";
interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = ({ open, children }: ModalProps) => {
  const classes = useDialogStyles();
  const isSmallScreen = useSmallScreen();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      classes={{ paper: classes.paper }}
      fullScreen={isSmallScreen}
    >
      {children}
    </Dialog>
  );
};

export default Modal;

const useDialogStyles = makeStyles({
  paper: {
    width: "60rem",
    padding: "3rem",
    borderRadius: "2rem",
    "@media (max-width: 767px)": {
      borderRadius: "0",
    },
  },
});
