export interface Article {
    _id: string,
    text: string,
    title: string,
    description: string,
    feature_img: Array,
    claps: number,
    state: string,
    author: {
        username: string,
        id: string,
    },
    comment: Array,
    createdAt: string
}