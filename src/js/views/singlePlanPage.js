import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class SinglePlanPage extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
			state: "",
			address: "",
			city: "",
			zipcode: "",
			state: ""
		};
	}
	render() {
		const image1 = "https://cdn.shopify.com/s/files/1/0076/5922/5141/products/bronze_logo_1_250x.png?v=1562783230";
		const image2 = "https://cdn.shopify.com/s/files/1/0076/5922/5141/products/bronze_logo_2_400x.png?v=1562783251";
		const image3 = "https://cdn.shopify.com/s/files/1/0076/5922/5141/products/bronze_logo_2_400x.png?v=1562783251";

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					//	store.products &&
					//		store.products.map((item, index) => {

					return (
						<div className="container mt-5 mb-5">
							<div className="row text-center">
								<div className="col-4 mx-auto text-center">
									<div className="card mt-5 text-center plan-cards">
										<h2 className="text-center plan-name-title text-white pt-3">
											{store.products[this.props.match.params.planId].plan_name}
										</h2>
										<img
											src={store.products[this.props.match.params.planId].image}
											className="card-img-top"
											alt="..."
											height="350px"
										/>
										<div className="card-body text-center">
											<h5 className="card-title text-white">
												Card title
												{/*{item.plan_name}*/}
											</h5>
											<p className="card-text text-center text-white">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
												{/*{item.description}*/}
											</p>
											{/* <button
												href=""
												onClick={() =>
													actions.purchasePlan(
														store.currentUser,
														store.products[this.props.match.params.planId].id
													)
												}
												className="btn btn-primary btn-lg">
												Buy
											</button> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
					//});
				}}
			</Context.Consumer>
		);
	}
}
SinglePlanPage.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
