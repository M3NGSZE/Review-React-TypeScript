import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import "./App.css";
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import { FormCreateProduct } from "./components/FormCreateProduct";

type Status = "idle" | "loading" | "success" | "error";
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
  const [status, setStatus] = useState<Status>("idle");
  const [openModal, setOpenModal] = useState(true);
  const [dataForm, setDataForm] = useState({})

  useEffect(() => {
    // console.log("Component mounted")
    // document.title = "redner: " + count

    setStatus("loading");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        setStatus("error");
      });
  }, []);

  // console.log(status)

  if (status === "loading") {
    return (
      <div className="grid place-content-center">
        <h1 className="text-6xl">Loading</h1>
      </div>
    );
  }

  function getDataForm(product: any){
    console.log(product)
  }

  return (
    <>
      {/* <div className="grid place-content-center">
        <h1 className="text-center">{count}</h1>
        <Button onClick={() => setCount(count + 1)}>This is test Button</Button>
      </div> */}

      <div className="flex justify-center my-6">
        <Button onClick={() => setOpenModal(true)}>Create Product</Button>
      </div>

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

      {/* modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Create Product</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <FormCreateProduct getDataForm = {getDataForm} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Create</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
