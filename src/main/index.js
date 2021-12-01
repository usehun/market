import './index.css';
import './reset.css';
// import './js.js';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage(){
    const [products, setProducts] = useState([]);
    React.useEffect(function(){
        axios.get('https://3cdcfde0-8357-4f45-8f95-77b804863b49.mock.pstmn.io/product').then(function(result){
            const menu = result.data.product;
            setProducts(menu);
        }).catch(function(error){
            console.error("에러 발생 : ",error);
        })
    },[])

    return (
        <div>
            <div id="header">
                <div className="header-area">
                    <img className = "logo-img" src="./img/menu/logomain.jpg" alt="" />
                    <div className="logo">바다의미각</div>
                </div>
            </div>
            <div id="body">
                <div className="banner">
                    <p>배너 자리</p>
                </div>
                <h1>판매되는 상품들</h1>
                <div className="product-list">
                    {
                        products.map(function(menu, index){
                            return (
                                <div className="product-card">
                                    <Link className="product-link" to={`/product/${index}`}>
                                        <img className="product-img" src={menu.img} />
                                        <div className="product-content">
                                            <span className="product-name">
                                                {menu.name}
                                            </span>
                                            <span className="product-price">
                                                {menu.price}
                                            </span>
                                            <span>
                                                비고
                                            </span>
                                        </div>
                                    </Link> 
                                </div>
                            )
                        })
                    }             
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPage;