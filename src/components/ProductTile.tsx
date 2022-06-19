import React from 'react';
import priceInEuro from './../utils/currencyFormatting'
import styles from './../../styles/ProductTile.module.css'

type TileProps = {
    // imageUrl?: string,
    imageUrl: string,
    name: string,
    price: number,
    unit: string,
}

// ?imwidth=175

export const ProductTile = ({ imageUrl, name, price, unit }: TileProps) => {

    const url = "https:" + imageUrl;
    const imgUrl = new URL(url);
    const imgWidth: null | string = imgUrl.searchParams.get("imwidth");
    console.log(typeof imgWidth)
    console.log('imgwidth ', imgWidth)

    return (
        <div className={styles.productTileContainer}>
            <section>
                <img className={styles.productImage} src={imageUrl} alt="product-pic" width={imgWidth ? imgWidth : 175}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
                    }} />
                <p className={styles.productName} style={{ textOverflow: 'ellipsis' }}>{name}</p>
            </section>

            <div className={styles.productPriceAndUnit}>
                <div>
                    <p className={styles.productPrice}>{priceInEuro(price)}</p>
                    <p className={styles.productUnit}>{unit}</p>
                </div>
                <button className={styles.productButton}>+</button>
            </div >


        </div >)

}
