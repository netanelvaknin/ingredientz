import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { CTAButton } from "../../components/index";
import Lottie from "react-lottie";
import saladAnimation from "../../assets/animations/landing-page-animation.json";
import helloAnimation from "../../assets/animations/hello.json";
import { Grid } from "@material-ui/core";
import { getGreetingTime } from "../../utils/utils";
import moment from "moment";

function LandingPage() {
  const history = useHistory();
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

  return (
    <LandingPageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6}>
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

        <Grid item xs={6}>
          <Lottie
            width={500}
            height={500}
            options={defaultSaladOptions}
            isClickToPauseDisabled={true}
          />
        </Grid>
      </Grid>
    </LandingPageContainer>
  );
}

export default LandingPage;

const LandingPageContainer = styled.div`
  padding-top: 12rem;
  padding-bottom: 12rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const PrimaryHeading = styled.h1`
  max-width: 40rem;
  font-size: 5rem;
  line-height: 1.2;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const AdditionalParagraph = styled.p`
  max-width: 38rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 1.7rem;
`;

const Greeting = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: block;
`;

const HelloAnimationContainer = styled.div`
  & > div {
    outline: none;
    margin: unset;
    margin-left: 10rem !important;
    margin-bottom: -0.9rem !important;
    transform: rotate(25deg);
  }
`;
