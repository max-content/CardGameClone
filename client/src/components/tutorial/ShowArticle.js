import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import axios from 'axios';
import styled from '@emotion/styled';

const ArticleContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: var(--dark-green);
  }

  p {
    font-size: 1.2rem;
  }

  h4 {
    font-weight: 900;
  }

  img {
    width: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Article = (props) => {
    const [authorName, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        //request data from server and set data to articles array
        axios.get(`http://localhost:5000/${props.id}`)
        .then((response) => [
            setAuthorName(response.data.authorName),
            setTitle(response.data.title),
            setArticle(response.data.article),
            setFileName(response.data.articleImage),
        ])
        .catch((err) => console.log(err));
    }, []);

    return (
        <ArticleContainer>
            <img src={`/uploads/${fileName}`} alt="" style={{ margin: "0, auto", width: "40%", display: "flex" }} />
            <h2> 
                {title}
            </h2>
            <p> 
                {article} 
            </p>
            <p style={{ fontWeight: "900" }}>
                <small style={{ fontSize: "10px" }} className="badge badge-secondary">
                    Author
                </small>{" "}
                {authorName}
            </p>
            <div className="row mb-5">
                <Link to={'/'} className="btn btn-outline-secondary mr-4">
                    Back to Main
                </Link>
            </div>
        </ArticleContainer>
    )
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
};

export default Article;
