import React from 'react';
import styles from './drag-and-drop.module.css';
import { useDrag } from "react-dnd";


const DraggableElement = ({ data }) => {

    const {id, content} = data;

     const [{isDrag}, dragRef] = useDrag({
        type: 'animal',
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
     });


    return (
        !isDrag && <div
        className={styles.dragableElementlDiv}
        ref={dragRef}
    >
         {content}
    </div>);
}

export default DraggableElement;