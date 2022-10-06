// External libs
import Container from "@mui/material/Container";
// Pages
import Home from "./pages/home/Home";

// Shared contents

function App() {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Home />
    </Container>
  );
}

export default App;
