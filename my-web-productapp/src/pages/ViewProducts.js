import React, { useEffect, useState } from 'react'
import './ViewProducts.css';
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const ViewProducts = () => {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // var deleteid;
    // function openConfirmModel(par) {
    //     deleteid = par;
    //     if (!isMenuClicked) {
    //         setMenuClass("visible")
    //     }
    // }

    // const [show, setShow] = useState(false);  
    // const modalClose = () => setShow(false);  
    function modalShow(deleteid){
        if(window.confirm("Are you sure you want to Delete ?")){
            axios.get(`http://localhost:5000/api/delete/${deleteid}`).then(() => {
                loadData();
                toast.success("Product Deleted Successfully");
                // setShow(false);
            }).catch((err) => toast.error(err.response.data));
        }
        
    }

    // function deleteProduct() {
    //     axios.get(`http://localhost:5000/api/delete/${deleteid}`).then(() => {
    //         loadData();
    //         toast.success("Product Deleted Successfully");
    //         setShow(false);
    //     }).catch((err) => toast.error(err.response.data));
    // }
    return (
        <div className="container">
            <h3 style={{ marginTop: "6%" }}>View All Product</h3>
            {/* <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p style={{textAlign:'center'}}>Are you sure you want to Delete ?</p>
                    <label className='hidden' value={deleteid}></label>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose}>Close</Button>
                    <Button variant="danger" onClick={deleteProduct}>Delete</Button>
                </Modal.Footer>
            </Modal> */}
            <div id="table-scroll" style={{ marginTop: "3%" }}>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Product Id</th>
                            <th style={{ textAlign: "center" }}>Product Name</th>
                            <th style={{ textAlign: "center" }}>Product Category</th>
                            <th style={{ textAlign: "center" }}>Product Qty</th>
                            <th style={{ textAlign: "center" }}>Product Price</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.Id}>
                                    {/* <th scope="row" >{index + 1}</th> */}
                                    <td>{item.productId}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productCategory}</td>
                                    <td>{item.productAvailableQty}</td>
                                    <td>{item.productPrice}</td>
                                    <td style={{ display: 'inline-flex' }}>
                                        <Link to={`/EditProducts/${item.Id}`}>
                                            <button type="submit" className="btn btn-primary" >Edit</button>
                                        </Link>
                                        <button type="submit" className="btn btn-danger" style={{ margin: '12px' }} onClick={() => modalShow(item.Id)}>Delete</button>
                                        <Link to={`/ViewProductDetails/${item.Id}`}>
                                            <button type="submit" className="btn btn-secondary" >View</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewProducts