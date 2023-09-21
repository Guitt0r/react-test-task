import {FC} from "react";
import {ItemType} from "../../types.ts";
import s from './Item.module.css'

type Props = {
    item: ItemType,
    onSelected: (item: ItemType) => void,
    activeItemId: string | undefined,
    onDelete: (item: ItemType) => void
}

const Item: FC<Props> = ({item, onSelected, activeItemId, onDelete}) => {
    return (
        <li
            onClick={() => onSelected(item)}
            className={`${s.item} ${activeItemId === item.id ? s.active : undefined}`}>
            <div className={s.text}>
                {item.text}
            </div>
            <div>
                <span className={s.comments}>
                    {item.comments.length}
                </span>
                <button className={s.button} onClick={(e) => {
                    onDelete(item)
                    e.stopPropagation()
                }}>Delete</button>
            </div>

        </li>
    )
}
export default Item