import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Fade from "react-reveal/Fade";

import "../../styles/demo.scss";

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
												<div className="card-body text-center">
													<h5 className="card-title text-white text-center">
														Mission to Orbit
													</h5>
													<p className="card-text">{item.description}</p>
													<Link to={"/plan/" + item.plan_name + "/" + index}>
														<button type="button" className="btn btn-info ">
															Plan Details
														</button>
													</Link>
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
