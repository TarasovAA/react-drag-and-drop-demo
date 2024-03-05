import style from './drag-and-drop.module.css'
import {useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd'

const CardInfo = ({item, id, index, moveCard}) => {

    const ref = useRef(null);

    const [{handlerId},drop] = useDrop({
        accept: 'card',
        collect(monitor){
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor){
            if(!ref.current)
                return;

            const dragIndex = item.index
            const hoverIndex = index
            
            if (dragIndex === hoverIndex) {
                return
              }
            
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();

            const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
              }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex)

            item.index = hoverIndex
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: {id, index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          })
    })
    
    const opacity = isDragging ? 0 : 1;
   
     drag(drop(ref))
    return (
        <div ref={ref} className={style.card} style={{...style, opacity}} key={item.id}> 
            <span>
                {item.content}
            </span>

            <p>
                {item.description}
            </p>
        </div>
    );
}

export default CardInfo;