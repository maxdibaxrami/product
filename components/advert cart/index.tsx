
import { FC } from "react"
import Image from 'next/image'

interface AdvertCart {
    text : string
    image : string
    discount : string
    bigimage :boolean
    ltr : boolean
    theme : string
}

const AdvertCartItem:FC<AdvertCart> = (props) => {
    return <div className={`advert-cart--item ${props.theme === "dark"? "advert-cart--dark" : "advert-cart--light"} ${!props.ltr && "advert-cart-rtl"}`}>
            <div className={props.bigimage? "image-wrapper--big" : "image-wrapper"}>
                <Image
                    src={props.image}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </div>
            <div className="text-side">
                <div className="discount-wrapper">
                    <div className="discount-shaip"></div>
                    <p className="discount">{props.discount}</p>
                </div>
                <p className="text">{props.text}</p>
                <a href="#">Выбрать</a>
            </div>
    </div>
}

export default AdvertCartItem