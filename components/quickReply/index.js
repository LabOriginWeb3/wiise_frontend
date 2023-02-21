import { Button, User, Input } from "@nextui-org/react";
import styles from "./quickReply.module.scss"

export default function QuickReply(props) {
    const { type } = props;

    return (
        <div className={type == "detail" ? styles.replyMain_detail : styles.replyMain}>
            <div className={styles.main}>
                <User
                    as="button"
                    size="md"
                    src="/images/photo/avatar1.jpg"
                />
                <div className={styles.reply}>
                    <Input placeholder="Leave a comment" className="inputK" aria-label="comment"></Input>
                </div>
                <Button auto className="greenButton" style={{ height: "auto" }}>Comment</Button>
            </div>
        </div>


    )
}