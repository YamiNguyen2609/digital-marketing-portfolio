export default function AboutPage() {
  const services = [
    { icon: '🎨', title: 'Chạy quảng cáo', desc: 'The most modern and high-quality design made at a professional level.' },
    { icon: '💻', title: 'Content & Edit Video', desc: 'High-quality development of sites at the professional level.' },
    { icon: '📱', title: 'Xây Kênh, Viết Kịch Bản & Edit Video', desc: 'Professional development of applications for iOS and Android.' },
    { icon: '📷', title: 'Lập Kế Hoạch & Tổ Chức Vận Hành', desc: 'High-quality photos of any category at a professional level.' },
  ];

  const testimonials = [
    {
      name: 'Daniel Lewis',
      text: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      name: 'Jessica Miller',
      text: 'Thanks to the skill of Ricardo, we have a design that we can be proud of. The process was smooth and the communication was excellent throughout the entire project.',
    },
    {
      name: 'Emily Evans',
      text: 'Ricardo did a miracle with my website. It looks exactly as I imagined it. Now it\'s getting more traffic and conversions than ever. Highly recommend!',
    },
    {
      name: 'Henry William',
      text: 'Thank you very much for your work on our project. It was a big help and the result exceeded all our expectations. Will definitely work together again.',
    },
  ];

  const clients = ['TBB Mầm', 'Nhà Hàng Chut Thai', 'Alika Collagen NMN'];

  return (
    <div className="page-card">
      <h2 className="section-title">About Me</h2>

      <div className="about-bio">
        Tôi là Phạm Trần Thanh Ngân, tốt nghiệp cử nhân chuyên ngành “Hệ Thống Thông Tin Quản Lí” trường ĐH Mở Tp.HCM. Có hơn 1 năm kinh nghiệm trong lĩnh vực Digital Marketing qua các công việc cụ thể:

        <ul style={{ marginLeft: "2rem" }}>
          <li>Chạy quảng cáo: Facebook Ads & Tiktok Ads.</li>
          <li>Content: Lên kịch bản video/Ladipage, viết nội dung quảng cáo,.
          </li>
          <li>Edit Video: Tạo video bán hàng, video chia sẻ giá trị nhãn hàng.
          </li>
          <li>Vận hành TikTokShop: Listing sản phẩm, cập nhật sản phẩm mới và thay đổi ảnh bìa sản phẩm/shop theo chiến dịch bán hàng.
          </li>
          <li>Lên kế hoạch: Tạo báo cáo, sản xuất nội dung quảng cáo, lên chiến dịch quảng cáo.
          </li>
        </ul>
        Với nhiều kết quả nổi bật như đạt doanh thu hơn $600/ngày thông qua thực hiện chiến dịch của các thương hiệu nổi bật như:
        Mi nối LavisLash (B2B), Sữa hạt Matti Mum, TPCN Alika Collagen NMN, Nước hoa Zya,...
      </div>

      {/* What I'm Doing */}
      <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>What I'm Doing</h3>
      <div className="what-doing-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      {/* <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Testimonials</h3>
      <div className="testimonials-list">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-author">
              <div>
                <div className="testimonial-author-name">{t.name}</div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Clients */}
      <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Clients</h3>
      <div className="clients-grid">
        {clients.map((c) => (
          <div key={c} className="client-badge">{c}</div>
        ))}
      </div>

      <div className="focus-vission-grid">
        <div className="focus-vission-card left">
          <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Focus</h3>
          <p className="about-bio">Tập trung xây dựng và tối ưu các chiến dịch TikTok Marketing theo hướng tăng trưởng — ưu tiên thu hút đúng người dùng, tối đa hóa chuyển đổi và tạo ra doanh thu thực tế. Mục tiêu là liên tục thử nghiệm, đo lường và scale những gì mang lại hiệu quả.</p>
        </div>
        <div className="focus-vission-card right">
          <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Vision</h3>
          <p className="about-bio">Trở thành TikTok Marketer định hướng tăng trưởng, xây dựng thương hiệu cá nhân dựa trên kết quả thực tế và chia sẻ những chiến lược đã được kiểm chứng để tạo giá trị cho cộng đồng và doanh nghiệp.</p>
        </div>
      </div>

    </div>
  );
}
