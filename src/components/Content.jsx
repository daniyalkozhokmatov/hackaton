import React, { useContext, useEffect } from 'react';
import { clientContext } from '../contexts/ClientContext';
import PPagination from './PPagination';
import '../Content.scss'
import StarShip from './StarShip';

const Content = () => {
    const { products, getProducts, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            {
                products ? (
                    <div className="content">
                        <div className="content-block">
                            {
                                currentPosts.map(item => (
                                    <StarShip item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <PPagination />
                    </div>
                ) : (
                    <h2>  Loading...</h2>
                )
            }
        </>
    );
};

export default Content;