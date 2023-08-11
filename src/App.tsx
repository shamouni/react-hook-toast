import { useEffect } from "react";
// import useToast from "./easyToast.hook";
import useToast from "react-hook-toast";
import "react-hook-toast/dist/style.css";

function App() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "hi, this is a sample",
      type: "success",
      interval: 50000,
    });
  }, []);

  return <div className="container"></div>;
}

export default App;
