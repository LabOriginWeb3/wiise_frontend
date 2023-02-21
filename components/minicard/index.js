import { Avatar, Button } from "@nextui-org/react"
import styles from "./minicard.module.scss"

export default function MiniCard() {
    return (
        <div className={styles.MiniCard}>
            <div className="justify_space_between">
                <Avatar
                    src="/images/photo/avatar1.jpg"
                    css={{ size: "$18" }}
                />
                <div className="flex_warp_end">
                    <p className={styles.topviews}>
                        <img src="/images/icon/view.svg" />
                        <span>2,913,546</span>
                        <span>Views</span>
                    </p>
                    <Button auto className="greenButton">Follow</Button>
                </div>
            </div>
            <div className="flex_align_center" style={{ gap: "5px", margin: "16px 0" }}>
                <p className="title18">User #01</p>
                <span className="greenC" style={{ marginLeft: "20px" }}></span>
                <span className="title12">Online</span>
            </div>
            <p className="title12_grey">Lorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor</p>
            <div className={styles.foandsta}>
                <div>
                    <p className="title18">2837</p>
                    <span className="title12">Followers</span>
                </div>
                <div>
                    <p className="title18">$2837</p>
                    <span className="title12">Staking</span>
                </div>
            </div>
            <div className={`${styles.feanco} ${"justify_space_between"}`} >
                <div><span className="title12">Feeds</span><span className="title14">31</span></div>
                <div className={styles.hline}></div>
                <div><span className="title12">Answers</span><span className="title14">376</span></div>
                <div className={styles.hline}></div>
                <div><span className="title12">Collect</span><span className="title14">283</span></div>
            </div>
            <p className="title14">NFT Credentials</p>
            <div className={`${styles.nftCredentials} ${"justify_space_between"}`}>
                <div>
                    <img src="/images/icon/ensdao.png" />
                    <p className="title12">ENS DAO — Delegator 2022</p>
                </div>
                <div className={styles.hline}></div>
                <div>
                    <img src="/images/icon/ensdao.png" />
                    <p className="title12">ENS Town Hall | Q3 2022</p>
                </div>
                <div className={styles.hline}></div>
                <div>
                    <img src="/images/icon/ensdao.png" />
                    <p className="title12">I ran the ENS card printer...</p>
                </div>
            </div>
            <p className="title12_grey" style={{cursor:"pointer"}}>Agora.com/user#01</p>
        </div>
    )
}