import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';

const BeverageForm = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    drinkName: '',
    price: '',
    calories: '',
    imageUrl: '',
    recipe: {
      Milk: 0,
      MilkLactoseFree: 0,
      Arabica: 0,
      Robusta: 0,
      Espresso: 0,
      Mugs: 0,
      VanillaSyrup: 0,
      CaramelSyrup: 0,
      NutSyrup: 0,
      Cream: 0
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      recipe: {
        ...formData.recipe,
        [name]: parseInt(value) || 0
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      calories: parseFloat(formData.calories),
      recipe: JSON.stringify(formData.recipe)  // Convert recipe to JSON string
    };

    try {
      const response = await axios.post('http://localhost:8080/coffee/create', payload);
      console.log('Beverage added successfully:', response.data);
    } catch (error) {
      console.error('Error adding beverage:', error);
    }
  };
  return (
    <form  className='CoffeeCreate' onSubmit={handleSubmit}>
      <h1 style={{textAlign:"center"}}>Create Coffee</h1>
      <div className="CoffeeSubSub">
      <div className='CoffeeSub'>
        <h5>Properties of coffee</h5>
      <div className='Properties'>
        <label>Temperature:</label>
        <input
          type="text"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
        />
      </div>
      <div className='Properties'>
        <label>Drink Name:</label>
        <input
          type="text"
          name="drinkName"
          value={formData.drinkName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='Properties'>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className='Properties'>
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          required
        />
      </div>
      <div className='Properties' >
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      
   

      </div>
     <div className='line'></div>
       <div className='Recipe'>
        <h5>Recipe (Stock Values)</h5>
        <div className='Properties'>
        <label>Milk:</label>
        <input
          type="number"
          name="Milk"
          value={formData.recipe.Milk}
          onChange={handleRecipeChange}
        />
        </div>
       <div className='Properties'><label>Milk Lactose-Free:</label>
        <input
          type="number"
          name="MilkLactoseFree"
          value={formData.recipe.MilkLactoseFree}
          onChange={handleRecipeChange}
        /></div>
        <div className='Properties'> <label>Arabica:</label>
        <input
          type="number"
          name="Arabica"
          value={formData.recipe.Arabica}
          onChange={handleRecipeChange}
        /></div>
       <div className='Properties'> <label>Robusta:</label>
        <input
          type="number"
          name="Robusta"
          value={formData.recipe.Robusta}
          onChange={handleRecipeChange}
        /></div>
       <div className='Properties'><label>Espresso:</label>
        <input
          type="number"
          name="Espresso"
          value={formData.recipe.Espresso}
          onChange={handleRecipeChange}
        /></div>
        <div className='Properties'> <label>Mugs:</label>
        <input
          type="number"
          name="Mugs"
          value={formData.recipe.Mugs}
          onChange={handleRecipeChange}
        /></div>
       <div className='Properties'> <label>Vanilla Syrup:</label>
        <input
          type="number"
          name="VanillaSyrup"
          value={formData.recipe.VanillaSyrup}
          onChange={handleRecipeChange}
        /></div>
       <div className='Properties'><label>Caramel Syrup:</label>
        <input
          type="number"
          name="CaramelSyrup"
          value={formData.recipe.CaramelSyrup}
          onChange={handleRecipeChange}
        /></div>
        <div className='Properties'> <label>Nut Syrup:</label>
        <input
          type="number"
          name="NutSyrup"
          value={formData.recipe.NutSyrup}
          onChange={handleRecipeChange}
        /></div>
       <div className='Properties'> <label>Cream:</label>
        <input
          type="number"
          name="Cream"
          value={formData.recipe.Cream}
          onChange={handleRecipeChange}
        /></div>
       
      </div>
    
       </div>
       <div className='button'>
      <button type="submit">Add Beverage</button>

       </div>
       <div style={{borderBottom:"1px solid #fff"}}> </div>
    </form>
  );
};

export default BeverageForm;
