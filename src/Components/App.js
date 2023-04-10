import react from "react"

import Header from "./Header";
import LeftPage from "./LeftPage";
import MiddlePage from "./MiddlePage";
import RightPage from "./RightPage";


function App() {
  return (
    <div className="App">
     <Header />
     <div className="App_1">
     <LeftPage />
     
     <MiddlePage />
     <RightPage />
     </div>
    </div>
  );
}

export default App;
