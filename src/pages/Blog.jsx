import { Link } from "react-router-dom";
import { blogs } from "../data/data";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="page-wrapper">
      <div className="container">

        <p className="section-label fade-up fade-up-1">บทความ</p>
        <h1 className="blog__heading fade-up fade-up-2">สิ่งที่ผมเรียนรู้</h1>
        <p className="blog__sub fade-up fade-up-3">
          บทความและ insight จากประสบการณ์เรียนและการลองทำโปรเจกต์จริง
        </p>

        <div className="blog__grid">
          {blogs.map((post, i) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className={`blog-card card fade-up fade-up-${(i % 3) + 1}`}
            >
              <div className="blog-card__img">
                <span className="blog-card__category tag tag-accent">{post.category}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>อ่าน {post.readTime}</span>
                </div>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__summary">{post.summary}</p>
              </div>
              <div className="blog-card__footer">
                <span className="blog-card__cta">อ่านต่อ →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
