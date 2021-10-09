import styles from "./bookList.module.scss";
import Book from "./../book/book";
const BookList=(props)=>{
    return(<div className={styles.bookList}>
        {
            props.data.map(item=><div key={item.link} className={styles.item}><Book image={item.image} name={item.name} link={item.link}/></div>)
        }
    </div>)
}
export default BookList;