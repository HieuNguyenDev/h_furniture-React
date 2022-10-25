import { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../css/login.css';

function Login() {
    const [user, setUser] = useState({
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    })

    const responseFacebook = (response) => {
        console.log(response);
        setUser({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    useEffect(() => {
        saveToLocalStorage()
    }, [user])

    

    const componentClicked = (data) => {
        console.log(data)
    }
    
    const saveToLocalStorage = () => {
        const jsonUser = JSON.stringify(user)
        localStorage.setItem('user', jsonUser)
    }

    return (
        <>
            <section className="checkout spad mt-116">
                <div className="container">
                    <div className="checkout__form">
                        <h4>Đăng nhập</h4>
                        {user.isLoggedIn ? (
                            <div className='login-success-modal'>
                                {/* <p>{user.name}</p>
                                <img style={{width: 100, height: 100}} src={user.picture} alt="not image" /> */}
                                <h3>Đăng nhập thành công!<i class="login-icon fa-solid fa-check"></i></h3>
                            </div>
                        ) : (
                            
                            <FacebookLogin
                            appId="2435225616776152"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;