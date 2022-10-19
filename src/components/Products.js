import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useCart } from 'react-use-cart';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../css/Products.css';

export default function Product() {
    const { addItem } = useCart();
    const [showProducts, setShowProducts] = useState(true);
    const [listProducts, setListProduct ] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [showCategory, setShowCategory] = useState(false);
    const [searchQuerry, setSearchQuerry] = useState('');
    

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                // show
            } else {
                // hide
            }
        }
        
        window.addEventListener('scroll', handleScroll)

    }, [])

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

    function handleSearch(e) {
        setSearchQuerry(e.target.value)
    }

    return (
        <>  
            <section className="hero mt-168">
                <div className="container">
                    <div className="row box-filter">
                        <div className="col-lg-3 category-container">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <span>Danh mục</span>
                                    <i className="fa fa-bars" onClick={() => setShowCategory(!showCategory)}></i>
                                </div>
                                { showCategory && (
                                    <ul className="list-category-js">
                                        { listCategories.map((item, index) => (
                                            <li key={index} onClick={() => handleFilterCategory(item.idLSP)}>
                                                <a href='#'>{item.tenLoai}</a>
                                            </li>                                
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." onChange={handleSearch} /> 
                                        <button type="submit" className="site-btn">Tìm kiếm</button>
                                    </form>
                                </div>
                            </div>
        
                            <div className=''>
                                
                                {/* <div className="hero__text">
                                    <h2 className="hero__text-title">Bộ sưu tập phòng khách</h2>
                                    <a href="#" className="primary-btn hero__link-title">Khám phá ngay</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Slider {...settings}>
                                <div>
                                    <img className='image' src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                                <div>
                                    <img className='image' src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                                <div>
                                    <img className='image' src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                            </Slider>  
                        </div>
                    </div>
                </div>
            </section>

            {searchQuerry && (
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Kết quả tìm kiếm</h2>
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
                            { listProducts.filter(value => {
                                if(searchQuerry == '') {
                                    return value
                                } else if (value.tenSP.toLowerCase().includes(searchQuerry.toLowerCase())) {
                                    return value
                                }}).map(item => (
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
                                                <p>Lượt xem: {item.soLuotXem}</p>
                                                <h5 className='price-product'>{ item.price && currencyFormat(item.price)}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Sản phẩm xem nhiều</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter" >
                        { showProducts && listProducts.filter(sp => {
                            return sp.soLuotXem > 20
                        }).map(item => (
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
                                            <p>Lượt xem: {item.soLuotXem}</p>
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
                                            <p>Lượt xem: {item.soLuotXem}</p>
                                            <h5 className='price-product'>{item.price} đ</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
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
                                            <p>Lượt xem: {item.soLuotXem}</p>
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