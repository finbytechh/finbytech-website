import SEO from '../components/SEO';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-page">
      <SEO
        title="Blog - Insights, Tech Trends & Company Updates"
        description="Read insights, technology trends, company updates, and expert articles from the team at FINBYTECHNOVATION IT SOLUTIONS on AI, software development, digital marketing, and trading technology."
        canonical="/blog"
      />
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
