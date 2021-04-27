import { useHistory } from "react-router-dom";
import { CTAButton } from "../../components/index";
import Lottie from "react-lottie";
import saladAnimation from "../../assets/animations/landing-page-animation.json";
import helloAnimation from "../../assets/animations/hello.json";
import { Grid } from "@material-ui/core";
import { getGreetingTime } from "../../utils/utils";
import moment from "moment";
import {
  AdditionalParagraph,
  Greeting,
  HelloAnimationContainer,
  LandingPageContainer,
  PrimaryHeading,
} from "./LandingPageStyles";
import { useSmallScreen } from "../../hooks/useSmallScreen";

function LandingPage() {
  const history = useHistory();
  const isSmallScreen = useSmallScreen();

  return (
    <LandingPageContainer>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <HelloAnimationContainer>
            <Lottie
              width={50}
              height={50}
              options={defaultHelloOptions}
              isClickToPauseDisabled={true}
            />
          </HelloAnimationContainer>
          <Greeting>Good {getGreetingTime(moment())}</Greeting>

          <PrimaryHeading>Make Your Custom Healthy Salad Now</PrimaryHeading>

          <AdditionalParagraph>
            Wake up early, eat fresh & healty. aside from their natural good
            taste and great crunchy texture alongside wonderful colors and
            fragnances. eating a large serving of <strong>fresh!</strong>
          </AdditionalParagraph>

          <CTAButton onClick={() => history.push("/ingredients")}>
            Order
          </CTAButton>
        </Grid>

        {!isSmallScreen && (
          <Grid item xs={6}>
            <Lottie
              width={500}
              height={500}
              options={defaultSaladOptions}
              isClickToPauseDisabled={true}
            />
          </Grid>
        )}
      </Grid>
    </LandingPageContainer>
  );
}

export default LandingPage;

const commonDefaults = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultSaladOptions = {
  animationData: saladAnimation,
  ...commonDefaults,
};

const defaultHelloOptions = {
  animationData: helloAnimation,
  ...commonDefaults,
  loop: true,
};
