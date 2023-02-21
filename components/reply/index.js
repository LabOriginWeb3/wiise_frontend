import { Button, User } from "@nextui-org/react";
import styles from "./reply.module.scss"

export default function Reply() {
    return (
        <div className={styles.replyMain}>
            <div className={styles.main}>
                <User
                    as="button"
                    size="md"
                    src="/images/photo/avatar1.jpg"
                />
                <div className={styles.reply}>
                    <textarea placeholder="Leave a comment"></textarea>
                    <div className={styles.replyOp}>
                        <img src="/images/icon/link.svg" />
                        <img src="/images/icon/mention.svg" />
                        <img src="/images/icon/image.svg" />
                    </div>
                </div>
            </div>
            <Button auto className="greenButton" style={{margin:"10px 0",height:"auto"}}>Comment</Button>
        </div>


    )
}