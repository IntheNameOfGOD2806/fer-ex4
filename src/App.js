import logo from './logo.svg';
import './App.css';

function App() {
  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ]
  // Find the first person off the people array is teenager (age >=10 and age <=20)
  var teenager = people.find(person => person.age >= 10 && person.age <= 20);
  // Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
  var allTeenagers = people.every(person => person.age >= 10 && person.age <= 20);
  // Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false
  var someTeenagers = people.some(person => person.age >= 10 && person.age <= 20);
  var array = [1, 2, 3, 4]

  var sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  // ---------------------------------------------
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    {
      name: "Company Five", category: "Technology", start: 2009, end:
        2014
    },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    {
      name: "Company Eight", category: "Technology", start: 2011, end:
        2016
    },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  // Print the name of each company using forEach
  companies.forEach(company => console.log(company.name));
  // Print the name of each company that started after 1987
  companies.filter(company => company.start > 1987).forEach(company => console.log(company.name));
  // Sort the companies based on their end date in ascending order
  companies.sort((a, b) => a.end - b.end);
  // Sort the ages array in descending order
  ages.sort((a, b) => b - a);
  // Print the sum if you add all the ages using reduce
  ages.reduce((a, b) => a + b);
  // Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
  const newObject = {...companies[0], print: () => console.log(companies[0].name)};
  // Create a function that takes an unknown number of arguments that are numbers and return their sum;
  const sum1 = (...rest) => rest.reduce((a, b) => a + b);
  // Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function
  const sum2 = (...rest) => rest.reduce((a, b) => a.concat(b), []);
  // Destructuring the property street in a variable named street from the object person
  const { street } = person.address;
  // Write a function that every time you call it, it returns a number that increments starting from 0
  let counter = 0;
  const increment = () => {
    return counter++;
  };
  // Create a function that destructors the query parameters of a URL and adds them in an object that has key value pairs and then returns the object
  function getQueryParams(url) {
    const params = {};
    const urlObject = new URL(url);
    const queryString = urlObject.searchParams;
  

    queryString.forEach((value, key) => {
      params[key] = value;
    });
  
    return params;
  }
//Write promise function that displays random number larger than 5. If number is small than or equal to 5, please show notice: “Error”
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber > 5) {
    resolve(randomNumber);
  } else {
    reject("Error");
  }
});

  return (
    <div className="App">
      <nav style={{
        backgroundColor: '#333',
        padding: '10px'
      }}>
        <ul className='ul1'>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">Search</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">login</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1 style={
          {
            color: 'blue'
          }
        }>
          Hello React
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{
            color: 'blue'
          }}
        >
          This is the react logo
        </p>
        <p
          style={{
            color: 'grey'
          }}
        >
          asdadsdasdadadadad
        </p>
      </header>
      <main>

        <div style={{
          color: 'blue'
        }}>
          <h1>This is Jsx</h1>
        </div>
        <h2>
          COurse Name
        </h2>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ul
            className='ul2'
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <li>React</li>
            <li>react native</li>
            <li>nodejs</li>
          </ul>
        </div>


      </main>
    </div>
  );
}

export default App;
