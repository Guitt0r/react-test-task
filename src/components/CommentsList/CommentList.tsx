import {FC, useEffect} from "react";
import {ItemType} from "../../types.ts";
import Comment from "../Comment/Comment.tsx";
import s from './CommentList.module.css'

type Props = Partial<ItemType>

const CommentList: FC<Props> = ({id, comments}) => {
    useEffect(()=>{},[id])
    return (
        <div className={s.wrapper}>
            <h1>Comments <span className={s.id}>#{id}</span></h1>

            <ul>
                {comments?.map(comment => <Comment key={comment.id} {...comment}/>)}
            </ul>
        </div>
    )
}
export default CommentList