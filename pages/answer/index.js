import Head from "../../components/header/index"
import styles from '../index.module.scss'
import { useState } from 'react';
import { User, Button, Badge } from "@nextui-org/react";
import Router from "next/router";
import H5Header from "../../components/h5Header/index"


export default function Answer() {
    const [isInvisible, setIsInvisible] = useState(true);
    const topicsList = ["Defi", "Layer2", "Web3 Social", "GameFi", "Dao", "Creative Economy", "Token"];
    const changeArticles = () => {
        Router.push('/');
    };
    return (
        <div>
            <Head />
            <H5Header />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.miniLeft}>
                        <p className="title14 margin10">Latest Transaction</p>
                        <div className={styles.answerType}>Questions for you<span>100</span></div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.topType}><img src="/images/icon/start.svg" />Questions for you</div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className="justify_space_between"><p className="title18" onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className="justify_space_between"><p className="title18"  onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div><div className={styles.item}>
                                <div className="justify_space_between"><p className="title18"  onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div><div className={styles.item}>
                                <div className="justify_space_between"><p className="title18"  onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div><div className={styles.item}>
                                <div className="justify_space_between"><p className="title18"  onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div><div className={styles.item}>
                                <div className="justify_space_between"><p className="title18"  onClick={changeArticles.bind(this)}>What is the origin of the term “Purple prose”?</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                                <div className="flex_align_center" style={{ gap: "10px" }}>
                                    <span className="title14G" style={{ color: "#525252" }}>2 anwsers</span>
                                    <div className={styles.circular}></div>
                                    <span className="title14G">Last requested 4h</span>
                                </div>
                                <div className={styles.op_list}>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/edit.svg" />
                                        <span>Anwser</span>
                                    </div>
                                    <div className={styles.op_item}>
                                        <img src="/images/icon/rss.svg" />
                                        <span>Follow 191</span>
                                    </div>
                                    {/* <div className={styles.op_item}>
                                        <img src="/images/icon/pass.svg" />
                                        <span>Pass</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className="justify_space_between">
                            <p className={styles.title}>Topics you Follow</p>
                            <Button auto icon={<img src="/images/icon/edit.svg" />} onPress={() => setIsInvisible(!isInvisible)} className="autoButton"></Button>
                        </div>
                        <div className={styles.topice}>
                            {topicsList.map((name, index) => (
                                <Badge
                                    key={index}
                                    content={"x"}
                                    isInvisible={isInvisible}
                                    shape="circle"
                                    style={{ color: "#fff", background: "#E7B750" }}
                                >
                                    <Button auto className="mini_white_button">{name}</Button>
                                </Badge>
                            ))}

                        </div>
                        <div>
                            <p className={styles.title}>Following</p>
                            <div className={styles.follows}>
                                <div className="justify_space_between">
                                    <User
                                        as="button"
                                        size="md"
                                        name="Tony Reichert"
                                        description="#DeFi #DAO #Staking"
                                        src="/images/photo/avatar1.jpg"
                                        className="userInfo"
                                    />
                                    <Button auto color="success" className="greenButton">Follow</Button>
                                </div>
                                <div className="justify_space_between">
                                    <User
                                        as="button"
                                        size="md"
                                        name="Tony Reichert"
                                        description="#DeFi #DAO #Staking"
                                        className="userInfo"
                                        src="/images/photo/avatar1.jpg"
                                    />
                                    <Button auto color="success" className="greenButton">Follow</Button>
                                </div>
                                <div className="justify_space_between">
                                    <User
                                        as="button"
                                        size="md"
                                        name="Tony Reichert"
                                        description="#DeFi #DAO #Staking"
                                        className="userInfo"
                                        src="/images/photo/avatar1.jpg"
                                    />
                                    <Button auto color="success" className="md_white_button">Follow</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
