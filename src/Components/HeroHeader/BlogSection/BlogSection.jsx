import React from "react";
import "./BlogSection.css";
import Design from "../../../assets/Design.png"
import Product from "../../../assets/Product.png"
import SoftWare from "../../../assets/SoftWare.png"
const BlogSection = () => {
  const articles = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: Design,
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: Product,
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: SoftWare,
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-head">
        <div className="blog-head-left">
          <p style={{ color: "#6941c6" }}>Our blog</p>
          <h1>Latest Blog Posts</h1>
          <p style={{ fontSize: "18px" }}>
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button>View All Posts</button>
      </div>

      <div className="container">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <div
              className="image"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <div className="content">
              <h4 className="category">{article.category}</h4>
              <h2 className="title">{article.title}</h2>
              <p className="description">{article.description}</p>
              <div className="author-info">
                <span className="author">{article.author}</span>
                <span className="date">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
