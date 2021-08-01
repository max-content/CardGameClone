import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled/';
import { Link } from '@reach/router';

const MainContainer = styled.div`
    margin: 7rem 0;

    img {
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
`;

const Articles = ({ posts, remove }) => {

    return (
        <MainContainer>
            {posts.map((article, key) => {
            return (
                <p key={key}>
                    <Link to={`/article/${article._id}`} >
                        <h2>
                            {article.title}
                        </h2>
                    </Link>
                    <img src={`/uploads/${article.articleImage}`} />
                    <p>
                        {article.article}
                    </p>
                    <h3>
                        {article.authorname}
                    </h3>
                    <div className="row my-5">
                    <div className="col-sm-2">
                        <Link to={`/update/${article._id}`} className="btn btn-outline-success">
                            Edit Article
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <button onClick={() => remove(article._id)} className="btn btn-outline-danger">
                            Delete Article
                        </button>
                    </div>
                </div>
                </p>
            )
        })}
         {/* {posts.map((article, key) => (
        //     <div className="container" key={key}>
        //         <img src={`/uploads/${article.articleImage}`}
        //         alt="..."
        //         style={{ width: "40%" }} />
        //         <Link to={{
        //             pathname: `/article/${article._id}`,
        //         }}>
        //             <h2>
        //                 {article.title}
        //             </h2>
        //         </Link>
        //         <p>
        //             {article.article}
        //         </p>
        //         <span className="badge badge-secondary p-2">
        //             {article.authorname}
        //         </span>
        //         <div className="row my-5">
        //             <div className="col-sm-2">
        //                 <Link to={`/update/${article._id}`} className="btn btn-outline-success">
        //                     Edit Article
        //                 </Link>
        //             </div>
        //             <div className="col-sm-2">
        //                 <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">
        //                     Delete Article
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // ))} */}
        </MainContainer>
    )
}

export default Articles;
