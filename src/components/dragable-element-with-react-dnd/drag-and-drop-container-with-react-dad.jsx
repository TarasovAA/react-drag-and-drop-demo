import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableElement from './draggable-element'
import  DropTarget from './drop-target'
import style from './drag-and-drop.module.css'
import CardInfo from './card-info'

import {useState, useEffect, useCallback} from 'react'

const DragAndDropContainerWithReactDND = ({listImages}) => {

    const [elements, setElements] = useState([]);
    const [draggedElements, setDraggedElements] = useState([]);

    const handleDrop = (itemId) => {
        setDraggedElements([
            ...draggedElements,
            ...elements.filter(el => el.id === itemId.id)
        ]);
        
        setElements([
            ...elements.filter(el => el.id !== itemId.id)
        ]);

        

        console.log('Hello world')
    }

    useEffect(() => {
        setElements([...listImages]);
    }, []);

    function swap(arr, a, b) {
        let value = arr[a];
        arr[a] = arr[b];
        arr[b] = value;
      }
      
    const moveCard = useCallback((dragIndex, hoverIndex) =>{
        console.log(dragIndex, hoverIndex)
            const newDraggedElements = [...draggedElements];
            swap(newDraggedElements, dragIndex, hoverIndex)
            setDraggedElements(newDraggedElements);
    }, [draggedElements])

    return (
        <section>
            <DndProvider backend={HTML5Backend}>
                <article style={{display: 'flex'}}>
                    <div>
                        {
                            elements.map(item => <DraggableElement key={item.id} data={item}  />)
                        }
                    </div>

                <DropTarget onDropHandler={handleDrop} >
                    {
                        draggedElements && draggedElements.map((item, index) => (
                            <CardInfo item={item}
                                        key={item.id}
                                        id={item.id}
                                        index={index}
                                        moveCard={moveCard} />
                        ))
                    }
                </DropTarget>
                </article>

            </DndProvider>
        </section>
    );
}

export default DragAndDropContainerWithReactDND;