export type ItemType = {
    id: string,
    text: string
    comments: CommentType[]
}
export type CommentType = {
    id: string,
    text: string,
    color: string
}