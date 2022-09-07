import { BrowserRouter } from "react-router-dom";

import Pages from "@Pages";
import "./App.less";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Pages />
            </div>
        </BrowserRouter>
    );
}

export default App;
