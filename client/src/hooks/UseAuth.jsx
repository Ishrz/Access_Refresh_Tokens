import { useState } from "react";
import { axiosInstance } from "../../config/axiosinstance.jsx";

const UseAuth = () => {
  //login states
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  //register states
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //register handler
  const handleRegister =async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);

    const response = await axiosInstance.post("/api/v1/auth/register",{
        username: registerData.name,
        email: registerData.email,
        password:registerData.password
    })

    console.log(response);
    setIsLoading(false);
  };

  //login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    // setIsLoading(true);

    // console.log(loginData)
    const response = await axiosInstance.post("/api/v1/auth/login" , {
        email:loginData.email.trim(),
        password: loginData.password
    }) 

    console.log(response);
    // setIsLoading(false);
  };

  return {
    setShowPassword,
    setIsLoading,
    setLoginData,
    showPassword,
    isLoading,
    loginData,
    handleLogin,
    showConfirmPassword,
    setShowConfirmPassword,
    registerData,
    setRegisterData,
    handleRegister,
  };
};

export default UseAuth;
