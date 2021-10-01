import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            alt="ระบบตรวจสอบสถานะหนี้เงินยืม มหาวิทยาลัยราชภัฏมหาสารคาม"
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          AR BORROW RMU
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" activeClassName="active" exact>
              หน้าหลัก
            </NavLink>
            
            

        

          </Nav>



        </Navbar.Collapse>
      
      </Navbar>
    </>
  );
};

export default NavBar;
