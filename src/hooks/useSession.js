import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {
  attemptLogin,
  attemptRegister,
  setSession,
} from "../state/Actions/sessionActions";
const useSession = ({ type, payload }) => {
  const dispatch = useDispatch();
  switch (type) {
    case "setState": {
      dispatch(setSession(Cookies.get("user")));
    }
    case "logIn": {
      dispatch(attemptLogin(payload));
    }
    case "register": {
      dispatch(attemptRegister(payload));
    }
  }
};
export default useSession;
