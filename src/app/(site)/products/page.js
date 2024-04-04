import { getProducts } from '@/lib/data.service';
import ProductsList from '@/components/products/productsList';
import Basket from '@/components/basket/basket';
import styles from './page.module.css';
const Page = async () => {

    let products = await getProducts()

    return (
        <div className={styles.container}>
            
            <div>
                <h1>Products List</h1>
                <ProductsList products={products}/>
            </div>
            <div>
                <h2>Basket</h2>
                <Basket></Basket>
            </div>

        </div>
    )
};
export default Page