import '../css/Category.css';
import { useState, useEffect } from 'react';

export default function Shop() {
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

    console.log(listProducts);


    return (
        <>
            <section className="breadcrumb-section set-bg" style={{backgroundImage: "url('https://www.kayak.com/rimg/himg/32/95/fc/expediav2-56606-1add01-084924.jpg?width=1366&height=768&crop=true')"}} >
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
                                        { listCategories.map(item => (
                                            <li key={item.idLSP} onClick={() => handleFilterCategory(item.idLSP)}><a>{item.tenLoai}</a></li>
                                        ))}
                                    </ul>
                                </div> 
                                
                                <div className="sidebar__item">
                                    <h4>Giá</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Màu sắc</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            Trắng
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label htmlFor="gray">
                                            Xám
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            Đỏ
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label htmlFor="black">
                                            Đen
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            Xanh biển
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            Xanh lá
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div> */}
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
                                </div>
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
                                            <select>
                                                <option value="0">Giá từ thấp đến cao</option>
                                                <option value="0">Giá từ cao đến thấp</option>
                                                <option value="0">Phổ biến</option>
                                                <option value="0">Xem nhiều nhất</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            { showResultSearch && <h6><span>{listProducts.length}</span> Sản phẩm được tìm thấy</h6> }
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2"></span>
                                            <span className="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                { showProducts && listProducts.map(item => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.idProd}>
                                        <a href={item.idProd}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.image} alt={item.image} />
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6><a href="#">{item.tenSP}</a></h6>
                                                    <h5>{item.price} đ</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}

                                { !showProducts && filterProduct.map(item => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.idProd}>
                                        <a href={item.idProd}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.image} alt={item.image} />
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6><a href="#">{item.tenSP}</a></h6>
                                                    <h5>{item.price} đ</h5>
                                                </div>
                                            </div>
                                        </a>
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