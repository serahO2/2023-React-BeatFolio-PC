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

export default function BannerSlide({ mrg }) {
    return (
        <Wrapper className="BannerSlide-01" mrg={mrg}>
            <SlideWrap
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper01"
            >
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/banner-slide01.png" alt="" />
                        <span className="sub-txt">새로운 공간에 오신걸 환영합니다! </span>
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/banner-slide01.png" alt="" />
                        <span className="sub-txt">새로운 공간에 오신걸 환영합니다! </span>
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <img src="../img/temp/banner-slide01.png" alt="" />
                        <span className="sub-txt">새로운 공간에 오신걸 환영합니다! </span>
                    </MainSlideImg>
                </SlideItem>
            </SlideWrap>
        </Wrapper>
    );
}

const SlideWrap = styled(Swiper)``;
const SlideItem = styled(SwiperSlide)``;
const MainSlideImg = styled.div`
    position: relative;
    width: 958px;
    height: 378px;
    border-radius: 20px;
    margin: 0 auto;

    img {
        width: 100%;
        height: auto;
    }
    .sub-txt {
        position: absolute;
        left: 310px;
        bottom: 28px;
        display: block;
        width: fit-content;
        height: 24px;
        font-size: 14px;
    }
`;
const Wrapper = styled.div`
    margin: ${(props) => props.mrg};
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        width: fit-content;
        margin-top: 150px;
    }
    .swiper-pagination-bullets {
        margin: 0 auto;
    }
    .swiper-pagination-bullet {
        width: 20px;
        height: 8px;
        border-radius: 4px;
        box-shadow: inset 0 -2px 3px 0 rgba(0, 0, 0, 0.5);
        background-color: #fff;
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
        border-radius: 4px;
        box-shadow: inset 0 -2px 3px 0 rgba(0, 0, 0, 0.5);
        background-color: #7272c2;
    }
`;
