import "./css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Switch, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  // const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#373737";
  //     showAlert("Dark Mode has been Enabled Successfully", "success");
  //     return;
  //   }
  //   setMode("light");
  //   document.body.style.backgroundColor = "white";
  //   showAlert("Dark Mode has been Disabled Successfully", "success");
  // };
  return (
    <Router>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm
              heading="Enter the text to be analyzed:"
              // mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="/about">
            {/* <About /> */}
            <About mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
