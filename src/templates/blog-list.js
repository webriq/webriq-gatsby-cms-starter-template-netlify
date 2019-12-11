import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"

const slugify = require("slugify")

const Blogs = ({ data }) => (
	<Layout>
		<div class="page-headline">
			<div class="container">
				<div class="section-heading text-center">
					<h6 class="font-weight-bold text-uppercase flair">Blog</h6>
					<h1>
						<strong>Latest Posts</strong>
					</h1>
				</div>
			</div>
		</div>
		<div class="blog-section">
			<Container>
				<div class="row justify-content-between">
					<div class="col-md-7">
						{console.log(data)}
						{data.allMarkdownRemark.edges.map(blog => (
							<div class="blog-item bg-light" key={blog.node.id}>
								<div class="row">
									<div class="col-lg-4 pr-lg-0">
										<Link
											to={slugify(blog.node.frontmatter.title).toLowerCase()}
										>
											<div
												class="blog-image h-100"
												style={{
													backgroundImage: `url(${
														blog.node.frontmatter.banner
													})`,
												}}
											/>
										</Link>
									</div>
									<div class="col-lg-8 pl-lg-0">
										<div class="blog-text">
											<Link
												to={slugify(blog.node.frontmatter.title).toLowerCase()}
											>
												<h4>{blog.node.frontmatter.title}</h4>
											</Link>
											<div class="text-muted small">
												<i class="fa fa-folder pr-1" />
												{blog.node.frontmatter.category.length > 0 ? (
													<span>
														<Link to="/">
															{blog.node.frontmatter.category[0]}
														</Link>
													</span>
												) : null}
											</div>
											<p class="pt-2 text-muted">
												{blog.node.frontmatter.excerpt}
											</p>
											<span class="text-muted small">
												<i class="fa fa-calendar-o pr-1" />
												{blog.node.frontmatter.publishedDate}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div class="col-md-4 mb-4">
						<div class="side-content">
							<h6 class="text-uppercase text-muted">Categories</h6>
							<ul class="list-unstyled">
								{data.allMarkdownRemark.group.map(cat => (
									<li key={cat.fieldValue}>
										<Link class="text-body font-weight-bold" to="/">
											{cat.fieldValue}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div class="side-content">
							<h6 class="text-uppercase text-muted">Keep Up-to-Date</h6>
							<p class="small">
								Get our latest news and updates straight to your inbox. Enter
								your email address to subscribe:
							</p>
							<form>
								<div class="form-group">
									<input class="form-control" type="email" required="" />
									<label>Email address</label>
								</div>
								<div class="form-group mb-4">
									<button class="btn btn-primary" type="submit">
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
