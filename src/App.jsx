import React from "react";
import Aside from "./camponent/Aside";
import Headr from "./camponent/Headr";
import Main from "./camponent/Main";

function App() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-2">
            <Aside />
          </div>
          <div className="col-10">
            <Headr />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
