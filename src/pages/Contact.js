function Contact() {
    return (
        <>
            <section className="breadcrumb-section set-bg mt-168" style={{backgroundImage: "url('https://www.kayak.com/rimg/himg/32/95/fc/expediav2-56606-1add01-084924.jpg?width=1366&height=768&crop=true')"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Liên hệ với chúng tôi</h2>
                                {/* <!-- <div className="breadcrumb__option">
                                    <a href="./index.html">Trang chủ</a>
                                    <span>Liên hệ</span>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_phone"></span>
                                <h4>Số điện thoại</h4>
                                <p>+01-3-8888-6868</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_pin_alt"></span>
                                <h4>Địa chỉ</h4>
                                <p>Quận 12 - TP Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_clock_alt"></span>
                                <h4>Thời gian</h4>
                                <p>10:00 am to 17:00 pm</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>contact@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435923675846!2d106.6256397144684!3d10.85382636072901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1661227488474!5m2!1svi!2s" 
                    height="500" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0">
                </iframe>
                {/* <!-- <div className="map-inside">
                    <i className="icon_pin"></i>
                    <div className="inside-widget">
                        <h4>Công viên phần mềm Quang Trung</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                        </ul>
                    </div>
                </div> --> */}
            </div>
        
            <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Để lại lời nhắn</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Họ tên của bạn" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Email của bạn" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea placeholder="Lời nhắn của bạn"></textarea>
                                <button type="submit" className="site-btn">Gửi lời nhắn</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;