import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import '../css/Category.css';
import '../css/Products.css';
import '../css/Shop.css';

export default function Shop() {
    const { addItem } = useCart();
    const [showProducts, setShowProducts] = useState(true);
    const [listProducts, setListProduct ] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(false);
    const [showCategories, setShowCategories] = useState(false)
    const [searchQuerry, setSearchQuerry] = useState('');
    const [sortValue, setSortValue] = useState(0)

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

    const handleSort = () => {
        listProducts.sort((item1, item2) => {
            return item1.price - item2.price
        })
    }

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
            {/* <section className="breadcrumb-section set-bg mt-168" style={{backgroundImage: "url('https://www.kayak.com/rimg/himg/32/95/fc/expediav2-56606-1add01-084924.jpg?width=1366&height=768&crop=true')"}} >
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
            </section> */}

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-7">
                            <div className='row box-filter'>
                                {/* <div className="filter__item filter-container"> */}
                                    <div className="col-lg-4 col-md-7">
                                        <div className="hero__categories">
                                            <div className="hero__categories__all">
                                                <span>Danh mục</span>
                                                <i className="fa fa-bars" onClick={() => setShowCategories(!showCategories)}></i>
                                            </div>
                                            {showCategories && (
                                                <ul id='list-category-js'>
                                                { listCategories.map((item, index) => (
                                                    <li key={index} onClick={() => handleFilterCategory(item.idLSP)}><a href='#'>{item.tenLoai}</a></li>
                                                ))}
                                                </ul>
                                            )}   
                                        </div> 
                                    </div>
                                    <div className="col-lg-4 col-md-7">
                                        <div className="filter__sort">
                                            <div className='dropdown'>
                                                <div className="dropdown-select">
                                                    <span className='select'>Sắp xếp theo</span>
                                                    <i class="icon fa fa-thin fa-caret-down"></i>
                                                </div>
                                                <div className='dropdown-list'>
                                                    <li className='dropdown-list__item' onClick={() => setSortValue(1)}>Giá từ thấp đến cao</li>
                                                    <li className='dropdown-list__item' onClick={() => setSortValue(2)}>Giá từ cao đến thấp</li>
                                                    <li className='dropdown-list__item' onClick={() => setSortValue(3)}>Xem nhiều nhất</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-7">
                                        <div className="hero__search__form form-container">
                                            <form action="#">
                                                <input type="text" placeholder="Tìm sản phẩm..." onChange={handleSearch} /> 
                                                <i class="fa fa-search search-icon"></i>
                                            </form>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                            <div className="row" style={{marginTop: '160px'}}>
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
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="filter__found">
                                        { showResultSearch && <h6><span>{listProducts.length}</span> Sản phẩm được tìm thấy</h6> }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                { showProducts && listProducts.sort((item1, item2) => {
                                    if (sortValue === 1) {
                                        return item1.price - item2.price;
                                    } else if (sortValue === 2) {
                                        return item2.price - item1.price;
                                    } else if (sortValue === 3) {
                                        return item2.soLuotXem - item1.soLuotXem
                                    }
                                }).filter(value => {
                                    if(searchQuerry == '') {
                                        return value
                                    } else if (value.tenSP.toLowerCase().includes(searchQuerry.toLowerCase())) {
                                        return value
                                    }}).map(item => (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
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
                                                    <p>Lượt xem: {item.soLuotXem}</p>
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
                                                    <p>Lượt xem: {item.soLuotXem}</p>
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