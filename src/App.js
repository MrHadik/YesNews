import "./App.css";
import NevBar from "./compornet/NevBar";
import NewsPage from "./compornet/NewsPage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [apiKey, setApiKey] = useState("");
  const country = "in";
  const pageSize = 9;

  useEffect(() => {
    getKey();
  }, []);

  const getKey = async () => {
    const regex = /&apiKey=([0-9a-fA-F]{32})/;
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch("https://newsapi.org/", {
      method: "GET",
      headers: headersList,
    });

    let body = await response.text(); // Convert the response body to a string

    const match = body.match(regex);
    if (match) {
      const apiKey = match[1];
      setApiKey(apiKey);
    } else {
      console.log("API Key not found in the response body.");
    }
  };

  return (
    <div>
      <Router>
        <NevBar />
        {apiKey && (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsPage
                  pagesize={pageSize}
                  key="general"
                  categ="general"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsPage
                  key="business"
                  pagesize={pageSize}
                  categ="business"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsPage
                  key="entertainment"
                  pagesize={pageSize}
                  categ="entertainment"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsPage
                  key="health"
                  pagesize={pageSize}
                  categ="health"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsPage
                  key="science"
                  pagesize={pageSize}
                  categ="science"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsPage
                  key="sports"
                  pagesize={pageSize}
                  categ="sports"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsPage
                  key="technology"
                  pagesize={pageSize}
                  categ="technology"
                  country={country}
                  apikey={apiKey}
                />
              }
            />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
