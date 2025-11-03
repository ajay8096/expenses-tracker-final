import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function ColorSchemesExample({ onAddClick,onHomeClick, hasExpenses,onYearChange }) {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Expenses-Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={onHomeClick}>Home</Nav.Link>
          <Nav.Link onClick={onAddClick}>Add</Nav.Link>
         {hasExpenses && (
    <Form.Select className="ms-3" style={{ width: "120px" }} onChange={function(e){ onYearChange(e.target.value)}}>
      <option value="All">All</option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </Form.Select>
  )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
