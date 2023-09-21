import {FC, useState} from "react";
import s from './AddItem.module.css'

type Props = {
    onAddItem: (text: string) => void
}

const AddItem: FC<Props> = ({onAddItem}) => {
    const [itemText, setItemText] = useState('')
    const [error, setError] = useState(false)
    return (

        <div className={s.wrapper}>

            <input placeholder='Type name here...' type='text' value={itemText}
                   onChange={(e) => setItemText(e.target.value)}/>
            {error && <div className={s.error}>Required</div>}
            <button onClick={() => {
                if (itemText === '') {
                    setError(true)
                } else {
                    onAddItem(itemText)
                    setItemText('')
                    setError(false)
                }
            }}>Add Item
            </button>
        </div>
    )
}
export default AddItem