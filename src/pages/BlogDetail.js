import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://demo.trungthanhweb.com/api/tin/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.id]);

  return (
    <>
      <section className="product-details spad mt-116">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
            <h1>{post.tieude1}</h1>
            <img src={post.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailProduct;

