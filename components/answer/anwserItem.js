import { User, Image, Button, Tooltip, Avatar } from "@nextui-org/react";
import styles from "./anwser.module.scss";
import { useEffect, useState } from 'react';
import { TopIcon } from "../Icon/top";
import { BottomIcon } from "../Icon/bottom";
import Router from "next/router";
import QuickReply from "../quickReply";
import Comment from "../comment";
import Stake from "../stake";


export default function AnwserItem(props) {
    const { commentList, caseStep } = props;

    const [count, setCount] = useState(0);
    const pictureUsers = [
        "/images/photo/avatar2.jpg",
        "/images/photo/avatar1.jpg"
    ];
    const changeProfile = () => {
        props.changeCaseStep(caseStep + 1);
        Router.push('/profile');
    };

    const changeLike = async (item, type) => {
        commentList.forEach(element => {
            if (element.id === item.id) {
                element.isOpenUser = !element.isOpenUser ? true : false;
                if (type === "add") {
                    element.upVotes = element.upVotes + 1
                } else {
                    element.downVotes = element.downVotes + 1
                }
            }
        });
        if (caseStep == 3) {
            props.changeCaseStep(caseStep + 1);
            props.changeCanvasId("Follow" + item.id);
            props.changeTipInfo("");
        } else {
            setCount(count + 1);
        }

    }

    const changeFollow = async (item) => {
        commentList.forEach(element => {
            if (element.id === item.id) {
                element.isFollow = !element.isFollow ? true : false;
            }
        });
        if (caseStep == 4) {
            props.changeCaseStep(caseStep + 1);
            props.changeCanvasId("User" + item.id);
            props.changeTipInfo("Click here to view the author’s profile.");
        } else {
            setCount(count + 1)
        }

    }

    const showMore = (e) => {
        e.currentTarget.style.display = "none";
        let theNode = e.currentTarget.previousSibling;
        theNode.style = "display: block;";
    };

    const openComment = async (item) => {
        commentList.forEach(element => {
            if (element.id === item.id) {
                element.isOpenComment = !element.isOpenComment ? true : false;
                if (element.isOpenComment == true) {
                    element.isOpenStake = false
                }
            }
        });
        setCount(count + 1)
    };

    const openStake = async (item, index) => {
        commentList.forEach(element => {
            if (element.id === item.id) {
                element.isOpenStake = !element.isOpenStake ? true : false;
                if (element.isOpenStake == true) {
                    element.isOpenComment = false
                }
            }
        });
        setCount(count + 1);
        if (caseStep == 14 && index == 1) {
            props.changeCanvasId();
            document.getElementById("ShowMore1").click();
            setTimeout(() => {
                const dom = document.getElementById("Likes2");
                if (dom) {
                    dom.scrollIntoView({ behavior: 'smooth', block: 'end' })
                }
            }, 2000);
            setTimeout(() => {
                props.changeCanvasId("StakeInfo1");
                props.changeTipInfo(`<p>Enter the amount you are willing to stake to boost this answer.</p><span className="tipInfoSpan">You’ll be rewarded if this answer turns out to be helpful.</span>`);
            }, 4000);

        }
    };

    const changeStake = async (item) => {
        commentList.forEach(element => {
            if (element.id === item.id) {
                element.isOpenUser = !element.isOpenUser ? true : false;
            }
        });
        setCount(count + 1);
        if (caseStep == 14) {
            const dom = document.getElementById("Likes1");
            if (dom) {
                dom.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
            props.changeCaseStep(15);
            props.changeCanvasId("User" + item.id);
            props.changeTipInfo(`<p>Click here to view the author’s profile.</p>`);
        }

    }

    useEffect(() => {
        const item = localStorage.getItem('stepStaus');
        if (JSON.parse(item) === 3) {
            props.changeCanvasId("Likes0");
            props.changeTipInfo(`<p>Click <img src="/images/icon/no.svg"  /> <img src="/images/icon/nodown.svg"  /> to express your opinions.</p>
            <p>The identity of the author will be revealed only after you interact.</p>`)
        }
        if (JSON.parse(item) === 14) {
            props.changeCanvasId("Stake1");
            props.changeTipInfo(`<p>Click <img src="/images/icon/rocket.svg"  /> to boost this answer if you find it valuable.</p>`);
        }
    }, []);

    return (
        <div>
            {commentList.map((item, index) => (
                <div className={styles.item} key={index} id={"anwserItem" + index}>
                    <div className={styles.likes} id={"Likes" + index}>
                        {!item.isOpenUser ? (
                            <Image
                                src="/images/icon/no.svg"
                                objectFit="none"
                                onClick={changeLike.bind(this, item, "add")}
                            />
                        ) :
                            (<Tooltip content={item.upVotes} placement="top">
                                <TopIcon fill={item.upVotes > item.downVotes ? "#CAA159" : "#B7B7B7"} size={24} />
                            </Tooltip>)}

                        <span className="wicenter">{item.upVotes + item.downVotes}</span>
                        {!item.isOpenUser ? (
                            <Image
                                src="/images/icon/no.svg"
                                objectFit="none"
                                style={{ transform: "rotate(180deg)" }}
                                onClick={changeLike.bind(this, item, "remove")}
                            />) : (<Tooltip content={item.downVotes} placement="bottom">
                                <BottomIcon fill={item.downVotes > item.upVotes ? "#CAA159" : "#B7B7B7"} size={24} />
                            </Tooltip>)}
                    </div>
                    <div className={styles.commentItem}>
                        <div className={styles.userFollow}>
                            {!item.isOpenUser ? (
                                <User
                                    as="button"
                                    size="sm"
                                    src="/images/icon/none_user.svg"
                                />
                            ) : (
                                <User
                                    as="button"
                                    size="sm"
                                    src={!item.user.photo ? "/images/photo/avatar1.jpg" : item.user.photo}
                                    onClick={changeProfile.bind(this)}
                                    id={"User" + item.id}
                                    pointer
                                    name={item.user.username}
                                />
                            )}
                            {!item.isOpenUser ? (
                                <img src="/images/icon/none_name.svg" style={{ "display": "block" }}></img>
                            ) : (
                                <div className="nameAfollow marginLeft30" style={{ "marginLeft": "10px" }}>
                                    {/* <p className={styles.name}>{item.user.username}</p> */}
                                    {!item.isFollow ? (<Button id={"Follow" + item.id} size="xs" className="greenButton" style={{ "height": "25px", "cursor": "pointer" }} onClick={changeFollow.bind(this, item)}>Follow</Button>
                                    ) : (<Button auto disabled className="greenButton" style={{ "height": "25px", "cursor": "pointer", "background": "#F7F7F7" }}>Following</Button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="marginLeft30">
                            <div className="contentMore" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            {item.content ? (<span className="showMore" id={"ShowMore" + index} onClick={showMore.bind(this)}>ShowMore</span>) : null}
                            <div className={styles.operation}>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item} onClick={openComment.bind(this, item)}>
                                        <img src="/images/icon/chat.svg" />
                                        <span>{item.comments}</span>
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
                                        <span>{item.mirrored}</span>
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
                                        <span>{item.collected}</span>
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
                                    <div className={styles.op_item} onClick={openStake.bind(this, item, index)} id={"Stake" + index}>
                                        <img src="/images/icon/rocket.svg" />
                                        <span>{item.stakers}</span>
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
                                <div className="justify_align_center h5Right">
                                    <span className={styles.op_data}>0xSaucy.eth  like   11 minutes ago
                                    </span>
                                    <img src="/images/icon/smore.svg" />
                                </div>
                            </div>
                            {item.isOpenStake == true ? (<Stake type="detail" id={"StakeInfo" + index} changeStake={changeStake} item={item} />) : null}
                            {item.isOpenComment == true ? (<QuickReply type="detail" />) : null}
                            {item.isOpenComment == true ? (
                                <div className={styles.commentList}>
                                    <Comment commentList={commentList} />
                                    <Button className={styles.viewComments}>View collapsed comments</Button>
                                </div>) : null}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}