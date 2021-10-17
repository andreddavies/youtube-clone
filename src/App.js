import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;
