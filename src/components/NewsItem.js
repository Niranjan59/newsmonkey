import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.reuters.com/resizer/eOLfnhsDRxC92yrTa-d3lEIG0oM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJX5H3XFYVKCHBNCK674UUAVMI.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
