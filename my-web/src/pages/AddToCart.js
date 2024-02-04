import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRadio,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./AddToCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const AddToCart = () => {
    return (
        // <section className="h-100 h-custom">
        //     <MDBContainer className="py-5 h-100">
        //         <MDBRow className="justify-content-center align-items-center h-100">
        //             <MDBCol>
        //                 <MDBTable responsive>
        //                     <MDBTableHead>
        //                         <tr>
        //                             <th scope="col" className="h5">
        //                                 Shopping Bag
        //                             </th>
        //                             <th scope="col">Format</th>
        //                             <th scope="col">Quantity</th>
        //                             <th scope="col">Price</th>
        //                         </tr>
        //                     </MDBTableHead>
        //                     <MDBTableBody>
        //                         <tr>
        //                             <th scope="row">
        //                                 <div className="d-flex align-items-center">
        //                                     <img
        //                                         src="https://i.imgur.com/2DsA49b.webp"
        //                                         fluid
        //                                         className="rounded-3"
        //                                         style={{ width: "120px" }}
        //                                         alt="Book"
        //                                     />
        //                                     <div className="flex-column ms-4">
        //                                         <p className="mb-2">Thinking, Fast and Slow</p>
        //                                         <p className="mb-0">Daniel Kahneman</p>
        //                                     </div>
        //                                 </div>
        //                             </th>
        //                             <td className="align-middle">
        //                                 <p className="mb-0" style={{ fontWeight: "500" }}>
        //                                     Digital
        //                                 </p>
        //                             </td>
        //                             <td className="align-middle">
        //                                 <div class="d-flex flex-row align-items-center">
        //                                     <MDBBtn className="px-2" color="link">
        //                                         <MDBIcon fas icon="minus" />
        //                                     </MDBBtn>

        //                                     <MDBInput
        //                                         min={0}
        //                                         type="number"
        //                                         size="sm"
        //                                         style={{ width: "50px" }}
        //                                         defaultValue={2}
        //                                     />

        //                                     <MDBBtn className="px-2" color="link">
        //                                         <MDBIcon fas icon="plus" />
        //                                     </MDBBtn>
        //                                 </div>
        //                             </td>
        //                             <td className="align-middle">
        //                                 <p className="mb-0" style={{ fontWeight: "500" }}>
        //                                     $9.99
        //                                 </p>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <th scope="row">
        //                                 <div className="d-flex align-items-center">
        //                                     <img
        //                                         src="https://i.imgur.com/Oj1iQUX.webp"
        //                                         fluid
        //                                         className="rounded-3"
        //                                         style={{ width: "120px" }}
        //                                         alt="Book"
        //                                     />
        //                                     <div className="flex-column ms-4">
        //                                         <p className="mb-2">
        //                                             Homo Deus: A Brief History of Tomorrow
        //                                         </p>
        //                                         <p className="mb-0">Yuval Noah Harari</p>
        //                                     </div>
        //                                 </div>
        //                             </th>
        //                             <td className="align-middle">
        //                                 <p className="mb-0" style={{ fontWeight: "500" }}>
        //                                     Paperback
        //                                 </p>
        //                             </td>
        //                             <td className="align-middle">
        //                                 <div class="d-flex flex-row align-items-center">
        //                                     <MDBBtn className="px-2" color="link">
        //                                         <MDBIcon fas icon="minus" />
        //                                     </MDBBtn>

        //                                     <MDBInput
        //                                         min={0}
        //                                         type="number"
        //                                         size="sm"
        //                                         style={{ width: "50px" }}
        //                                         defaultValue={1}
        //                                     />

        //                                     <MDBBtn className="px-2" color="link">
        //                                         <MDBIcon fas icon="plus" />
        //                                     </MDBBtn>
        //                                 </div>
        //                             </td>
        //                             <td className="align-middle">
        //                                 <p className="mb-0" style={{ fontWeight: "500" }}>
        //                                     $13.50
        //                                 </p>
        //                             </td>
        //                         </tr>
        //                     </MDBTableBody>
        //                 </MDBTable>
        //             </MDBCol>
        //         </MDBRow>
        //     </MDBContainer>
        // </section>

        <div className="container">
            <div className="divshopcontainer">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb olshopcontainer">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart Items</li>
                    </ol>
                </nav>
            </div >

            <header>
                <div className="continue-shopping">
                    <AiOutlineArrowLeft className='arrow-icon' />
                    <h3>Continue Shopping</h3>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">7</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="product-img">
                                <img src="" alt="" />
                            </div>
                            <div className="title">
                                <h2>Product 1</h2>
                                <p>black Colour</p>
                            </div>
                            <div className="add-minus-quantity">
                                <FontAwesomeIcon icon={faMinus} className='minus' />
                                <input type="text" placeholder='2' />
                                <FontAwesomeIcon icon={faPlus} className='add' />
                            </div>
                            <div className="price">
                                <h3>2000Rs</h3>
                            </div>
                            <div className="remove-item">
                                <FontAwesomeIcon icon={faTrashAlt} className='remove' />
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AddToCart
