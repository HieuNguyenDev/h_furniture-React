import '../css/login.css'
import { useState } from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        axios.get('http://localhost:3000/users')
            .then(function (response) {
                setUsers(response.data);
            })
            .catch(function (error) {
                alert('Lỗi!')
                console.log(error);
            });

        checkLogin()
    }

    const checkLogin = () => {
        const userExactly = users.filter(user => user.email === email && user.password === password)
        console.log(userExactly);
        if (userExactly.length > 0) {
            alert('Đăng nhập thành công!')
        } else {
            alert('Email hoặc password không chính xác!')
        }
    }

    return (
        <>
            <section className="checkout spad mt-116">
                <div className="container">
                    <div className="checkout__form">
                        <h4>Đăng nhập</h4>
                        <form className="form-container" action="#">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="checkout__input">
                                        {/* <p>Email<span>*</span></p> */}
                                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="checkout__input">
                                        {/* <p>Mật khẩu<span>*</span></p> */}
                                        <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <button className="btn primary-btn" onClick={handleSubmit}>Đăng nhập</button>
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

export default Login;