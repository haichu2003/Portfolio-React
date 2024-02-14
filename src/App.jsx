import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="App"
            style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode ? "white" : "#222",
                alignContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "70%",
                    margin: "auto",
                }}
            >
                <Toggle />
                <Intro />
                <About />
            </div>
        </div>
    );
}

export default App;
