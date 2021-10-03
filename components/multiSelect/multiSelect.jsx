import {useState,useEffect} from "react";
const MultiSelect=(props)=>{
    const [values,setValues]=useState([]);
    useEffect(() => {
        if(values){
            props.onChange(values);
        }
    }, [values]);
    const onChange=(e)=>{
        debugger;
        if(props.type==="radio"){
            props.onChange(e.target.value);
        }else{
            let cash=JSON.parse(JSON.stringify(values));
            if(!e.target.checked){
                let index=cash.indexOf(e.target.value);
                cash.splice(index,1);
            }else{
                cash.push(e.target.value);

            }
            setValues(cash);
        }
    }
    return(
        <div>
            {props.item.map(items=><><input type={props.type} onChange={onChange} key={items.value} name={props.name} value={items.value}/><label>{items.label}</label></>)}
        </div>
    )

}
export default MultiSelect;