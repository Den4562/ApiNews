import React, { useEffect, useState } from "react";
import getData from "../utils/getData";
import "../style/news.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  //   console.log(newsData);
  const fetchData = async () => {
    try {
      const result = await getData();
      setNewsData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Top news for you</h1>
      <div className="card_news">
        {newsData.articles?.map((newsItem, index) => (
          <div key={index} className="news-item">
            <img src={newsItem.urlToImage} alt="" className="news-image" />
            <h2 className="news-title">{newsItem.title}</h2>
            <p className="news-description">{newsItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
