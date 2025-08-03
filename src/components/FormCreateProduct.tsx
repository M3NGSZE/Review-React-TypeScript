import { Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

type ErrorType = {
    title: string,
    price: number
}

export function FormCreateProduct() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0.0)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Electronic");
    const [image, setImage] = useState("https://flowbite-react.com/images/products/apple-watch.png");

    const [error, setError] = useState<ErrorType>({
        title: "",
        price: 0.0
    })

    // validation
    useEffect(() => {

    }, [title, price])

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="title">Product Title</Label>
                </div>
                <TextInput
                    id="title"
                    type="text"
                    placeholder="Apple Vision Pro"
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="price">Product Price</Label>
                </div>
                <TextInput id="price" type="number" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="description">Product Price</Label>
                </div>
                <Textarea id="description" />
            </div>
        </form>
    );
}
