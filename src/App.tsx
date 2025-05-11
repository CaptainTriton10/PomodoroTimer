import { ThemeProvider } from "./components/ThemeProvider";
import Timer from "@/components/Timer";

function App() {
    return (
        <ThemeProvider defaultTheme="dark">
            <Timer/>
        </ThemeProvider>
    );
}

export default App;
