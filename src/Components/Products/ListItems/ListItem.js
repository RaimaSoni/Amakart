import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { addItemHandler, removeItemHandler } from "../../../actions";

const ListItem = ({ data}) => {
    // const [counter, setCounter] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const item = useSelector(state => state.items.find(item => item.id === data.id))
    const dispatch = useDispatch()
    const increaseCounterByOne = event => {
        event.stopPropagation()
        dispatch(addItemHandler(data))
        // dispatch ({
        //     type : "ADD_ITEM",
        //     payload : {
        //         item :data
        //     }
        // })
        //onAdd(data.id)
        // setCounter(counter+1)
    }

    const decreaseCounterByOne = event => {
        event.stopPropagation()
        dispatch(removeItemHandler(data.id))
        // dispatch ({
        //     type : "REMOVE_ITEM",
        //     payload : {
        //         id : data.id
        //     }
        // })
        //onRemove(data.id);
        // if(counter === 0) {
        //     return;
        // }
        // if(counter === 1) {
        //     onRemove(data.id);
        // }
        // setCounter(counter-1)
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>₹{data.discountedPrice}</span>
                        <small>
                            <strike>₹{data.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                {
                    !item || item?.quantity < 1 ?
                    <button className={"cart-add"} onClick={increaseCounterByOne}>
                        <span>Add to Cart</span>
                        
                    </button>
                    :
                    <div className="cart-addon">
                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                        <span>{item.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
                }
            </div>
            { showModal && 
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                !item || item?.quantity < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal> 
            }
        </Fragment>
    )
}

export default ListItem





// import { Fragment, useState } from "react"
// import Modal from "../UI/Modal"

// const ListItem = ({ data, onAdd, onRemove }) => {

// //    const [message, setMessage] = useState("Not added to the cart yet")

// //     const handleClick = () => {
// //         setMessage("Added to the cart!")
// //         console.log("Clicked,", message)
// //     }

//     const [counter, setCounter] =useState(0)
//     const [showModal, setShowModal] = useState(false)

//     const increase= (event) => {
//         event.stopPropagation()
//         onAdd(data.id)
//         setCounter(counter+1);
//     }

//     const decrease = (event) => {
//         event.stopPropagation()
//         if (counter === 0){
//             return;
//         }
//         if (counter === 1 ){
//             onRemove(data.id);
//         }
//         setCounter(counter-1);
//     }

//     const handleModal = () => {
//         setShowModal(previousState => !previousState)
//     }
 
//     return (
//         <Fragment>
//         <div onClick={handleModal} className={"item-card"} >
//             <img className={"img-fluid"}  src={`/assets/${data.thumbnail}`} alt={data.title}/>
//             <div className={"item-card__information"}>
//                 <div className={"pricing"}>
//                     <span> ${data.discountedPrice} </span>
//                     <small>
//                         <strike> ${data.price} </strike>
//                     </small>
//                 </div>
//                 <div className={"title"}> 
//                     <h3>{data.title}</h3> 
//                 </div>
//         </div>
//             {/* <small className={"cart-message"}>{message}</small> */}
//             {
//             counter < 1 ?  //condition (using ternary operator)
//             <button className={"cart-add"} onClick={increase}>
//                 <span>Add to cart</span>
//             </button>
//             :
//             <div className="cart-addon">
//             <button onClick={decrease}><span>-</span></button>
//             <span>{counter}</span>
//             <button onClick={increase}><span>+</span></button>
//             </div>
//             }
//         </div>
//         {showModal &&
//          <Modal onClose={handleModal}>
//             <div className="item-card__modal">
//                 <div className="img-wrap">
//                 <img className={"img-fluid"}  src={`/assets/${data.thumbnail}`} alt={data.title}/>
//                 </div>
//             <div className="meta">
//                 <h3>{data.title}</h3>
//                 <div className={"pricing"}>
//                     <span> ${data.discountedPrice} </span>
//                     <small>
//                         <strike> ${data.price} </strike>
//                     </small>
//                 </div>
//                 <p>{data.description}</p>
//                 {
//             counter < 1 ?  //condition (using ternary operator)
//             <button className={"cart-add card-add__modal"} onClick={increase}>
//                 <span>Add to cart</span>
//             </button>
//             :
//             <div className="cart-addon card-addon__modal">
//             <button onClick={decrease}><span>-</span></button>
//             <span>{counter}</span>
//             <button onClick={increase}><span>+</span></button>
//             </div>
//             }
//             </div>
//             </div> 
//             </Modal>
//         }
//         </Fragment>
//     )
// }
// export default ListItem








