import Head from "../components/header/index"
import H5Header from "../components/h5Header/index"
import styles from './index.module.scss'
// import { useState } from 'react';
import { User, Image, Button, Avatar, Dropdown, Badge, Popover, Tooltip } from "@nextui-org/react";
import Router from "next/router";
import MiniCard from "../components/minicard";
import QuickReply from "../components/quickReply";
import Comment from "../components/comment";
import Stake from "../components/stake";

import fetch from "node-fetch";

import { useEffect, useState } from 'react';
import GuideCanvas from "../components/guideCanvas"

// import message from '../components/message';

// import { useWeb3React } from "@web3-react/core"
// import { injected } from "../components/wallet/Connectors"

import { getContentsByParentIdOrdered } from "../util/service";
import { TopIcon } from "../components/Icon/top";
import { BottomIcon } from "../components/Icon/bottom";


// function useLocalStorage(key, fallbackValue) {
//   const [value, setValue] = useState(fallbackValue);
//   useEffect(() => {
//       const stored = localStorage.getItem(key);
//       setValue(stored ? JSON.parse(stored) : fallbackValue);
//   }, [fallbackValue, key]);

//   useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

function Home({ homeData, recommendData }) {

  const [count, setCount] = useState(0);
  const [tabIndex, setTabIndex] = useState('Hot');
  const [caseStep, setCaseStep] = useState(1);
  const [canvasId, setCanvasId] = useState();


  const [tipInfo, setTipInfo] = useState(`<p> Click <img src="/images/icon/no.svg"/> <img src="/images/icon/nodown.svg"/> to upvote or downvote for the content.</p>`)

  const changeTab = (page) => {
    setTabIndex(page);
    Router.push({ path: "/", query: { page: page } });
    //message.success({ content: "success", duration: 2000 }) 
  };
  const pictureUsers = [
    "/images/photo/avatar2.jpg",
    "/images/photo/avatar1.jpg"
  ];
  const [isInvisible, setIsInvisible] = useState(true);
  const topicsList = ["Defi", "Layer2", "Web3 Social", "GameFi", "Dao", "Creative Economy", "Token"];
  const changeArticles = (id) => {
    setCaseStep(caseStep + 1);
    Router.push('/articles/' + id);
  };

  const showMoreArtilcles = (e) => {
    e.currentTarget.style.display = "none";
    let theNode = e.currentTarget.previousSibling;
    theNode.style = "display: block;";
  };


  const [commentList, setCommentList] = useState([]);

  const openComment = async (item) => {
    homeData.forEach(element => {
      if (element.id === item.id) {
        element.isOpenComment = !element.isOpenComment ? true : false;
        if (element.isOpenComment == true) {
          element.isOpenStake = false
        }
      }
    });

    if (item.isOpenComment === true) {
      const comment = await getContentsByParentIdOrdered(item.id);
      const data = await comment.json();
      setCommentList(data.data);
    }
    setCount(count + 1)
  }

  const openStake = async (item) => {
    homeData.forEach(element => {
      if (element.id === item.id) {
        element.isOpenStake = !element.isOpenStake ? true : false;
        if (element.isOpenStake == true) {
          element.isOpenComment = false
        }
      }
    });
    setCount(count + 1)
  }

  //changeLike
  const changeLike = async (item, type) => {
    homeData.forEach(element => {
      if (element.id === item.id) {
        element.isOpenUser = !element.isOpenUser ? true : false;
        if (type === "add") {
          element.upVotes = element.upVotes + 1
        } else {
          element.downVotes = element.downVotes + 1
        }
      }
    });
    setCaseStep(caseStep + 1);
    setCanvasId("articTitle" + item.id);
    setTipInfo("Click the Question to view more valuable answers.");
  }

  const [tags, setTags] = useState();
  const onMouseEnter = async (tag) => {
    setTags(tag);
  }

  const onMouseLeave = async () => {
    setTags("")
  }

  const changeCanvasId = (key) => {
    setCanvasId(key)
  };
  const changeCaseStep = (key) => {
    setCaseStep(key)
  };

  // useEffect(() => { });

  useEffect(() => {
    const stepEnd = localStorage.getItem('stepEnd');
    if (stepEnd !== "true") {
      const item = localStorage.getItem('stepStaus');
      if (caseStep == 1) {
        setCanvasId("Likes1");
      }
      if (caseStep > 7) {
        setCaseStep(caseStep);
      } else if (item == 7) {
        setCaseStep(7);
        setTimeout(() => {
          setCanvasId("Likes2");
        }, 200);
        localStorage.setItem("currentStep", JSON.stringify(2));
      } else if (item == 12) {
        // setCanvasId()
        // localStorage.setItem("stepEnd", true);
        setCaseStep(12);
        setTimeout(() => {
          setCanvasId("Likes1");
        }, 200);
        localStorage.setItem("currentStep", JSON.stringify(3));
      }
      localStorage.setItem("stepStaus", JSON.stringify(caseStep));
    } else {
      setCanvasId()
    }
  });


  return (
    <div>
      <Head changeCanvasId={changeCanvasId} changeCaseStep={changeCaseStep} />
      <H5Header />
      <div className={styles.main}>
        <div className={`${styles.articleTab} ${"justify_align_center"}`}>
          <div className={tabIndex == 'Hot' ? `${styles.active}` : ''} onClick={changeTab.bind(this, 'Hot')}>Hot</div>
          <div className={tabIndex == 'New' ? `${styles.active}` : ''} onClick={changeTab.bind(this, 'New')}>New</div>
          <div className={tabIndex == 'Staking' ? `${styles.active}` : ''} onClick={changeTab.bind(this, 'Staking')}>Staking</div>
        </div>
        <div className={styles.container}>
          <div className={styles.miniLeft}>
            <div style={{ "position": "fixed", "width": "200px" }}>
              <div className="justify_space_between">
                <p className={styles.title}>Topics you Follow</p>
                <Button auto icon={<img src="/images/icon/edit.svg" />} className="autoButton"></Button>
              </div>
              <div className={styles.topiceList}>
                <div className={`${styles.topiceItem} ${tags == "DeFi" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/starth.svg" />DeFi
                </div>
                <div className={`${styles.topiceItem} ${tags == "Staking" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/starth.svg" />Staking
                </div>
                <div className={`${styles.topiceItem}  ${tags == "Creative Economy" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/starth.svg" />Creative Economy
                </div>
                <div className={`${styles.topiceItem}  ${tags == "Layer 2" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />Layer 2
                </div>
                <div className={`${styles.topiceItem}  ${tags == "Web3 Social" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />Web3 Social
                </div>
                <div className={`${styles.topiceItem}  ${tags == "DAO" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />DAO
                </div>
                <div className={`${styles.topiceItem}  ${tags == "DEX" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />DEX
                </div>
                <div className={`${styles.topiceItem}  ${tags == "GameFI" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />GameFI
                </div>
                <div className={`${styles.topiceItem}  ${tags == "Storage" ? styles.topiceBg : null}`}>
                  <img src="/images/icon/startn.svg" />Storage
                </div>
              </div>
            </div>

          </div>
          <div className={`${styles.left} ${styles.homeLeft}`}   >
            {homeData.map((item) => (
              <div className={styles.infoItem} key={item.id} id={"Home" + item.id} onMouseEnter={onMouseEnter.bind(this, item.tags)} onMouseLeave={onMouseLeave.bind(this)}>
                <div className={styles.infoItemDesc}>
                  <div className={styles.likes} id={"Likes" + item.id}>
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
                      />) :
                      (<Tooltip content={item.downVotes} placement="bottom">
                        <BottomIcon fill={item.downVotes > item.upVotes ? "#CAA159" : "#B7B7B7"} size={24} />
                      </Tooltip>)}
                  </div>
                  <div className={styles.info}>
                    {!item.isOpenUser ? (<div className={styles.userInfo}>
                      <div className="justify_align_center" style={{ gap: "12px" }}>
                        <img src="/images/icon/hiddenusercard.png" style={{ cursor: "pointer" }} />
                        <Button auto disabled className="greenButton" style={{ background: "#F7F7F7" }}>Follow</Button>
                      </div>
                    </div>) : (
                      <div className={styles.userInfo}>
                        <div className="justify_align_center gap52">
                          <Popover placement="bottom-left">
                            <Popover.Trigger>
                              <User
                                as="button"
                                size="md"
                                name={item.answerAuthor.username}
                                description={item.answerAuthor.bio}
                                className="userInfo"
                                src={!item.answerAuthor.photo ? "/images/photo/avatar1.jpg" : item.answerAuthor.photo}
                              />
                            </Popover.Trigger>
                            <Popover.Content>
                              <MiniCard />
                            </Popover.Content>
                          </Popover>
                          <Button auto color="success" className="greenButton">Follow</Button>
                        </div>
                        <Dropdown placement="bottom-right" >
                          <Dropdown.Trigger>
                            <div className={styles.userMore}>
                              <Image src="/images/icon/hmore.svg"
                                objectFit="none"
                                width={16}
                                height={4} />
                            </div>
                          </Dropdown.Trigger>

                          <Dropdown.Menu
                            aria-label="more actions"
                            color="success"
                            onAction={(actionKey) => console.log({ actionKey })}
                            css={{ "min-width": "180px", "li": { width: "180px", "font-size": "12px" } }}
                          >
                            <Dropdown.Item key="share" >
                              Share
                            </Dropdown.Item>
                            <Dropdown.Item key="copy_link">Copy link</Dropdown.Item>
                            <Dropdown.Item key="log" >
                              Log
                            </Dropdown.Item>
                            <Dropdown.Item key=">not_helpful">Not Helpful</Dropdown.Item>
                            <Dropdown.Item key="report" withDivider color="error">
                              Report
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                      </div>
                    )}


                    <div className={styles.articleInfo}>
                      <p className={styles.title} onClick={changeArticles.bind(this, item.id)} id={"articTitle" + item.id}>{item.content}</p>
                      <div className="contentMore" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                      {item.answer ? (<span className="showMore" onClick={showMoreArtilcles.bind(this)}>ShowMore</span>) : null}
                    </div>
                    <div className={styles.tagsItem}>#{item.tags}</div>

                    <div className={styles.operation}>
                      <div className={styles.op_list}>
                        <div className={styles.op_item} onClick={openComment.bind(this, item)}>
                          <img src="/images/icon/chat.svg" />
                          <span>{item.comments}</span>
                          {pictureUsers.map((url, index) => (
                            <Avatar
                              key={index}
                              size="xs"
                              pointer
                              src={url}
                              stacked
                              className={"avatar" + index}
                            />
                          ))}
                        </div>
                        <div className={styles.op_item}>
                          <img src="/images/icon/share.svg" />
                          <span>{item.mirrored}</span>
                          {pictureUsers.map((url, index) => (
                            <Avatar
                              key={index}
                              size="xs"
                              pointer
                              src={url}
                              stacked
                              className={"avatar" + index}
                            />
                          ))}
                        </div>
                        <div className={styles.op_item}>
                          <img src="/images/icon/bookmark.svg" />
                          <span>{item.collected}</span>
                          {pictureUsers.map((url, index) => (
                            <Avatar
                              key={index}
                              size="xs"
                              pointer
                              src={url}
                              stacked
                              className={"avatar" + index}
                            />
                          ))}

                        </div>
                        <div className={styles.op_item} onClick={openStake.bind(this, item)}>
                          <img src="/images/icon/rocket.svg" />
                          <span>{item.stakers}</span>
                          {pictureUsers.map((url, index) => (
                            <Avatar
                              key={index}
                              size="xs"
                              pointer
                              src={url}
                              stacked
                              className={"avatar" + index}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="justify_align_center h5Right">
                        <span className={styles.op_data}>0xSaucy.eth  like   11 minutes ago
                        </span>
                        <img src="/images/icon/smore.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                {item.isOpenStake == true ? (<Stake />) : null}
                {item.isOpenComment == true ? (<QuickReply />) : null}
                {item.isOpenComment == true ? (
                  <div className={styles.commentList}>
                    <Comment commentList={commentList} />
                    <Button className={styles.viewComments}>View collapsed comments</Button>
                  </div>) : null}
              </div>
            ))}
            {/* <Button onClick={changePage.bind(this, 20)}>loading</Button> */}

          </div>
          <div className={styles.right}>
            {/* <div className="justify_space_between">
              <p className={styles.title}>Topics you Follow</p>
              <Button auto icon={<img src="/images/icon/edit.svg" />} onPress={() => setIsInvisible(!isInvisible)} className="autoButton"></Button>
            </div>
            <div className={styles.topice}>
              {topicsList.map((name, index) => (
                <Badge
                  key={index}
                  style={{ color: "#fff", background: "#E7B750" }}
                  content={"x"}
                  isInvisible={isInvisible}
                  shape="circle"
                >
                  <Button auto className="mini_white_button">{name}</Button>
                </Badge>
              ))}

            </div> */}
            <div>
              <p className={styles.title}>Following</p>
              <div className={styles.follows}>
                {recommendData.map((item, index) => (
                  <div className="justify_space_between" key={index}>
                    <User
                      as="button"
                      size="md"
                      name={item.username}
                      description={item.bio}
                      src={!item.photo ? "/images/photo/avatar1.jpg" : item.photo}
                      className="userInfo"
                    />
                    <Button auto color="success" className="greenButton">Follow</Button>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      <GuideCanvas id={canvasId} tipInfo={tipInfo} changeCanvasId={changeCanvasId} changeCaseStep={changeCaseStep} />
    </div >
  );
}

export async function getServerSideProps(context) {
  let url = "getTopNumContents";
  const options = {
    from: 0,
    to: 10,
  };
  if (context.query.page == "New") {
    url = "getLatestNumContents";
  } else if (context.query.page == "Staking") {
    url = "getMostNumContents";
  }
  const res = await fetch(`https://wiisetest.socialfi.io/api/content/${url}/${options.from}/${options.to}`);
  let data = await res.json();
  // console.log(data)
  data.forEach(element => {
    element.isOpenComment = false;
    element.isOpenUser = false;
    element.isOpenStake = false;
  });

  // console.log(data)

  const resRecommend = await fetch(`https://wiisetest.socialfi.io/api/user/getRecommendedUsersById/1`);
  let recommendData = await resRecommend.json();
  // console.log(recommendData)

  return {
    props: {
      homeData: data, recommendData: recommendData.data
    }
  }
}


export default Home
