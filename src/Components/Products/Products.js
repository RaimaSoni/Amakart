import ListItem from "./ListItems/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
 
//MORE OPTIMIZED APPROACH USING async and await
const Products = ({onAddItem, onRemoveItem, eventState}) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    //const [presentItems, setPresentItems] = useState([])
 
    useEffect(() => {
        async function fecthItems () {
            try{
            const response = await axios.get(`https://amakart-46737-default-rtdb.firebaseio.com/items.json`)
            const data= response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id : index
                    }
                })
                //setLoader(false)
                setItems(transformedData)
            }
            catch (error){
                //setLoader(false)
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally{
                setLoader(false)
            }
        }
        fecthItems();
    }, [])

    useEffect(() =>{
        if (eventState.id > -1) {
            if (eventState.type === 1){
                handleAddItem(eventState.id)
            }
            else if (eventState.type === -1){
                handleRemoveItem(eventState.id)
            }
        }
    }, 
    [eventState])

    const handleAddItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1

        setItems([...data])
        onAddItem(data[index]);
        // if (presentItems.indexOf(id) > -1){
        //     return;
        // }
        // setPresentItems([...presentItems, id])
        // onAddItem();
    }
 
    const handleRemoveItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0){
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index])
        }
        // let index = presentItems.indexOf(id)
        // if (index > -1){
        //     let items = [...presentItems]
        //     items.splice(index, 1)
        //     setPresentItems([...items]);
        //     onRemoveItem();
        // }
    }

// const Products = () => {
//     const [items, setItems] = useState([])
//         // {
//         //     id : 0,
//         //     title: "title of the item",
//         //     price: 300,
//         //     discountedPrice: 200,
//         //     thumbnail: "placeholder.png"
//         // },
//         // {
//         //     id : 1,
//         //     title: "title of the item",
//         //     price: 100,
//         //     discountedPrice: 50,
//         //     thumbnail: "placeholder.png"
//         // },
//         // {
//         //     id : 2,
//         //     title: "title of the item",
//         //     price: 500,
//         //     discountedPrice: 460,
//         //     thumbnail: "placeholder.png"
//         // },
//         // {
//         //     id : 3,
//         //     title: "title of the item",
//         //     price: 50,
//         //     discountedPrice: 16,
//         //     thumbnail: "placeholder.png"
//         // }

//         useEffect(() => {
//             //fetch API method
//     // fetch(`https://amakart-46737-default-rtdb.firebaseio.com/items.json`)
//     // .then(response => response.json())
//     // .then(data => {
//     //     console.log(data)
//     // })
//     //AXIOS method
//     axios.get(`https://amakart-46737-default-rtdb.firebaseio.com/items.json`)
//     .then(response => {
//         const data = response.data
//         const transformedData = data.map((item, index) => {
//             return {
//                 ...item,
//                 id : index
//             }
//         })
//         setItems(transformedData)
//         console.log(transformedData)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }, [])

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list-wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>  //this is hardcoded
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem> */}
                {
                    items.map(item => {      //to make it more reactive.
                        console.log(item)
                        return (<ListItem onAdd={handleAddItem} 
                            onRemove={handleRemoveItem} keys={item.id} 
                            data={item}/>)  //it will return a new array like this : {[<ListItem data ={item[0]}/>,<ListItem data ={item[1]}/>,<ListItem data ={item[2]}/>]}
                    })
                }
            </div>
        </div>
        {loader && <Loader/>}
        </>
    )
}

export default Products



