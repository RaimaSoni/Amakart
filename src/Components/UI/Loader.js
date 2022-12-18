import ReactDom from 'react-dom'

export const Backdrop = props => {
    const handleClick = () => {
        if(props.onClose) {
            props.onClose();
        }
    }

    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}

const Loader = () => {
    return (
        ReactDom.createPortal(
            <>
            <Backdrop/>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}

export default Loader



// import  ReactDOM  from "react-dom"; //to use portals because it is the
// //method which is provided by the ReactDOM.

// export const Backdrop = props => {
//     const handleClick= () =>{
//         if (props.onClose){
//             props.onClose();
//         }
//     }
//     return (
//         <div onClick={handleClick} className="loader-overlay"></div>
//     )
// }


// const Loader = () => {
//     //BETTER APPROACH by using react portals.
//     return (
//         ReactDOM.createPortal(
//             <>
//             <Backdrop/>
//             <div className="loading-dots">
//                 <div>Loading...</div>
//                 <div className="loading-dots--dot"></div>
//                 <div className="loading-dots--dot"></div>
//                 <div className="loading-dots--dot"></div>
//             </div>
//             </>,
//             document.getElementById("loader-root")
//         )
//     )
//     // return (
//     //     <>
//     //     <div className="loader-overlay"></div>
//     //     <div className="loading-dots">
//     //         <div>Loading...</div>
//     //         <div className="loading-dots--dot"></div>
//     //         <div className="loading-dots--dot"></div>
//     //         <div className="loading-dots--dot"></div>
//     //     </div>
//     //     </>
//     // )
// }

// export default Loader;