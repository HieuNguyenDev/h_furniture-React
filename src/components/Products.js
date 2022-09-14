import { useCart } from 'react-use-cart'
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

export default function Product() {
    const { addItem } = useCart();
    const [showProducts, setShowProducts] = useState(true);
    const [listProducts, setListProduct ] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

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

    return (
        <>  
            <section className="hero mt-168">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 category-container">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>Danh mục</span>
                                </div>
                                <ul id="list-category-js">
                                    { listCategories.map((item, index) => (
                                        <li key={index} onClick={() => handleFilterCategory(item.idLSP)}>
                                            <a href='#'>{item.tenLoai}</a>
                                        </li>                                
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        {/* <!-- <div className="hero__search__categories">
                                            Tất cả loại 
                                            <span className="arrow_carrot-down"></span>
                                        </div> --> */}
                                        <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." />
                                        <button type="submit" className="site-btn">Tìm kiếm</button>
                                    </form>
                                </div>
                            </div>

                                        {/* Slider */}
                            <div className="hero__item set-bg main-bg" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg')"}}> </div>
        
                            <div className='main-bg'>
                                {/* <Slider {...settings}>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                                    </div>
                                </Slider>   */}
                                <div className="hero__text">
                                    <h2 className="hero__text-title">Bộ sưu tập phòng khách</h2>
                                    <a href="#" className="primary-btn hero__link-title">Khám phá ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Tất cả sản phẩm</h2>
                            </div>
                            {/* <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">Tất cả</li>
                                    <li data-filter=".oranges">Oranges</li>
                                    <li data-filter=".fresh-meat">Fresh Meat</li>
                                    <li data-filter=".vegetables">Vegetables</li>
                                    <li data-filter=".fastfood">Fastfood</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="row featured__filter" >
                        { showProducts && listProducts.map(item => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" >
                                <Link to={`/detail-product/${item.id}`}>
                                    <div className="featured__item">
                                        <div className="featured__item__pic set-bg">
                                            <img src={item.image} alt={item.image} />
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li onClick={() => addItem(item)}><a href={item.id}><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6 className='name-product'><a href="#">{item.tenSP}</a></h6>
                                            <h5 className='price-product'>{ item.price && currencyFormat(item.price)}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                        { !showProducts && filterProduct.map(item => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" >
                                <Link to={`/detail-product/${item.id}`}>
                                    <div className="featured__item">
                                        <div className="featured__item__pic set-bg">
                                            <img src={item.image} alt={item.image} />
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li onClick={() => addItem(item)}><a href={item.id}><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6 className='name-product'><a href="#">{item.tenSP}</a></h6>
                                            <h5 className='price-product'>{item.price} đ</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}