import { User } from "@nextui-org/react";
import styles from "./comment.module.scss";

export default function Comment(props) {

    const { commentList } = props;
    // console.log(commentList)
    return (
        <div>
            {commentList.map((item, index) => (
                <div className={styles.commentItem} key={index}>
                    <User
                        as="button"
                        size="sm"
                        src="/images/photo/avatar1.jpg"
                    />
                    <div>
                        <p className={styles.name}>{item.user.username}</p>
                        <div className="contentMore" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                        <div className={styles.commentOp}>
                            <div className={styles.reply}><img src="/images/icon/reply.svg" />Reply</div>
                            <div className={styles.reply}><img src="/images/icon/heart.svg" style={{"width":"12px"}}/>Likes</div>
                            {/* <div>Share</div>
                            <div>Save</div> */}
                        </div>
                    </div>
                </div>
            ))}

            {/* <div className={styles.comment2}>
                <div className={styles.commentItem}>
                    <User
                        as="button"
                        size="sm"
                        src="/images/photo/avatar1.jpg"
                    />
                    <div>
                        <p className={styles.name}>Kevin Chod</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ALorem ipsum dolor sit amet, consectetuer adipiscing elit. A</span>
                        <div className={styles.commentOp}>
                            <div className={styles.reply}><img src="/images/icon/reply.svg" />Reply</div>
                            <div>Share</div>
                            <div>Save</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.comment2}>
                <div className={styles.commentItem}>
                    <User
                        as="button"
                        size="sm"
                        src="/images/photo/avatar1.jpg"
                    />
                    <div>
                        <p className={styles.name}>Kevin Chod</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ALorem ipsum dolor sit amet, consectetuer adipiscing elit. A</span>
                        <div className={styles.commentOp}>
                            <div className={styles.reply}><img src="/images/icon/reply.svg" />Reply</div>
                            <div>Share</div>
                            <div>Save</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.comment3}>
                <div className={styles.commentItem}>
                    <User
                        as="button"
                        size="sm"
                        src="/images/photo/avatar1.jpg"
                    />
                    <div>
                        <p className={styles.name}>Kevin Chod</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ALorem ipsum dolor sit amet, consectetuer adipiscing elit. A</span>
                        <div className={styles.commentOp}>
                            <div className={styles.reply}><img src="/images/icon/reply.svg" />Reply</div>
                            <div>Share</div>
                            <div>Save</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}
