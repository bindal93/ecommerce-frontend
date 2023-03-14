import { Grid, GridItem, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import shopCategories from "../../assets/categories.json";
import newArrivals from "../../assets/newArrivals.json";
import Official from "./Official";

const Homepage = () => {
  const slideCount = useBreakpointValue({ sm: 2, base: 1, md: 3, lg: 4 });
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <div className="homepage">
      <Grid
        templateColumns={{ base: "100%", md: "20% 80%", lg: "20% 80%" }}
        className="shopCategories"
      >
        <GridItem className="cat_one">
          <p>SHOP CATEGORIES</p>
          <p>Now browse our selection of carefully curated products in sorted categories.</p>
        </GridItem>
        <GridItem className="cat_two">
          <Swiper
            slidesPerView={slideCount}
            spaceBetween={20}
            autoplay={{
              delay: 1000
            }}
            modules={[Navigation, Autoplay]}
            navigation={isDesktop}
            className="mySwiper"
            loop={true}
          >
            {shopCategories.map((ele) => (
              <SwiperSlide key={ele.id}>
                <Image width={"100%"} src={ele.url} alt="" />
                <p>{ele.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </GridItem>
      </Grid>
      <div className="firstHomeItem">
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1"
          alt=""
        />
      </div>
      <div className="homeItems">
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1"
          alt=""
        />
      </div>
      <Heading className="h2">STUDIO COLLECTIONS</Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={6}
        className="shopCollections"
      >
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>DREAMSCAPE</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>ZODIAC</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>PIXEL</p>
          <p>
            A reflection of modern pop-culture, this collection has a vintage appeal that evokes
            nostalgia.
          </p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
      </Grid>
      <Grid className="homeItems">
        <GridItem>
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1"
            alt=""
          />
        </GridItem>
      </Grid>

      <div className="shopCategories">
        <div className="cat_one">
          <p>NEW ARRIVALS</p>
          <p>Check out our newest launches.</p>
        </div>
        <div className="cat_two">
          <Swiper
            slidesPerView={slideCount}
            spaceBetween={20}
            autoplay={{
              delay: 1000
            }}
            modules={[Navigation, Autoplay]}
            navigation={isDesktop}
            className="mySwiper"
            loop={true}
          >
            {newArrivals.map((ele, i) => (
              <SwiperSlide key={i}>
                <Image width={"100%"} src={ele.url} alt="" />
                <p style={{ fontSize: "14px", color: "gray" }}>{ele.color}</p>
                <p>{ele.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)"
        }}
        gap={"10"}
        className="shopCollections"
      >
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1"
            alt=""
          />
          <p>CHARGING SOLUTIONS</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1"
            alt=""
          />
          <p>WORK ESSENTIALS</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
      </Grid>

      <Heading className="h2">COLLECTIONS</Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={6}
        className="shopCollections"
      >
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>08:01 COLLECTION</p>
          <p>
            Features a range of chroniclers that let you preserve all brief encounters on your
            journey.
          </p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/zootopia-Web.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>AMCART X SMARTSTERS</p>
          <p>A playful and functional range of indoor desk and storage solutions for children.</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
        <GridItem className="shopCollectionsItems">
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1"
            alt=""
          />
          <p>TARP COLLECTION</p>
          <p>Urban-inspired carriers, made for free-spirited and powerful wearers.</p>
          <p>
            <Link className="coll_link" to="/">
              Shop Now
            </Link>
          </p>
        </GridItem>
      </Grid>
      <div className="homeItems">
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1"
          alt=""
        />
      </div>
      <div className="homeItems">
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1"
          alt=""
        />
      </div>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)"
        }}
        gap="50"
        className="ourStory"
      >
        <GridItem>
          <h2 className="h1">OUR STORY</h2>
          <p>
            Founded in 2012, AMCART is a design-obsessed lifestyle accessories brand committed to
            making your everyday carry #lessordinary.
          </p>
          <p>
            You can look forward to a carefully-crafted range of products, made from long-lasting
            materials, with designs that stand out and make your life easy. With AMCART, let your
            lifestyle reflect your sensibilities as you go on to make your every day #lessordinary.
          </p>
          <p>
            <Link className="coll_link" to="/">
              Read More
            </Link>
          </p>
        </GridItem>
        <GridItem>
          <Image
            style={{ marginTop: "1.2rem" }}
            src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-788,dpr-1"
            alt=""
          />
        </GridItem>
      </Grid>
      <br />
      <hr />

      <Official />
    </div>
  );
};

export default Homepage;
