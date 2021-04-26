import { useState, useContext, useEffect } from "react";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";
import { TextField } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
interface FormDataModel {
  name: string;
  email: string;
  additionalNotes: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  additionalNotes: yup.string().min(2).max(50).required(),
});

const Checkout = () => {
  const {
    ingredients,
    price,
    setIngredients,
    incrementIngredientCount,
    decrementIngredientCount,
  }: any = useContext(OrderContext);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      additionalNotes: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Save only selected ingredients
    const selected = ingredients.filter((ingredient: IngredientModel) => {
      return ingredient.count > 0;
    });

    setSelectedIngredients(selected);
  }, []);

  const onSubmit = (formData: FormDataModel) => {
    console.log(formData);
  };

  return (
    <div>
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
        <TextField label="Name" name="name" control={control} />
        <TextField label="Email" name="email" control={control} />
        <TextField
          label="Additional Notes"
          name="additionalNotes"
          control={control}
          multiline
          rows={4}
        />

        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default Checkout;
