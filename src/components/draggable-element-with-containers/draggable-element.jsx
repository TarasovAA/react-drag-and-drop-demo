import React from 'react';
import styles from './drag-and-drop.module.css';

const DraggableElement = ({ data, onDragHandler }) => {
    return (<div
    className={styles.dragableElementlDiv}
    onDrag={(e) => {onDragHandler(e, data)}}
    draggable
    >
         {data.content}
    </div>);
}

export default DraggableElement;