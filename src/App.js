import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
