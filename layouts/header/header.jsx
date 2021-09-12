import Image from 'next/image';
import styles from "./header.module.scss";
import Logo from "../../public/assets/img/Logo.svg";
import {Menu,Search,Side} from "../../components";
import {useState} from "react";
const Header=(props)=>{
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <Side/>
            </div>
            <div className={styles.logo}>
                <Image height={35} src={Logo} alt="Picture of the author" />
                <div>بانک آثار سناب</div>
            </div>

            <div className={styles.menu}>
                <Menu items={[
                {href:"/",text:"صفحه اصلی"},
                {href:"/",text:"انتشارات"},
                {href:"/",text:"نشریات"},
                {href:"/",text:"کتب"},
                {href:"/",text:"مجلات"},
                ]}/>
            </div>
            <div className={styles.search}><Search /></div>
            <div className={styles.profile}><button type={"button"} className={"btn block"}>ورود</button></div>
        </div>)
}
export default Header;