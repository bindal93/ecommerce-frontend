import { Image } from "@chakra-ui/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import officialArr from "../../assets/officialArr.json";

const Official = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div className="official">
        <p className="h2">@amcart_official</p>
        <div>
          <Swiper
            autoplay={{
              delay: 500,
            }}
            slidesPerView={"4"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            effect={"coverflow"}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            loop={true}
          >
            {officialArr.map((ele, i) => (
              <SwiperSlide key={i}>
                <Image width={"100%"} src={ele.url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <br />
      <hr />
      <div>
        <p
          style={{ margin: "2.5rem 0rem", textAlign: "center" }}
          className="h2"
        >
          FEATURED IN
        </p>
        <img
          style={{ margin: "2.5rem 0rem" }}
          src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1"
          alt=""
        />
      </div>
      <br />
      <hr />
      <div className="fhm">
        <div className="fhmItem">
          <img
            src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Quick Delivery</p>
        </div>
        <div className="fhmItem">
          <img
            src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Easy Returns</p>
        </div>
        <div className="fhmItem">
          <img
            src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Quality Assured</p>
        </div>
      </div>
    </div>
  );
};

export default Official;
