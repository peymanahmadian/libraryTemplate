import styles from "./pagination.module.scss";
import {useState,useEffect,memo} from "react";
const Pagination=(props)=>{
    let pageCount=Math.ceil(props.dataCount / props.dataPerPage);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState(pageCount>10?10:pageCount);
    const [pageArr,setPageArr]=useState([]);
    useEffect(()=>{
        let cash=[];
        for(let arr=first;arr<=last;arr++){
            cash.push(arr);
        }
        setPageArr(cash);
    },[first,last])
    return(
    <div className={styles.pagination}>
        <button className={styles.button} disabled={first===1} onClick={()=>{setFirst(first-1);setLast(last-1)}}>قبلی</button>
        {
            pageArr.map(item=><button className={styles.button} key={item} onClick={e=>props.onChange(item)}>{item}</button>)
        }
        <button className={styles.button} disabled={last===pageCount} onClick={()=>{setFirst(first+1);setLast(last+1)}}>بعدی</button>
    </div>)
}
export default memo(Pagination);