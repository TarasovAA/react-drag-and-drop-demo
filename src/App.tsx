import React from 'react';
import logo from './logo.svg';
import './App.css';
import DraggableAnimal from './components/draggable-animal/draggable-animal';
import DragAndDropContainer from './components/draggable-element-with-containers/drag-and-drop-container'
import DragAndDropContainerWithReactDND from './components/dragable-element-with-react-dnd/drag-and-drop-container-with-react-dad'


const listImages = [
  {
      id: 1,
      content: '🦔',
      description: 'Обыкнове́нный ёж - вид млекопитающих из рода евразийских ежей семейства ежовых.'
  },
  {
      id: 2,
      content: '🦒',
      description: 'Жираф - парнокопытное млекопитающее из семейства жирафовых.'
  },
  {
      id: 3,
      content: '🐜',
      description: 'Муравьи — семейство насекомых из надсемейства муравьиных.'
  },
];


function App() {
  const [elements, setElements] = React.useState<any[]>([]);

    React.useEffect(() => {
      setElements([
          ...listImages
      ])
  }, []);

  return (
    <section>

       {/* Исправно работает только перетаскивание ежа, и то, если раскоментить текст ниже, то и перетаскивание ежа ломается */}
     
       {/*<h2>Перетаскивание без drag-and-drop библиотек и без эдемента dragable</h2>*/}

      {elements.map((element) => <DraggableAnimal key={element.id} content={element.content} />)}
        
      <section style={{display: 'flex'}}>
         {/* При попытке засутнуть верхнуюю реализацию перетаскиванй в том же виде что и остальные реализации в итоге полностью ломает перетаскивание */}
            {/*
                <div style={{margin: '10px', border: '1px solid red'}}>
                <h2>Перетаскивание без drag-and-drop библиотек и без эдемента dragable</h2>
                <div style={{width: '33vw', height: '90vh', backgroundColor: 'gray', padding: '15px'}}>
                  {elements.map((element) => <DraggableAnimal key={element.id} content={element.content} />)}
                </div>
              </div>
        */}
        {/*Работает только при удаление ниже стоящего блока с реализацией  библиотекой DnD*/}
        <div style={{margin: '10px', border: '1px solid red'}}>
          <h2>Перетаскивание c пометкой dragable</h2>
          {<DragAndDropContainer listImages={listImages}/> }
        </div>

        {/*Исправно работает, но при этом почему-то ломает собой реализацию перетаскиваний c пометкой dragable */}
        <div style={{margin: '10px', border: '1px solid red'}}>
          <h2>Перетаскивание c использованием библиотеки DnD</h2>
          {<DragAndDropContainerWithReactDND listImages={listImages}/>}
        </div>
      </section>
     
      
    </section>
  );
}

export default App;
