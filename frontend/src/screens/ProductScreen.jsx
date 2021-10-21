import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productAction";
import MessageBox from "../components/MessageBox";
function ProductScreen(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const orderHandler = () => {
    props.history.push(`/order/${productId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={50}
          style={{ textAlign: "center" }}
        />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          <div className="row tm-gallery card">
            <div className=" mt_5 tm-gallery-page">
              <div className="   tm-gallery-item ">
                <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                  <figure className="">
                    <img src={product.product.image} alt="akash" />
                  </figure>
                </article>
              </div>

              <article className=" data col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                <h4>{product.product.name}</h4>

                <p>{product.product.description}</p>
                <strong>
                  {" "}
                  <p>$ {product.product.price}</p>
                </strong>
              </article>
              <article className=" data col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                <select
                  name=""
                  id="quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={orderHandler} className="btn">
                  Order Now
                </button>
              </article>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
