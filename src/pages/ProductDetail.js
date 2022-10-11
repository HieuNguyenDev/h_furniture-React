import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from 'react-use-cart';

function DetailProduct() {
  const { addItem } = useCart();
  
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://demo.trungthanhweb.com/api/sp/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, "$1,") + "đ";
  };

  return (
    <>
      <section className="product-details spad mt-116">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={product.image}
                    alt={product.image}
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: 'translate3d(-718px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '1725px'}}>
                        {product.images &&
                            product.images.map((img, index) => (
                                <div key={index} className="owl-item cloned" style={{width: '123.75px', marginRight: '20px'}}>
                                    <img src={img.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.tenSP}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(0 đánh giá)</span>
                </div>
                <div className="product__details__price">
                  {product.price && currencyFormat(product.price)}
                </div>
                <p>{product.moTa}</p>
                <div className="product__details__quantity">
                  {/* <div className="quantity">
                    <div className="pro-qty">
                      <button className='btn btn-outline-warning' onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>
                      -
                      </button>
                        <strong style={{margin: '0 20px'}}>{product.quantity}</strong>
                      <button className='btn btn-outline-success' onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>
                        +
                    </button>
                    </div>
                  </div> */}
                </div>
                <Link to="/cart" onClick={() => addItem(product)} className="primary-btn">
                  Thêm vào giỏ hàng
                </Link>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt"></span>
                </a>
                <ul>
                  <li>
                    <b>Trạng thái</b> <span>Còn hàng</span>
                  </li>
                  <li>
                    <b>Lượt xem</b> <span>{product.soLuotXem}</span>
                  </li>
                  {/* <!-- <li><b>Vận chuyển</b> <span>3 ngày. <samp>Miễn phí vận chuyển hôm nay</samp></span></li> --> */}
                  <li>
                    <b>Vận chuyển</b> <span>3 ngày</span>
                  </li>
                  {/* <li><b>Trọng lượng</b> <span>0.5 kg</span></li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Mô tả
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Thông tin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Đánh giá <span>(0)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Thông tin sản phẩm</h6>
                      <p>{product.info}</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Thông tin sản phẩm</h6>
                      <p>{product.info}</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Thông tin sản phẩm</h6>
                      <p>{product.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailProduct;

