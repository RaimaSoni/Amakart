import CartItem from "./CartItem"
import { Fragment, useState } from "react"
import Modal from "../UI/Modal"
import OrderSuccessModal from "../UI/OrderSuccess"
import { useDispatch, useSelector } from "react-redux"
import { addItemHandler, clearCartHandler, removeItemHandler } from "../../actions"

const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const [orderModal, setOrderModal] = useState(false)
    const items = useSelector(state => state.items)
    const totalAmount = useSelector(state => state.totalAmount)
    const dispatch = useDispatch()

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    const handleOrderModal = () => {
        setShowModal(false);
        dispatch(clearCartHandler())
        // dispatch ({
        //     type : "CLEAR_CART"
        // })
        setOrderModal(previous => !previous)
    }

    const dispatchEvents = (type, item) => {
        if(type === 1){
            dispatch(addItemHandler(item))
            // dispatch ({
            //     type : "ADD_ITEM",
            //     payload : {
            //         item : item
            //     }
            // })        
        }
        else if (type === -1){
            dispatch(removeItemHandler(item.id))
            // dispatch ({
            //     type: "REMOVE_ITEM",
            //     payload : {
            //         id : item.id
            //     }
            // })
        }
    }


    return (
        <Fragment>
            <button onClick={handleModal}>
                <span data-items={items.length}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items.length > 0 ?
                                // <div className="checkout-modal_list-item">
                                //     <div className="img-wrap">
                                //         <img src={"/assets/placeholder.png"} className="img-fluid" alt="Placeholder"/>
                                //     </div>
                                //     <div className="information">
                                //         <div>
                                //             <h4>Title of the Product</h4>
                                //             <div className="pricing">
                                //                 <span>2000</span>
                                //                 <small>
                                //                     <strike>2500</strike>
                                //                 </small>
                                //             </div>
                                //         </div>
                                //         <div className="cart-addon cart-addon__modal">
                                //             <button>-</button>
                                //             <span className="counter">{0}</span>
                                //             <button>+</button>
                                //         </div>
                                //     </div>
                                // </div> :
                                items.map(item => {
                                    return (<CartItem 
                                    data={item} 
                                    onEmitIncreaseItem={item => dispatchEvents(1, item)} 
                                    onEmitDecreaseItem={item => dispatchEvents(-1, item)} 
                                    key ={item.id}/>)
                                    })
                                :
                                <div className="empty-cart">Please add something in your cart!</div>
                            }
                        </div>
                        { 
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>
                                        { totalAmount }
                                        {/* {
                                            items.reduce((previous, current) => {
                                                return previous + (current.discountedPrice * current.quantity)

                                            }, 0)
                                        } */}
                                        <span style={{marginLeft:"4px"}}>INR</span>
                                    </h4>
                                </div>
                                <button onClick={handleOrderModal}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {orderModal && <OrderSuccessModal onClose={handleOrderModal}/>}
        </Fragment>
    )
}

export default Cart