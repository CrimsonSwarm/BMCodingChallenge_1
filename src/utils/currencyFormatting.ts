
const priceInEuro = (input: number) => {
    return (input).toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
}

export default priceInEuro;