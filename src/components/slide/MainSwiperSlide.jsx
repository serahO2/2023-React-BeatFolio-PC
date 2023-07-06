import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { styled } from 'styled-components';

export default function BannerSlide01({ mrg }) {
    return (
        <Wrapper className="BannerSlide-01" mrg={mrg}>
            <SlideWrap
                slidesPerView="auto"
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper02"
            >
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/mainslide-01.png" alt="" />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/mainslide-01.png" alt="" />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/mainslide-01.png" alt="" />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/mainslide-01.png" alt="" />
                    </MainSlideImg>
                </SlideItem>
            </SlideWrap>
        </Wrapper>
    );
}

const SlideWrap = styled(Swiper)`
    width: 784px;
`;
const SlideItem = styled(SwiperSlide)`
    /* width: 784px; */
`;
const MainSlideImg = styled.div`
    width: 784px;
    height: 447px;
    border-radius: 20px;
    background-color: #fff;

    img {
        width: 100%;
        height: auto;
    }
`;
const Wrapper = styled.div`
    margin: ${(props) => props.mrg};
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        width: fit-content;
        margin-top: 40px;
    }
    .swiper-pagination-bullet {
        background-color: #fff;
        width: 20px;
        height: 8px;
        border-radius: 0;
        padding: 0;
        margin: 0 !important;
        opacity: 1;
        & + .swiper-pagination-bullet {
            margin-left: 16px !important;
        }
    }
    .swiper-pagination {
        position: relative;
    }
    .swiper-pagination-bullet-active {
        background: #ff6363;
    }
`;

// const PageNation = styled.span``;
