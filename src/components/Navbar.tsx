import {
  OverlayTrigger,
  Container,
  Nav,
  Navbar as NavbarBs,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PersonCircle, BoxArrowInLeft } from "react-bootstrap-icons";
import { ToolTip } from "./TootlTip";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        <Nav>
          <OverlayTrigger placement="bottom" overlay={ToolTip("Account")}>
            <Nav.Link to="/account" as={NavLink}>
              <PersonCircle color="royalblue" size={30}></PersonCircle>
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={ToolTip("Log Out")}>
            <Nav.Link to="/signin" as={NavLink}>
              <BoxArrowInLeft color="red" size={30}></BoxArrowInLeft>
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
