import { Button, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editspacex, setEditspacex] = useState({})
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setEditspacex(productToEdit)
    }, [productToEdit])
    useEffect(() => {
        getProductToEdit(id)
    }, [])
    const handleInputs = (e) => {
        let obj = {
            ...editspacex,
            [e.target.name]: e.target.value
        }
        setEditspacex(obj)
    }

    // console.log(editspacex.model)
    return (
        <div>
            {
                editspacex ? (
                    <div className="add-inputs">
                        <form className="inpForm">
                        <TextField value={editspacex.model} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
                    <TextField value={editspacex.price} id="standard-basic" label="Цена" name="price" onChange={handleInputs} />
                    <TextField type="date" value={editspacex.year} id="standard-basic" label="" name="year" onChange={handleInputs} />
                    <TextField value={editspacex.photo} id="standard-basic" label="Фото" name="photo" onChange={handleInputs} />
                    <TextField type="number" value={editspacex.weight} id="standard-basic" label="Вес" name="weight" onChange={handleInputs} />
                    <TextField value={editspacex.power} id="standard-basic" label="мощность" name="power" onChange={handleInputs} />                
                    
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !editspacex.model ||
                                !editspacex.price ||
                                !editspacex.photo ||
                                !editspacex.year ||
                                !editspacex.weight ||
                                !editspacex.power
                                ) {
                                alert("Заполните описание")
                                return
                            }
                                    saveEditedProduct(editspacex)
                                    history.push('/admin')
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Сохранить изменения ✔︎
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default EditProduct;