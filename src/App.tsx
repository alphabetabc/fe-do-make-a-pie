import { BrowserRouter } from "react-router-dom";
import { BASE_URL } from "@Common/constant";
import Pages from "@Pages";
import "./App.less";

function App() {
    return (
        <BrowserRouter basename={BASE_URL}>
            <div className="App">
                <Pages />
            </div>
        </BrowserRouter>
    );
}

export default App;
