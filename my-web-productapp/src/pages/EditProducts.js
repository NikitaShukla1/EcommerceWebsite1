import React, { useEffect, useState } from 'react';
import './EditProducts.css';
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const initialState = {
    productId: "",
    productName: "",
    productBrandName: "",
    productCatgeory: "",
    productQty: "",
    productWeight: "",
    productPrice: "",
    productPercentageDiscount: "",
    // disproductprice:"",
    productDiscription: ""
};

const EditProducts = () => {
    const [state, setState] = useState(initialState);
    const { productId,
        productName,
        productBrandName,
        productCatgeory,
        productAvailableQty,
        productWeight,
        productPrice,
        productPercentageDiscount,
        // disproductprice,
        productDiscription } = state;

        const { id } = useParams();

        useEffect(() => {
           axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setState({...resp.data[0]}));
        }, [id]);
        

    const handleSubmit = (e) => {
        e.preventDefault();
        // var discountprice = parseInt(productPrice) * parseInt(document.getElementById("tbproductpercentdiscount").value) / 100;
        // var _discountprice = parseInt(productPrice) - discountprice;
        if (!productId && !productName && !productBrandName && !productCatgeory && !productAvailableQty && !productWeight && !productPrice && !productPercentageDiscount && !productDiscription) {
            toast.error("Please provide required details");
        }
        else {
            axios.put(`http://localhost:5000/api/put/${id}`, {
                productId,
                productName,
                productBrandName,
                productCatgeory,
                productAvailableQty,
                productWeight,
                productPrice,
                productPercentageDiscount,
                // _discountprice,
                productDiscription,
            }).then(() => {
                setState({ productId: "", productName: "", productBrandName: "", productCatgeory: "", productAvailableQty: "", productWeight: "", productPrice: "", productPercentageDiscount: "", productDiscription: "" });
                toast.success("Product Updated Successfully");
            }).catch((err) => toast.error(err.response.data));
            
        }
    }

    const handleInputChange = (e) => {
        // var discountprice = parseInt(productPrice) * parseInt(document.getElementById("tbproductpercentdiscount").value) / 100;
        // var _discountprice = parseInt(productPrice) - discountprice;
        // document.getElementById("tbdisproductprice").value = _discountprice;
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="container">
            <h3 style={{marginTop:'5%'}}>Update Product</h3>
            <form onSubmit={handleSubmit}>

                <div className="row divaddproduct" style={{marginTop:'2%'}}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label className="form-label" htmlFor="customFile">Product Image</label>
                            <input type="file" className="form-control" id="customFile" />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productId">Product Id</label>
                        <input type="text" className="form-control" id="tbproductid" placeholder="Enter Product Id" name="productId" value={productId || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productname">Product Name</label>
                        <input type="text" className="form-control" id="tbproductname" placeholder="Enter Product Brand" name="productName" value={productName || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productbrand">Product Brand Name</label>
                        <input type="text" className="form-control" id="tbproductbrand" placeholder="Enter Product Brandname" name="productBrandName" value={productBrandName || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productcategory">Product Category</label>
                        <select type="text" className="form-control" id="ddlproductcategory" name="productCatgeory" value={productCatgeory || ""} onChange={handleInputChange}>
                            <option value="0">Select Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                            <option value="4">Category 4</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productquantity">Product Available Quantity</label>
                        <input type="number" className="form-control" id="tbproductquantity" placeholder="Enter Product Quantity" name="productQty" value={productAvailableQty || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productweight">Product Weight</label>
                        <input type="text" className="form-control" id="tbproductweight" placeholder="Enter Product weight" name="productWeight" value={productWeight || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="productPrice">Product Actual Price</label>
                        <input type="number" className="form-control" id="tbproductprice" placeholder="Enter Product price" name="productPrice" value={productPrice || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="productpercentdiscount">Product Percentage Discount</label>
                        <input type="number" className="form-control" id="tbproductpercentdiscount" placeholder="Enter Product discount" name="productPercentageDiscount" value={productPercentageDiscount || ""} onChange={handleInputChange} />
                    </div>
                    {/* <div className="col-md-4 form-group">
                    <label htmlFor="productPrice">Discount Product Price</label>
                    <input type="number" className="form-control" id="tbdisproductprice" name="disproductprice" value={disproductprice} onChange={handleInputChange} disabled/>
                </div> */}
                    <div className="col-md-12 form-group">
                        <label htmlFor="productdiscription">Product Discription</label>
                        <textarea type="text" className="form-control" id="tbproductdiscription" placeholder="Enter Discription" name="productDiscription" value={productDiscription || ""} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12 form-group" style={{ marginTop: '2%',display: 'flex'}}>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default EditProducts