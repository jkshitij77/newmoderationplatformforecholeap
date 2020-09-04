// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import WriterPage from './WriterPage';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModeratorPage from './ModeratorPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/writerpage" component={WriterPage} />
        <Route exact path="/moderatorpage" component={ModeratorPage} />
      </div>
    </Router>
  );
}

export default App;
