import Link from "next/link";
import Image from "next/image";
import styles from "./book.module.scss";
import cover from "./book.png";
const Book=(props)=>{
    return(
        <Link
            href={props.link}
        >
            <a className={styles.book}>
                <div className={styles.cover}>
                    <Image alt={props.name} width={160} height={190} src={props.image}/>
                </div>
                <div className={styles.caption}>{props.name}</div>
            </a>
        </Link>
    )
}
export default Book;