import { useState, useContext, useEffect } from "react";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";
import { TextField } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SummaryModal from "./summary-modal/SummaryModal";

export interface FormDataModel {
  name: string;
  email: string;
  additionalNotes: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  additionalNotes: yup.string().min(2).max(50).required(),
});

const initialFormValues = {
  name: "",
  email: "",
  additionalNotes: "",
};

const Checkout = () => {
  const { ingredients, price }: any = useContext(OrderContext);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [contactInformation, setContactInformation] = useState<FormDataModel>(
    initialFormValues
  );
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Save only selected ingredients
    const selected = ingredients.filter((ingredient: IngredientModel) => {
      return ingredient.count > 0;
    });

    setSelectedIngredients(selected);
  }, [ingredients]);

  const onSubmit = (formData: FormDataModel) => {
    setContactInformation(formData);
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={() => history.push("/ingredients")}>Go back</button>
      {selectedIngredients.map(
        ({ price, count, name }: IngredientModel, index: number) => {
          return (
            <div key={index}>
              <p>{name}</p>
              <p>{count}</p>
              <p>{price}</p>
            </div>
          );
        }
      )}

      <div>finalPrice: {price}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          control={control}
          error={!!errors.name}
          errorMessage={errors.name && errors.name.message}
        />
        <TextField
          label="Email"
          name="email"
          control={control}
          error={!!errors.email}
          errorMessage={errors.email && errors.email.message}
        />
        <TextField
          label="Additional Notes"
          name="additionalNotes"
          control={control}
          multiline
          rows={4}
          error={!!errors.additionalNotes}
          errorMessage={
            errors.additionalNotes && errors.additionalNotes.message
          }
        />

        <button type="submit">Order</button>
      </form>

      <SummaryModal
        open={modalOpen}
        setOpen={setModalOpen}
        selectedIngredients={selectedIngredients}
        price={price}
        contactInformation={contactInformation}
      />
    </div>
  );
};

export default Checkout;
