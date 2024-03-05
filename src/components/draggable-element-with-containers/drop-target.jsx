import styles from './drag-and-drop.module.css';

const DropTarget = ({children, onDropHandler, onDragOverHandler, onDragLeaveHandler }) => {

    return (
        <div
        className={styles.target}
            onDrop={onDropHandler}
            onDragOver={onDragOverHandler}
            onDragLeave={onDragLeaveHandler}
        >
            {children}
        </div>
    );
}

export default DropTarget;