import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewItem() {
    const { id } = useParams();
    const [item,setItem] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/products/${id}`)
        .then(response => {
            console.log(response.data);
            setItem(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    },[id]);

    return (
        <>
            <div>
                <h4>{item.id}. {item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        </>
    )
}

export default ViewItem

