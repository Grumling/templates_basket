import OrderButton from '../oderbutton/orderButton';
import styles from './productsList.module.css';
import { getSlowProducts } from '@/lib/data.service';

const Product = ({product}) => {
    return (
        <div className={styles.product}>
            <h2>{product.title}</h2>
            <p>Product Description</p>

            <OrderButton title={product.title} id={product.id}></OrderButton>
        </div>
    )
}

const ProductsList = async ({products}) => {

    

    return (
        <div className={styles.container}>
           <div>
                <h1>Products</h1>
                {products.map( (product) => {

                    return <Product key={product._id} product={product}></Product>

                })}
           </div>
        </div>
    )
};
export default ProductsList