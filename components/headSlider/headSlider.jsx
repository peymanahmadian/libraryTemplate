import Slider from "react-slick";
import Image from 'next/image';
import Link from "next/link";
import arrow from "../../public/assets/img/arrow.svg";
import styles from "./headSlider.module.scss";
const HeadSlider=(props)=>{
    const NextArrowBtn=(props)=>{
        const {className,style,onClick}=props;
        return(
            <div className={`${className} ${styles.next_button}`} onClick={onClick}>
                <Image src={arrow} alt="بعدی" />
            </div>
        )
    }
    const PrevArrowBtn=(props)=>{
        const {className,style,onClick}=props;
        return(
            <div className={`${className} ${styles.prev_button}`}  onClick={onClick} >
                <Image src={arrow} alt="قبلی" />
            </div>
        )
    }
    const setting={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrowBtn/>,
        prevArrow:<PrevArrowBtn/>
    }

    return(
    <Slider className={styles.slider} {...setting}>
        {props.items.map(item=>
        <article className={styles.item}>
            <Link href={item.link}>
                <a  style={{backgroundImage:`url(${item.image})`}}>
                    <div>{item.name}</div>
                    <div>{item.author}</div>
                    <div>{item.publisher}</div>
                </a>
            </Link>
        </article>)}
    </Slider>
    )
}
export default HeadSlider;
