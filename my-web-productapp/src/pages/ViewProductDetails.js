import React, { useEffect, useState } from 'react';
import './ViewProductDetails.css';
import axios from "axios";
import { useParams } from "react-router-dom";


const ViewProductDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setUser({ ...resp.data[0] }));
    }, [id]);

    return (
        <div className="container">
            <h3 style={{ marginTop: "6%" }}>View Product Details</h3>
            <div className="row divaddproduct" style={{ marginTop: '2%' }}>
                <div className="row">
                    <div className="col-md-6 form-group" style={{display:'grid'}}>
                        <label className="form-label" htmlFor="customFile">Product Image</label>
                    </div>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}} >
                    <label htmlFor="productId">Product Id :</label>
                    <span>{user.productId}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productname">Product Name :</label>
                    <span>{user.productName}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productbrand">Product Brand Name :</label>
                    <span>{user.productBrandName}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productcategory">Product Category :</label>
                    <span>{user.productCategory}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productquantity">Product Available Quantity :</label>
                    <span>{user.productAvailableQty}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productweight">Product Weight :</label>
                    <span>{user.productWeight}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productPrice">Product Actual Price :</label>
                    <span>{user.productPrice}</span>
                </div>
                <div className="col-md-6 form-group" style={{display:'grid'}}>
                    <label htmlFor="productpercentdiscount">Product Percentage Discount :</label>
                    <span>{user.productPercentageDiscount}</span>
                </div>
                {/* <div className="col-md-4 form-group" style={{display:'grid'}}>
                    <label htmlFor="productPrice">Discount Product Price</label>
                    <input type="number" className="form-control" id="tbdisproductprice" name="disproductprice" value={disproductprice} onChange={handleInputChange} disabled/>
                </div> */}
                <div className="col-md-12 form-group" style={{display:'grid'}}>
                    <label htmlFor="productdiscription">Product Discription :</label>
                    <span>{user.productDiscription}</span>
                </div>
            </div>
        </div>
    )
}

export default ViewProductDetails