import './App.css';
import qrCode from './assets/images/image-qr-code.png';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card imgSrc={qrCode} />
    </div>
  );
}

export default App;
        