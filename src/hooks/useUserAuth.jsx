import { useContext } from "react";
import { UserContext } from "../contexts/UserAuthContext";

const useUserAuth = () => {
    const auth = useContext(UserContext);
    return auth;
};

export default useUserAuth;
