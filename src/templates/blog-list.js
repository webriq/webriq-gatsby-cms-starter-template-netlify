import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import SEO from "../components/seo"

const slugify = require("slugify")

const Blogs = ({ data }) => (
	<Layout>
		<SEO title="Blogs" description={data.site.siteMetadata.description} />
		<div className="page-headline">
			<div className="container">
				<div className="section-heading text-center">
					<h6 className="font-weight-bold text-uppercase flair">Blog</h6>
					<h1>
						<strong>Latest Posts</strong>
					</h1>
				</div>
			</div>
		</div>
		<div className="blog-section">
			<Container>
				<div className="row justify-content-between">
					<div className="col-md-7">
						{data.allMarkdownRemark.edges.map(blog => (
							<div className="blog-item bg-light" key={blog.node.id}>
								<div className="row">
									<div className="col-lg-4 pr-lg-0">
										<Link
											to={slugify(blog.node.frontmatter.title.toLowerCase())}
										>
											<div
												className="blog-image h-100"
												style={{
													backgroundImage: `url(${
														blog.node.frontmatter.banner
													})`,
												}}
											/>
										</Link>
									</div>
									<div className="col-lg-8 pl-lg-0">
										<div className="blog-text">
											<Link
												to={slugify(blog.node.frontmatter.title.toLowerCase())}
											>
												<h4>{blog.node.frontmatter.title}</h4>
											</Link>

											<div className="text-muted small">
												{blog &&
												blog.node &&
												blog.node.frontmatter &&
												blog.node.frontmatter.category &&
												blog.node.frontmatter.category.length !== 0
													? blog.node.frontmatter.category.map(ct => (
															<span key={ct}>
																<i className="fa fa-folder pr-1" />

																<Link to={slugify(ct.toLowerCase())}>
																	{ct + " "}
																</Link>
															</span>
													  ))
													: null}
											</div>
											<p className="pt-2 text-muted">
												{blog.node.frontmatter.excerpt}
											</p>
											<span className="text-muted small">
												<i className="fa fa-calendar-o pr-1" />
												{blog.node.frontmatter.publishedDate}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="col-md-4 mb-4">
						<div className="side-content">
							<h6 className="text-uppercase text-muted">Categories</h6>
							<ul className="list-unstyled">
								{data.allMarkdownRemark.group.map(cat => (
									<li key={cat.fieldValue}>
										<Link
											className="text-body font-weight-bold"
											to={slugify(cat.fieldValue.toLowerCase())}
										>
											{cat.fieldValue}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="side-content">
							<h6 className="text-uppercase text-muted">Keep Up-to-Date</h6>
							<p className="small">
								Get our latest news and updates straight to your inbox. Enter
								your email address to subscribe:
							</p>
							<form>
								<div className="form-group">
									<input className="form-control" type="email" required="" />
									<label>Email address</label>
								</div>
								<div className="form-group mb-4">
									<button className="btn btn-primary" type="submit">
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	</Layout>
)

export default Blogs

export const blogQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
			edges {
				node {
					id
					frontmatter {
						title
						publishedDate(formatString: "MMM DD YYYY")
						excerpt
						metaTitle
						metaKeywords
						metaDescription
						banner
						status
						description
						author
						tag
						category
					}
					html
				}
			}
			group(field: frontmatter___category) {
				fieldValue
			}
		}
	}
`
