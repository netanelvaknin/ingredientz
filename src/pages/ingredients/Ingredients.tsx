import React, { useEffect, useContext } from "react";
import AxiosInstance from "../../api/instance";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";
import { useHistory } from "react-router-dom";
import { CTAButton } from "../../components";
import { List, ListItem, Divider, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  CountButton,
  IngredientName,
  IngredientText,
  IngredientsPageContainer,
  SummaryBar,
  useListItemStyles,
} from "./IngredientStyles";

const Ingredients = () => {
  const {
    ingredients,
    price,
    setIngredients,
    incrementIngredientCount,
    decrementIngredientCount,
  }: any = useContext(OrderContext);
  const history = useHistory();
  const listItemClasses = useListItemStyles();

  useEffect(() => {
    const getIngredients = async () => {
      const ingredients = await AxiosInstance.get("/salad-fake-api.json");

      // Initiate the state with count: 0 for each ingredient
      const initialIngredientsState = ingredients.data.items.map(
        ({ name, price }: IngredientModel) => {
          return {
            name,
            price,
            count: 0,
          };
        }
      );

      setIngredients(initialIngredientsState);
    };

    getIngredients();
  }, [setIngredients]);

  return (
    <IngredientsPageContainer>
      <List style={{ marginBottom: "3rem" }}>
        {ingredients.map(
          ({ name, price, count }: IngredientModel, index: number) => {
            return (
              <React.Fragment key={index}>
                <ListItem classes={{ root: listItemClasses.root }}>
                  <IngredientName>{name}</IngredientName>
                  <IngredientText>
                    <Grid container direction="column">
                      <Grid item>
                        <strong style={{ marginRight: ".5rem" }}>Price</strong>
                        <span style={{ fontSize: "1.3rem" }}>(Each)</span>
                      </Grid>
                      <Grid item>{price} $</Grid>
                    </Grid>
                  </IngredientText>

                  <IngredientText>
                    <Grid container direction="column">
                      <Grid item>
                        <strong>Quantity</strong>
                      </Grid>
                      <Grid item>
                        <span>{count}</span>
                      </Grid>
                    </Grid>
                  </IngredientText>

                  <CountButton
                    variant="plus"
                    onClick={() => incrementIngredientCount(index)}
                  >
                    <AddIcon />
                  </CountButton>
                  <CountButton
                    variant="minus"
                    disabled={ingredients[index].count === 0}
                    onClick={() => decrementIngredientCount(index)}
                  >
                    <RemoveIcon />
                  </CountButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          }
        )}
      </List>

      <SummaryBar>
        <strong style={{ textTransform: "uppercase" }}>
          Final Price : {price}$
        </strong>

        <CTAButton
          disabled={price === 0}
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </CTAButton>
      </SummaryBar>
    </IngredientsPageContainer>
  );
};

export default Ingredients;
