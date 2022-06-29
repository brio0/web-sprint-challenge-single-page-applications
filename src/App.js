import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pizza from './pizza';
import schema from './validation/formSchema';
import * as yup from 'yup';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
// import Pizza from './components/Pizza'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepporoni: false,
  sausage: false,
  onions: false,
  bacon: false,
  mushrooms: false,
  special: '',
}

const initialFormErros = {
  size: '',
  sauce: '',
  special: '',
}

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErros, setFormErros] = useState(initialFormErros);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [order, setOrder] = useState(initialFormValues)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErros({ ...formErros, [name]: '' }))
      .catch(err => setFormErros({ ...formErros, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const postOrder = orders => {
    axios.post('https://reqres.in/api/orders', orders)
      .then(res => {
        console.log(res.data)
        console.log(order)
        // setOrder(order => ({
        //   ...order,
        //   ...res.data
        // }))
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      special: formValues.special.trim(),
      toppings: ['pepporoni', 'sausage', 'onion', 'bacon', 'mushrooms'].filter(topping => !!formValues[topping])
    }

    postOrder(newOrder)

  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>

        <Link to='/pizza' id='order-pizza'>Order</Link>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>

        <Route path='/pizza' >
          <Pizza
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErros}
          />
        </Route>
        <Route path='/' >
          <Home />
        </Route>
      </Switch>

    </>
  );
};
export default App;
