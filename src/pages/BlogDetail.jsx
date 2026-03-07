import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs } from "../data/data";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: "center", paddingTop: "80px" }}>
          <h2>ไม่พบบทความนี้</h2>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: "24px" }}>
            ← กลับไปหน้าบทความ
          </Link>
        </div>
      </div>
    );
  }

  const related = blogs.filter((b) => b.id !== id).slice(0, 2);

  return (
    <div className="page-wrapper">
      <div className="container">

        <button onClick={() => navigate(-1)} className="back-btn">
          ← กลับไปหน้าบทความ
        </button>

        <article className="blog-detail fade-up fade-up-1">
          <header className="blog-detail__header">
            <div className="blog-detail__meta">
              <span className="tag tag-accent">{post.category}</span>
              <span className="blog-detail__date">{post.date}</span>
              <span className="blog-detail__read">อ่าน {post.readTime}</span>
            </div>
            <h1 className="blog-detail__title">{post.title}</h1>
            <p className="blog-detail__summary">{post.summary}</p>
          </header>

          <div className="blog-detail__img" />

          <div className="blog-detail__content">
            {post.content.split("\n").map((line, i) => {
              if (line === "") return <br key={i} />;
              if (line.match(/^\d+\./)) return <p key={i} className="blog-detail__point">{line}</p>;
              if (line.endsWith(":")) return <h3 key={i} className="blog-detail__subheading">{line}</h3>;
              return <p key={i}>{line}</p>;
            })}
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <div className="blog-related">
            <h2 className="blog-related__title">บทความที่เกี่ยวข้อง</h2>
            <div className="blog-related__grid">
              {related.map((r) => (
                <Link to={`/blog/${r.id}`} key={r.id} className="related-card card">
                  <div className="related-card__body">
                    <span className="tag tag-accent" style={{ marginBottom: "8px", display: "inline-block" }}>{r.category}</span>
                    <h3 className="related-card__title">{r.title}</h3>
                    <p className="related-card__meta">{r.date} · {r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
