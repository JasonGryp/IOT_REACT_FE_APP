import { useSelector } from "react-redux";
import {
  selectUsername,
  selectEmail,
} from "../state/Selectors/sessionSelectos";
export const useUserInfo = () => {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  return { username, email };
};
