import styles from "./banner.module.scss"
import Link from "next/link";
const Banner=(props)=>{
    return(
        <Link href={props.link}>
            <a>
                <div style={{backgroundImage:`url(${props.image})`}} className={styles.Banner}/>
            </a>
        </Link>
    )
}
export default Banner;