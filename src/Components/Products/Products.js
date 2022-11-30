import ListItem  from "../ListItems/ListItem";
import { useState } from "react";


const Products = () => {
    const [items, setItems] = useState([
        {
            id : 0,
            title: "title of the item",
            price: 300,
            discountedPrice: 200,
            thumbnail: "placeholder.png"
        },
        {
            id : 1,
            title: "title of the item",
            price: 100,
            discountedPrice: 50,
            thumbnail: "placeholder.png"
        },
        {
            id : 2,
            title: "title of the item",
            price: 500,
            discountedPrice: 460,
            thumbnail: "placeholder.png"
        },
        {
            id : 3,
            title: "title of the item",
            price: 50,
            discountedPrice: 16,
            thumbnail: "placeholder.png"
        }
    ])

    return (
        <div className={"product-list"}>
            <div className={"product-list-wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>  //this is hardcoded
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem> */}
                {
                    items.map(item => {      //to make it more reactive.
                        console.log(item)
                        return (<ListItem  keys={item.id} data={item}/>)  //it will return a new array like this : {[<ListItem data ={item[0]}/>,<ListItem data ={item[1]}/>,<ListItem data ={item[2]}/>]}
                    })
                }
            </div>
        </div>
    )
}

export default Products
