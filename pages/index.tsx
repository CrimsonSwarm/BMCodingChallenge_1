import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import useGetCart from "../src/hooks/useGetCart";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import { ProductTile } from "../src/components/ProductTile";
const Home: NextPage = () => {

    const products = useGetProducts();
    const cart = useGetCart();
    console.log('cart', cart)
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    console.log('Product data is', products.data)
    console.log('Pack', products.data?.edges.filter(item => item.node.prices.basePrice === 0))
    useEffect(() => {
        if (cart.data) {
            setLoading(false)
        }
    }, [cart.data]);

    const filterProducts = (e: any) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>

            {loading ? <p>Loading...please wait</p> :
                <div className={styles.container}>

                    <h1>Cart</h1>
                    <pre>{JSON.stringify(cart.data?.products.length, null, 4)}</pre>

                    <h1>Products</h1>
                    <pre>{JSON.stringify(products.data?.pageInfo.totalCount, null, 4)}</pre>
                    <input type="search" placeholder="Search product" value={search} onChange={filterProducts} />
                    <div className={styles.gridContainer}>
                        {products.data?.edges.filter(prod => prod.node.name.includes(search) || prod.node.name.toLowerCase().includes(search)).map(item =>
                            <div className={styles.gridItem}>
                                <ProductTile
                                    key={item.node.id}
                                    imageUrl={item.node.image}
                                    name={item.node.name}
                                    price={item.node.prices.basePrice}
                                    unit={item.node.units[0].name}
                                />
                            </div>)}
                    </div>
                </div>}


        </div>
    );
};
export default Home;
