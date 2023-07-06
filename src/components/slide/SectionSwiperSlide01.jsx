import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { styled } from 'styled-components';
import Wrap from '../../layout/Wrap';
import UserInfo from '../contents/UserInfo';

export default function SectionSwiperSlide01(mrg) {
    return (
        <Wrapper className="SectionSwiperSlide-01" mrg={mrg}>
            <SlideWrap
                slidesPerView="auto"
                spaceBetween={30}
                className="mySwiper03"
                navigation={true}
                modules={[Navigation]}
                pagination={{
                    type: 'fraction',
                    clickable: true,
                }}
                loopPreventsSliding={true}
                loopAdditionalSlides={1}
            >
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-01.png" alt="" />
                        </div>
                        <Wrap>
                            <UserInfo
                                img="/img/temp/profile-img-42-01.png"
                                title="Hygieney, 치약 추천 플랫폼"
                                name="성수동마피아들"
                                view="1.9K"
                                like="1.2K"
                            />
                        </Wrap>
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-02.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-03.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-04.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-05.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-06.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
                <SlideItem>
                    <MainSlideImg>
                        <div className="slide-img">
                            <img src="../img/temp/rectangle-copy-01.png" alt="" />
                        </div>
                        <UserInfo
                            img="/img/temp/profile-img-42-01.png"
                            title="Hygieney, 치약 추천 플랫폼"
                            name="성수동마피아들"
                            view="1.9K"
                            like="1.2K"
                        />
                    </MainSlideImg>
                </SlideItem>
            </SlideWrap>
        </Wrapper>
    );
}

// const Wrapper = styled.div`
//     width: 1484px;
//     margin-left: auto;
// `;

const SlideWrap = styled(Swiper)`
    position: relative;
    margin-left: auto;
    width: 120%;
    overflow-y: visible;

    .swiper-wrapper:last-child(0) {
        margin-right: 380px;
    }
`;
const SlideItem = styled(SwiperSlide)`
    width: 380px;
`;
const MainSlideImg = styled.div`
    .slide-img {
        width: 380px;
        height: 265px;
        border-radius: 20px;

        & + div {
            margin-top: 20px;
        }
    }
    img {
        width: 100%;
        height: auto;
    }
`;
const Wrapper = styled.div`
    width: 130%;
    margin-left: auto;
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
    .swiper-backface-hidden .swiper-slide {
        backface-visibility: visible;
        flex-shrink: unset;
    }

    .swiper-button-prev {
        position: absolute;
        top: -80px;
        left: 1110px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url('../img/icon/arrow-left.png') no-repeat center / cover;

        &.swiper-button-disabled {
            background: url('../img/icon/arrow-left-disabled.png') no-repeat center / cover;
        }
    }
    .swiper-button-next {
        position: absolute;
        top: -80px;
        left: 1160px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url('../img/icon/arrow-right.png') no-repeat center / cover;
        &.swiper-button-disabled {
            background: url('../img/icon/arrow-right-disabled.png') no-repeat center / cover;
        }
    }
`;
const TxtBox = styled.div``;
