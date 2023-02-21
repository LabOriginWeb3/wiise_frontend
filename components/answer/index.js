import { User, Button } from "@nextui-org/react";
import styles from "../reply/reply.module.scss"
export default function Anwser() {
    return (
        <div>
            <User
                as="button"
                size="md"
                name="Tony Reichert"
                description="#DeFi #DAO #Staking"
                src="/images/photo/avatar1.jpg"
                className="userInfo"
            />
            <p className="title18" style={{margin:"15px 0"}}>What happens in ...?</p>
            <div  className={styles.replyMain}>
                <div className={styles.reply}>
                    <textarea placeholder="Leave a comment"></textarea>
                    <div className={styles.replyOp}>
                        <img src="/images/icon/image.svg" />
                    </div>
                </div>
                <Button auto className="greenButton" style={{ margin: "10px 0", height: "auto" }}>Anwser</Button>
            </div>

        </div>
    )
}