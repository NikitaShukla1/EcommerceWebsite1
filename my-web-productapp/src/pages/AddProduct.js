import React, { useEffect, useState } from 'react';
import './AddProduct.css'
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const initialState = {
    productId: "",
    productName: "",
    productBrandName: "",
    productCatgeory: "",
    productQty: "",
    productWght: "",
    productprice: "",
    productdiscount: "",
    // disproductprice:"",
    productdiscrip: ""
};


const AddProduct = () => {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [data, setData] = useState("");
    const [state, setState] = useState(initialState);
    const [productImageId, setProductId] = useState();
    const {
        productId,
        productName,
        productBrandName,
        productCatgeory,
        productQty,
        productWght,
        productprice,
        productdiscount,
        // disproductprice,
        productdiscrip } = state;

    const handleimageInputChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setData(URL.createObjectURL(e.target.files[0]));
        //e.preventDefault();
        // axios.get('http://localhost:5000/')
        // .then(res => {
        //     setData(res.data[0])
        //     //console.log(res.data[0])
        // })
        // .catch(err => console.log(err));
    };

    // useEffect(() => {
    //     handleimageInputChange();
    // }, [productImageId]);
// function uploadImage(){
   
// }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        // let productImageId = "";
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('fileName', fileName);
        if (data !== "") {
          axios.post("http://localhost:5000/upload",formdata )
                .then((res) => {setProductId( res.data ); console.log(res);})
                .catch((err) => ("Error occured", err));
                // productImageId = res.data;
        }
        // var discountprice = parseInt(productPrice) * parseInt(document.getElementById("tbproductpercentdiscount").value) / 100;
        // var _discountprice = parseInt(productPrice) - discountprice;
        if (!productId && !productName && !productBrandName && !productCatgeory && !productQty && !productWght && !productprice && !productdiscount && !productdiscrip) {
            toast.error("Please provide required details");
        }
        else if (data === "") {
            toast.error("Please provide Product image");
        }
        else {
            axios.post("http://localhost:5000/api/post", {
                productId,
                productName,
                productBrandName,
                productCatgeory,
                productQty,
                productWght,
                productprice,
                productdiscount,
                // disproductprice,
                productdiscrip,
                productImageId
            }).then(() => {
                setState({ productId: "", productName: "", productBrandName: "", productCatgeory: "", productQty: "", productWght: "", productprice: "", productdiscount: "", productdiscrip: "" });
                document.getElementById("customFile").value = "";
                const img = document.getElementById('img');
                img.setAttribute('src', "");
                toast.success("Product Added Successfully");
            }).catch((err) => toast.error(err));
        }

    }

    const handleInputChange = (e) => {
        // var discountprice = parseInt(productprice) * parseInt(document.getElementById("tbproductpercentdiscount").value) / 100;
        // var _discountprice = parseInt(productprice) - discountprice;
        // document.getElementById("tbdisproductprice").value = _discountprice;
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    };

    const mystyle = {
        marginTop: '2%',
        display: 'flex'
    }

    return (
        <div className="container">
            <h3 style={{ marginTop: '5%' }}>Add New Product</h3>
            <div className="row">
                <div className="col-md-6 form-group">
                    <label className="form-label" htmlFor="customFile">Product Image</label>
                    <input type="file" className="form-control" id="customFile" onChange={handleimageInputChange} />
                    {/* <img src={`http://localhost:5000/images/`+ data.productImageSource} alt="" /> */}
                    <img src={data} alt="" className='main-img' id="img" />
                </div>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="row divaddproduct" style={{ marginTop: '3%' }}>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productId">Product Id</label>
                        <input type="text" className="form-control" id="tbproductid" placeholder="Enter Product Id" name="productId" value={productId} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productname">Product Name</label>
                        <input type="text" className="form-control" id="tbproductname" placeholder="Enter Product Brand" name="productName" value={productName} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productbrand">Product Brand Name</label>
                        <input type="text" className="form-control" id="tbproductbrand" placeholder="Enter Product Brandname" name="productBrandName" value={productBrandName} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productcategory">Product Category</label>
                        <select type="text" className="form-control" id="ddlproductcategory" name="productCatgeory" value={productCatgeory} onChange={handleInputChange}>
                            <option value="0">Select Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                            <option value="4">Category 4</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productquantity">Product Available Quantity</label>
                        <input type="number" className="form-control" id="tbproductquantity" placeholder="Enter Product Quantity" name="productQty" value={productQty} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="productweight">Product Weight</label>
                        <input type="text" className="form-control" id="tbproductweight" placeholder="Enter Product weight" name="productWght" value={productWght} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="productprice">Product Actual Price</label>
                        <input type="number" className="form-control" id="tbproductprice" placeholder="Enter Product price" name="productprice" value={productprice} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="productpercentdiscount">Product Percentage Discount</label>
                        <input type="number" className="form-control" id="tbproductpercentdiscount" placeholder="Enter Product discount" name="productdiscount" value={productdiscount} onChange={handleInputChange} />
                    </div>
                    {/* <div className="col-md-4 form-group">
                        <label htmlFor="productprice">Discount Product Price</label>
                        <input type="number" className="form-control" id="tbdisproductprice" name="disproductprice" value={disproductprice} onChange={handleInputChange} disabled/>
                    </div> */}
                    <div className="col-md-12 form-group">
                        <label htmlFor="productdiscription">Product Discription</label>
                        <textarea type="text" className="form-control" id="tbproductdiscription" placeholder="Enter Discription" name="productdiscrip" value={productdiscrip} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12 form-group" style={mystyle}>
                        <button type="submit" className="btn btn-primary" style={{ margin: '12px' }}>Add Product</button>
                        <Link to="/ViewProducts">
                            <input type="button" className="btn btn-success" value="View Products" />
                        </Link>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default AddProduct