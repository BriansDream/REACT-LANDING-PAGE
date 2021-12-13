import logo from './logo.svg';
import './script/styles/header.css'
import {Image} from './script/components/Image.jsx'
import {Author} from './script/components/Author.js'
function App() {
  return (

      <header>
        <Author authorContainer="author-container" authorName="Andesta Febrianto Nainggolan" authorSkills="Front-end Web Development | UI Designer | Sales" />
        
        <Image imageContainer="image-container" 
        imageLink="http://briansdream.my.id/"
        src="http://briansdream.my.id/Asset/Andesta-Febrianto-Nainggolan-compress.webp"
        imageClass="image-profile" imageAlt="Andesta-Febrianto-Nainggolan" imageTitle="Andesta Febrianto Nainggolan"
        />
      </header>
  
  );
}

export default App;
