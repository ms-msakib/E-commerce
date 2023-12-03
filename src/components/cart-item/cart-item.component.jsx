import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='card-item-container'>
            <h2>{name}</h2>
            <img src={imageUrl} alt={`${name}`} height='150px' />
            <div className='item-details' >
            <span className='name' >{name}</span>
            <span className='price'>{quantity} x ${price} </span>
            </div>
        </div>
    )
};
export default CartItem;