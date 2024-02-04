import React, { useEffect, useState } from 'react'
import "./ProductPreview.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPreview = () => {
  const [product, setProduct] = useState({});
 //const [imageName, setimageName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    try{
      const response = axios.get(`http://localhost:5000/api/get/${id}`);
     // .then((resp) => setProduct({ ...resp.data[0] }));
      const data = {...response.data};
      setProduct(data);
    }
    catch(error){
      console.log(error)
    }
    // axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setProduct({ ...resp.data[0] }));
    //change_image();
  }, [id]);

  // function change_image(image) {
    const change_image  = (image) => {
      var container = document.getElementById("main-image");
      container.src = product.productImageSource;
    }

  return (
    <>
      <div className="divshopcontainer">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb olshopcontainer">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
            <li className="breadcrumb-item active" aria-current="page">{product.productName}</li>
          </ol>
        </nav>
      </div >
      <div className="row">
        <div className="col-md-6">
          <div className="images p-3">
            <div className="text-center p-4">
              <img src={`http://localhost:5000/images/`+ product.productImageSource} width="250" id='main-image' />
            </div>
            <div className="thumbnail text-center">
              <img src="https://i.imgur.com/Rx7uKd0.jpg" width="70" onClick={change_image} />
              <img src="https://i.imgur.com/Dhebu4F.jpg" width="70" onClick={change_image} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product p-4">
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i> */}
            </div>
            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.productBrandName}</span>
              <h5 className="text-uppercase">{product.productName}</h5>
              <div className="price d-flex flex-row align-items-center"> <span className="act-price fs-2">${product.productPrice}</span>
                <div className="ml-2"> <span className="dis-price fs-2">${product.productPrice}</span> <span className='fs-2'>{product.productPercentageDiscount} OFF</span> </div>
              </div>
            </div>
            <p className="about">{product.productDiscription}</p>
            <div className="sizes mt-5">
              <h6 className="text-uppercase">Specification</h6>
              {/* <h6 className="text-uppercase">Size</h6>  */}
              {/* <label className="radio"> 
              <input type="radio" name="size" value="S" checked /> 
              <span>S</span> 
              </label> 
              <label className="radio"> 
              <input type="radio" name="size" value="M" /> 
              <span>M</span> 
              </label> 
              <label className="radio"> 
              <input type="radio" name="size" value="L" /> 
              <span>L</span> 
              </label> 
              <label className="radio"> 
              <input type="radio" name="size" value="XL" /> 
              <span>XL</span> 
              </label> 
              <label className="radio"> 
              <input type="radio" name="size" value="XXL" /> 
              <span>XXL</span> 
              </label> */}
            </div>
            <div className="mt-4 align-items-center">
            <Link to={`/AddToCart/${id}`}> <button className="btn btn-danger text-uppercase mr-2 px-4 p-3" style={{ fontWeight: "600" }}>Add to cart</button></Link>
              <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i>

              <button className="btn btn-danger text-uppercase mr-2 px-4 p-3" style={{ fontWeight: "600" }}>Add to wishlist</button>
              <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPreview