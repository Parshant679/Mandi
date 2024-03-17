import React, { Suspense } from "react";
import Header from "./components/headers/Header";
import Pages from "./components/mainpages/Pages";
import { DataProvider } from "./GlobalState";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading..</div>}>
            <Pages />
          </Suspense>
        </div>
      </Router>
    </DataProvider>
  );
}
export default App;
