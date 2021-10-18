import { ReactReader } from "react-reader";
import {useState} from "react";

export default function Epub(props) {
    const [location,setLocation]=useState(null);
    const locationChanged=(e)=>{
        setLocation(e)
    }
    return (
        <div>
            <div style={{ position: "relative", height: "660px",direction:"ltr" }}>
                <ReactReader
                    showToc={true}
                    url={props.url}
                    title={props.title}
                    location={location}
                    locationChanged={locationChanged}
                />
            </div>
        </div>
    )
}