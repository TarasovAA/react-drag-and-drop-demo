import styles from './drag-and-drop.module.css'
import {useDrop} from 'react-dnd'
import { useState } from 'react'

const DropTarget = ({children, onDropHandler }) => {

    const [{isHover}, dropTarget] = useDrop({
        accept: 'animal',
        drop(itemId){
            onDropHandler(itemId);
        },
        hover(itemId){
            console.log(borderColor);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    })

    const borderColor = isHover ? 'lightgreen' : 'transparent';
    
    return (
        <div
        className={styles.target}
        ref={dropTarget}
        style={{borderColor}}
        >
            {children}
        </div>
    );
}

export default DropTarget;