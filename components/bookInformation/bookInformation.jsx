import Image from "next/image";
import styles from "./bookInformation.module.scss";
import {Description} from "./../../components";
const BookInformation=(props)=>{

    return(
        <div className={styles.stage}>
        <div className={styles.bookInfoContainer}>
        <div className={styles.bookPicture}>

            <Image src={props.image} height={300} width={200} alt={props.name}/>
        </div>
        <div className={styles.bookInformation}>
            <div className={styles.title}>{props.name}</div>
            <div><b>نویسنده : </b> {props.author}</div>
            <div><b>مترجم : </b> {props.translator}</div>
            <div><b>ناشر : </b> {props.publisher}</div>
            <div><b>زبان : </b> {props.language}</div>
            <div><b>تعداد صفحه : </b> {props.page}</div>
            <div><b>شابک : </b>  {props.ISBN}</div>
            <div><b>تاریخ چاپ : </b> {props.date}</div>
        </div>
        <div className={styles.bookDownload}>
            <div>
                <button type={"button"} className={"btn block"}>دانلود متن کتاب</button>
            </div>
            <div>
                <button type={"button"} className={"btn block"}>دانلود صوت کتاب</button>
            </div>

        </div>

    </div>
            {
                props.audio &&
                <div className={styles.bookAudio}>
                    <audio controls src={props.audio}/>
                </div>
            }

    <div>
        <Description>
            {props.description}
        </Description>
    </div>
    </div>
)
}
export default BookInformation;