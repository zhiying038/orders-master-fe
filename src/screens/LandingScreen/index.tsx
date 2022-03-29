import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button block onClick={() => navigate("/cart")} className="w-3/4 mb-5">
        Place Order
      </Button>

      <Button block onClick={() => navigate("/orders")} className="w-3/4">
        View Orders
      </Button>
    </div>
  );
};

export default LandingScreen;
