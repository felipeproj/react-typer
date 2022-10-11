// External libs
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

// Shared contents

function App() {
  return (
    <Router>
      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
