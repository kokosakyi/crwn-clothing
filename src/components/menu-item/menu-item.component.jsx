
import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    let style = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={style} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">
                    SHOP NOW
                </span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);