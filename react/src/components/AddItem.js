import axios from "axios";
import React, { useState } from "react";

function AddItem() {

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    const [submitPopUp, setSubmitPopUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        axios.post(`http://localhost:8081/products`, formData)
            .then(response => {
                console.log('Item Added successfully', response.data);
                setSubmitPopUp(true);
                setTimeout(() => {
                    setSubmitPopUp(false);
                }, 2000);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };


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
                            <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="price" name="price" onChange={handleChange} pattern="[0-9]*" title="Please enter numbers only" required />
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="quantity" name="quantity" onChange={handleChange} pattern="[0-9]*" title="Please enter numbers only" required />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddItem;