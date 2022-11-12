import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/data_kategori_product.json"
import Gallery2 from "../components/Gallery2";

const ListProduct = () => {
    const { uuid } = useParams();

    const product = data.find(item => item.Uuid === uuid)    

    return (
        <div>
            <Gallery2 title={product.Title}/>
        </div>
    );
}
export default ListProduct;