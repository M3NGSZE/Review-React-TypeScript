// import { Button } from "flowbite-react";
import "./App.css";
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";

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

  // const [count, setCount] = useState(0) 
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }).catch((_err) => {
        setStatus("error")
      })

  }, [])

  // console.log(status)

  if(status === "loading"){
    return(
      <div className="grid place-content-center">
        <h1 className="text-6xl">Loading</h1>
      </div>
    )
  }

  return (
    <>
      {/* <div className="grid place-content-center">
        <h1 className="text-center">{count}</h1>
        <Button onClick={() => setCount(count + 1)}>This is test Button</Button>
      </div> */}

      <div className="mx-16 grid grid-flow-row grid-cols-4 gap-4">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
