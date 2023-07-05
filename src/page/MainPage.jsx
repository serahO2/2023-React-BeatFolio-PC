import React from 'react';
import Layout from '../layout/Layout';
import Header from '../layout/Header';
import { styled } from 'styled-components';
import TitleBox02 from '../components/contents/TitleBox02';
import Section from '../layout/Section';
import TagList from '../components/list/TagList';
import Wrap from '../layout/Wrap';

export const MainPage = () => {
    return (
        <div>
            <Layout>
                <MainSlide>
                    <Header />
                </MainSlide>
                <Section bg="bg01" row={true}>
                    <div className="left">
                        <TitleBox02 icon="icon1">
                            포트폴리오
                            <br />
                            인기 카테고리
                        </TitleBox02>
                        <Wrap mrg="60px 0 0 0 ">
                            <TagList />
                        </Wrap>
                    </div>
                    <div className="right"></div>
                </Section>
                <Section bg="bg02">
                    <TitleBox02 icon="icon2">추천 포트폴리오</TitleBox02>
                </Section>
                <Section bg="bg02">
                    <TitleBox02 icon="icon5">추천 경기</TitleBox02>
                </Section>
                <Section></Section>
            </Layout>
        </div>
    );
};

const MainSlide = styled.div`
    width: 100%;
    height: 900px;
    background-image: linear-gradient(to bottom, rgba(13, 20, 28, 0) 69%, #0d141c);
`;
