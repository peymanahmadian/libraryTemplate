import Image from "next/image";
import {Menu,Search} from "../../components";
import logo from "./../../public/assets/img/footer.png";
import styles from "./footer.module.scss";
const Footer=()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.subscribe}>
                    <Menu items={[
                        {href:"/",text:"پرسش و پاسخ"},
                        {href:"/",text:"راهنمای سایت"},
                        {href:"/",text:"درباره ما"},
                        {href:"/",text:"تماس با ما"},
                    ]}/>
                </div>
                <div className={styles.subscribe}>
                    <Search label={"عضویت در خبرنامه"} placeholder={"رایانامه خود را وارد کنید"}/>
                </div>
                <div className={styles.copyright}>
                    <div>پیاده سازی شده توسط شرکت رایان بهمن پرداز</div>
                    <a href={"https://www.rbp.ir"} target={"_blank"}><Image height={4} alt={"رایان بهمن پرداز"} src={logo}/></a>
                </div>
            </div>

        </footer>)
}
export default Footer;