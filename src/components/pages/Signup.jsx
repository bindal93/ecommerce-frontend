import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [signup, setSignup] = useState({});
  const navigate = useNavigate();
  const toast = useToast();
  const [signupFlag, setSignupFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({
      ...signup,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("", {
      method: "POST",
      body: JSON.stringify(signup),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "User Register Successfully") {
          toast({
            title: "Registration Successful",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true
          });
          navigate("/login");
        } else {
          toast({
            title: "User already exist . Please Login",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setSignupFlag(!signupFlag);
  }, [handleSubmit]);
  return (
    <>
      <div>
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg="#11364E">
          <Stack
            spacing={6}
            w={"full"}
            maxW={"xl"}
            rounded={"xl"}
            boxShadow={"lg"}
            bg="white"
            p={5}
            my={12}
            alignItems={"center"}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Register
            </Heading>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <FormControl id="email" isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>First Name</FormLabel>
                <Input
                  placeholder="First_Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Last Name</FormLabel>
                <Input
                  placeholder="Last_Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Email address</FormLabel>
                <Input
                  placeholder="your-email@dailysope.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Password</FormLabel>
                <Input type="password" name="password" onChange={handleChange} />
              </FormControl>

              <Stack spacing={6} alignItems={"center"}>
                <Button
                  width={"200px"}
                  bg={"green.700"}
                  color={"white"}
                  _hover={{
                    bg: "green.600"
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </form>
            <Stack spacing={6} alignItems={"flex-end"}>
              <Link to="/login">
                <Button
                  width={"200px"}
                  bg={"green.700"}
                  color={"white"}
                  _hover={{
                    bg: "green.600"
                  }}
                >
                  Click to go Login Page
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </div>
    </>
  );
};

export default Signup;
