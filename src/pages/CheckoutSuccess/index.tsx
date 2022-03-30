import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

const CheckoutSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center overflow-y-auto">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
        <div className="text-center p-4">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="w-16 h-16 mx-auto mb-4"
          />

          <h2 className="mb-8 font-bold text-3xl">Thank You</h2>

          <h3 className="font-bold">Order ID:</h3>
          <h4>{id}</h4>

          <Button
            block
            onClick={() => navigate("/")}
            size="large"
            className="mt-6"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
