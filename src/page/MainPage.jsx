import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import Header from '../layout/Header';
import { styled } from 'styled-components';
import TitleBox02 from '../components/contents/TitleBox02';
import Section from '../layout/Section';
import TagList from '../components/list/TagList';
import Wrap from '../layout/Wrap';
import BannerSlide01 from '../components/slide/MainSwiperSlide';
import SectionSwiperSlide01 from '../components/slide/SectionSwiperSlide01';
import BannerSlide from '../components/slide/BannerSlide';
import ExplainBox from '../components/list/ExplainBox';
import SectionStarBg from '../layout/SectionStarBg';
import TitleBox from '../components/contents/TitleBox';
import WinnerCard from '../components/Card/WinnerCard';
import UserCardList from '../components/list/UserCardList';
import UserCardListEx from '../components/list/UserCardListEx';
import InfoLgSlide from '../components/slide/InfoLgSlide';
import RollingBottom from '../layout/RollingBottom';
import { ActingCardList } from '../components/Card/ActingCard';
import MainMoreBtn from '../components/button/MainMoreBtn';
import { BoardItemList } from '../components/contents/BoardItem';
import { QnAList } from '../components/contents/QnAItem';
import Footer from '../layout/Footer';
import ParallaxTextBox, { ParallaxText } from '../layout/RollingBot';

export const MainPage = () => {
    const rightRef = useRef(null);

    const handleTouchMove = (e) => {
        if (rightRef.current) {
            rightRef.current.scrollLeft -= e.touches[0].clientX - e.touches[0].clientX;
        }
    };

    return (
        <div>
            <Layout>
                <MainSlideArea>
                    <div className="bg-star"></div>
                    <Header />
                    <Wrap mrg="171px 0 0 0 ">
                        <BannerSlide />
                    </Wrap>
                </MainSlideArea>
                <Section bg="bg01" row="true">
                    <div className="fix-left">
                        <TitleBox02 icon="icon1">
                            포트폴리오
                            <br />
                            인기 카테고리
                        </TitleBox02>
                        <Wrap mrg="60px 0 0 0 ">
                            <TagList />
                        </Wrap>
                    </div>
                    <div className="fix-right">
                        <BannerSlide01 mrg="57px" />
                    </div>
                </Section>
                <Section bg="bg02">
                    <TitleBox02 icon="icon2" subtitlebtn="전체보기">
                        추천 포트폴리오
                    </TitleBox02>
                    <Wrap mrg="40px 0 0 0 ">
                        <SectionSwiperSlide01 />
                    </Wrap>
                </Section>
                <Section bg="bg02">
                    <TitleBox02 icon="icon3" subtitlebtn="전체보기">
                        추천 경기
                    </TitleBox02>
                    <Wrap mrg="40px 0 0 0 ">
                        <SectionSwiperSlide01 />
                    </Wrap>
                </Section>
                <Section bg="bg02">
                    <ExplainBox icon="icon3" />
                </Section>
                <SectionStarBg>
                    <TitleBox icon="icon7" rightbtn="전체보기">
                        우승을 축하합니다!
                    </TitleBox>
                    <Wrap mrg="40px 0 0 0 ">
                        <WinnerCard
                            color="white"
                            tit="신규 브랜드 로고 콘테스트"
                            subtit="우아한형제들"
                            view="1.3K"
                            like="1.3K"
                            userImg="../img/temp/winner-user.png"
                            userCardImg="../img/temp/winner-card.png"
                        />
                        <Wrap mrg="60px 0 0 0 ">
                            <UserCardList />
                        </Wrap>
                    </Wrap>
                </SectionStarBg>
                <Section bg="bg02">
                    <Wrap mrg="53px 0 0 0 ">
                        <TitleBox icon="icon2" subtitlebtn="20위 보기" rightTxt="2023.4.1 ~ 2023.4.15">
                            비트위너 순위
                        </TitleBox>
                        <Wrap mrg="40px 0 0 0 ">
                            <UserCardListEx />
                        </Wrap>
                    </Wrap>
                </Section>
                <Section bg="bg03" align="unset">
                    <InfoLgSlide />
                </Section>
                <Section bg="bg04">
                    <ActingCardList />
                </Section>

                <Section bg="bg05" row="true">
                    <div className="left">
                        <TitleBox02 icon="icon4">공지사항</TitleBox02>
                        <Wrap mrg="30px 0 0 0 ">
                            <MainMoreBtn />
                        </Wrap>
                    </div>
                    <div className="">
                        <Wrap mrg="95px 0 0 73px ">
                            <BoardItemList />
                        </Wrap>
                    </div>
                </Section>
                <Section bg="bg03" row="true" align="right02">
                    <div className="left">
                        <TitleBox02 icon="icon6">FAQ</TitleBox02>

                        <Wrap mrg="30px 0 0 0 ">
                            <MainMoreBtn />
                        </Wrap>
                    </div>
                    <div className="right" ref={rightRef} onTouchMove={handleTouchMove}>
                        <QnAList />
                    </div>
                </Section>
                <Footer></Footer>
                {/* <RollingBottom /> */}
                <ParallaxTextBox />
            </Layout>
        </div>
    );
};

const MainSlideArea = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    background-image: linear-gradient(to bottom, rgba(13, 20, 28, 0) 69%, #0d141c);
    .bg-star {
        position: absolute;
        top: 0;
        width: 100%;
        height: 900px;
        background: url('../img/temp/main-bg.png') no-repeat center / cover;
    }
    span {
        color: #fff;
    }
`;
