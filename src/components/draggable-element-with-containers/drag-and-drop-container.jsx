import {useState, useEffect} from 'react'
import DraggableElement from './draggable-element'
import DropTarget from './drop-target'
import styles from './drag-and-drop.module.css';
  

const DragAndDropContainer = ({listImages}) => {
    const [elements, setElements] = useState([]);
    const [draggedElements, setDraggedElements] = useState([]);
    const [draggedElement, setDraggedElement] = useState({});

    useEffect(() => {
        setElements([...listImages]);
    }, []);

    console.log(draggedElement);

    const handleDrag = (event, draggedEl) => {
        event.preventDefault();

        if(draggedElement !== draggedEl){
            setDraggedElement(draggedEl);
        }
    }

    const handleDragOver = e =>{
        
        e.preventDefault();

        if(e.target.className === styles.target)
            e.target.style.border = "4px dotted purple";
    }

    const handleDragLeave = e =>{
        e.target.style.border = "";
    }


    const handleDrop = (e) => {
        setDraggedElements([
            ...draggedElements,
            draggedElement
        ]);

        setElements([...elements.filter(el => el.id !== draggedElement.id)]);

        setDraggedElement({});

        e.target.style.border = "";
    }


    return (
        <article style={{display: 'flex'}}>
            <div className={styles.container}>
                {elements.map(
                    (element, index) => 
                        <DraggableElement key={index} data={element} onDragHandler={handleDrag} />
                )}
            </div>

            <DropTarget onDragOverHandler={handleDragOver} onDropHandler={handleDrop} onDragLeaveHandler={handleDragLeave} >
                {draggedElements.map(item => (
                    <div key={item.id}>
                        <span>
                            {item.content}
                        </span>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))}
            </DropTarget>
        </article>
    );
}

export default DragAndDropContainer;