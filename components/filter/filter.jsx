import {useState} from "react";
import {MultiSelect} from "../../components";
const Filter=(props)=>{
    const [filter,setFilter]=useState({});
    return(<div>
        sample filter
        <div>
            {
                props.inputs.map(input=>{
                    (<div>
                    {
                        (input.type==="textbox") && <input type="text" name={input.name} onChange={e=>setFilter({...filter,[input.name]:e.target.value})}/>
                    }
                    {
                        (input.type==="multiCheck") && <MultiSelect type={"checkbox"} name={input.name} item={input.items} onChange={e=>setFilter({...filter,[input.name]:e})}/>
                    }
                    </div>)
                })
            }
        </div>
    </div>)
}
export default Filter;