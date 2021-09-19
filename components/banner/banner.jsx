import styles from "./banner.module.scss"
import Link from "next/link";
const Banner=(props)=>{
    return(
        <Link href={props.link}>
            <div style={{backgroundImage:`url(${props.image})`}} className={styles.Banner}/>
        </Link>
    )
}
export default Banner;