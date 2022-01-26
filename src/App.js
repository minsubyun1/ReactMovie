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
        <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />}/>
        <Route path = {process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path = {process.env.PUBLIC_URL + "romance/"} element={<Love />}/>
        <Route path = {process.env.PUBLIC_URL + "thriller/"} element={<Horror />}/>
        <Route path = {process.env.PUBLIC_URL + "Animation/"} element={<Ani />}/>
      </Routes>
    </Router>
  );
}

export default App;
