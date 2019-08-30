import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Fade from "react-reveal/Fade";
import MyApp from "../component/payPal";

import "../../styles/demo.scss";

const pay = () => {
	document.getElementById("paypal-button-container");
};
export class Plans extends React.Component {
	render() {
		const image1 = "https://cdn.shopify.com/s/files/1/0076/5922/5141/products/bronze_logo_1_250x.png?v=1562783230";
		const image2 = "https://cdn.shopify.com/s/files/1/0076/5922/5141/products/bronze_logo_2_400x.png?v=1562783251";
		const image3 = "https://www.survivingactors.com/wp-content/uploads/2016/07/Platinum-Badge.png";

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="card-deck mt-4">
							{store.products &&
								store.products.map((item, index) => {
									return (
										<Fade down key={index}>
											<div className="card plan-body grow" key={index}>
												<h3 className="m-2 text-center plan-name-title text-white">
													{item.plan_name}
												</h3>

												<img src={item.image} className="card-img-top grow" alt="..." />
												<div className="card-body text-center text-white plan-box">
													<h5 className="card-title text-white text-center">
														<u className="pt-2">Mission to Orbit</u>
													</h5>
													{index === 0 ? (
														<ul className="text-left plan-ul">
															<li>
																<i className="fas fa-check icon-small" />
																Full Access
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Save Recent Data
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Control of Onboard Sensors/Camera
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Features from Silver and Gold plans included
															</li>
															<li className="pb-5">
																<i className="fas fa-check icon-small" />
																Price: $120
															</li>
														</ul>
													) : index === 1 ? (
														<ul className="text-left plan-ul">
															<li>
																<i className="fas fa-check icon-small" /> Magnetic Field
																Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Temperature Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Barometer Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Gyroscope Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Save recent data
															</li>
															<li className="pb-5">
																<i className="fas fa-check icon-small" />
																Price: $80
															</li>
														</ul>
													) : (
														<ul className="text-left plan-ul">
															<li>
																<i className="fas fa-check icon-small" />
																Magnetic Field Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Gyroscope Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Temperature Sensor
															</li>
															<li>
																<i className="fas fa-check icon-small" />
																Barometer
															</li>
															<li className="pb-5">
																<i className="fas fa-check icon-small" />
																Price: $50
															</li>
														</ul>
													)}

													<p className="card-text">{item.description}</p>
													{/* <Link to={"/plan/" + item.plan_name + "/" + index}>
														<button type="button" className="btn btn-info ">
															Plan Details
														</button>
													</Link> */}
												</div>
												<div className="card-footer text-center">
													<MyApp />
												</div>
											</div>
										</Fade>
									);
								})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Plans.propTypes = {
	match: PropTypes.object
};
