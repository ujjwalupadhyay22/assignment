import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header1() {
  return (
    <>
      <div className="navbar navbar-inverse set-radius-zero">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="index.html">
              <img src="assets/img/logo.png" />
            </Link>
          </div>
          <div className="right-div">
            <Link to="#" className="btn btn-danger pull-right">LOG ME OUT</Link>
          </div>
        </div>
      </div>
      <div>
        <section className="menu-section">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="navbar-collapse collapse ">
                  <ul id="menu-top" className="nav navbar-nav navbar-right">
                    <li><Link to="/index1" className="menu-top-active">DASHBOARD</Link></li>

                    <li>
                      <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">  Service <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/Add_service">ADD Service</Link></li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/Manage_service">MANAGE Service </Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">  Category <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/Add_category">ADD CATEGORY</Link></li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/Category_manage">MANAGE CATEGORY </Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                        <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_employee"> ADD </NavLink></li>
                        <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_employee">Manage</NavLink></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Contact <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                        <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_contact"> Add contact </NavLink></li>
                        <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_contact"> Manage contact </NavLink></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">User <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                        <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_user"> Manage User </NavLink></li>
                      </ul>
                    </li>
                    {/* <button type="button"  class="btn btn-success">Log In</button> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header1