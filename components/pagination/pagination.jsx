import styles from "./pagination.module.scss";
import {useState,useEffect,memo} from "react";
const Pagination=(props)=>{
    let pageCount=Math.ceil(props.dataCount / props.dataPerPage);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState(10);
    const [pageArr,setPageArr]=useState([]);
    useEffect(()=>{
        if(pageCount>10){
            setLast(10);
        }else{
            setLast(pageCount)
        }
    },[pageCount]);
    useEffect(()=>{
        let cash=[];
        for(let arr=first;arr<=last;arr++){
            cash.push(arr);
        }
        setPageArr(cash);
    },[last])
    return(
    <div className={styles.pagination}>
        <button className={styles.button} disabled={first===1} onClick={()=>{setFirst(first-1);setLast(last-1)}}>قبلی</button>
        {
            pageArr.map(item=><button className={`${styles.button} ${String(item)===props.currentPage && styles.active}`} key={item} onClick={e=>props.onChange(item)}>{item}</button>)
        }
        <button className={styles.button} disabled={last===pageCount} onClick={()=>{setFirst(first+1);setLast(last+1)}}>بعدی</button>
    </div>
    )
}
export default Pagination;