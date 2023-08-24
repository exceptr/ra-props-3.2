import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy';

function App() {
  const items = JSON.parse(etsy);
  // console.log(items)
  return (
    <div className="App">
      <Listing items={items}/>
    </div>
  );
}

export default App;