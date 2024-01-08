import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("current_user_details"));
  console.log(currentUser);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to={"/signup"} />;
  }
}
