import { useContext } from "react";
import { Modal } from "../../../components";
import {
  IngredientModel,
  OrderContext,
} from "../../../context/order/OrderProvider";
import { useHistory } from "react-router-dom";

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
      <h1>Thank you!</h1>
      <h2>The delivery is on its way</h2>

      <p>Order Summary:</p>
      <hr />
      <h3>Contact information</h3>
      <p>Name: {contactInformation.name}</p>
      <p>Email: {contactInformation.email}</p>
      <p>Additional Notes: {contactInformation.additionalNotes}</p>
      <br />
      <br />

      <hr />
      <h3>Order Details:</h3>
      <hr />
      {selectedIngredients.map((ingredient: IngredientModel, index: number) => {
        return (
          <div key={index}>
            <p>{ingredient.name}</p>
            <p>{ingredient.price}</p>
            <p>{ingredient.count}</p>
          </div>
        );
      })}

      <hr />
      <strong>Final Price: {price}</strong>
      <button onClick={handleCloseModal}>לדף הבית</button>
    </Modal>
  );
};

export default SummaryModal;
