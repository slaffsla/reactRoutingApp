import { useNavigate } from "react-router-dom";
export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This Is The Homepage</h1>
      <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
    </div>
  );
};
