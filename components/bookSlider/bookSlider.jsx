import Image from "next/image";
import Slider from "react-slick";
import styles from "./bookSlider.module.scss";
import arrow from "../../public/assets/img/arrow_black.svg";
import {Book} from "./../../components";

import icon from "./category.svg";
const BookSlider=(props)=>{
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
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow:<NextArrowBtn/>,
        prevArrow:<PrevArrowBtn/>
    }
    return(
        <div className={styles.sliderContainer}>
            <div className={styles.title}>
                <Image src={icon} height={32} width={32} alt={props.title}/> 
                <div>{props.title}</div>
            </div>
            <Slider className={styles.slider} {...setting}>
                {props.items.map(item=><Book key={item.link} name={item.name} image={item.image} link={item.link}/>)}
            </Slider>
        </div>

    )
}
export default BookSlider;