import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;

  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;

const EditArticle = (props) => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("authorname", authorname);
        formData.append("articleImage", fileName);

        axios.put(`http://localhost:5000/update/${props.id}`, formData)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/${props.id}`)
        .then((res) => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname),
            setFileName(res.data.articleImage),
        ])
        .catch((err) => {
            console.log(err);
        });
    }, [`${props.id}`]);

    return (
        <EditArticleContainer>
            <div className="container">
                <h1>
                    Edit Article
                </h1>
                <span className="message"> {message}</span>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="authorname">Author Name</label>
                        <input type="text" value={authorname}className="form-control" placeholder="Author Name" onChange={(e) => setAuthorName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}className="form-control" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article">Article</label>
                        <textarea onChange={(e) => setArticle(e.target.value)} value={article} className="form-control" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file"> Choose article image </label>
                        <input type="file" filename="articleImage" className="form-control-file" onChange={onChangeFile} />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update Article
                    </button>
                </form>
            </div>
        </EditArticleContainer>
    )
}

export default EditArticle;
