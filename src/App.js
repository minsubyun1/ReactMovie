import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Love from "./routes/Love";
import Horror from "./routes/horror";
import Ani from "./routes/Ani";

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path = "/" element={<Home />} />
        <Route path = "/romance" element={<Love />}/>
        <Route path = "/thriller" element={<Horror />}/>
        <Route path = "/Animation" element={<Ani />}/>
      </Routes>
    </Router>
  );
}

export default App;
