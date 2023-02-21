import styles from './profile.module.scss';
import { useState, useEffect } from 'react';
import Head from "../../components/header/index";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import GuideCanvas from '../../components/guideCanvas';
import { TopIcon } from "../../components/Icon/top";
import { BottomIcon } from "../../components/Icon/bottom";
import Stake from '../../components/stake';
import Router from "next/router";
import H5Header from "../../components/h5Header/index"




function Profile() {
    const [tabIndex, setTabIndex] = useState(1)
    const changeTab = (num) => {
        setTabIndex(num);
    };

    // console.log(Router.query.page)

    const [isOpenStake, setIsOpenStake] = useState(false);

    const showStake = () => {
        setIsOpenStake(!isOpenStake);
    };

    const showMoreArtilcles = (e) => {
        e.currentTarget.style.display = "none";
        let theNode = e.currentTarget.previousSibling;
        theNode.style = "display: block;";
    };

    const [caseStep, setCaseStep] = useState();
    const [canvasId, setCanvasId] = useState();
    const [tipInfo, setTipInfo] = useState();

    const changeCanvasId = (key) => {
        setCanvasId(key)
    };

    const [rate, setRate] = useState({ "Rate": 0, "Answers": 0, "TotalEarned": 0, "Wallet": 0, "Reward": 0, "Earned": 0, "Views": 0, "Followers": 0, "TotalBoost": 0, "Staking": 0 });

    const showHome = () => {
        if (caseStep == 6) {
            setCaseStep(7);
            setCanvasId("Home");
            setTipInfo("Back to HOME to check out more interesting questions.");
        } else if (caseStep == 17) {
            setCaseStep(caseStep + 1);
            setCanvasId("detail1");
            setTipInfo("Check out all of his most recent answers right here.");
        }

    };

    const changeDetail = () => {
        Router.push('/articles/1');
    };

    const unStake = () => {
        if (caseStep == 21) {
            setCaseStep(22);
            setCanvasId();
            setRate({ "Staking": -10, "TotalEarned": 18, "Wallet": 28, "Earned": 18, "Rate": 0, "Answers": 0, "Reward": 0, "Views": 0, "Followers": 0, "TotalBoost": 0 })
            setTimeout(() => {
                localStorage.setItem("stepEnd", true);
                localStorage.setItem("currentStep", JSON.stringify(1));
                setCaseStep(0);
            }, 5000);
        }
    };


    useEffect(() => {
        if (Router.query.page == "staking") {
            setTabIndex(2);
        } else if (Router.query.page == "collected") {
            setTabIndex(3);
        }
    });

    const [showLater, setShowLater] = useState(false);
    const [userInfo, setUserInfo] = useState([{ "name": "User01", "avatar": "/images/photo/avatar1.jpg" }])

    useEffect(() => {
        const item = localStorage.getItem('stepStaus');
        if (caseStep > 6) {
            setCaseStep(caseStep);
        } else if (JSON.parse(item) == 6) {
            setUserInfo([{ "name": "Larry Cermak", "avatar": "/images/photo/LarryCermak.jpeg" }]);
            setCaseStep(6);
            // const dom = document.getElementById("Edits");
            // if (dom) {
            //     dom.scrollIntoView({ behavior: 'smooth', block: 'end' })
            // }
            setTimeout(() => {
                setCanvasId("profileNum");
                setTipInfo("Your interactions matter! ❤️");
                setRate({ "Rate": 0.2, "Answers": 1, "TotalEarned": 0, "Wallet": 0, "Reward": 0, "Earned": 0, "Views": 0, "Followers": 0, "TotalBoost": 0, "Staking": 0 });
            }, 1000);

        } else if ((JSON.parse(item) == 16)) {
            setUserInfo([{ "name": "John Dantoni", "avatar": "/images/photo/JohnDantoni.png" }]);
            setRate({ "TotalEarned": 9.8, "Wallet": 9.8, "Reward": 9.8, "Earned": 9.8, "Rate": 0.015, "Views": 1, "Answers": 0, "Followers": 0, "TotalBoost": 0, "Staking": 0 });
            // const dom = document.getElementById("profileNum");
            // if (dom) {
            //     dom.scrollIntoView({ behavior: 'smooth', block: 'end' })
            // }
            setTimeout(() => {
                setCaseStep(16);
                setCanvasId("profile");
                setTipInfo(`earned and reputation grows a little due to your boost <img src="/images/icon/rocket.svg"  />`);
            }, 1000);

            setTimeout(() => {
                setShowLater(true);
            }, 3000);
            setTimeout(() => {
                setShowLater(false);
                setRate({ "TotalEarned": 198, "Wallet": 198, "Reward": 1, "Earned": 198, "Rate": 2.34, "Views": 2003, "Answers": 0, "Followers": 98, "TotalBoost": 0, "Staking": 0 })
                setCaseStep(17);
                setTipInfo("<p>Congratulations! Your boosted content has been noticed! Excellent job, scout!</p>");
            }, 7000);
        } else if ((JSON.parse(item) == 20)) {
            setTabIndex(2);
            setCaseStep(20);
            setRate({ "TotalBoost": 10, "Staking": 10, "Rate": 0, "Answers": 0, "TotalEarned": 0, "Wallet": 0, "Reward": 0, "Earned": 0, "Views": 0, "Followers": 0, })
            setTimeout(() => {
                setCaseStep(21);
                setCanvasId("stakeUnstake");
                setTipInfo("Unstake to claim your reward!");
            }, 2000);
        }
    }, [caseStep]);

    const msg = `<div class="page-body"><p id="62e716d1-fe09-4488-aeab-c165955a9adb" class="">The macro environment will be unfavorable for high-risk assets such as digital assets. <em><span style="border-bottom:0.05em solid">We may not have reached the ultimate bottom in cryptocurrency prices. However, a sideways move next year is more likely than a severe downturn. </span></em></p><p id="69bc080d-3c44-4dd5-ac74-f4b1bd4cb09d" class="">2023 will be a critical year for developers and construction as the hype, narrative and prices will no longer be in the spotlight. </p><p id="879fb71f-f04a-4d43-8a0d-bf7097a3c0a5" class=""><em><strong>Layer-2</strong></em> will continue to receive attention, and some will launch native tokens, including <em><strong>Arbitrum</strong></em> and <em><strong>StarkNet</strong></em>.
    The next cycle of new narratives, including the <em><strong>Web3 social network</strong></em>, will begin to take shape. Investment and activity in this sub-sector will be watched, with <em><strong>Lens Protocol</strong></em> and <em><strong>Farcaster</strong></em> seeing the most early growth.
    <strong>Venture capital</strong> in the blockchain space will slow significantly in 2023, especially in the first half of the year. </p><p id="aae10e9a-7690-4e6c-beae-5d39b71bbb2c" class="">In the first half of the year, we will see months with less than $1 billion in investment, which will be the first time since February 2021 for the sector. By the end of the year, about $13.5 billion will have been invested in blockchain companies, which equates to a 58% year-over-year decline in approximately private funding.
    Projects in the <em><strong>crypto financial services</strong></em>, <em><strong>infrastructure</strong></em> and <em><strong>trade/brokerage</strong></em> categories are the least affected by volatile market conditions. As a result, these categories will continue to attract interest and investment as investors look for the next base companies and projects.
    Conversely, categories that are seen as further along the risk curve and more likely to be pre-product and/or at the seed stage level, such as <em><strong>decentralized finance (DeFi)</strong></em>, <em><strong>NFT/gaming</strong></em> and <em><strong>Web3</strong></em>, are likely to increase in amount and terms continue to reprice to the $100-15 million valuation range, more favorable to investors.
    In the mid to late stages, companies will need help raising capital on favorable terms. As a result, we may see an influx of companies that may need to raise money at reduced prices and at lower valuations than previously.
    Another option for companies in a poor financial position is to look for buyers in the M&amp;A market. Similar to what happened after the 2017 cycle, we will see an increase in M&amp;A activity and further consolidation of cryptocurrency companies.
    The impact of Alameda Research, FTX, FTX US, Voyager Digital, Celsius, BlockFi and other potential lenders will make 2023 a critical year for companies providing institutional infrastructure for digital assets.
    </p><p id="f7263c9a-a60e-45f1-b946-f2858959a52c" class="">
    </p></div>`;

    useEffect(() => {
        if (caseStep !== undefined) {
            localStorage.setItem("stepStaus", JSON.stringify(caseStep));
        }
    }, [caseStep]);


    // useEffect(() => {
    //     if (caseStep !== undefined) {
    //         localStorage.setItem("stepStaus", JSON.stringify(caseStep));
    //     }
    // }, [caseStep]);

    return (
        <div>
            <Head />
            <H5Header />
            <div className={styles.main}>
                <img className={styles.topImg} src='/images/icon/profile.png' />
                <div className={styles.userInfo}>
                    <div className='flex_between_end'>
                        <div>
                            <Avatar
                                src={userInfo[0].avatar}
                                bordered
                                css={{
                                    size: "$20", "nextui-avatar-bg": {
                                        background: "#fff"
                                    }
                                }}
                            />
                            <p className='title18'>{userInfo[0].name}</p>
                        </div>
                        <div className={styles.gap20}>
                            <Button auto className='autoButton'><img src='/images/icon/chat.svg' /></Button>
                            <Button className='autoGreenButton' auto>
                                Following
                            </Button>
                        </div>
                    </div>
                    <p className='title12 margin10'>CEO @Blockchain, holder of #bnb #btc</p>
                    <div className={`${styles.userlabel} ${"justify_space_between"}`}>
                        <div className={`${styles.left} ${"justify_align_center"}`}>
                            <div>
                                <img src='/images/icon/link.svg' />
                                Binance
                            </div>
                            <div>
                                <img src='/images/icon/calendar.svg' />
                                Joined since 1 Oct 2021
                            </div>
                            <div>
                                <img src='/images/icon/loaction.svg' />
                                Gemany
                            </div>
                        </div>
                        <div className={`${styles.right} ${"justify_align_center"}`}>
                            <Button auto className="mini_white_button">Defi</Button>
                            <Button auto className="mini_white_button">Layer2</Button>
                            <Button auto className="mini_white_button">Web3 Social</Button>
                            <Button auto className="mini_white_button">GameFi</Button>
                            <Button auto className="mini_white_button">DAO</Button>
                        </div>
                    </div>
                    <div className={styles.foandsta}>
                        <div>
                            <p className="title18">{2837 + rate.Followers}
                                {caseStep == 17 ? (<span className='fixedRate marginTop18'>+98</span>) : null}
                            </p>
                            <span className="title12">Followers</span>
                        </div>
                        <div>
                            <p className="title18">23658</p>
                            <span className="title12">Following</span>
                        </div>
                        <div>
                            <p className="title18">${2837 + rate.Staking}
                                {caseStep == 20 ? (<span className='fixedRate marginTop18'>+10</span>) : null}
                                {caseStep == 22 ? (<span className='fixedRate marginTop18'>-10</span>) : null}
                            </p>
                            <span className="title12">Staking</span>
                        </div>
                    </div>
                </div>
                <div className={styles.userRecord}>
                    <div className={styles.left}>
                        <div className={styles.tabtitle}>
                            <div className={tabIndex == 0 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 0)}>Feeds 31</div>
                            <div className={tabIndex == 1 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 1)}>Answer 376</div>
                            <div className={tabIndex == 2 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 2)}>Staking 183</div>
                            <div className={tabIndex == 3 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 3)}>Collect 283</div>
                        </div>
                        {tabIndex != 2 ? (<div className={styles.alist}>
                            <div className={styles.aitem} onClick={changeDetail.bind(this)}>
                                <p className='title14' id="detail1">
                                    What is your prediction of the Crypto World in 2023?
                                </p>
                                <div className='title12_grey contentMore' style={{ "color": "#AEAEAE" }} dangerouslySetInnerHTML={{ __html: msg }}>
                                </div>
                                <span className="showMore" onClick={showMoreArtilcles.bind(this)}>ShowMore</span>
                            </div>
                            <div className={styles.aitem}>
                                <p className='title14'>
                                    What is the origin of the term “Purple prose”? When was it first used in literature and by whom
                                </p>
                                <div className='title12_grey contentMore' style={{ "color": "#AEAEAE" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, con                                </div>
                                <span className="showMore" onClick={showMoreArtilcles.bind(this)}>ShowMore</span>
                            </div>
                            <div className={styles.aitem}>
                                <p className='title14'>
                                    What is the origin of the term “Purple prose”? When was it first used in literature and by whom
                                </p>
                                <div className='title12_grey contentMore' style={{ "color": "#AEAEAE" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cusum dolor sit amet, consectetuer adipiscing elit. Aenean commsum dolor sit amet, con                                </div>
                                <span className="showMore" onClick={showMoreArtilcles.bind(this)}>ShowMore</span>
                            </div>
                        </div>) : (
                            <div className={styles.alist}>
                                <div className={styles.stakeItem} id="stakeItem">
                                    <div className="justify_space_between h5FlexWarp">
                                        <div className={styles.top}>
                                            <img src='/images/icon/stakingye.svg' />
                                            <p className='title14'>Staked <span className='title12_w'>$273 USDT</span></p>
                                            <p className='title14'>Rewards {caseStep == 22 ? (<span className='title12_w'>$45 USDT <span className='fixedRate'>+18</span></span>) : (<span className='title12_w'>$27 USDT</span>)} </p>
                                            <p className='title14'>APY <span className='title12_w'>234%</span></p>
                                        </div>

                                        <div className={`${styles.flexEnd} ${"justify_align_center"}`} >
                                            <Button size="xs" className='greenButton_border' id="stakeUnstake" onClick={unStake.bind(this)}>Unstake</Button>
                                            <Button onClick={showStake.bind(this)} size="xs" className='greenButton' style={{ "height": "24px" }}>Stake more</Button>
                                        </div>
                                    </div>
                                    <div className={styles.sitem} >
                                        <div className='flex_align_start' style={{ "gap": "20px" }}>
                                            <div className={styles.sleft}>
                                                <Tooltip content={11} placement="top">
                                                    <TopIcon fill="#CAA159" size={24} />
                                                </Tooltip>
                                                <p>12</p>
                                                <Tooltip content={1} placement="bottom">
                                                    <BottomIcon fill="#B7B7B7" size={24} />
                                                </Tooltip>
                                            </div>
                                            <div className={styles.sright}>
                                                <p className='title14'>
                                                    What is your prediction of the Crypto World in 2023?
                                                </p>
                                                <div className='title12_grey contentMore' style={{ "color": "#AEAEAE" }} dangerouslySetInnerHTML={{ __html: msg }}>
                                                </div>
                                                <span className="showMore" onClick={showMoreArtilcles.bind(this)}>ShowMore</span>
                                            </div>
                                        </div>
                                    </div>

                                    {isOpenStake == true ? (<div className={styles.stakeMo}>
                                        <Stake type="detail" ></Stake>
                                    </div>) : null}

                                </div>
                            </div>
                        )}

                    </div>
                    <div className={styles.right} onClick={showHome.bind(this)} id="profile">
                        {
                            showLater ? (<div className='afewLater'><img src='/images/icon/momentsLater.gif'></img></div>) : null
                        }
                        <div>
                            <p className='title14'>NFT Credentials</p>
                            <div className={`${styles.nftCredentials} ${"justify_space_between"}`}>
                                <div>
                                    <img src="/images/icon/ensdao.png" />
                                    <p className="title12">ENS DAO — Delegator 2022</p>
                                </div>
                                <div>
                                    <img src="/images/icon/ensdao.png" />
                                    <p className="title12">ENS Town Hall | Q3 2022</p>
                                </div>
                            </div>
                            <div className={styles.conlist} >
                                <p className={`${"title14"} ${"h5none"}`}>My Vault</p>
                                <div className={`${styles.myvalue} ${"h5none"}`}>
                                    <div className={styles.myitem}>
                                        <div>
                                            <div>${763 + rate.TotalEarned}
                                                {caseStep == 16 ? (<span className='fixedRate'>+9.8</span>) : null}
                                                {caseStep == 17 ? (<span className='fixedRate'>+198</span>) : null}
                                                {caseStep == 22 ? (<span className='fixedRate'>+18</span>) : null}
                                            </div>
                                            <span>Total earned</span>
                                        </div>
                                        <div>
                                            <div>${2837 + rate.Wallet}
                                                {caseStep == 17 ? (<span className='fixedRate'>+198</span>) : null}
                                                {caseStep == 22 ? (<span className='fixedRate'>+28</span>) : null}
                                            </div>
                                            <span>Wallet</span>
                                        </div>
                                    </div>

                                    <div className={styles.myitem}>
                                        <div>
                                            <div>${763 + rate.Reward}
                                                {caseStep == 16 ? (<span className='fixedRate'>+9.8</span>) : null}
                                                {caseStep == 17 ? (<span className='fixedRate'>+1</span>) : null}
                                            </div>
                                            <span>Creation reward

                                            </span>
                                        </div>
                                        <div style={{ "display": "none" }}>
                                            <div>$763</div>
                                            <span>Creation reward</span>
                                        </div>
                                    </div>


                                    <div className={styles.myitem}>
                                        <div>
                                            <div className='justify_align_center'>${763 + rate.TotalBoost}
                                                {caseStep == 20 ? (<span className='fixedRate marginTop32'>+10</span>) : null}
                                            </div>
                                            <span>Total Boost</span>
                                        </div>
                                        <div>
                                            <div>
                                                ${2837 + rate.Earned} {caseStep == 16 ? (<span className='fixedRate'>+9.8</span>) : null}
                                                {caseStep == 17 ? (<span className='fixedRate'>+198</span>) : null}
                                                {caseStep == 22 ? (<div className='fixedRate marginTop32'>+18</div>) : null}
                                            </div>
                                            <span>Earned

                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.myitem}>
                                        <div>
                                            <div className='justify_align_center'>$763</div>
                                            <span>Total Bet</span>
                                        </div>
                                        <div>
                                            <div>$763</div>
                                            <span>Earned</span>
                                        </div>
                                    </div>

                                </div>

                                <div id="profileNum">
                                    <p className='title14'>Your Contributions</p>
                                    <div className={styles.conitem}>
                                        <p><img src='/images/icon/analytics.svg' />Answer Rate</p>
                                        <span>{27.87 + rate.Rate}%
                                            {caseStep == 6 ?
                                                (<span className='fixedRate'>+0.2%
                                                </span>) : null}
                                            {caseStep == 16 ? (<span className='fixedRate'>+0.015%</span>) : null}
                                            {caseStep == 17 ? (<span className='fixedRate'>+2.34%</span>) : null}
                                        </span>

                                    </div>
                                    <div className={styles.conitem}>
                                        <p><img src='/images/icon/chat.svg' />All Answers</p>
                                        <span>2333</span>
                                    </div>
                                    <div className={styles.conlist2}>
                                        <div className={styles.conitem2}>
                                            <p><img src='/images/icon/heart.svg' />Liked Answers</p>
                                            <span>{2333 + rate.Answers}
                                                {caseStep == 6 ? (<span className='fixedRate'>+1
                                                </span>) : null}</span>

                                        </div>
                                        <div className={styles.conitem2}>
                                            <p><img src='/images/icon/rocket.png' />Boosted Answers</p>
                                            <span>2333</span>
                                        </div>
                                        <div className={styles.conitem2}>
                                            <p><img src='/images/icon/bookmark.svg' />Collected Answers</p>
                                            <span>2333</span>
                                        </div>
                                    </div>

                                </div>
                                <div className={styles.conitem}>
                                    <p><img src='/images/icon/view.svg' />Content Viewed</p>
                                    <span>{2333 + rate.Views}
                                        {caseStep == 16 ? (<span className='fixedRate'>+1</span>) : null}
                                        {caseStep == 17 ? (<span className='fixedRate'>+2003</span>) : null}
                                    </span>
                                </div>
                                <div className={styles.conitem} id="Edits">
                                    <p><img src='/images/icon/edit.svg' />Public Edits</p>
                                    <span>2333</span>
                                </div>
                                <div className={styles.conitem}>
                                    <p><img src='/images/icon/query.svg' />Ask Questions</p>
                                    <span>2333</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GuideCanvas id={canvasId} tipInfo={tipInfo} changeCanvasId={changeCanvasId} />
        </div>
    )
}

export default Profile