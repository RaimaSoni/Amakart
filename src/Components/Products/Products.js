import ListItem from "./ListItems/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
import { useNavigate, useParams } from "react-router";
 
//MORE OPTIMIZED APPROACH USING async and await
const Products = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const params = useParams()
    const navigate = useNavigate() 

    useEffect(() => {
        async function fecthItems () {
            try{
                let slug = `items.json`
                if (params.category){
                    slug = `items-${params.category}.json`
                }
                const response = await axios.get(`https://amakart-46737-default-rtdb.firebaseio.com/${slug}`)
                const data= response.data

                if (!data) {
                    handleNotFound();
                    return;
                }

                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id : index
                    }
                })
                setItems(transformedData)
            }
            catch (error){
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally{
                setLoader(false)
            }
        }
        fecthItems();

        return () => {
            setItems([])
            setLoader(true)
        }

    }, [params])


    const handleNotFound = () => {
        //use this instead of navigate.push
        navigate("/404")
    }


    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list-wrapper"}>
                {
                    items.map(item => {      //to make it more reactive.
                        console.log(item)
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
            </div>
        </div>
        {loader && <Loader/>}
        </>
    )
}

export default Products



