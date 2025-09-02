// Login.js
import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario:", result.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
