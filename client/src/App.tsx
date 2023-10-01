import { Routes, Route } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./styles.css";

const App = () => {
  return (
    <Flex direction="column" minH="100vh">
      <NavBar />
      <Box flex="1" bg="blackAlpha.800">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
};

export default App;
