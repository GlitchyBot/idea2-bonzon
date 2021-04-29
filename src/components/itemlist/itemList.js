import '../item/item'
import { bookData } from '../item/item'


export const ItemList = () => ( 
                  
      <div>
              <h2>{bookData.name}</h2>
              <p>{bookData.price}</p>
              <p>{bookData.description}</p>
              <p>{bookData.stock}</p>                          
    
      </div>
)