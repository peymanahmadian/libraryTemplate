import styles from "./search.module.scss";
const Search=(props)=>{
    return(<div className={`${styles.search} ${props.vertical && styles.vertical}`}>
        <input type={ "search"} placeholder={props.placeholder}/>
        <button type={"button"}>{props.label ? props.label  : "جستجو"}</button>
    </div>);
}
export default Search;