import styles from "./publisherList.module.scss";
import Link from "next/link";
const PublisherList=(props)=>{
    return(<div className={styles.bookList}>
        {
            props.data.map(item=><Link href={item.link} key={item.link} className={styles.item}><a><div className={styles.img} style={{backgroundImage:`url(${item.image})`}}/><div>{item.name}</div></a></Link>)
        }
    </div>)
}
export default PublisherList;