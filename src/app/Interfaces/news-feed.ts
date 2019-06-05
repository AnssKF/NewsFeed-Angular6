export interface Post {
    id: number,
    user: User,
    body: string,
    date: Date,
    attachment_url: string,
    type: string
}

export interface User {
    name: string,
}

