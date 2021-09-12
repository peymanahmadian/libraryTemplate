import styles from "./search.module.scss";
const Search=(props)=>{
    return(<div className={`${styles.search} ${props.vertical && styles.vertical}`}>
        <input type={"search"} placeholder={"نام کتاب،مجله،انتشارات و ..."}/>
        <button type={"button"}>جستجو</button>
    </div>);
}
export default Search;