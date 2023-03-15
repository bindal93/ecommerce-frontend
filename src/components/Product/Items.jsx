import { Box, Card, CardFooter, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import styles from "./Items.module.css";

export default function Items({ data }) {
  const user = null;
  const uid = user?._id || "";
  const ref = useRef(null);
  const ChangeImage1 = () => {
    ref.current.src = data.img1;
  };
  const ChangeImage = () => {
    ref.current.src = data.img2;
  };
  useEffect(() => {
    const getuser = async (id) => {
      const newuser = await axios.get(
        `https://dailybackend.onrender.com/user/${id}`
      );
      if (
        newuser &&
        newuser.data &&
        newuser.data.user &&
        newuser.data.user.length > 0
      ) {
        const loginuser = newuser.data.user[0];
        loginuser && localStorage.setItem("user", JSON.stringify(loginuser));
      }
    };
    getuser(uid);
  }, [uid]);

  return (
    <Card w="100%" m="auto" mt={10} position="relative" borderRadius={20}>
      <Box
        onMouseOver={ChangeImage}
        onMouseOut={ChangeImage1}
        h="500px"
        w="100%"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <Image
          src={data.img1}
          alt={data.title}
          ref={ref}
          w="100%"
          h="100%"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          bg="#f7f7f7"
        />
      </Box>
      <CardFooter>
        <Stack>
          <Text color="gray" fontSize={{ lg: "md", md: "sm", base: "xs" }}>
            {data.title}
          </Text>
          <Text
            color="black"
            fontSize={{ lg: "2xl", md: "xl", base: "xl" }}
            fontWeight="bold"
          >
            Rs.{data.price}
            <span
              style={{
                color: "gray",
                textDecoration: "line-through",
                marginLeft: "20px",
                fontSize: "1.25rem",
              }}
            >
              {data.strike}
            </span>
          </Text>

          <Text
            color="red"
            fontSize={{ lg: "md", md: "md", base: "md" }}
            fontWeight="bold"
          >
            FREE DUFFLE BAG / WALLET*
          </Text>
        </Stack>
      </CardFooter>
      {data.stocks <= 0 ? (
        <>
          <Box className={styles.ribben_wrap}>
            <Box className={styles.ribben}>Out Of Stock</Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}
