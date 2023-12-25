import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import ImagesList from "./components/ImagesList";
import {getPhotosByTerm} from './api/GetPhotosByTerm'

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    await getPhotosByTerm(setImages, term);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
