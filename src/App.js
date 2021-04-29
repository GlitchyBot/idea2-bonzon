import {useState} from 'react'
import './App.css';
import {booksData} from'./components/item/item'

function App() {

// const [books, setBook] = useState('')




// const handleClick = () => {
//   let pedirLista = new Promise((resolve, reject)=>{
//   console.log('Generando Lista');
//       setTimeout(()=> {
//         resolve('Prueba')
//       }, 2000);
//   })
//   pedirLista
//   .then((book) =>{
//     setBook(book)
//     console.log('receibi el libro', book);
//   })
  
  

//   // console.log(pedirLista());
//  }


  // return (
  //   <div className="App">
  //     <h1>Clase 6</h1>
  //     <button onClick={handleClick}>Generar lsita</button>
  //     {/* {
  //       books.length && books.map(book => <p>{book}</p>)
  //     } */}
  //     <p>{books}</p>

  //   </div>
  // );
  const getBooks = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 3000)
    })
}
useEffect(() => {
    getBooks( booksData )
    .then(result => {
        console.log(result)
        setBooks(result);
    });
}, [])
}

export default App;
