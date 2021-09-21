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
                <div className={styles.showComment}>
                    <div className={styles.avatar}>
                        <div>P</div>
                        <div>پیمان احمدیان</div>
                    </div>
                    <div className={styles.bullet}>به نظرم کتابی لازم برای تمام مهندسین می باشد</div>
                </div>
            </div>
        </div>
    )
}
export default Comments;