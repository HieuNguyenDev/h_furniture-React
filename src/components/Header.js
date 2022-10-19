import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useCart } from 'react-use-cart';
import "../css/Header.css";

export default function Header() {
    const [showLogoutButton, setShowLogoutButton] = useState(false)

    const {
        items,
    } = useCart();

    // logout
    const logout = () => {
        const JsonUser = JSON.stringify({
            isLoggedIn: false
        })
        localStorage.setItem('user', JsonUser)
    }

    // get user value in local storage
    const [user, setUser] = useState({
        isLoggedIn: false
    })
    setTimeout(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, 100)
    
    const [showMenu, setShowMenu] = useState(true);
    

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowMenu(false)
    //         } else {
    //             setShowMenu(true)
    //         }
    //     }
        
    //     window.addEventListener('scroll', handleScroll)

    // }, [])
    
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i>contact@gmail.com</li>
                                    <li>Miễn phí vận chuyển đơn hàng từ 500.000 VNĐ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__auth">
                                    { user.isLoggedIn ? (
                                        <div className='user-content'>
                                            <div onClick={() => setShowLogoutButton(true)}>
                                                <img style={{height: 20}} src={user.picture} alt="" />
                                                <span style={{marginLeft: '8px', fontSize: '12px'}}>{user.name}</span>
                                            </div>
                                            {showLogoutButton && (
                                                <ul className='user-actions'>
                                                    <li onClick={() => logout()}><i className="fa fa-sign-out"></i>Đăng xuất</li>
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to="/login" ><i className="fa fa-user"></i> Đăng nhập</Link>
                                    )}
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to="/"><img src="../../assets/img/main-logo.png" alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul id="menu">
                                    <li><NavLink exact to="/" >Trang chủ</NavLink></li>
                                    <li><NavLink to="/shop">Sản phẩm</NavLink></li>
                                    <li><NavLink to="/blog" >Bài viết</NavLink></li>
                                    <li><NavLink to="/contact">Liên hệ</NavLink></li>
                                    <li><NavLink to="/cart">Giỏ hàng</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> <span>0</span></a></li>
                                    <li><Link to="/cart" ><i className="fa fa-shopping-bag"></i> <span>{items.length}</span></Link></li>
                                </ul>
                                {/* <div className="header__cart__price">item: <span>$150.00</span></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            )}
        </header>
    )    
}