import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction';
import Loader from "react-loader-spinner";
import MessageBox from '../components/MessageBox';
function HomeScreen() {

	const dispatch = useDispatch()
const productList =  useSelector(state => state.productList)

const {loading , error , products} = productList

useEffect(() => {

dispatch(listProducts())
console.log(products);
}, [dispatch])
 
return (
  <div>
	{
		loading ? (
			<Loader type="ThreeDots" color="#00BFFF" height={80} width={50} style={{textAlign:'center'}}/>
		):error? (
			<MessageBox>{error}</MessageBox> 
		) : (
	
<>
      <header className="row tm-welcome-section">
				<h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
				<p className="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
			</header>
			
			<div className="tm-paging-links">
				<nav>
					<ul>
						<li className="tm-paging-item"><NavLink to="pizza" className="tm-paging-link ">Pizza</NavLink></li>
						<li className="tm-paging-item"><NavLink to="Salad" className="tm-paging-link">Salad</NavLink></li>
						<li className="tm-paging-item"><NavLink to="Noodle" className="tm-paging-link">Noodle</NavLink></li>
					</ul>
				</nav>
			</div>

			
      <div className="row tm-gallery">
	
				<div id="tm-gallery-page-pizza" className="tm-gallery-page">
          {products.map((product) => (
						<Product key={product.id} product = {product}/>
          ))}
					
				</div> 

				<div id="tm-gallery-page-salad" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Salad Menu One</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Second Title Salad</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$30</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Salad Item</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$45</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/01.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Superior Salad</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed ultricies dui</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$55 / $60</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$75</p>
							</figcaption>
						</figure>
					</article>
				</div>
				<div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle One</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$12.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle Second</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$15.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/06.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Soft Noodle</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$20.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$30.25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$35.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Quisque et felis eros</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$40.50</p>
							</figcaption>
						</figure>
					</article>

				</div> 
			</div>
						</>
			)}
		</div>

)
	}
	


export default HomeScreen
