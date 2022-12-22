import { useNavigate, useParams } from "react-router-dom";
export const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>This Is The Profile Page For {username}!</h1>
      <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
    </div>
  );
};
