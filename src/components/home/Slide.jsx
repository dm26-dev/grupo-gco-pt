import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Slide = ({ imagesBanner }) => { 
    return (
        <div >
            <div >
                <Swiper spaceBetween={10} centeredSlides={true} autoplay={{
                    "delay": 5500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">

                    {
                        imagesBanner.map(image => {
                            return (
                                <SwiperSlide key={image.id}>
                                    <img
                                        src={image.image}
                                        alt=""
                                    />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
};