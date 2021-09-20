import Link from 'next/link'
import styles from "./menu.module.scss";
const Menu=(props)=>{
    return(
        <ul className={`${styles.menu} ${props.vertical && styles.vertical}`}>
            {props.items.map(item=><li key={item.text}><Link href={item.href}><a>{item.text}</a></Link></li>)}
        </ul>
    )
}
export default Menu;