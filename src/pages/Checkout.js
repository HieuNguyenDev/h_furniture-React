import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';

function Checkout() {
    const [listProvinces, setListProvinces] = useState([])
    const {
        cartTotal,
        items,
    } = useCart();

    console.log(items);

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, '$1,') + ' đ'
    }

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/')
            .then(res => res.json())
            .then(data => setListProvinces(data))
    }, [])

    return (
        <>
            <section className="checkout spad mt-116">
                <div className="container">
                    {/* <!-- <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div> --> */}
                    <div className="checkout__form">
                        <h4>Hóa đơn chi tiết</h4>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="checkout__input">
                                        <p>Họ và tên<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Địa chỉ<span>*</span></p>
                                        <input type="text" placeholder="Street Address" className="checkout__input__add" />
                                    </div>
                                    <div className="checkout__input">
                                        <select name="" id="">
                                            <option value="null">Chọn tỉnh / thành</option>
                                            {
                                                listProvinces.map((item, index) => (
                                                    <option key={index}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Số điện thoại<span>*</span></p>
                                                <input type="number" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="checkout__input__checkbox">
                                        <label for="acc">
                                            Tạo một tài khoản để mua hàng dễ dàng hơn?
                                            <input type="checkbox" id="acc">
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn là khách hàng cũ, vui lòng đăng nhập ở đầu trang</p>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text">
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label for="diff-acc">
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc">
                                            <span className="checkmark"></span>
                                        </label>
                                    </div> --> */}

                                    <div className="checkout__input">
                                        <p>Ghi chú<span>*</span></p>
                                        <input type="text"
                                            placeholder="Ghi chú..." />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="checkout__order">
                                        <h4>Đơn hàng của bạn</h4>
                                        <div className="checkout__order__products">
                                            Sản phẩm 
                                            <span>Tổng</span>
                                        </div>
                                        <ul>
                                            { items.map((item, index) => (
                                                <li key={index}>
                                                   { item.tenSP + ' x ' + item.quantity }
                                                    <span> </span>
                                                    <span>
                                                        {currencyFormat(item.price)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <div className="checkout__order__subtotal">Tổng phụ <span>$750.99</span></div> */}
                                        <div className="checkout__order__total">Tổng cộng <span>{currencyFormat(cartTotal)}</span></div>
                                        {/* <!-- <div className="checkout__input__checkbox">
                                            <label for="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or">
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label for="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment">
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label for="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal">
                                                <span className="checkmark"></span>
                                            </label>
                                        </div> --> */}
                                        <button type="submit" className="site-btn">Đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;