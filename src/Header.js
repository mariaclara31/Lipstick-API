import React,{ useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
            <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Lipstick Api</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="https://makeup-api.herokuapp.com/api/v1/products?product_category=lipstick&product_type=lipstick">Batons</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_gloss&product_type=lipstick">Brilho Labial</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://makeup-api.herokuapp.com/api/v1/products?product_category=lip_stain&product_type=lipstick">Lipstain</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://makeup-api.herokuapp.com/api/v1/products?product_category=liquid&product_type=lipstick">Batom Líquido</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }

export default Header;
