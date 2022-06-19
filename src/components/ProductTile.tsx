import React from 'react';
import priceInEuro from './../utils/currencyFormatting'
import styles from './../../styles/ProductTile.module.css'

type TileProps = {
    amountInCart: number | undefined,
    imageUrl: string,
    name: string,
    price: number,
    unit: string,
}

export const ProductTile = ({ amountInCart, imageUrl, name, price, unit }: TileProps) => {

    const url = "https:" + imageUrl;
    const imgUrl = new URL(url);
    const imgWidth: null | string = imgUrl.searchParams.get("imwidth");

    return (
        <div className={styles.productTileContainer} style={{ position: 'relative' }}>
            {!!amountInCart && <div className={styles.amountInCart}>im Warenkorb: {amountInCart}x</div>}
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
