import { Button } from "flowbite-react";
import "./App.css";
import { useEffect, useState } from "react";

type Status = 'idle' | 'loading' | 'success' | 'error'
type Products = {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly image: string;
};

function App() {

  const [count, setCount] = useState(0) 
  const [products, setProducts] = useState<Products[]>([]);
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    // console.log("Component mounted")
    // document.title = "redner: " + count

    setStatus("loading");
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setStatus("success")
      }).catch(err => {
        setStatus("error")
      })

  }, [])

  return (
    <>
      <div className="h-screen grid place-content-center">
        <h1 className="text-center">{count}</h1>
        <Button onClick={() => setCount(count+1)}>This is test Button</Button>
      </div>
    </>
  );
}

export default App;
