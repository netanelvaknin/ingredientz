import { Fragment, useState, useContext, useEffect } from "react";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";
import { TextField, CTAButton } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SummaryModal from "./summary-modal/SummaryModal";
import { CheckoutContainer, ListItemText } from "./CheckoutStyle";
import { List, ListItem, Divider, Grid } from "@material-ui/core";
export interface FormDataModel {
  name: string;
  email: string;
  additionalNotes: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Required field"),
  email: yup
    .string()
    .email("Please provide valid email address")
    .required("Required field"),
  additionalNotes: yup
    .string()
    .required("Required field")
    .min(2, "At least 2 characters required")
    .max(50, "Maximum 50 characters allowed"),
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
    <CheckoutContainer>
      <h1>Your order</h1>
      <List style={{ marginBottom: "3rem" }}>
        <ListItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "0",
            marginTop: "2rem",
          }}
        >
          <ListItemText style={{ fontWeight: "bold" }}>Name</ListItemText>
          <ListItemText style={{ fontWeight: "bold" }}>Quantity</ListItemText>
          <ListItemText style={{ fontWeight: "bold" }}>Price</ListItemText>
        </ListItem>

        {selectedIngredients.map(
          ({ price, count, name }: IngredientModel, index: number) => {
            return (
              <Fragment key={index}>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "0",
                    margin: "2rem 0",
                  }}
                >
                  <ListItemText>{name}</ListItemText>
                  <ListItemText>{count}</ListItemText>
                  <ListItemText>{price}$</ListItemText>
                </ListItem>

                <Divider />
              </Fragment>
            );
          }
        )}

        <ListItem
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "0",
            margin: "2rem 0",
          }}
        >
          <ListItemText style={{ fontWeight: "bold" }}>
            final price: {price}$
          </ListItemText>
        </ListItem>
      </List>

      <div></div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "50rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              control={control}
              error={!!errors.name}
              errorMessage={errors.name && errors.name.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              control={control}
              error={!!errors.email}
              errorMessage={errors.email && errors.email.message}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>

          <Grid item>
            <CTAButton type="submit">Order</CTAButton>
          </Grid>
        </Grid>
      </form>

      <SummaryModal
        open={modalOpen}
        setOpen={setModalOpen}
        selectedIngredients={selectedIngredients}
        price={price}
        contactInformation={contactInformation}
      />
    </CheckoutContainer>
  );
};

export default Checkout;
