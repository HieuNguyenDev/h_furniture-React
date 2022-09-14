import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'

function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://demo.trungthanhweb.com/api/tin')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <section className="from-blog spad mt-116">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>Bài viết</h2>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        {posts.map(post => (
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link key={post.idTin} to={`/blog/${post.idTin}`}>
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src={post.image} alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <h5 className='post-title'>{post.tieude1}</h5>
                                            <ul className='blog-status'>
                                                <li>
                                                    <i className="fa fa-calendar-o" style={{marginRight: '6px'}}></i>
                                                    {Moment(post.created_at).format('DD/MM/YYYY')} 
                                                </li>
                                                <li><i className="fa fa-comment-o"></i> 0</li>
                                            </ul>
                                            <p></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;