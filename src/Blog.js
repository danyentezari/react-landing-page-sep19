import React from 'react';
import { useParams } from 'react-router-dom'; 

const Blog = (prop) => {

    const page = prop.match.params.page;

    const articles = {
        '2019-10-12': {
            title: 'AI Comes to Gitex',
            content: 'Lorem ipsum dolar sit amet....'
        },
        '2019-10-11': {
            title: 'Staying Ahead of The Curve',
            content: 'Lorem ipsum dolar sit amet....'
        },
        '2019-09-12': {
            title: 'Chocolate Is Really Healthy!',
            content: 'Lorem ipsum dolar sit amet....'
        }
    }

    return(
        <div className="App">
            <h1>Welcome to { articles[page].title } </h1>
            <p>{ articles[page].content }</p>
        </div>
    )
}

export default Blog;