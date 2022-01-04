import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
          <div className='my-3'>
            <div className="card"  >
              <div style={{display:'flex', justifyContect:'flex-end', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger" >
    {source}</span>
    </div>

              <img src={!imageUrl?"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fapptrigger.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F07%2F971150086.jpeg":imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> {title} </h5> 
                <p className="card-text"> {description}... </p>
                <p className="card-text"><small className='text-muted'>By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a></div>
            </div>
          </div>
        );
    }
}

export default NewsItem