import React from 'react'
import { Link } from 'react-router-dom';

function Product(props) {
  const {product} = props ;
  return (
    <>
      	<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
						<Link to={`/product/`+product.id}>	<img src={product.image} alt={product.name} className="img-fluid tm-gallery-img" /> </Link>
							<figcaption>
							
							<Link to={`/product/`+product.id}>	<h4 className="tm-gallery-title">{product.name}</h4> </Link>
								<p className="tm-gallery-description">{product.description}</p>
								<p className="tm-gallery-price">$ {product.price}</p>
							</figcaption>
						</figure>
					</article>
    </>
  )
}

export default Product
