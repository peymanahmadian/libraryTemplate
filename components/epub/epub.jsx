import { ReactReader,ReactReaderStyles } from "react-reader";
import {useState,useRef,useEffect} from "react";

export default function Epub(props) {
    const [location,setLocation]=useState(null);
    const renditionRef = useRef(null)
    const [size, setSize] = useState(100)
    const changeSize = (newSize) => {
        setSize(newSize)
    }
    const locationChanged=(e)=>{
        setLocation(e)
    }
    const ownStyles={
        ...ReactReaderStyles,
    }
    useEffect(() => {
        if (renditionRef.current) {
            renditionRef.current.themes.fontSize(`${size}%`)
        }
    }, [size])
    return (
        <div>
            <div className={"font_size"}>
                <div>اندازه متن</div>
                <input type={"button"} value={"+"} onClick={() => changeSize(Math.min(130, size + 10))}/>
                <input type={"button"} value={"--"}  onClick={() => changeSize(Math.max(80, size - 10))}/></div>
            <div style={{ position: "relative", height: "660px",direction:"ltr" }}>
                <ReactReader
                    showToc={true}
                    url={props.url}
                    //styles={ownStyles}
                    title={props.title}
                    location={location}
                    locationChanged={locationChanged}
                    getRendition={(rendition) => {
                        renditionRef.current = rendition
                        renditionRef.current.themes.fontSize(`${size}%`)
                    }}
                />
            </div>
        </div>
    )
}