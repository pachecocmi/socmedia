import React from 'react'
import HttpRequests from '../../hooks/HttpRequests'

export default function Articles() {

    let articles = HttpRequests('/api/articles', 'post')
    console.log(articles.data)
    return (
        <div>
            Articles here
        </div>
    )
}
