import { useState } from "react"


const ListItem = ({ data }) => {

//    const [message, setMessage] = useState("Not added to the cart yet")

//     const handleClick = () => {
//         setMessage("Added to the cart!")
//         console.log("Clicked,", message)
//     }

    const [counter, setCounter] =useState(0)

    const increase= () => {
        setCounter(counter+1);
    }

    const decrease = () => {
        if (counter <= 0){
            return;
        }
        setCounter(counter-1);
    }

    return (
        <div className={"item-card"} >
            <img className={"img-fluid"}  src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span> ${data.discountedPrice} </span>
                    <small>
                        <strike> ${data.price} </strike>
                    </small>
                </div>
                <div className={"title"}> 
                    <h3>{data.title}</h3> 
                </div>
        </div>
            {/* <small className={"cart-message"}>{message}</small> */}
            {
            counter < 1 ?  //condition (using ternary operator)
            <button className={"cart-add"} onClick={increase}>
                <span>Add to cart</span>
            </button>
            :
            <div className="cart-addon">
            <button onClick={decrease}><span>-</span></button>
            <span>{counter}</span>
            <button onClick={increase}><span>+</span></button>
            </div>
            }
        </div>
    )
}
export default ListItem








