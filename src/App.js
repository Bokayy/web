import logo from './logo.svg';
import './App.css';
import beach1 from './assets/7eonGM.jpg'
import beach2 from './assets/beach-1024x768.jpg'
import beach3 from './assets/L3cpdD.jpg'

import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Hero imageSrc = {beach1}/>
      <Slider 
        imageSrc = {beach2}
        title={"Lorem Ipsum"} 
        subtitle={"Lorem ipsum dolor"}
      />
      <Slider imageSrc = {beach3}
        title={"Lorem Ipsum"}
        subtitle={"Lorem ipsum dolor"}
        flip={true}
      />
    </div>
  );
}

export default App;
