import {
  Box,
  Heading,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Header.module.css";

export default function Header({ title, setQuery, setSortdata, query }) {
  return (
    <VStack
      w={"100%"}
      justifyContent="center"
      spacing={7}
      className={styles.main}
    >
      <Heading as="h1" size="xl" noOfLines={1}>
        {title}
      </Heading>
      <Box
        className={styles.categ}
        display={{ lg: "flex", md: "flex", base: "block" }}
      >
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="All"
            className={
              query === "" ? `${styles.text1} ${styles.text2}` : styles.text1
            }
            onClick={() => setQuery("")}
          />
          <Text className={styles.text}>All</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="bag"
            className={
              query === "bag" ? `${styles.text1} ${styles.text2}` : styles.text1
            }
            onClick={() => setQuery("bag")}
          />
          <Text className={styles.text}>Pedal Backpack</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="desks"
            className={
              query === "desks"
                ? `${styles.text1} ${styles.text2}`
                : styles.text1
            }
            onClick={() => setQuery("desks")}
          />
          <Text className={styles.text}>Desks</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="watch"
            className={
              query === "watch"
                ? `${styles.text1} ${styles.text2}`
                : styles.text1
            }
            onClick={() => setQuery("watch")}
          />
          <Text className={styles.text}>Watchbands</Text>
        </VStack>
      </Box>
      <HStack>
        <Text as="h3">Fillter</Text>
        <Select
          placeholder="Select Filter option"
          onChange={(e) => setSortdata(e.target.value)}
        >
          <option value="reset">Reset</option>
          <option value="LTH">Low to High</option>
          <option value="HTL">High to Low</option>
        </Select>
      </HStack>
    </VStack>
  );
}
