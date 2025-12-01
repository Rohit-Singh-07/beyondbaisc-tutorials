import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Dashboard from "./Pages/Dashboard";
import Person1 from "./Partials/Person1";
import Person2 from "./Partials/Person2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="person1" element={<Person1 />} />
        <Route path="person2" element={<Person2 />} />
      </Route>
    </Routes>
  );
};

export default App;
