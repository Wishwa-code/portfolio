import './App.css';

function App() {
  return (
    <div className="App">
      <div id="main-container">
        <div id="vertical-button-left">
          <p id="vertical-text">@email.com</p>
        </div>
        <div id="vertical-button-right">
          <p>this is the sticky button right</p>
        </div>
        <div id="header">
          <div id="left-side-nav">
            <p>logo</p>
          </div>
          <div id="right-side-nav">
              <ul>
                <li>About</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
          </div>
        </div>
        <div id="body">
          <div id="section-1">
            <p>section 1</p>
          </div>
          <div id="section-2">
            <p> section 2</p>
          </div>
          <div id="section-3">
            <p>section 3</p>
          </div>
        </div>
        <div id="footer">
          <p>this is the footer</p>
        </div>
       
      </div>
    </div>
  );
}

export default App;
