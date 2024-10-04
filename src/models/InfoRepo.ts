class InfoRepo {
    id: number
    name: string
    language: string
    html_url: string

    constructor(
        id: number,
        name: string,
        language: string,
        html_url: string
    )
    {
        this.id = id
        this.name = name
        this.language = language
        this.html_url = html_url
    }
}

export default InfoRepo