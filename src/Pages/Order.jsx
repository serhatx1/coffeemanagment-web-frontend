import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderCoffee = () => {
  const [beverages, setBeverages] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchBeverages = async () => {
      try {
        const response2 = await axios.get('http://localhost:8080/orders/get');
        const response = await axios.get('http://localhost:8080/coffee/get');
        setOrders(response2.data);
        setBeverages(response.data);
      } catch (error) {
        console.error('Error fetching beverages:', error);
      }
    };

    fetchBeverages();
  }, []);

  const handleSelectBeverage = (id) => {
    setSelectedBeverages((prev) => [...prev, { ID: id }]);
  };

  const handleRemoveBeverage = (id) => {
    setSelectedBeverages((prev) => prev.filter(beverage => beverage.ID !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure the payload format is correct
      console.log(selectedBeverages);

      const response = await axios.post('http://localhost:8080/product/order', { Beverages: selectedBeverages });
      console.log('Order placed:', response.data);
      setOrder(response.data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleCompleteOrder = async () => {
    if (!order || !order.id) return;
    try {
      const response = await axios.post(`http://localhost:8080/coffee/order`, { id: order.id });
      console.log('Order completed:', response.data);
      setOrder(response.data);
    } catch (error) {
      console.error('Error completing order:', error);
    }
  };

  return (
    <div>
      
      <h2>Order Coffee</h2>
      
      <form onSubmit={handleSubmit}>
        <h3>Select Beverages</h3>
        <div>
          {beverages.map((beverage) => (
            <div key={beverage.ID}>
              <input
                type="checkbox"
                checked={selectedBeverages.some(b => b.ID === beverage.ID)}
                onChange={() =>
                  selectedBeverages.some(b => b.ID === beverage.ID)
                    ? handleRemoveBeverage(beverage.ID)
                    : handleSelectBeverage(beverage.ID)
                }
              />
              {beverage.DrinkName} - ${beverage.Price}
            </div>
          ))}
        </div>

        <button type="submit">Place Order</button>
      </form>

      {orders.map((o) => (
            <div key={o.ID}>
             {console.log(o)}
             {o.Completed==false?
              <div>Pending</div>
              :
              <div>Completed</div>
             }
              {o.ID} - ${o.Completed}-{o.Price}
            </div>
          ))}
    </div>
  );
};

export default OrderCoffee;
