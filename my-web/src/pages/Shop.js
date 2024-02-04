import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Shop.css";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import ProductPreview from "./ProductPreview";

const Shop = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/getAllproduct");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
  } else {
      toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
if (from > to) {
  fromSlider.value = to;
  fromInput.value = to;
} else {
  fromInput.value = from;
}
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}
  
function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

  return (
    <>
      <div className="divshopcontainer">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb olshopcontainer">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
      </div >
      <div className="divshopcontainer-1">
        <div className="row divrow">
          <div className="col-md-3 left-section-filter">
            <div id="divallcategory">
              <h3>Price</h3>
              <div class="range_container">
                <div class="sliders_control">
                  <input id="fromSlider" type="range" value="10" min="0" max="100" />
                  <input id="toSlider" type="range" value="30" min="0" max="100" />
                </div>
                <div class="form_control">
                  <div class="form_control_container">
                    <div class="form_control_container__time">Min</div>
                    <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0" max="100" />
                  </div>
                  <div class="form_control_container">
                    <div class="form_control_container__time">Max</div>
                    <input class="form_control_container__time__input" type="number" id="toInput" value="30" min="0" max="100" />
                  </div>
                </div>
              </div>
            </div>
            {/* make dynamic */}
            <div id="divallcategory">
              <h3>Select Categories</h3>
              {data.map((item, index) => {
                return (
                  <div data-id_category={item.productCategory} className="item-category ">
                    <label className="name">{item.productCategories}</label>
                    <div className="count">{item.productAvailableQty}</div>
                  </div>
                )
              })}
            </div>
            {/* make dynamic */}
            <div id="divallcategory">
              <h3>Color</h3>
              <div class="mx-4">
                <div class="form-check ">
                  <label class="form-check-label" for="flexCheckDefault"><input class="form-check-input fs-1" type="checkbox" value="" id="flexCheckDefault" />Red</label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="flexCheckDefault"><input class="form-check-input fs-1" type="checkbox" value="" id="flexCheckDefault" />Green</label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="flexCheckDefault"><input class="form-check-input fs-1" type="checkbox" value="" id="flexCheckDefault" />Brown</label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="flexCheckDefault"><input class="form-check-input fs-1" type="checkbox" value="" id="flexCheckDefault" />Grey</label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="flexCheckDefault"><input class="form-check-input fs-1" type="checkbox" value="" id="flexCheckDefault" />Orange</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className='row row-cols-3 g-3'>
              {/* //start */}
              {data.map((item, index) => {
                return (
                  <div className="card" style={{ borderStyle: 'none', width: '23rem' }}>
                    <Link to={`/ProductPreview/${item.id}`}><img src={`http://localhost:5000/images/` + item.productImageSource} className="categories-shop-img" /></Link>
                    {/* <a href="ProductPreview" tabindex="0"><img src={`http://localhost:5000/images/` + item.productImageSource} className="categories-shop-img" /></a> */}
                    <div className="middle">
                      <div className="text"><AiFillEye /></div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.productName}</h5>
                      <a href="#" className="btn btn-dark">Show more</a>
                    </div>
                  </div>
                )
              })}
              {/* //start */}
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Shop;