import {FC, useState} from "react";
import s from './AddComment.module.css'

type Props = {
    onAddComment: (text: string, color: string) => void
}

const AddComment: FC<Props> = ({onAddComment}) => {
    const [commentText, setCommentText] = useState('')
    const [commentColor, setCommentColor] = useState('#000000')
    return (
        <div className={s.wrapper}>
            <input type='color' value={commentColor} onChange={(e) => setCommentColor(e.target.value)}/>
            <textarea
                required
                placeholder='Type comment here...' value={commentText}
                onChange={(e) => setCommentText(e.target.value)}/>
            <button onClick={() => {
                onAddComment(commentText, commentColor)
                setCommentText('')
            }}>Add Comment
            </button>
        </div>
    )
}
export default AddComment