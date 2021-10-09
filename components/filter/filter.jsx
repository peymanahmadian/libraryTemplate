import {useState,useEffect} from "react";
import {MultiSelect} from "../../components";
import styles from "./filter.module.scss";
const Filter=(props)=>{
    const [filter,setFilter]=useState({});
    useEffect(() => {
        if(Object.keys(filter).length){
            props.onChange(filter);
        }
    }, [filter]);

    return(<div className={styles.filter}>
        <div className={styles.mainTitle}>فیلتر نتایج</div>
        <div>
            {
                props.inputs.map(input=><div key={input.name}>
                    {input.title && <div className={styles.title}>{input.title}</div>}
                    {
                        (input.type==="textbox") && <input placeholder={input.label} className={"text"} type="text" name={input.name} onChange={e=>setFilter({...filter,[input.name]:e.target.value})}/>
                    }
                    {
                        (input.type==="multiCheck") && <MultiSelect type={"checkbox"} name={input.name} item={input.item} onChange={e=>setFilter({...filter,[input.name]:e})}/>
                    }

                </div>)
            }
        </div>
    </div>)
}
export default Filter;