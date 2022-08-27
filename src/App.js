import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import UploadPage from "./Pages/UploadPage/UploadPage";
import "./App.css";
import { dataListContext } from "./Context/Context.js";
import { store } from "./Context/Store.js";
import ListPage from "./Pages/ListPage/ListPage";
import reducer from "./Context/reducer";
import { useReducer, useContext } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <dataListContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={state.isSignedIn ? <UploadPage /> : <SignupPage />}
          />
          <Route path="/list" element={<ListPage />} />
          <Route
            path="/upload"
            element={true ? <UploadPage /> : <SignupPage />}
          />
        </Routes>
      </div>
    </dataListContext.Provider>
  );
}

export default App;
