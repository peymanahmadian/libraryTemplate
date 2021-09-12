import {Menu, Search} from "../../components";
import styles from "./side.module.scss";
import {Sling as Hamburger} from "hamburger-react";
import {useState} from "react";
import Image from "next/image";
import Logo from "../../public/assets/img/Logo.svg";
const Side=()=>{
    const [open,setOpen]=useState(false);
    return(
    <>
        <div className={`${styles.hamburger} ${open && styles.open}`}>
            <Hamburger  direction="left" toggled={open} toggle={setOpen}/>
        </div>

        <div className={`${styles.side} ${open && styles.open}`}>

                <div className={styles.logo}>
                    <Image height={35} src={Logo} alt="Picture of the author" />
                    <div>بانک آثار سناب</div>
                </div>

            <div>
                <Menu vertical items={[
                    {href:"/",text:"صفحه اصلی"},
                    {href:"/",text:"انتشارات"},
                    {href:"/",text:"نشریات"},
                    {href:"/",text:"کتب"},
                    {href:"/",text:"مجلات"},
                ]}/>
            </div>
            <div className={styles.searchContainer}>
                <Search vertical/>
            </div>
        </div>
    </>)
}
export default Side;