import Head from "../../components/header/index"
import styles from '../index.module.scss'
import { useState } from 'react';
import { User, Button, Badge } from "@nextui-org/react";
import H5Header from "../../components/h5Header/index"

export default function Spaces() {

  const [isInvisible, setIsInvisible] = useState(true);
  const topicsList = ["Defi", "Layer2", "Web3 Social", "GameFi", "Dao", "Creative Economy", "Token"];

  return (
    <div>
      <Head />
      <H5Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.miniLeft}>
            <Button className="grayButton">+ Create Spaces</Button>
            <p className="title14 margin10">Spaces</p>
            <div className={styles.spacesItem}>
              <img src="/images/icon/music.svg" />Music
            </div>
            <div className={styles.spacesItem}>
              <img src="/images/icon/business.svg" />Business
            </div>
            <div className={styles.spacesItem}>
              <img src="/images/icon/medical.svg" />Medical Sciences
            </div>
            <div className={styles.spacesItem}>
              <img src="/images/icon/mechanical.svg" />Mechanical
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.topType}><img src="/images/icon/start.svg" />Discover Spaces</div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
              <div className={styles.item}>
                <div className="justify_space_between"><p className="title18">DeFi Geek</p><img className={styles.close} src="/images/icon/close2.svg" /></div>
                <span className="title14G">180K followers</span>
                <p className="title14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className="justify_space_between">
              <p className={styles.title}>Topics you Follow</p>
              <Button auto icon={<img src="/images/icon/edit.svg" />} onClick={() => setIsInvisible(!isInvisible)} className="autoButton"></Button>
            </div>
            <div className={styles.topice}>
              {topicsList.map((name, index) => (
                <Badge
                  key={index}
                  style={{color:"#fff",background:"#E7B750"}}
                  content={"x"}
                  isInvisible={isInvisible}
                  shape="circle"
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
