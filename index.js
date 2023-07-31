import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route,Routes,Link,NavLink,Switch} from "react-router-dom";
import App from "./home";
import App2 from "./about";
import App3 from "./joinus";
const routing =(
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<App2/>}/>
                <Route path="/joinus" element={<App3/>}/>
            </Routes>
        </div>
    </Router>
)
ReactDOM.createRoot(document.getElementById("root")).render(routing);