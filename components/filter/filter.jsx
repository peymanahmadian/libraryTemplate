import {useState} from "react";
const Filter=(props)=>{
    const [filter,setFilter]=useState({});
    return(<div>
        <div>
            {
                props.inputs.map(inputs=>{(<div>
                    {
                        input.type==="textbox" &&
                        <input type="text" name={item.name} onChange={e=>setFilter({...filter,[item.name]:e.target.value})}/>
                    }
                    {
                        input.type==="multiCheck" &&
                        <div>
                            {input.items.map(<checkbox name={input.name}>{item.label}</checkbox>)}
                            {/* @create multi select component */}
                        </div>
                    }
                </div>)})
            }
        </div>
    </div>)
}
export default Filter;