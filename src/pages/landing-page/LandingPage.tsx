import moment from "moment";
import { getGreetingTime } from "../../utils/utils";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();
  return (
    <div>
      <p>Good {getGreetingTime(moment())}</p>
      <button onClick={() => history.push("/ingredients")}>Order Salad!</button>
    </div>
  );
}

export default LandingPage;
