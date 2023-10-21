import { useState } from "react"
import './NewProduct.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form';

const NewProduct = () => {

    const [product, setProduct] = useState({
        name: '',
        detail: '',
        stock: 0,
        price: 0,
        image: ''
    })

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState()

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setProduct({
                ...product,
                image: (reader.result)
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/grafica/products', product)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="containerCreateProduct">
            <div className="containerForm">
                <form onSubmit={handleSubmit} className="formCreateNewProduct">
                    <h3 className="titleFormProduct">Nuevo Producto</h3>
                    <div className='labelsAndInputs'>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='labelsAndInputs'>
                        <label htmlFor="detail">Detalle</label>
                        <input
                            type="text"
                            id="detail"
                            name="detail"
                            value={product.detail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='labelsAndInputs'>
                        <label htmlFor="stock">Stock</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='labelsAndInputs'>
                        <label htmlFor="price">Precio</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <Form.Group controlId="formFile" className='labelsAndInputs'>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" onChange={handleFileInputChange} value={fileInputState} className="labelBootstrap" />
                    </Form.Group>
                    <button type="submit" className="buttonSubmit">Guardar</button>
                </form>
            </div>
            <div className="containerCardPreview">
                <div className="containercard">
                    <div className="card-content">
                        {previewSource ? <img src={previewSource} alt="" className="imagencard" /> : <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" className="imagencard" />}
                        <div className="info-container">
                            <div className="info">{product.detail ? product.detail : 'Texto de ejemplo:'}</div>
                        </div>
                    </div>
                    <p className="nombrecard">{product.name ? product.name : 'Producto'}</p>
                    <p className="preciocard">${product.price}</p>
                    <button className='agregaralcarrito'>Agregar al carrito</button>
                </div>
            </div>


        </div>
    )
}

export default NewProduct