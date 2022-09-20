import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useCart } from 'react-use-cart';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ccc" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ccc" }}
        onClick={onClick}
      />
    );
  }

export default function Product() {
    const { addItem } = useCart();
    const [showProducts, setShowProducts] = useState(true);
    const [listProducts, setListProduct ] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                                        <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." />
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
                                    <img className='image' src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg" alt="" />
                                </div>
                                <div>
                                    <img className='image' src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg" alt="" />
                                </div>
                                <div>
                                    <img className='image' src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg" alt="" />
                                </div>
                            </Slider>  
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