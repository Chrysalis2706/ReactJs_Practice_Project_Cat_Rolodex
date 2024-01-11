// import { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


// FUNCTIONAL COMPONENTS

const App = () => {

  // taking and manipluating state using useState hook

  const [searchStringIni, setSearchString] = useState(''); // will give us array of two value -> initial value, setvalue function

  // Creating monster array 
  const [monsters, setMonsters] = useState([]);

  // Creating filtered array
  const [filter_arr, setFilter] = useState(monsters);

  // ALWAYS Use useEffect hook to make API calls

  useEffect(() => {
    console.log("effect took place");
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // The above code will mount only once as we need to fetch only one time and will create a side effect in form of dependency array after calling callback function

  const onSearchChange = (event) => {
    console.log(event.target.value);
    let searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  }

  // MANIPULATE WHEN either monster array change or search field change
  useEffect(() => 
  {
    const newArr = monsters.filter((element) => {
      return element.name.toLowerCase().includes(searchStringIni)
    });

    setFilter(newArr); 
  }, [monsters, searchStringIni]); 

  return (
    <div className="App">

      <h1 className='app-title'>Cat Rolodex</h1>

      {/* // search component  */}

      {/* <input className='search-box' placeholder='seach here' type='search' onChange={this.onSearchChange}></input> */}

      <SearchBox placeholder="search" className="monster-search-box" onChangeHandler={onSearchChange}></SearchBox>

      {/* {
          filter_arr.map((monster) => { // using keys should collapse the warning each element should have a key
            return <h1 key={monster.id}>
              {monster.name}
            </h1>
          })
        } */}

      {/* my new component */}
      <CardList monsters={filter_arr}></CardList>
    </div>
  )
}


// CLASS COMPONENTS

// class App extends Component {

//   constructor(){

//     super(); // will refer to the Parent class as well
//     // this.state = {
//     //   monster1 : {
//     //     name: 'ABC'
//     //   },
//     //   monster2 : {
//     //     name: 'DEF'
//     //   },
//     //   monster3 : {
//     //     name: 'GHI'
//     //   }
//     // };

//     // creating the array of json objects

//     // this.state = {
//     //   monsters : [
//     //     {
//     //       id : 123,
//     //       name : 'ABC'
//     //     },
//     //     {
//     //       id : 234,
//     //       name : 'DEF'
//     //     },
//     //     {
//     //       id : 345,
//     //       name : 'GHI'
//     //     },
//     //     {
//     //       id : 456,
//     //       name : 'JKL'
//     //     }
//     //   ]
//     // };

//     // create blank array
//     this.state = {
//       monsters : [],
//       searchString : ''
//     };
//   }

//   // Constructor ends here

//   // create seperate functions to optimize code
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     let searchString = event.target.value.toLowerCase();
//     this.setState(
//       () => {
//         return {searchString : searchString};
//       },
//       () => {
//         console.log("Ran successfully");
//       }
//     )
//   }

//   render(){

//     // create the variable as locale to use here for code optimization
//     const {monsters, searchString} = this.state;
//     const {onSearchChange} = this;

//     // change the original array here and modify the constructor
//     const filter_arr = monsters.filter((element) => {
//       return element.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Cat Rolodex</h1>

//         {/* // search component  */}

//         {/* <input className='search-box' placeholder='seach here' type='search' onChange={this.onSearchChange}></input> */}

//         <SearchBox placeholder="search" className="monster-search-box" onChangeHandler={onSearchChange}></SearchBox>

//         {/* {
//           filter_arr.map((monster) => { // using keys should collapse the warning each element should have a key
//             return <h1 key={monster.id}>
//               {monster.name}
//             </h1>
//           })
//         } */}

//         {/* my new component */}
//         <CardList monsters={filter_arr}></CardList>
//       </div>
//     )
//   };

//   // Making API Call using React Life cycle
//   componentDidMount(){
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(response => response.json())
//       .then((users )=> {
//         this.setState(
//           () => {
//             return {monsters : users};
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       })
//   }
// }
export default App;
