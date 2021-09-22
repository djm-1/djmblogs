import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";



export default function SignupBtn(props) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogoutBtn theme={props.theme} />
  ) : (
    <LoginBtn theme={props.theme} />
  );
}
