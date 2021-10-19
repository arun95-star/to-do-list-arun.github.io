import { useState } from 'react/cjs/react.development';
import './App.css';
import InputArea from './components/InputArea';
import TodoItems from './components/TodoItems';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) =>{
    setItems((prevItems)=>{
      return [...prevItems, inputText]
    });
  };

  const deleteItems = (id) =>{
    setItems((prevItems) =>{
      return prevItems.filter((item, index) =>{
        return index!==id;
      });
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>To Do List</h1>
        <InputArea addItems={addItems}/>
        <div>
          <ul>
            {
              items.map((item, index)=>{
                return (
                  <TodoItems key={index} text={item} deleteItem={deleteItems} id={index}/>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
