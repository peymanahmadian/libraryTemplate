import {useState} from "react";
import parse from "html-react-parser";
import styles from "./description.module.scss";
const Description=(props)=>{
    const [visible,setVisible]=useState(false);
    return(<>
        <div className={`${styles.content} ${visible && styles.hover}`}>
                    {parse(props.children)}
        </div>
        <div className={styles.footer}><button type={"button"} className={"btn"} onClick={()=>setVisible(!visible)}>{visible ? "مشاهده کمتر" : "مشاهده بیشتر"}</button></div>

    </>)
}
export default Description;