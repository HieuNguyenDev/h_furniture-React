import '../css/login.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [passwordShown, setPasswordShown] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            otp: '12345'
        }

        console.log(user);

        axios.post(`http://localhost:3000/users`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Đăng ký thành công!')
            })
            .catch((error) => console.log(error))
    }

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
                        <h4>Đăng ký</h4>
                        <form className="form-container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    {/* <div className="checkout__input">
                                        <input type="text" placeholder="Tên người dùng" onChange={(e) => setUsername(e.target.value)} />
                                    </div> */}
                                    <div className="checkout__input">
                                        {/* <p>Email<span>*</span></p> */}
                                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="checkout__input">
                                        {/* <p>Mật khẩu<span>*</span></p> */}
                                        <input type={passwordShown ? 'text' : 'password'} placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                                        {/* <button onClick={() => setPasswordShown(!passwordShown)}>Hiện mật khẩu</button> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <button className="btn primary-btn" onClick={handleSubmit}>Đăng ký</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="" />
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;