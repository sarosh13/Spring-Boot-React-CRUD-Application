import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditItem() {
    const { id } = useParams();
    const [item, setItem] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    const [submitPopUp, setSubmitPopUp] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8081/products/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8081/products/${id}`, item)
            .then(response => {
                console.log('Item updated successfully', response.data);
                setSubmitPopUp(true);
                setTimeout(() => {
                    setSubmitPopUp(false);
                }, 2000);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            {submitPopUp && (
                <div className="alert alert-success">
                    Item Updated Successfully!
                </div>
            )}

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="name" name="name" value={item.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="price" name="price" value={item.price} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="quantity" name="quantity" value={item.quantity} onChange={handleChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>


                </form>
            </div>
        </>
    );
}

export default EditItem