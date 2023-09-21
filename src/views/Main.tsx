import {useEffect, useState} from "react";
import {ItemType} from "../types.ts";
import {v4 as uuidv4} from "uuid";
import AddItem from "../components/AddItem/AddItem.tsx";
import AddComment from "../components/AddComment/AddComment.tsx";
import ItemsList from "../components/ItemsList/ItemsList.tsx";
import CommentList from "../components/CommentsList/CommentList.tsx";
import s from './Main.module.css'

const Main = () => {
    useEffect(() => {
        const itemsFromStorage = localStorage.getItem('items')
        if (itemsFromStorage) {
            setItems(JSON.parse(itemsFromStorage))
        }
    }, [])

    const [items, setItems] = useState<ItemType[]>([
        {
            id: uuidv4(),
            text: 'Test post',
            comments: []
        }
    ])
    const [activeItem, setActiveItem] = useState<ItemType | null>(null)

    const onSelected = (item: ItemType) => {
        setActiveItem(item)
    }

    const onDelete = (itemToDelete: ItemType) => {
        if (itemToDelete.id === activeItem?.id) {
            if (items.length) {

                setActiveItem(items[items.length - 1])
            } else {
                setActiveItem(null)
            }
        }
        const updatedItems = items.filter(item => item.id !== itemToDelete.id)
        setItems(updatedItems)
        localStorage.setItem('items', JSON.stringify(updatedItems))
    }

    const onAddItem = (itemText: string) => {
        const updatedItems = [...items, {
            id: uuidv4(),
            text: itemText,
            comments: []
        }]
        setItems(updatedItems)
        localStorage.setItem('items', JSON.stringify(updatedItems))
    }

    const onAddComment = (text: string, color: string) => {
        const updatedActiveItem = {
            ...activeItem, comments: [...activeItem!.comments, {
                id: uuidv4({}),
                text,
                color
            }]
        } as ItemType
        setActiveItem(updatedActiveItem)
        setItems(items.map(item => {
            if (item.id === updatedActiveItem.id) {
                return updatedActiveItem
            }
            return item
        }))
        localStorage.setItem('items', JSON.stringify([...items, updatedActiveItem]))
    }

    return (
        <div className={s.mainWrapper}>
            <div className={s.wrapper}>
                <AddItem onAddItem={onAddItem}/>
                <ItemsList items={items} activeItemId={activeItem?.id} onSelected={onSelected} onDelete={onDelete}/>
            </div>

            <div className={s.wrapper}>
                <CommentList {...activeItem}/>
                <AddComment onAddComment={onAddComment}/>
            </div>
        </div>
    )
}
export default Main