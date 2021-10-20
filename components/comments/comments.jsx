import styles from "./comments.module.scss";
import Image from "next/image";
import comment from "./comment.svg";
const Comments=(props)=>{
    return(
        <div className={styles.commentContainer}>
            <div className={styles.insertComment}>
                <div className={styles.title}><Image src={comment} height={20}/><div>دیدگاه ها در مورد این آثار </div> </div>
                <div><textarea rows={4} className={"block text"} placeholder={"دیدگاه خود را در مورد این آثار بیان کنید..."}/></div>
            </div>
            <div>
                {
                    props.comments.map(item=><div key={item.user} className={styles.showComment}>
                        <div className={styles.avatar}>
                            <div>{item.user.split("")[0]}</div>
                            <div>{item.user}</div>
                        </div>
                        <div className={styles.bullet}>{item.comment}</div>
                    </div>)
                }

            </div>
        </div>
    )
}
export default Comments;