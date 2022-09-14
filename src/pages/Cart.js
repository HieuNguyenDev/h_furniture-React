import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';

function Cart() {

    const {
        isEmpty,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart(); 

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, '$1,') + ' đ'
    }
    if (isEmpty) return (
        <section className="shoping-cart spad mt-116">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Giỏ hàng của bạn đang trống!</h2>
                        <Link to="/shop" className='btn btn-outline-primary' style={{margin: '20px 0'}}>Mua hàng ngay bây giờ!</Link>
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <>
            <section className="shoping-cart spad mt-116">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { items.map(item => (
                                            <tr key={item.id}>
                                                <td className="shoping__cart__item">
                                                    <img style={{width: '100px'}} src={item.image} alt="" />
                                                    <h5>{item.tenSP}</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {currencyFormat(item.price)}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                        <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                            -
                                                            </button>
                                                            <strong style={{margin: '0 20px'}}>{item.quantity}</strong>
                                                            <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                            +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {currencyFormat(item.price * item.quantity) }
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close" onClick={() => removeItem(item.id)}></span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Mã giảm giá</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Nhập mã giảm giá của bạn" />
                                        <button type="submit" className="site-btn">Xác nhận</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Tổng cộng</h5>
                                <ul>
                                    <li>Phí vận chuyển <span>{currencyFormat(25000)}</span></li>
                                    <li>Tổng <span>{currencyFormat(cartTotal)} </span></li>
                                </ul>
                                <Link to="/checkout" className="primary-btn">Thanh toán</Link>
                                <button className="btn btn-outline-danger" onClick={() => emptyCart()}>Xóa tất cả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;