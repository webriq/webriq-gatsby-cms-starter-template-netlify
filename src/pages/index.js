import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import MySwiper from "../components/swiper/swiper"
import SampleForm from "../components/form/form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import bsns from "../images/business.svg"
import finance from "../images/financial.svg"
import jigsaw from "../images/jigsaws.svg"
import report from "../images/report.svg"
import trophy from "../images/trophy.svg"

const slugify = require("slugify")

// import img1 from "https://source.unsplash.com/user/neotronimz/600x400"
class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges
    // console.log(posts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div className="hero-section bg-light">
          <Container>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <h1 className="display-4 font-weight-bold flair">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="lead">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">
                About Us
              </h6>
              <h2>
                <strong>Lorem ipsum dolor sit amet</strong>
              </h2>
            </div>
            <div>
              <div className="row justify-content-between align-items-center pt-5">
                <div className="col-md-5 order-2 order-md-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <Link
                    className="btn btn-primary mt-2"
                    role="button"
                    to="/about-us"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="col-md-6 order-1 order-md-2 text-center pb-5 pb-md-0">
                  <LazyLoadImage
                    className="img-fluid"
                    src="https://source.unsplash.com/user/neotronimz/600x400"
                    alt="About us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-section bg-light">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">
                Services
              </h6>
              <h2>
                <strong>How Can We Help You?</strong>
              </h2>
            </div>
            <div className="row justify-content-center pt-5">
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={bsns} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={finance} width="100px" alt="Finance" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={jigsaw} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={report} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={trophy} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-section">
          {/*<div className="review-nav">
            <div className="review-prev">
              <i className="fa fa-angle-left" />
            </div>
            <div className="review-next">
              <i className="fa fa-angle-right" />
            </div>
          </div>*/}
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">Reviews</h6>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
          <MySwiper slidesperview={1}>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MySwiper>
        </div>
        <div className="blog-section bg-light">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">blog</h6>
              <h2>Latest Posts</h2>
            </div>
            <div className="row justify-content-around py-5">
              {posts.map(post => (
                <div className="col-md-6 col-lg-4 mb-4" key={post.node.id}>
                  <div className="blog-item bg-white h-100">
                    <Link
                      to={slugify(post.node.frontmatter.title).toLowerCase()}
                    >
                      <div
                        className="blog-image"
                        style={{
                          backgroundImage: `url(${
                            post.node.frontmatter.banner
                          })`,
                        }}
                      />
                    </Link>
                    <div className="blog-text">
                      <Link
                        to={slugify(post.node.frontmatter.title).toLowerCase()}
                      >
                        <h4>{post.node.frontmatter.title}</h4>
                      </Link>
                      <p className="pt-2 text-muted">
                        {post.node.frontmatter.excerpt}
                      </p>
                      <span className="text-muted small">
                        <i className="fa fa-calendar-o pr-1" />
                        {post.node.frontmatter.publishedDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link className="btn btn-primary" role="button" to="/blog">
                More from the Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-5">
                <div className="section-heading text-left">
                  <h6 className="font-weight-bold text-uppercase text-left flair">
                    Connect
                  </h6>
                  <h2>Get in Touch with Us</h2>
                  <p className="py-4">
                    Contact us using the following details below, or fill up the
                    form and we'll get back to you shortly.
                  </p>
                  <ul className="list-unstyled contact-details">
                    <li className="phone">
                      <a
                        className="link-unstyled"
                        href="tel:+1 234 5678 900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +1 234 5678 900
                      </a>
                    </li>
                    <li className="email">
                      <a
                        className="link-unstyled"
                        href="mailto:info@yourdomain.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@yourdomain.com
                      </a>
                    </li>
                    <li className="address">
                      22 Street Name, City Name, United States 1234
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="py-4">
                  <SampleForm
                    form_name="Newsletter Form"
                    form_id="5bcd42f86b63453b251972bc"
                    form_classname="form-newsletter"
                  >
                    <div className="form-row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            required=""
                          />
                          <label>First Name</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            required=""
                          />
                          <label>Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        required=""
                      />
                      <label>Email address</label>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="tel" />
                      <label>Phone (optional)</label>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control h-auto" required="" />
                      <label>Message</label>
                    </div>
                    <div className="form-group">
                      <div className="webriq-recaptcha" />
                    </div>
                    <div className="form-group mb-4">
                      <button className="btn btn-primary" type="submit">
                        Send Message
                      </button>
                    </div>
                  </SampleForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            banner
            publishedDate(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
