import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ViewItem from "./ViewItem";
import DeleteItem from "./DeleteItem";
import AddItem from "./AddItem";

function ListItems() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/products")
            .then(response => {
                console.log(response.data);
                setLists(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleDelete = (itemId) => {
        setLists(lists.filter(item => item.id !== itemId));
    }

    return (
        <>

            <Link to={`/products/add`} className="btn btn-primary">Add Item</Link>

            <div className="row border border-light p-2">
                <div className="col-2">
                    <h5>Id</h5>
                </div>
                <div className="col-2">
                    <h5>Name</h5>
                </div>
                <div className="col-2">
                    <h5>Price</h5>
                </div>
                <div className="col-2">
                    <h5>Quantity</h5>
                </div>
                <div className="col-4">
                    <h5>Action</h5>
                </div>
            </div>


            {lists.map(list => (

                <div className="row border border-light p-2" key={list.id}>
                    <div className="col-2">
                        {list.id}
                    </div>
                    <div className="col-2">
                        {list.name}
                    </div>
                    <div className="col-2">
                        {list.price}
                    </div>
                    <div className="col-2">
                        {list.quantity}
                    </div>
                    <div className="col-4 d-flex gap-1">
                        <Link to={`/products/${list.id}`} className="btn btn-primary">View</Link>
                        <Link to={`/products/${list.id}/edit`} className="btn btn-primary" >Edit</Link>
                        <DeleteItem itemId={list.id} onDelete={handleDelete} />
                    </div>
                </div>

            ))}

        </>
    );
}


export default ListItems;
