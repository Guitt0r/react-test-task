import {FC} from "react";
import {CommentType} from "../../types.ts";
import s from './Comment.module.css'

type Props = CommentType

const Comment: FC<Props> = ({color, text}) => {
    return (
        <li className={s.comment}>
            <div className={s.color} style={{backgroundColor: color}}></div>
            <div className={s.text}>{text}</div>
        </li>
    )
}
export default Comment