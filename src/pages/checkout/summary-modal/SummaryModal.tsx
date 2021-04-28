import { useContext } from "react";
import { Modal, CTAButton } from "../../../components";
import {
  IngredientModel,
  OrderContext,
} from "../../../context/order/OrderProvider";
import { useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

export interface FormDataModel {
  name: string;
  email: string;
  additionalNotes: string;
}

interface SummaryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedIngredients: IngredientModel[];
  price: number;
  contactInformation: FormDataModel;
}

const SummaryModal = ({
  open,
  setOpen,
  selectedIngredients,
  price,
  contactInformation,
}: SummaryModalProps) => {
  const history = useHistory();
  const { resetOrder }: any = useContext(OrderContext);

  const handleCloseModal = () => {
    setOpen(false);
    resetOrder();
    history.push("/");
  };

  return (
    <Modal open={open}>
      <h1>Thank you !</h1>
      <h2 style={{ marginBottom: "2rem" }}>The delivery is on its way</h2>

      <h3>Contact information</h3>
      <Divider style={{ marginBottom: "2rem" }} />
      <div style={{ marginBottom: "2rem" }}>
        <p>Name: {contactInformation.name}</p>
        <p>Email: {contactInformation.email}</p>
        {contactInformation.additionalNotes && (
          <p>Additional Notes: {contactInformation.additionalNotes}</p>
        )}
      </div>

      <Divider />
      <h3 style={{ padding: "1rem 0" }}>Order Details:</h3>
      <Divider />
      <div style={{ margin: "2rem 0" }}>
        {selectedIngredients.map(
          (ingredient: IngredientModel, index: number) => {
            return (
              <div key={index}>
                <span>{ingredient.name}</span>
                <span style={{ marginLeft: "1rem" }}>{ingredient.count}x</span>
              </div>
            );
          }
        )}
      </div>

      <Divider />
      <strong
        style={{
          fontSize: "2rem",
          marginTop: "2rem",
          textTransform: "uppercase",
        }}
      >
        Final Price: {price}$
      </strong>
      <CTAButton style={{ marginTop: "2rem" }} onClick={handleCloseModal}>
        Done
      </CTAButton>
    </Modal>
  );
};

export default SummaryModal;
