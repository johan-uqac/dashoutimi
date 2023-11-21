import './App.css';
import data from './data.json'

function App() {
  const listItem = data.map(info => {
      return (
        <li>
          <p>{info.date}</p>
          <p>{info.description}</p>
          <p>{info.hour}</p>
        </li>
      )
  })

  return (
    <div className="quarter-grid-container">
      <div className="grid-item">3</div>
      <div>{listItem}</div>
    </div>
  );
}

export default App;
