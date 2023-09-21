import {FC} from "react";
import {ItemType} from "../../types.ts";
import Item from "../Item/Item.tsx";
import s from './ItemList.module.css'
type Props = {
    items: ItemType[],
    activeItemId: string | undefined,
    onSelected: (item: ItemType) => void,
    onDelete: (item: ItemType) => void
}
const ItemsList: FC<Props> = ({items, activeItemId, onDelete, onSelected}) => {
    return (
        <div className={s.wrapper}>
            <h1>Items</h1>

            <ul>
                {items.map(item => <Item key={item.id} item={item} onSelected={onSelected} activeItemId={activeItemId}
                                         onDelete={onDelete}/>
                )}
            </ul>
        </div>
    )
}
export default ItemsList