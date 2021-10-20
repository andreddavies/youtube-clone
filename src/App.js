import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SearchBar />
        <main>
          <VideoPlayer />
          <VideoList />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
