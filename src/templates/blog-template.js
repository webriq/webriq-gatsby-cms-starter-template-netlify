import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import SEO from "../components/seo"
const slugify = require("slugify")

class BlogTemplate extends React.Component {
	render() {
		const data = this.props.data
		// console.log(data)
		const pgnt = data.allMarkdownRemark.edges.filter(
			fltr =>
				fltr.node.frontmatter.title === data.markdownRemark.frontmatter.title
		)
		return (
			<Layout>
				<SEO
					title={data.markdownRemark.frontmatter.title}
					description={data.markdownRemark.frontmatter.excerpt}
				/>
				<div className="page-headline">
					<div className="container">
						<div className="section-heading text-center">
							<h6 className="font-weight-bold text-uppercase text-white-50 flair">
								Blog
							</h6>
							<h1>
								<strong>{data.markdownRemark.frontmatter.title}</strong>
								<br />
							</h1>
							<span className="text-white-50 small">
								<i className="fa fa-calendar-o pr-1" />
								{data.markdownRemark.frontmatter.publishedDate}
							</span>
						</div>
					</div>
				</div>
				<div className="page-content">
					<Container>
						<div className="row justify-content-center">
							<div className="col-md-9">
								<div
									dangerouslySetInnerHTML={{
										__html: data.markdownRemark.html,
									}}
								/>
							</div>
						</div>
						<div className="blog-nav">
							<div className="row">
								<div className="col-md-6 text-md-left">
									{pgnt[0].previous !== null ? (
										<div>
											<span className="font-weight-bold text-uppercase text-muted d-block small">
												Previous
											</span>
											<Link
												to={slugify(
													pgnt[0].previous.frontmatter.title
												).toLowerCase()}
											>
												{pgnt[0].previous.frontmatter.title}
											</Link>
										</div>
									) : null}
								</div>
								<div className="col-md-6 text-md-right">
									{pgnt[0].next !== null ? (
										<div>
											<span className="font-weight-bold text-uppercase text-muted d-block small">
												Next
											</span>
											<Link
												to={slugify(
													pgnt[0].next.frontmatter.title
												).toLowerCase()}
											>
												{pgnt[0].next.frontmatter.title}
											</Link>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</Layout>
		)
	}
}

export default BlogTemplate

export const blogQuery = graphql`
	query($id: String!, $author: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				publishedDate(formatString: "MMM DD, YYYY")
				excerpt
				metaTitle
				metaKeywords
				metaDescription
				banner
				status
				description
				author
				tag
			}
			html
		}

		authorQuery: allMarkdownRemark(
			filter: { frontmatter: { fullName: { eq: $author } } }
		) {
			edges {
				node {
					id
					frontmatter {
						fullName
						profilePicture
					}
				}
			}
		}
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
			edges {
				node {
					id
					frontmatter {
						title
					}
				}
				next {
					frontmatter {
						title
					}
					id
				}
				previous {
					frontmatter {
						title
					}
					id
				}
			}
		}
	}
`
