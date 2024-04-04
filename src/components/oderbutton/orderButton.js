'use client';
import Link from 'next/link';
import styles from './orderButton.module.css';
import { useBasket } from '@/context/basket.context';
import { useEffect, useState } from 'react';
const OrderButton = ({title, id}) => {

    const {basket, addToBasket, isInBasket} = useBasket();
    const [inBasket, setInBasket] = useState(false);

    

    const add = () => {
        addToBasket(id);
        setInBasket(isInBasket(id))
    }

    useEffect( () => {
        setInBasket(isInBasket(id))
    }, [basket, id, isInBasket])
    
    return <div>
        {inBasket ? <div className={styles.btn}>
                <div className={styles.btnContent}>{inBasket ? 'In basket' : 'Add to basket'}</div>
            </div> 
            : <div className={styles.btn} onClick={() => add()}>
                <div className={styles.btnContent}>{title} - {inBasket.toString()}</div>
            </div> }
    </div>
    
            
    

};
export default OrderButton