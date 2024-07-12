import './App.css';
import Profiles from './Contents/Profiles/Profiles';
import {useState} from 'react'

function App() {
  const [theme, setTheme] = useState("Light"); // Use React state for theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  const getThemeStyles = () => ({
    backgroundColor: theme === "Light" ? "white" : "#053038",
    color: theme === "Light" ? "black" : "#fff", // Adjusted for light text on dark background
  });

  return (
    <div style={getThemeStyles()}>
      <button className="btn btn-outline-secondary" type="button" onClick={toggleTheme}>
        {theme === "Light" ? "Dark" : "Light"}
      </button>

      <div className="container" style={getThemeStyles()}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>
        <Profiles />
      </div>
    </div>
  );
}


export default App;
