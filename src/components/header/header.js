import React from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"

const Header = () => (
  <header>
    <div className="header">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <div class="header-logo">
              <Link to="/">
                <span class="display-4 text-white">LOGO</span>
              </Link>
            </div>
          </div>
          <div class="col-4">
            <div class="text-right">
              <SideBarMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
