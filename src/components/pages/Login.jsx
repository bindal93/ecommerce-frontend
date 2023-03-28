import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { firebaseConfig } from "../firebase/firebaseConfig";
const Login = () => {
  const [login, SetLogin] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const toast = useToast();
  const authObjStr = localStorage.getItem("authObj");
  let authObj = {
    isAuth: false,
    isAuthError: false,
    isAuthLoading: false,
  };
  if (
    authObjStr &&
    authObjStr !== "null" &&
    authObjStr !== "undefined" &&
    authObjStr !== "{}"
  ) {
    authObj = JSON.parse(authObjStr);
    setIsAuth(authObj.isAuth);
    setIsAuthError(authObj.isAuthError);
    setIsAuthLoading(authObj.isAuthLoading);
  }

  const { state } = useLocation();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    SetLogin({
      ...login,
      [name]: value,
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    localStorage.setItem("loginUser", JSON.stringify(login));
    await googleLogin();
  }
  async function googleLogin() {
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        return auth?.currentUser?.getIdToken(true);
      })
      .then((token) => {
        if (token) {
          localStorage.setItem("@token", token);
          setIsAuth(true);
          setIsAuthError(false);
          setIsAuthLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (isAuth) {
      if (state === null) {
        toast({
          title: "Success",
          description: "Welcome To The Login Dashboard",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else if (state !== null) {
        navigate(state.from, { replace: true });
        return toast({
          title: "Success",
          description: "Welcome To The Login Dashboard",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    }
    if (isAuthError) {
      toast({
        title: "Something Went Wrong ",
        description: "Enter correct Email and Password",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  }, [isAuth, isAuthError]);
  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={6}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={5}
          my={12}
          alignItems={"center"}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Login
          </Heading>
          <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
            <FormControl id="email" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@dailysope.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input type="password" name="password" onChange={handlechange} />
            </FormControl>
            <Stack spacing={6} alignItems={"center"}>
              <Button
                isLoading={isAuthLoading}
                width={"200px"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>
          <Stack>
            <Link to="/signup">
              <Button
                width={"200px"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
              >
                Click to go Register Page
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
