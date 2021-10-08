import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import '../admin/AddProduct.scss'
import ProductTable from '../components/ProductTable';
// import DateFnsUtils from '@date-io/date-fns'
// import 'date-fns'

const AddProduct = () => {
    const [spacex, setspacex] = useState({
        model: "",
        price: "",
        year: "",
        photo: "",
        weight: "",
        power: "",
    })
    const { createProduct } = useContext(adminContext)
    function handleInputs(e) {
        let newProduct = {
            ...spacex,
            [e.target.name]: e.target.value
        }
        setspacex(newProduct)
    }
    return (
        <div >
            <div className="add-inputs">
                <form className="inpForm" style={{border: "solid 1px grey " }}>
                    <TextField value={spacex.model} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
                    <TextField value={spacex.price} id="standard-basic" label="Цена" name="price" onChange={handleInputs} />
                    <TextField type="date" value={spacex.year} id="standard-basic" label="" name="year" onChange={handleInputs} />
                    <TextField value={spacex.photo} id="standard-basic" label="Фото" name="photo" onChange={handleInputs} />
                    <TextField type="number" value={spacex.weight} id="standard-basic" label="Вес" name="weight" onChange={handleInputs} />
                    <TextField value={spacex.power} id="standard-basic" label="мощность" name="power" onChange={handleInputs} />                
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !spacex.model.trim() ||
                                !spacex.price.trim() ||
                                !spacex.year.trim() ||
                                !spacex.photo.trim() ||
                                !spacex.weight.trim() ||
                                !spacex.power.trim()) {
                                alert("Заполните описание")
                                return
                            }
                            createProduct({

                                model: spacex.model.trim(),
                                price: spacex.price.trim(),
                                photo: spacex.photo.trim(),
                                weight: spacex.year.trim(),
                                year: spacex.weight.trim(),
                                power: spacex.power.trim(),                            })
                        }}
                        variant="outlined"
                        color="secondary"
                    >
                        Создать ✔︎
                    </Button>
                </form>
            </div>
            <ProductTable/>
        </div>
    );
};

export default AddProduct;