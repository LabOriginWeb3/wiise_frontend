import Head from "../../components/header/index";
import styles from './following.module.scss';
import { useState } from 'react';
import { User, Button } from "@nextui-org/react";
import H5Header from "../../components/h5Header/index"


function Following({ followersData, followingData }) {
    const [tabIndex, setTabIndex] = useState(0);

    const changeTab = (num) => {
        setTabIndex(num);
    };
    return (
        <div>
            <Head />
            <H5Header />
            <div className={styles.follow}>
                <User
                    as="button"
                    size="md"
                    name="Kevin Chod"
                    description="@kevinc.eth"
                    className="userInfo"
                    src="/images/photo/avatar1.jpg"
                />
                <div className={`${styles.articleTab} ${"justify_align_center"}`}>
                    <div className={tabIndex == 0 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 0)}>Followers</div>
                    <div className={tabIndex == 1 ? `${styles.active}` : ''} onClick={changeTab.bind(this, 1)}>Following</div>
                </div>

                {tabIndex === 0 ? (<>{
                    followersData.map((item, index) => (
                        <div className={styles.followItem} key={index}>
                            <div className="justify_space_between">
                                <User
                                    as="button"
                                    size="md"
                                    name={item.username}
                                    description={item.interests}
                                    className="userInfo"
                                    src={!item.photo ? "/images/photo/avatar1.jpg" : item.photo}
                                />
                                <Button auto color="success" className="greenButton">Follow</Button>
                            </div>
                            <p>{item.bio}</p>
                        </div>
                    ))
                }</>) : (<>{
                    followingData.map((item, index) => (
                        <div className={styles.followItem} key={index}>
                            <div className="justify_space_between">
                                <User
                                    as="button"
                                    size="md"
                                    name={item.username}
                                    description={item.interests}
                                    className="userInfo"
                                    src={!item.photo ? "/images/photo/avatar1.jpg" : item.photo}
                                />
                                <Button auto className="md_white_button">Following</Button>
                            </div>
                            <p>{item.bio}</p>
                        </div>
                    ))
                }</>)
                }



            </div>
        </div>
    )
}

export default Following


export async function getServerSideProps() {

    const res1 = await fetch(`https://wiisetest.socialfi.io/api/follow/getUserAndFollowingsById/1`);
    let data1 = await res1.json();

    const res2 = await fetch(`https://wiisetest.socialfi.io/api/follow/getUserAndFollowersById/1`);
    let data2 = await res2.json();


    return {
        props: {
            followingData: data1.data.following, followersData: [data2.data]
        }
    }
}