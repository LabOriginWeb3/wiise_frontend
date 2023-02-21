import Head from "../../components/header"
import { Input, Image, Button, Avatar, Modal, Dropdown, Popover, User, Tooltip } from "@nextui-org/react";
import styles from '../index.module.scss'
import art from './articles.module.scss'
import Reply from "../../components/reply"
import Comment from "../../components/comment"
import { useEffect, useState } from 'react';
import Anwser from "../../components/answer"
import AnwserItem from "../../components/answer/anwserItem"
import Bet from "../../components/bet"
import MiniCard from "../../components/minicard";
import { getTransactionsByContentId, getContentsByParentIdOrdered } from "../../util/service";
import { TopIcon } from "../../components/Icon/top";
import { BottomIcon } from "../../components/Icon/bottom";
import GuideCanvas from "../../components/guideCanvas";
import H5Header from "../../components/h5Header/index"


function Articles({ post, transactionData, commentData }) {
    const pictureUsers = [
        "/images/photo/avatar2.jpg",
        "/images/photo/avatar1.jpg"
    ];
    const [tabIndex, setTabIndex] = useState(0)
    const changeTab = (num) => {
        setTabIndex(num);
        if (num === 1) {
            handler();
        }
    };
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };

    const [selected, setSelected] = useState(new Set(["anwser"]));
    const [selectedValue, setSelectedValue] = useState(`Anwser (` + commentData.length + `)`);
    const changeSelected = (key) => {
        let currentKey = key.setSelected.currentKey;
        setSelected(currentKey);
        if (currentKey == "related") {
            setSelectedValue(`All related (` + commentData.length + `)`);
        } else {
            setSelectedValue(`Anwser (` + commentData.length + `)`);
        }
    };

    const changeCaseStep = (key) => {
        setCaseStep(key)
    };

    const [canvasId, setCanvasId] = useState();
    const changeCanvasId = (key) => {
        setCanvasId(key)
    };

    const [position, setPosition] = useState("left");
    const changePosition = (key) => {
        setPosition(key)
    };
    // const changeLoading = (key) => {
    //     setCanvasId(key)
    // };
    const [tipInfo, setTipInfo] = useState()
    const changeTipInfo = (key) => {
        setTipInfo(key)
    };

    let betData = [{
        id: 1,
        type: "<12k",
        count: 1680,
        progress: 35,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100,
        }, {
            name: "a16z",
            id: 2,
            bet: 1000,
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }, {
        id: 2,
        type: "12k-16k",
        count: 2480,
        progress: 52,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100
        }, {
            name: "a16z",
            id: 2,
            bet: 1000
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }, {
        id: 3,
        type: "16k-20k",
        count: 480,
        progress: 10,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100
        }, {
            name: "a16z",
            id: 2,
            bet: 1000
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }, {
        id: 4,
        type: ">20k",
        count: 90,
        progress: 2,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100
        }, {
            name: "a16z",
            id: 2,
            bet: 1000
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }]
    let betData2 = [{
        id: 1,
        type: "Yes",
        count: 1680,
        progress: 35,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100,
        }, {
            name: "a16z",
            id: 2,
            bet: 1000,
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }, {
        id: 2,
        type: "No",
        count: 2480,
        progress: 52,
        transList: [{
            name: "a16z",
            id: 1,
            bet: 100
        }, {
            name: "a16z",
            id: 2,
            bet: 1000
        }, {
            name: "a16z",
            id: 3,
            bet: 230
        }]
    }]


    const [caseStep, setCaseStep] = useState();

    useEffect(() => {
        const item = localStorage.getItem('stepStaus');
        if (caseStep >= 10) {
            setCaseStep(caseStep);
        } else if (JSON.parse(item) == 9) {
            setCaseStep(9);
            setCanvasId("BetMain");
            setPosition("top");
        } else if (JSON.parse(item) == 14) {
            setCaseStep(14);
        } else if (JSON.parse(item) == 18) {
            let obj = {};
            commentData.forEach((item, index) => {
                if (item.id === 18) {
                    obj = item;
                    obj.collected = 77;
                    obj.comments = 23;
                    obj.stakers = 11;
                    obj.downVotes = 200;
                    obj.upVotes = 501;
                    obj.isOpenUser = true;
                    commentData.splice(index, 1);
                    return;
                }
            })
            commentData.unshift(obj);
            setCaseStep(18);
            setCanvasId("anwserItem0");
            setTipInfo("Your boosted content has received a lot of likes and is quite well-liked.");
            setTimeout(() => {
                setCaseStep(19);
                setCanvasId("userProfile");
                setPosition("top");
                setTipInfo(`Check your profile and see what you get!`);
            }, 8000);
        }
        if (caseStep == undefined && JSON.parse(item) == 3) {
            setCaseStep(3);
        }
    });

    useEffect(() => {
        if (caseStep !== undefined) {
            localStorage.setItem("stepStaus", JSON.stringify(caseStep));
        }
    }, [caseStep]);



    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (caseStep == 9) {
                rollTransactionData(num);
            }
        }, 1000);

    })


    const rollTransactionData = ((num) => {
        transactionData.push(transactionData[num]);
        setNum(num + 1);
    });

    const [openComm, setOpenComm] = useState(false);
    const changeComment = (() => {
        setOpenComm(!openComm);
    });


    const timeago = ((dateTimeStamp) => {
        if (dateTimeStamp) {
            let result;
            var timeStamp = new Date(dateTimeStamp);
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var week = day * 7;
            var month = day * 30;
            var now = new Date().getTime();
            var diffValue = now - timeStamp;

            if (diffValue < 0) {
                return;
            }
            var minC = diffValue / minute;
            var hourC = diffValue / hour;
            var dayC = diffValue / day;
            var weekC = diffValue / week;
            var monthC = diffValue / month;

            if (monthC = 1) {
                result = " " + parseInt(monthC) + "month ago";
            } else if (monthC > 1 && monthC < 12) {
                result = " " + parseInt(monthC) + "months ago";

            } else if (weekC = 1) {
                result = " " + parseInt(weekC) + "week ago";
            } else if (weekC > 1 && weekC < 4) {
                result = " " + parseInt(weekC) + "weeks ago";

            } else if (dayC = 1) {
                result = " " + parseInt(dayC) + "day ago";
            } else if (dayC > 1 && dayC < 7) {
                result = " " + parseInt(dayC) + "days ago";

            } else if (hourC = 1) {
                result = " " + parseInt(hourC) + "hour ago";
            } else if (hourC >= 1 && hourC < 24) {
                result = " " + parseInt(hourC) + "hours ago";

            } else if (minC = 1) {
                result = " " + parseInt(minC) + "min ago";
            } else if (minC > 1 && minC < 60) {
                result = " " + parseInt(minC) + "mins ago";

            } else if (diffValue >= 0 && diffValue <= minute) {
                result = "just";
            } else {
                var datetime = new Date();
                datetime.setTime(timeStamp);
                var Nyear = datetime.getFullYear();
                var Nmonth =
                    datetime.getMonth() + 1 < 10
                        ? "0" + (datetime.getMonth() + 1)
                        : datetime.getMonth() + 1;
                var Ndate =
                    datetime.getDate() < 10
                        ? "0" + datetime.getDate()
                        : datetime.getDate();
                result = Nyear + "-" + Nmonth + "-" + Ndate;
            }
            return result;
        }
    })


    return (
        <div>
            <Head caseStep={caseStep} menuId="articles" changeCaseStep={changeCaseStep} changeCanvasId={changeCanvasId} changeTipInfo={changeTipInfo} changePosition={changePosition} />
            <H5Header />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={`${styles.infoItem} ${art.artInfoItem}`}>
                            <div className={styles.infoItemDesc}>
                                <div className={styles.likes}>
                                    <Tooltip content={post.upVotes} placement="top">
                                        <TopIcon fill="#CAA159" size={24} />
                                    </Tooltip>
                                    <span className="wicenter">{post.upVotes + post.downVotes}</span>
                                    <Tooltip content={post.downVotes} placement="bottom">
                                        <BottomIcon fill="#B7B7B7" size={24} />
                                    </Tooltip>
                                </div>
                                <div className={styles.info}>
                                    {/* <div className={styles.userInfo}>
                                        <div className="justify_align_center" style={{ gap: "12px" }}>
                                            <img src="/images/icon/hiddenusercard.png" style={{ cursor: "pointer" }} />
                                            <Button auto disabled className="greenButton" style={{ background: "#F7F7F7" }}>Follow</Button>
                                        </div>
                                    </div> */}
                                    <div className={styles.userInfo}>
                                        <div className="justify_align_center gap52">
                                            <Popover placement="bottom-left">
                                                <Popover.Trigger>
                                                    <User
                                                        as="button"
                                                        size="md"
                                                        name={post.user.username}
                                                        description={post.user.bio}
                                                        className="userInfo"
                                                        src={!post.user.photo ? "/images/photo/avatar1.jpg" : post.user.photo}
                                                    />
                                                </Popover.Trigger>
                                                <Popover.Content>
                                                    <MiniCard />
                                                </Popover.Content>
                                            </Popover>
                                            <Button auto color="success" className="greenButton">Follow</Button>
                                        </div>
                                    </div>
                                    <div className={styles.articleInfo} style={{ border: "none", padding: "0" }}>
                                        <p className={styles.title}>{post.content}</p>
                                        <div className="title14G" style={{ "marginTop": "10px" }}>{post.id == 3 ? "Voting ends approximately February 3, 2023 at 1:48 AM GMT+8" : post.id == 2 ? "Voting ended December 21, 2022 at 11:20 PM GMT+8" : ""}</div>
                                        <div className={styles.operation}>
                                            <div className={styles.op_list} style={{ gap: "15px" }}>
                                                <div className={tabIndex == 1 ? `${art.active} ${styles.op_item} ${art.art_item}` : `${styles.op_item} ${art.art_item}`} onClick={changeTab.bind(this, 1)}>
                                                    <img src="/images/icon/edit.svg" />
                                                    <span>Anwser</span>
                                                </div>
                                                <div className={tabIndex == 2 ? `${art.active} ${styles.op_item} ${art.art_item}` : `${styles.op_item} ${art.art_item}`} onClick={changeTab.bind(this, 2)}>
                                                    <img src="/images/icon/rss.svg" />
                                                    <span>Follow {post.watchers}</span>
                                                </div>
                                                {/* <div className={tabIndex == 3 ? `${art.active} ${styles.op_item} ${art.art_item}` : `${styles.op_item} ${art.art_item}`} onClick={changeTab.bind(this, 3)}>
                                                    <img src="/images/icon/request.svg" />
                                                    <span>Request</span>
                                                </div> */}
                                                <div className={caseStep == 9 || tabIndex == 4 || post.type == "Bet" ? `${art.active} ${styles.op_item} ${art.art_item}` : `${styles.op_item} ${art.art_item}`} onClick={changeTab.bind(this, 4)}>
                                                    <img src="/images/icon/bet.svg" />
                                                    <span>Bet</span>
                                                </div>
                                            </div>
                                            <div className={`${styles.operation} ${"h5hidden"}`}>
                                                <div className={styles.op_list}>
                                                    <div className={styles.op_item} onClick={changeComment.bind(this)}>
                                                        <img src="/images/icon/chat.svg" />
                                                        <span>{post.comments}</span>
                                                        <div className="h5hidden">
                                                            {pictureUsers.map((url, index) => (
                                                                <Avatar
                                                                    key={index}
                                                                    size="xs"
                                                                    pointer
                                                                    src={url}
                                                                    stacked
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className={styles.op_item}>
                                                        <img src="/images/icon/share.svg" />
                                                        <span>{post.mirrored}</span>
                                                        <div className="h5hidden">
                                                            {pictureUsers.map((url, index) => (
                                                                <Avatar
                                                                    key={index}
                                                                    size="xs"
                                                                    pointer
                                                                    src={url}
                                                                    stacked
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className={styles.op_item}>
                                                        <img src="/images/icon/bookmark.svg" />
                                                        <span>{post.collected}</span>
                                                        <div className="h5hidden">
                                                            {pictureUsers.map((url, index) => (
                                                                <Avatar
                                                                    key={index}
                                                                    size="xs"
                                                                    pointer
                                                                    src={url}
                                                                    stacked
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className={styles.op_item}>
                                                        <img src="/images/icon/rocket.svg" />
                                                        <span>{post.stakers}</span>
                                                        <div className="h5hidden">
                                                            {pictureUsers.map((url, index) => (
                                                                <Avatar
                                                                    key={index}
                                                                    size="xs"
                                                                    pointer
                                                                    src={url}
                                                                    stacked
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="title12_spa">{post.answer}
                                        </span>
                                        <div className={art.betMain} id={"BetMain"}>
                                            <Bet caseStep={caseStep} changeCaseStep={changeCaseStep} changeCanvasId={changeCanvasId} postId={post.id} changeTipInfo={changeTipInfo} changePosition={changePosition} betData={post.id == 3 ? betData2 : post.id == 2 ? betData : []}></Bet>
                                        </div>
                                        <div className={`${styles.operation} ${"pchidden"}`}>
                                            <div className={styles.op_list} style={{ marginTop: "10px" }}>
                                                <div className={styles.op_item} onClick={changeComment.bind(this)}>
                                                    <img src="/images/icon/chat.svg" />
                                                    <span>{post.comments}</span>
                                                    <div className="h5hidden">
                                                        {pictureUsers.map((url, index) => (
                                                            <Avatar
                                                                key={index}
                                                                size="xs"
                                                                pointer
                                                                src={url}
                                                                stacked
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className={styles.op_item}>
                                                    <img src="/images/icon/share.svg" />
                                                    <span>{post.mirrored}</span>
                                                    <div className="h5hidden">
                                                        {pictureUsers.map((url, index) => (
                                                            <Avatar
                                                                key={index}
                                                                size="xs"
                                                                pointer
                                                                src={url}
                                                                stacked
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className={styles.op_item}>
                                                    <img src="/images/icon/bookmark.svg" />
                                                    <span>{post.collected}</span>
                                                    <div className="h5hidden">
                                                        {pictureUsers.map((url, index) => (
                                                            <Avatar
                                                                key={index}
                                                                size="xs"
                                                                pointer
                                                                src={url}
                                                                stacked
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className={styles.op_item}>
                                                    <img src="/images/icon/rocket.svg" />
                                                    <span>{post.stakers}</span>
                                                    <div className="h5hidden">
                                                        {pictureUsers.map((url, index) => (
                                                            <Avatar
                                                                key={index}
                                                                size="xs"
                                                                pointer
                                                                src={url}
                                                                stacked
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={art.comment} id="Comment">
                            {openComm ? (<Reply></Reply>) : null}
                            <Dropdown placement="bottom-left">
                                <Dropdown.Button flat color="default" css={{ tt: "capitalize" }} className="title12" style={{ background: "#fff", color: "#000", padding: "0" }}>
                                    {selectedValue}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Single selection actions"
                                    color="default"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selected}
                                    onSelectionChange={(setSelected) => changeSelected({ setSelected })}
                                >
                                    <Dropdown.Item key="anwser" className="title12">Anwser ({commentData.length})</Dropdown.Item>
                                    <Dropdown.Item key="related" className="title12">All related ({commentData.length})</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <hr></hr>
                            {selected == "related" ? (<Comment commentList={commentData}></Comment>) :
                                (<AnwserItem commentList={commentData} caseStep={caseStep} changeCaseStep={changeCaseStep} changeCanvasId={changeCanvasId} changeTipInfo={changeTipInfo} changePosition={changePosition}></AnwserItem>)}
                        </div>

                    </div>
                    <div className={styles.right_detail}>
                        {/* <p className={styles.title}>Stake to boost</p>
                        <Input placeholder="Enter Amount" width="100%" className={art.inputCss} aria-label="stakeboost" />
                        <div className="justify_space_between">
                            <div className="justify_align_center" style={{ gap: "5px" }}>
                                <Button auto className="mini_white_button">$1</Button>
                                <Button auto className="mini_white_button">$10</Button>
                                <Button auto className="mini_white_button">$100</Button>
                            </div>
                            <Button auto color="success" className="greenButton">Stake</Button>
                        </div> */}
                        <p className={styles.title} style={{ margin: "0px 0px 16px" }}>Latest Transaction</p>
                        <div className={art.latest} id="transactionData">
                            {transactionData.slice().reverse().map((item, index) => (
                                <div className="justify_space_between" key={index}>
                                    <p>{item.userAddress.slice(0, 4) + "..." + item.userAddress.slice(-6)}</p>
                                    <span>{item.transactionType}</span>
                                    <p>{timeago(item.createdAt)}</p>
                                </div>
                            ))}
                            {/* <div className="justify_align_center view_all">View all</div> */}
                        </div>

                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                className="addModal"
                width="700px"
            >
                <Modal.Header>

                </Modal.Header>
                <Modal.Body>
                    <Anwser />
                </Modal.Body>
            </Modal>
            <GuideCanvas id={canvasId} tipInfo={tipInfo} position={position} changeCanvasId={changeCanvasId} />
        </div >
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://wiisetest.socialfi.io/api/content/getTopNumContents/0/10`)
    const posts = await res.json()

    const paths = posts.map((item) => ({
        params: { id: item.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://wiisetest.socialfi.io/api/content/getContentById/${params.id}`);
    const post = await res.json();

    const res2 = await getTransactionsByContentId(params.id);
    const transactionData = await res2.json();
    // console.log(transactionData)
    const res3 = await getContentsByParentIdOrdered(params.id);
    const commentData = await res3.json();
    commentData.data.forEach(element => {
        element.isOpenComment = false;
        element.isOpenStake = false;
    });
    // console.log(commentData)

    return { props: { post: post.data, transactionData: transactionData.data, commentData: commentData.data } }
}

export default Articles