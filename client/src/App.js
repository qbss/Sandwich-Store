import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import './App.css';
import axios from 'axios';

// const AuthState = {
//   isAuthenticated: false,
//   login(cb) {
//     console.log("Authorize state: true");
//     this.isAuthenticated = true;
//     return cb;
//   },
//   logout(cb) {
//     this.isAuthenticated = false;
//     return cb;
//   }
// };

// const ProtectedRoute = ({ component: Component, test, ...rest }) => (   
//   // return(
//     <Route {...rest} render={(props) => (
//       AuthState.isAuthenticated === true
//       ? <Component {...props} test={test} />
//       : <Redirect to='/' />
//     )} />
//   // )
// )

class App extends Component {

  state = {
    data: null,
    inventory: [],
    counter: 0
  }

  // ==App functionality==
  //1. A start screen prompts the user to begin their order
  //2. A list of menu items displays different sandwiches that are available. Clicking a sandwich lets you customize with different toppings.
  //3. After clicking a sandwich, a list of ingredients replaces the menu items. The user can freely toggle which ingredients they desire, and can select a prompt to go to the next page.
  //4. The ingredients are separated into dofferent pages in this order: Condiments, Cheese, vegetables
  //5. The order panel on the right side of the page displays the sandwich, with the ingredients under it, that the user has ordered.
  //6. Once the user copletes the order for one sandwich, they are prompted to either order another sandwich or submit their order
  //7. A confirmation screen is displayed for the user to confirm or edit their order if needed.
  //8. After the user submits their order, a thank you message is displayed, and the app returns to the start screen.

  componentDidMount() {
    this.getMenuData(() => {});

  }
  
  getMenuData = callback => {
    axios.get("/api/menu")
    .then(res => {
      console.log('Menu Data:', res.data);
      const inventory = this.cloneIngredients(res.data.ingredients);
      this.setState({
        data: res.data,
        inventory: inventory
      });
      console.log('Inventory:', this.state.inventory);
    }).catch( err => console.log(err));

    return callback();
  }

  cloneIngredients = ingredients => {
    const ingrClone = ingredients.map( ingredient => {
      let newObj = Object.assign({}, ingredient);
      newObj.newStock = ingredient.stock;
      return newObj;
    });
    return ingrClone;
  }
  
  menuRender = (props) => {
    if (this.state.data) {
      return <Menu {...props}
        menuData={this.state.data}
        inventory={this.state.inventory}
        getMenuData={() => this.getMenuData()}
        />
    }

    return <h1>{'Loading ....'}</h1>
  }

  handleInventoryChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newInventory = this.state.inventory;

    newInventory.forEach( ingredient => {
      if( ingredient.name === name ){
        ingredient.newStock = value;
      }
    });

    this.setState({
      inventory: newInventory,
    });
  }

  render() {

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route 
            exact path="/admin" 
            render={(props) => 
              <Admin {...props}
                inventory={this.state.inventory}
                getMenuData={(cb) => this.getMenuData(cb)}
                handleInventoryChange={(event) => this.handleInventoryChange(event)}
              />
            }
          />
          <Route 
            exact path="/menu" 
            render={(props) => this.menuRender(props)} 
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
