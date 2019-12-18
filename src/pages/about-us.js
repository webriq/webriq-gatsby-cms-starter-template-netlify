import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
	<Layout>
		<SEO
			title="About Us"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		/>
		<div className="page-headline">
			<div className="container">
				<div className="section-heading text-center">
					<h6 className="font-weight-bold text-uppercase text-white-50 flair">
						About Us
					</h6>
					<h1>
						<strong>Lorem ipsum dolor sit amet</strong>
					</h1>
				</div>
			</div>
		</div>
		<div className="page-content">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-md-5 order-2 order-md-1">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</div>
					<div className="col-md-6 order-1 order-md-2 text-center pb-5 pb-md-0">
						<img
							className="img-fluid"
							src="https://source.unsplash.com/user/neotronimz/600x400"
							alt="peaceful"
						/>
					</div>
				</div>
				<div className="row justify-content-between align-items-center pt-5">
					<div className="col-md-6 text-center pb-5 pb-md-0">
						<img
							className="img-fluid"
							src="https://source.unsplash.com/user/joshhild/600x400"
							alt="relaxing"
						/>
					</div>
					<div className="col-md-5">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default SecondPage
