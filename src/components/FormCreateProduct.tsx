import { Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

type ErrorType = {
    title: string,
    price: string
}

type ProductData = {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

type FormCreateProductProps = {
    getDataForm: (data: ProductData) => void;
}

export function FormCreateProduct({getDataForm} : FormCreateProductProps) {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [category, setCategory] = useState("Electronic");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [image, setImage] = useState("https://flowbite-react.com/images/products/apple-watch.png");

    const [error, setError] = useState<ErrorType>({
        title: "",
        price: ""
    })

    // validation
    useEffect(() => {
        if(title.length < 3){
            setError((prev) =>  {
                // console.log("previous object: ", prev)
                return { ...prev, title: "Title must be at least 3"}
            })
        }else{
            setError((prev) =>  {
                // console.log("previous object: ", prev)
                return { ...prev, title: ""}
            })
        }
        if(price <= 0){
            setError((prev) => {
                // console.log("previous object: ", prev);
                return { ...prev, price: "Price must be greater than 0" };
            })
        }else{
            setError((prev) =>  {
                // console.log("previous object: ", prev)
                return { ...prev, price: "" };
            })
        }
    }, [title, price])

    useEffect(() => {
        getDataForm({ title, price, description, category, image })
    },[title, price, description, category, image])

    // Handle form submission
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!error.title && !error.price) {
    //     getDataForm({ title, price, description, category, image });
    //     }
    // };

    return (
        <form className="flex max-w-md flex-col gap-4" >
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="title">Product Title</Label>
                </div>
                <TextInput
                    id="title"
                    type="text"
                    placeholder="Apple Vision Pro"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                {error.title && <p className="text-red-500">{error.title}</p>}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="price">Product Price</Label>
                </div>
                <TextInput 
                    id="price" 
                    type="number" 
                    required 
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
                {error.price && <p className="text-red-500">{error.price}</p>}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="description">Product Price</Label>
                </div>
                <Textarea 
                    id="description" 
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
        </form>
    );
}
