import {useEffect, useRef, useState} from 'react';
import styles from './draggable-animal.module.css';

const DraggableAnimal = (props) => {
    const dragElementRef = useRef();
    const [isDraging, setDragingElement] = useState(false);
    const [mousePositionOnElement, setMousePositionOnElement] = useState({});
    const [elementPosition, setElementPosition] = useState({});

    useEffect(() => {
        if(dragElementRef.current && isDraging){
            dragElementRef.current.style.transform = `translate(${elementPosition.x}px,${elementPosition.y}px)`;

            // console.log(dragElementRef.current);
            // dragElementRef.current.style.left = `${elementPosition.x}px`;
            // dragElementRef.current.style.top = `${elementPosition.y}px`;
        }
    }, [elementPosition])

    const handleMouseDown = event => {
        setDragingElement(true);

        setMousePositionOnElement({
            ...mousePositionOnElement,
            x: event.clientX - event.target.getBoundingClientRect().left,
            y: event.clientY - event.target.getBoundingClientRect().top
        });
    }

    const handleMouseUp = () => {
        setDragingElement(false);
    }

    const handleMouseMove = event => {
        if(isDraging){
            console.log(event.target);
            event.stopPropagation();
            event.preventDefault();

            setElementPosition({
                ...elementPosition,
                x: event.clientX - mousePositionOnElement.x,
                y: event.clientY - mousePositionOnElement.y
            });
        };
    }

    //console.log('isDraging', isDraging);
    return (
        <div className={styles.dragableAnimalDiv}
            ref={dragElementRef}
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
       >
             {props.content}
        </div>
    )
};

export default DraggableAnimal; 