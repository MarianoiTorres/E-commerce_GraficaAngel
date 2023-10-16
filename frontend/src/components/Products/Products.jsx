import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css'
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts, updateProduct } from "../../Redux/Actions/Actions";


const Products = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const [editProductId, setEditProductId] = useState(null)
    const [editedName, setEditedName] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editedStock, setEditedStock] = useState('');
    const [editedImage, setEditedImage] = useState('');
    const [productsToFilter, setProductsToFilter] = useState([])

    useEffect(() => {
        setProductsToFilter(products)
    }, [products])

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const handleEditClick = (productId) => {
        setEditProductId(productId);
        const productToEdit = products.find(product => product.id === productId);
        setEditedName(productToEdit.name);
        setEditedPrice(productToEdit.price);
        setEditedStock(productToEdit.stock);
        setPreviewSource(productToEdit.image)
    };

    const handleSaveClick = async (id) => {
        const product = {
            name: editedName,
            price: Number(editedPrice),
            stock: Number(editedStock),
            image: previewSource
        }
        dispatch(updateProduct(product, id))
        setEditProductId(null);
    };

    const searchProductByName = (event) => {
        const resultado = products.filter(product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setProductsToFilter(resultado)
    }

    // ------ CLOUDINARY -----

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
        }
    }


    return (
        <div className='products'>
            <div className="containerTitleProducts">
                <h1>PRODUCTOS</h1>
            </div>
            <div className="containerButtons">
                <input type="text" onChange={searchProductByName} placeholder="Buscar producto" className="searchProduct" />
            </div>


            <Table responsive bordered hover >
                <thead className="tableHead">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productsToFilter.length !== 0 && productsToFilter.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                {editProductId === product.id ? (
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                        className="inputEditProduct"
                                    />
                                ) : (
                                    product.name
                                )}
                            </td>
                            <td>$
                                {editProductId === product.id ? (
                                    <input
                                        type="text"
                                        value={editedPrice}
                                        onChange={(e) => setEditedPrice(e.target.value)}
                                        className="inputEditProduct"
                                    />
                                ) : (
                                    product.price
                                )}
                            </td>
                            <td>
                                {editProductId === product.id ? (
                                    <input
                                        type="text"
                                        value={editedStock}
                                        onChange={(e) => setEditedStock(e.target.value)}
                                        className="inputEditProduct"
                                    />
                                ) : (
                                    product.stock
                                )}
                            </td>
                            <td>
                                {
                                    editProductId === product.id ?
                                        <div class="input-file-container">
                                            <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} class="input-file"/>
                                            <label for="fileInput" class="custom-file-label">Seleccionar archivo</label>
                                        </div>
                                        : <img src={product.image} alt="" className="tableImage" />
                                }
                            </td>
                            <td >
                                {editProductId === product.id ? (
                                    <button onClick={() => handleSaveClick(product.id)}>Guardar</button>
                                ) : (
                                    <button onClick={() => handleEditClick(product.id)}>Editar</button>
                                )}
                            </td>
                            <td ><button className="buttonDeleteProduct" onClick={() => dispatch(deleteProduct(product.id))}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Products