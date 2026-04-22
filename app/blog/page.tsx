import Image from 'next/image';

const posts = [
  {
    id: 1, title: 'Design Digest #79',
    category: 'Design', date: 'Jan 12, 2024',
    img: '/images/gourmania.png',
    excerpt: 'We can learn how to take joy in the things we create whether they take the form of a fleeting thought or a finished masterpiece.',
  },
  {
    id: 2, title: 'Design Conferences in 2024',
    category: 'Design', date: 'Feb 5, 2024',
    img: '/images/nurot.png',
    excerpt: 'Exploring the top design conferences happening around the world in 2024 and why you should attend at least one this year.',
  },
  {
    id: 3, title: 'UX Research Fundamentals',
    category: 'UX', date: 'Mar 18, 2024',
    img: '/images/lorex.png',
    excerpt: 'Understanding the core principles of UX research and how they can help you build better products for your users.',
  },
  {
    id: 4, title: 'Product Design Insights',
    category: 'Design', date: 'Apr 2, 2024',
    img: '/images/canva.png',
    excerpt: 'Deep-diving into product design methodologies and the key insights that separate good design from great design.',
  },
  {
    id: 5, title: 'The Forgotten Art of Spacing',
    category: 'Typography', date: 'May 10, 2024',
    img: '/images/klama.png',
    excerpt: 'Whitespace is one of the most underutilised tools in a designer\'s toolkit. Here\'s how to use it effectively.',
  },
  {
    id: 6, title: 'Best Fonts Every Designer Should Know',
    category: 'Typography', date: 'Jun 22, 2024',
    img: '/images/gourmania.png',
    excerpt: 'A curated list of the best typefaces every designer should have in their arsenal for professional projects.',
  },
];

export default function BlogPage() {
  return (
    <div className="page-card">
      <h2 className="section-title">Blog</h2>

      <div className="blog-list">
        {posts.map((p) => (
          <article key={p.id} className="blog-card">
            <Image
              className="blog-thumb"
              src={p.img}
              alt={p.title}
              width={160}
              height={160}
              style={{ objectFit: 'cover', width: 160, flexShrink: 0 }}
            />
            <div className="blog-body">
              <div className="blog-cat">{p.category}</div>
              <h3 className="blog-title">{p.title}</h3>
              <p className="blog-excerpt">{p.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-date">📅 {p.date}</span>
                <span className="blog-read-more">Read More →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
