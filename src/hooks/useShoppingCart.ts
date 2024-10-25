export type Item = {
  id: string;
  name: string;
  price: number;
};

const useShoppingCart = () => {
  const shoppingCart = localStorage.getItem('cart')

  const addItem = (item: Item) => {
    if(!shoppingCart) {
      localStorage.setItem('cart', JSON.stringify([item]));
      return
    }
    const cart = JSON.parse(shoppingCart);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  const removeItem = (item: Item) => {
    if(!shoppingCart) {
      return
    }
    const cart = JSON.parse(shoppingCart);
    localStorage.setItem('cart', JSON.stringify(cart.filter((cartItem: Item) => cartItem.id !== item.id)));
  };

  const totalAmmount = shoppingCart ? JSON.parse(shoppingCart).reduce((acc: number, item: Item) => acc + item.price, 0) : 0;
  const totalItems = shoppingCart ? JSON.parse(shoppingCart).length : 0;

  return {
    shoppingCart: shoppingCart ? JSON.parse(shoppingCart) : [],
    addItem,
    removeItem,
    totalAmmount,
    totalItems
  };
}

export default useShoppingCart;