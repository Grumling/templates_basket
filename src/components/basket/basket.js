'use client';
import { useBasket } from '@/context/basket.context';
import styles from './basket.module.css';
import { useEffect, useState } from 'react';

const Basket = () => {

    const {basket, addToBasket, cleanBasket, getProductsForBasket} = useBasket();

    const [productsFromBasket, setProductsFromBasket] = useState([]);
    

    useEffect( () => {

        const getProducts = async () => {
            let p = await getProductsForBasket();
            setProductsFromBasket(p)
        };

        getProducts();

    }, [getProductsForBasket] );


    return (
        <div className={styles.container}>
            Basket
         
            {basket.map((product)=> {

                return <div key={product.id}>
                    Product {product.id} amount {product.amount}

                    <div className={styles.productAmountSelector}>
                        <div onClick={ () =>  addToBasket(product.id, parseInt(product.amount) + 1)}>+1</div>
                        <span>{product.amount}</span>
                        <div onClick={ () =>  addToBasket(product.id, parseInt(product.amount) - 1)}>-1</div>
                    </div>


          
                </div>
            })}


            <div onClick={() => cleanBasket()}>CLEAN BASKET</div>


            <h1>Producs From Basket</h1>
            {productsFromBasket.map( (p) => {

                return <div key={p.id}>
                    Product {p.id} amount {p.amount}
                </div>

            })}
        </div>
    )
};
export default Basket