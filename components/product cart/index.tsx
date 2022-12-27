import { FC, useState } from "react"
import Image from 'next/image'
import StarSVG from "../SVG/StarSVG"
import FavoriteSVG from "../SVG/Favorite";
import PlusSVG from "../SVG/PlusSVG";
import MinesSVG from "../SVG/minesSVG";
const rublPrice = 70;

interface product {
    id:number
    category:string
    description:string
    image:string
    price:number
    title:string
    rating:any
  }

const ProductCart:FC<product> = (prop) => {
    const rating = prop.rating
    const rate = Math.round(rating.rate);

    const [favorite, setFavorite] = useState<boolean>(false)
    const [basket,setBasket] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(5)

    const changeStatus = () => setFavorite(!favorite)
    const ChangeBasket = () => setBasket(!basket)
    const plus = () => setCounter(counter + 1)
    const minus = () => setCounter(counter - 1)


    return <div className="cart product-cart">
        <div className="image">
            <Image
                src={prop.image}
                alt="Picture of the author"
                width={100}
                height={100}
            />
                {Math.round(prop.price*rublPrice)>300 && <div className="hot-wrapper">
                    <div className="hot-shaip"></div>
                    <p className="hot">Хит</p>
                </div>}
                
        </div>
        <div className="text">
            <div className="category-rating--wrapper">
                <div className="category">
                    {prop.category}
                </div>
                <div className="rating">
                    <StarSVG status={rate>=1}/>
                    <StarSVG status={rate>=2}/>
                    <StarSVG status={rate>=3}/>
                    <StarSVG status={rate>=4}/>
                    <StarSVG status={rate>=5}/>
                    <span>{`${prop.rating.count} отзыва`}</span>
                </div>
            </div>
            <div className="title">
                {prop.title}
            </div>
            <div className="price">
                <span>{`${Math.round(prop.price*rublPrice)} ₽`}</span> <small>/шт.</small>
            </div>
        </div>
        <div className="oprions">
            <div className="order">
                <div className="order-option--container">
                    <a className={`order-btn ${basket && "active"}`} onClick={ChangeBasket}>{basket? "В корзине" : "В корзину"} </a>
                    {!basket && <div className={`conter-warraper`}>
                        <a onClick={plus}>
                            <PlusSVG/>
                        </a>
                        <span>{counter}</span>
                        <a onClick={minus} className="minus-btn">
                            <MinesSVG/>
                        </a>
                    </div>}
                
                </div>
            </div>
            <div className="favorite-wrapper">
                <span onClick={changeStatus}>
                    <FavoriteSVG status={favorite} />
                </span>    
            </div>
        </div>

    </div>
}

export default ProductCart