import '../css/Category.css';
import { useCart } from 'react-use-cart';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
    const { addItem } = useCart();
    const [showProducts, setShowProducts] = useState(true);
    const [listProducts, setListProduct ] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(false);

    useEffect(() => {
        fetch(`https://demo.trungthanhweb.com/api/sp`)
            .then(res => res.json())
            .then(data => setListProduct(data))
    }, []);

    useEffect(() => {
        fetch(`https://demo.trungthanhweb.com/api/loaisp`)
            .then(res => res.json())
            .then(data => setListCategories(data))
    }, []);

    const handleFilterCategory = (id) => {
        let filterProduct = listProducts.filter(item => {
            return item.idLSP === id;
        });
        setFilterProduct(filterProduct);
        setShowProducts(false)
    }

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, '$1,') + 'đ'
    }

    console.log(listProducts);


    return (
        <>
            <section className="breadcrumb-section set-bg mt-168" style={{backgroundImage: "url('https://www.kayak.com/rimg/himg/32/95/fc/expediav2-56606-1add01-084924.jpg?width=1366&height=768&crop=true')"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Cửa hàng</h2>
                                <div className="breadcrumb__option">
                                    <a href="#" >Trang chủ</a>
                                    <span>Cửa hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Danh mục</h4>
                                    <ul id='list-category-js'>
                                        { listCategories.map((item, index) => (
                                            <li key={index} onClick={() => handleFilterCategory(item.idLSP)}><a href='#'>{item.tenLoai}</a></li>
                                        ))}
                                    </ul>
                                </div> 
                                
                                {/* <div className="sidebar__item">
                                    <h4>Giá</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Kích thước phổ biến</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Lớn
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Trung bình
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Nhỏ
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                {/* <div className="section-title product__discount__title">
                                    <h2>Sản phẩm</h2>
                                </div> */}
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sắp xếp theo</span>
                                            <span>
                                                <select>
                                                    <option value="0">Giá từ thấp đến cao</option>
                                                    <option value="0">Giá từ cao đến thấp</option>
                                                    <option value="0">Phổ biến</option>
                                                    <option value="0">Xem nhiều nhất</option>
                                                </select>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            { showResultSearch && <h6><span>{listProducts.length}</span> Sản phẩm được tìm thấy</h6> }
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2"></span>
                                            <span className="icon_ul"></span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row">
                                { showProducts && listProducts.map(item => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                        <Link to={`/detail-product/${item.id}`}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.image} alt={item.image} />
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li onClick={() => addItem(item)}><a href={item.id}><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6 className='name-product'><a href="#">{item.tenSP}</a></h6>
                                                    <h5 className='price-product'>{currencyFormat(item.price)}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}

                                { !showProducts && filterProduct.map(item => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                        <Link to={`/detail-product/${item.id}`}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.image} alt={item.image} />
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li onClick={() => addItem(item)}><a href={item.id}><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6 className='name-product'><a href="#">{item.tenSP}</a></h6>
                                                    <h5 className='price-product'>{item.price && currencyFormat(item.price)}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}