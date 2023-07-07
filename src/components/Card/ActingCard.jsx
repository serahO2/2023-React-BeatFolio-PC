import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

// export default function ActingCard(props) {
//     const { icon, name, enName, explain, tit, subTit } = props;

//     const scrollRef = useRef(null);
//     const emojiVariants = {
//         hidden: { opacity: 0, y: 100, rotateY: 300 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             rotateY: 0,
//             transition: {
//                 rotateY: {
//                     duration: 0.5,
//                 },
//                 y: {
//                     type: 'spring',
//                     damping: 3,
//                     stiffness: 50,
//                     restDelta: 0.01,
//                     duration: 0.3,
//                 },
//             },
//         },
//     };
//     return (
//         <motion.div
//             className="emoji"
//             variants={emojiVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ root: scrollRef, once: true, amount: 0.3 }}
//         >
//             <Wrapper>
//                 <MainWrapper className="ActingCard">
//                     <Top className="icon">
//                         <img src={icon} alt="" />
//                     </Top>
//                     <Mid className="mid">
//                         <div className="name">{name}</div>
//                         <div className="en-name">{enName}</div>
//                     </Mid>
//                     <Bot className="bot">
//                         <div className="explain">{explain}</div>
//                     </Bot>
//                 </MainWrapper>
//                 <SubWrapper>
//                     <div className="tit">{tit}</div>
//                     <div className="sub-tit">{subTit}</div>
//                 </SubWrapper>
//             </Wrapper>
//         </motion.div>
//     );
// }

export function ActingCardList() {
    const scrollRef = useRef(null);
    const { scrollY } = useViewportScroll();
    const emojiY = useTransform(scrollY, [0, 10], [0, 30]);

    const cardVariants = {
        hidden: { opacity: 0, y: 100, rotateY: 300 },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: {
                rotateY: {
                    duration: 0.8,
                },
                y: {
                    type: 'spring',
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.01,
                    duration: 0.3,
                },
            },
        },
    };

    const emojiVariants = {
        hidden: { opacity: 0, y: 5, rotateY: 100 },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: {
                rotateY: {
                    duration: 0.5,
                },
                y: {
                    type: 'spring',
                    damping: 0,
                    stiffness: 50,
                    restDelta: 0.01,
                    duration: 0.3,
                },
            },
        },
    };

    return (
        <List className="acting-card-list">
            <motion.div
                className="emoji"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef, once: true, amount: 0.3 }}
                transition={{ repeat: Infinity, delay: 0.3 }}
            >
                <Wrapper>
                    <MainWrapper className="ActingCard">
                        <motion.div
                            className="emoji"
                            variants={emojiVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ root: scrollRef, amount: 0.3 }}
                            transition={{ repeat: Infinity }}
                        >
                            <Top className="icon">
                                <img src="../img/temp/acting-icon-01.png" alt="" />
                            </Top>
                        </motion.div>
                        <Mid className="mid">
                            <div className="name">포트폴리오</div>
                            <div className="en-name">Portfolio</div>
                        </Mid>
                        <Bot className="bot">
                            <div className="explain">
                                BeatFolio 등록된 포트폴리오는 지금까지 blah blah blah blah blah blah blah blah
                                blah blah blah blah blah
                            </div>
                        </Bot>
                    </MainWrapper>
                    <SubWrapper>
                        <div className="tit">등록된 포트폴리오</div>
                        <div className="sub-tit">9999개</div>
                    </SubWrapper>
                </Wrapper>
            </motion.div>
            <motion.div
                className="emoji"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef, once: true, amount: 0.3 }}
            >
                <Wrapper>
                    <MainWrapper className="ActingCard">
                        <motion.div
                            className="emoji"
                            variants={emojiVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ root: scrollRef, amount: 0.3 }}
                            transition={{ repeat: Infinity }}
                        >
                            <Top className="icon">
                                <img src="../img/temp/acting-icon-02.png" alt="" />
                            </Top>
                        </motion.div>
                        <Mid className="mid">
                            <div className="name">스타디움</div>
                            <div className="en-name">Stadium</div>
                        </Mid>
                        <Bot className="bot">
                            <div className="explain">
                                BeatFolio 등록된 포트폴리오는 지금까지 blah blah blah blah blah blah blah blah
                                blah blah blah blah blah
                            </div>
                        </Bot>
                    </MainWrapper>
                    <SubWrapper>
                        <div className="tit">개최된 경기</div>
                        <div className="sub-tit">9999개</div>
                    </SubWrapper>
                </Wrapper>
            </motion.div>
            <motion.div
                className="emoji"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef, once: true, amount: 0.3 }}
            >
                <Wrapper>
                    <MainWrapper className="ActingCard">
                        <motion.div
                            className="emoji"
                            variants={emojiVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ root: scrollRef, amount: 0.3 }}
                            transition={{ repeat: Infinity }}
                        >
                            <Top className="icon">
                                <img src="../img/temp/acting-icon-03.png" alt="" />
                            </Top>
                        </motion.div>
                        <Mid className="mid">
                            <div className="name">비트위너</div>
                            <div className="en-name">Beat-Winner</div>
                        </Mid>
                        <Bot className="bot">
                            <div className="explain">
                                BeatFolio 등록된 포트폴리오는 지금까지 blah blah blah blah blah blah blah blah
                                blah blah blah blah blah
                            </div>
                        </Bot>
                    </MainWrapper>
                    <SubWrapper>
                        <div className="tit">누적상금</div>
                        <div className="sub-tit">99억 9999만원</div>
                    </SubWrapper>
                </Wrapper>
            </motion.div>
        </List>
    );
}

const Wrapper = styled.div`
    display: block;

    transition: all 0.16s linear;
    &:hover {
        transform: translateY(-8px);
        > div:nth-child(1) {
            box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
        }

        .mid {
            .name {
                display: block;
                transform: translateX(20px);
            }
        }
    }
`;
const List = styled.div`
    display: flex;
    /* flex-direction: column; */
    > div + div {
        margin-left: 30px;
    }
`;
const MainWrapper = styled.div`
    width: 380px;
    height: 547px;
    background: rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    padding: 60px 40px 40px 40px;

    .emoji + .mid {
        margin-top: 80px;
    }
    .mid + .bot {
        margin-top: 100px;
    }
`;
const Top = styled.div`
    width: 90px;
    height: 90px;
    display: block;
    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;
const Mid = styled.div`
    .name {
        font-size: 32px;
        line-height: 48px;
        color: #fff;
        font-weight: 600;
        transition: all 0.3s linear;
    }
    .en-name {
        font-size: 24px;
        line-height: 40px;
        color: #888;
        font-weight: 400;
    }
`;
const Bot = styled.div`
    .explain {
        font-size: 18px;
        line-height: 27px;
        color: #9198a5;
    }
`;
const SubWrapper = styled.div`
    width: 380px;
    height: 87px;
    background: transparent;
    padding: 40px 40px 0 40px;
    .tit {
        font-size: 32px;
        line-height: 48px;
        color: #a4cfff;
        margin-bottom: 12px;
    }
    .sub-tit {
        font-size: 24px;
        line-height: 27px;
        color: #fff;
    }
`;
