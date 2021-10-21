import React from 'react'
import { useSelector } from 'react-redux';

import {BrowserRouter ,Link, NavLink, Route ,Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
const img = "img/simple-house-01.jpg"
function App() {

	const order = useSelector(state => state.order)
	const {orderItem} = order; 
  return (
    <>
    <BrowserRouter>
      	<div className="container">

		<div className="placeholder">
			<div className="parallax-window"  data-parallax="scroll" data-image-src={img}>
				<div className="tm-header">
					<div className="row tm-header-inner">
						<div className="col-md-6 col-12">
							<img src="../img/simple-house-logo.png" alt="Logo" className="tm-site-logo" /> 
							<div className="tm-site-text-box">
								<h1 className="tm-site-title">Simple House</h1>
								<h6 className="tm-site-description">new restaurant template</h6>	
							</div>
						</div>
						<nav className="col-md-6 col-12 tm-nav">
							<ul className="tm-nav-ul">
								<li className="tm-nav-li"><NavLink to="/" className="tm-nav-link ">Home</NavLink></li>
								<li className="tm-nav-li"><NavLink to="/about" className="tm-nav-link">About</NavLink></li>
								<li className="tm-nav-li"><NavLink to="/contact" className="tm-nav-link">Contact</NavLink></li>
								<li className="tm-nav-li"><NavLink to="/order" className="tm-nav-link">Ordered
								{orderItem.length > 0 && (
									<span className="badge">{orderItem.length}</span>
								) }</NavLink></li>
							</ul>
						</nav>	
					</div>
				</div>
			</div>

		
		</div>

		<main>
<Switch>

 <Route exact path="/product/:id" component={ProductScreen}></Route>
 <Route exact path="/order/:id?" component={OrderScreen}></Route>
 <Route  path="/" component={HomeScreen}></Route>
 <Route exact path="/*" component={ErrorPage}></Route>
</Switch>
			

		</main>

							<Footer/>
	</div>
  </BrowserRouter>
    </>
    
  )
}

export default App
