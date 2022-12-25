import Products from "./Components/Products/Products";
import Header from "./Components/Layout/Header";
import Subheader from "./Components/Layout/Subheader";
import {Routes , Route, Navigate} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Routes>
        <Route path="/404" element={<h1>Not Found..!!</h1>}>
          </Route>
        <Route path="/:category?" element={<Products/>}>
        </Route>
        </Routes>
        {/* <Navigate to="/404" element={<h1>Not Found!!</h1>} /> */}
    </div>
  );
}

export default App;







