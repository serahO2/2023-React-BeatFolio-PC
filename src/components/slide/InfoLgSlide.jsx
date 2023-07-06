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

export default function InfoLgSlide({ mrg }) {
    return (
        <Wrapper className="" mrg={mrg}>
            <SlideWrap
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper05"
            >
                <SlideItem>
                    <Tit>
                        포트폴리오 등록으로
                        <br />
                        새로운 도전을 시작해보세요.
                    </Tit>
                    <Explain>
                        <BoldTxt>
                            Beatfolio에서 나만의 디자인 크리에이티브 혹은 개발 결과물을
                            <br />
                            보여줄 수 있는 포트폴리오를 등록해보세요.
                        </BoldTxt>
                        <>
                            포트폴리오 등록을 통해 직접 작업한 창의적이고 독창적인 퀄러티 높은 디자인 작업물을
                            <br />
                            남들에게 소개할 수도 있으며, 업계 전문가나 동료, 혹은 일반인들에게 내 작업물에
                            대해
                            <br />
                            도움이나 평가를 요청할 수도 있습니다. 한 장의 포트폴리오면 새로운 경험을 시작할 수
                            있습니다.
                        </>
                    </Explain>

                    <AddPortBtn type="button">
                        포트폴리오 등록하기
                        <span className="plus-icon">
                            <span></span>
                        </span>
                    </AddPortBtn>
                </SlideItem>
                <SlideItem>
                    <Tit>
                        참신한 아이디어가
                        <br />
                        필요하신가요?
                    </Tit>
                    <Explain>
                        <>
                            신규 서비스 개발이나 디자인 리뉴얼을 준비하고 계신가요? 그렇다면 기획이나 디자인,
                            개발 프로그래밍 등 새롭고 독창적인 결과물을 위해 공모전을 개최하는 것은 어떨까요?
                            <BoldTxt>
                                잘 정리된 요구사항만 있다면 몇번의 클릭만으로 참가자들의 치열한 경쟁을 펼칠 수
                                있는 “경기”를 개최할 수 있습니다.
                            </BoldTxt>
                            이제 남은 단계는 반짝이는 아이디어로 중무장 된 참여작품 중 마음에 드는 작품을
                            우승작으로 선정하시면 됩니다. 만약 우승작 선정이 어려우시다면 비트폴리오의 AI
                            평가시스템이 각 항목별로 공정하고 합리적 판단을 위해 도와드리겠습니다.
                        </>
                    </Explain>

                    <AddPortBtn type="button">
                        경기 개최하기
                        <span className="plus-icon">
                            <span></span>
                        </span>
                    </AddPortBtn>
                </SlideItem>
                <SlideItem>
                    <Tit>
                        경기가 시작되었습니다.
                        <br />
                        참가 준비 해주세요.
                    </Tit>
                    <Explain>
                        <>
                            <BoldTxt>당신에게 딱 맞는 경기가 시작되었습니다.</BoldTxt>
                            준비 단계는 끝났습니다. 지금까지 쌓아온 당신의 실력을 보여주고 싶다면 지금 즉시
                            경기에 참여해서 우승하고, 우승 상금을 획득하세요. 특별한 조건은 필요 없습니다.
                            단지 준비만 되어 있다면 빠른 참가를 통해 창의적이고 인상적인 산출물을
                            제출해주세요. 경쟁자들보다 높은 평가를 받기 시작한다면 비트폴리오의 새로운
                            비즈니스의 리더가 될 수 있습니다.
                        </>
                    </Explain>

                    <AddPortBtn type="button">
                        경기 참가하기
                        <span className="plus-icon">
                            <span></span>
                        </span>
                    </AddPortBtn>
                </SlideItem>
            </SlideWrap>
        </Wrapper>
    );
}

const SlideWrap = styled(Swiper)`
    width: 790px;
    height: 582px;
    overflow: visible;
    margin: 0;
`;
const SlideItem = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    width: 790px;
    height: 582px;
    border-radius: 20px;
    padding: 52px 40px 40px 40px;
    background: url('../img/temp/info-slide-bg.png') no-repeat center/cover;
    transition: all 0.3s linear;
    &:not(.swiper-slide-active) {
        opacity: 0.1;
    }
`;

const Tit = styled.div`
    display: block;
    font-size: 32px;
    line-height: 48px;
    color: #04ffd2;
    font-weight: 600;
    margin-bottom: 33px;
`;
const BoldTxt = styled.div`
    display: block;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    font-weight: 500;
    margin: 8px 0;
`;
const Explain = styled.div`
    display: block;
    font-size: 18px;
    line-height: 27px;
    color: #9198a5;
    margin-top: 12px;
`;
const AddPortBtn = styled.button`
    margin-top: auto;
    display: flex;
    align-items: center;
    width: 320px;
    text-align: left;
    font-size: 24px;
    line-height: 48px;
    color: #fff;
    background: #10171f;
    border-radius: 10px;
    padding: 14px 45px;
    .plus-icon {
        display: inline-flex;
        margin-left: auto;
        span {
            display: block;
            width: 2px;
            height: 16px;
            background: #fff;
            &::after {
                content: '';
                display: block;
                width: 2px;
                height: 16px;
                background: #fff;

                transform: rotate(90deg);
            }
        }
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
        z-index: 1;

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

    .swiper-button-prev {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: -90px;
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
        z-index: 1;
        top: 50%;
        right: -90px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url('../img/icon/arrow-right.png') no-repeat center / cover;
        &.swiper-button-disabled {
            background: url('../img/icon/arrow-right-disabled.png') no-repeat center / cover;
        }
    }
`;

// const PageNation = styled.span``;
