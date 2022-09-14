import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="shoping-cart spad mt-168">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Không tìm thấy trang!</h2>
                    <Link to="/" className='btn btn-outline-primary' style={{margin: '20px 0'}}>Trở lại trang chủ</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound;