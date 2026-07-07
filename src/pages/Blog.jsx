import './Blog.css';

function Blog() {
  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, updates, and news from Finbytechnovation</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <p>Our blog is currently under development. Check back soon for exciting content!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
