import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showStars, setShowStars] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStars(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "مرحباً بكم في موقع لارا! 🌟",
      content: "أهلاً وسهلاً بكم في عالم لارا الجميل",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "عن لارا ✨",
      content: "لارا فتاة رائعة تبلغ من العمر 11 سنوات، تحب الألوان والحياة",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "هواياتي المفضلة 🎨",
      content: "أحب الرسم والألوان والكتابة والقراءة واللعب مع الأصدقاء",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "أحلامي الجميلة 🌈",
      content: "أحلم بأن أصبح فنانة أو معلمة أو طبيبة لمساعدة الناس",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  return (
    <div style={styles.container} dir="rtl">
      {/* Animated background stars */}
      <div style={styles.starsContainer}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.star,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: showStars ? 1 : 0.3
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div style={styles.heartsContainer}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.heart,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>
            لارا عبدالمقصود هلال
          </h1>
          <div style={styles.decorStar1}>🌟</div>
          <div style={styles.decorStar2}>✨</div>
        </div>
        <p style={styles.subtitle}>
          عمري 11 سنوات وأحب الحياة! 🎈
        </p>
      </header>

      {/* Main Photo Section */}
      <div style={styles.photoSection}>
        <div style={styles.mainPhotoContainer}>
          <div style={styles.photoFrame}>
            <img 
              src="/images/Lara.jpg" 
              alt="لارا عبدالمقصود هلال" 
              style={styles.photoImage}
            />
          </div>
          <div style={styles.butterfly}>🦋</div>
          <div style={styles.flower}>🌸</div>
        </div>
        <p style={styles.photoText}>
          صورتي الجميلة 📷
        </p>
      </div>

      {/* Photo Gallery Section */}
      <div style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>معرض صوري الجميلة 📸✨</h2>
        
        <div style={styles.photoGallery}>
          <div style={styles.photoCard1}>
            <img 
              src="/images/lara1.jpg" 
              alt="صورة لارا 1" 
              style={styles.galleryImage}
            />
            <div style={styles.photoDecor1}>🌟</div>
          </div>
          
          <div style={styles.photoCard2}>
            <img 
              src="/images/lara2.jpg" 
              alt="صورة لارا 2" 
              style={styles.galleryImage}
            />
            <div style={styles.photoDecor2}>💫</div>
          </div>
          
          <div style={styles.photoCard3}>
            <img 
              src="/images/lara3.jpg" 
              alt="صورة لارا 3" 
              style={styles.galleryImage}
            />
            <div style={styles.photoDecor3}>🌈</div>
          </div>
          
          <div style={styles.photoCard4}>
            <img 
              src="/images/lara4.jpg" 
              alt="صورة لارا 4" 
              style={styles.galleryImage}
            />
            <div style={styles.photoDecor4}>⭐</div>
          </div>
        </div>
        
        <p style={styles.photoText}>
          مجموعة من صوري المفضلة 💕
        </p>
      </div>

      {/* Navigation */}
      <div style={styles.navigation}>
        <div style={styles.navButtons}>
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              style={{
                ...styles.navButton,
                ...(currentSection === index ? styles.navButtonActive : {})
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <main style={styles.main}>
        <div style={styles.contentContainer}>
          <div style={{
            ...styles.contentCard,
            background: sections[currentSection].gradient
          }}>
            <h2 style={styles.contentTitle}>
              {sections[currentSection].title}
            </h2>
            <p style={styles.contentText}>
              {sections[currentSection].content}
            </p>
          </div>
        </div>

        {/* Fun elements */}
        <div style={styles.funSection}>
          <div style={styles.funGrid}>
            {['🎨', '📚', '🌈', '🦄'].map((emoji, index) => (
              <div
                key={index}
                style={{
                  ...styles.funCard,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={styles.funEmoji}>{emoji}</div>
                <p style={styles.funText}>
                  {['الرسم', 'القراءة', 'الألوان', 'الأحلام'][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerCard}>
          <h3 style={styles.footerTitle}>
            شكراً لزيارة موقعي! 💕
          </h3>
          <p style={styles.footerText}>
            أتمنى أن يعجبكم موقعي الجميل وأن نكون أصدقاء! 🌟
          </p>
          <div style={styles.footerEmojis}>
            <div style={{...styles.footerEmoji, animationDelay: '0s'}}>🎉</div>
            <div style={{...styles.footerEmoji, animationDelay: '0.2s'}}>🌸</div>
            <div style={{...styles.footerEmoji, animationDelay: '0.4s'}}>💖</div>
            <div style={{...styles.footerEmoji, animationDelay: '0.6s'}}>✨</div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-20px); }
          70% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        .photoCard1:hover img, .photoCard2:hover img, .photoCard3:hover img, .photoCard4:hover img {
          transform: scale(1.1);
        }
        .photoCard1:hover, .photoCard2:hover, .photoCard3:hover, .photoCard4:hover {
          transform: translateY(-5px) scale(1.05);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative'
  },
  starsContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1
  },
  star: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
    transition: 'opacity 1s'
  },
  heartsContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1
  },
  heart: {
    position: 'absolute',
    fontSize: '24px',
    color: '#ff69b4',
    animation: 'bounce 2s infinite'
  },
  header: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '32px 0'
  },
  titleContainer: {
    position: 'relative',
    display: 'inline-block'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'pulse 2s infinite',
    margin: 0
  },
  decorStar1: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    fontSize: '24px',
    animation: 'spin 2s linear infinite'
  },
  decorStar2: {
    position: 'absolute',
    bottom: '-8px',
    left: '-8px',
    fontSize: '24px',
    animation: 'bounce 2s infinite'
  },
  subtitle: {
    fontSize: '20px',
    marginTop: '16px',
    color: '#e6e6fa',
    animation: 'fadeIn 1s ease-out'
  },
  photoSection: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    marginBottom: '32px'
  },
  mainPhotoContainer: {
    position: 'relative',
    display: 'inline-block'
  },
  photoFrame: {
    width: '192px',
    height: '192px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
    borderRadius: '50%',
    padding: '8px',
    animation: 'pulse 2s infinite',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid white'
  },
  butterfly: {
    position: 'absolute',
    top: '-16px',
    right: '-16px',
    fontSize: '32px',
    animation: 'bounce 2s infinite'
  },
  flower: {
    position: 'absolute',
    bottom: '-16px',
    left: '-16px',
    fontSize: '32px',
    animation: 'bounce 2s infinite',
    animationDelay: '0.5s'
  },
  photoText: {
    color: '#e6e6fa',
    marginTop: '16px',
    fontSize: '18px'
  },
  gallerySection: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    marginBottom: '48px',
    padding: '32px 16px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '24px',
    margin: '32px 16px'
  },
  galleryTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '32px',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'pulse 2s infinite'
  },
  photoGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    maxWidth: '900px',
    margin: '0 auto 32px auto',
    padding: '0 16px'
  },
  photoCard1: {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '50% 10% 50% 10%',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
    padding: '6px',
    animation: 'float 3s ease-in-out infinite',
    boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)',
    margin: '0 auto'
  },
  photoCard2: {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '10% 50% 10% 50%',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
    padding: '6px',
    animation: 'float 3s ease-in-out infinite',
    animationDelay: '1s',
    boxShadow: '0 10px 30px rgba(78, 205, 196, 0.4)',
    margin: '0 auto'
  },
  photoCard3: {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '25% 75% 25% 75%',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #45b7d1, #96c93d)',
    padding: '6px',
    animation: 'float 3s ease-in-out infinite',
    animationDelay: '2s',
    boxShadow: '0 10px 30px rgba(69, 183, 209, 0.4)',
    margin: '0 auto'
  },
  photoCard4: {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '75% 25% 75% 25%',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #f093fb, #f5576c)',
    padding: '6px',
    animation: 'float 3s ease-in-out infinite',
    animationDelay: '0.5s',
    boxShadow: '0 10px 30px rgba(240, 147, 251, 0.4)',
    margin: '0 auto'
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
    transition: 'transform 0.3s ease'
  },
  photoDecor1: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    fontSize: '24px',
    animation: 'spin 4s linear infinite'
  },
  photoDecor2: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    fontSize: '24px',
    animation: 'bounce 2s infinite'
  },
  photoDecor3: {
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    fontSize: '24px',
    animation: 'pulse 2s infinite'
  },
  photoDecor4: {
    position: 'absolute',
    bottom: '-10px',
    left: '-10px',
    fontSize: '24px',
    animation: 'spin 3s linear infinite reverse'
  },
  navigation: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    marginBottom: '32px'
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px'
  },
  navButton: {
    padding: '12px 24px',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    background: 'rgba(255,255,255,0.2)',
    color: '#e6e6fa'
  },
  navButtonActive: {
    background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    transform: 'scale(1.1)'
  },
  main: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 16px'
  },
  contentContainer: {
    textAlign: 'center'
  },
  contentCard: {
    padding: '32px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    transition: 'transform 0.5s ease',
    cursor: 'pointer'
  },
  contentTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    animation: 'bounce 2s infinite'
  },
  contentText: {
    fontSize: '1.25rem',
    lineHeight: '1.6'
  },
  funSection: {
    marginTop: '48px',
    textAlign: 'center'
  },
  funGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  funCard: {
    background: 'rgba(255,255,255,0.2)',
    padding: '24px',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    animation: 'fadeIn 1s ease-out'
  },
  funEmoji: {
    fontSize: '48px',
    marginBottom: '8px',
    animation: 'bounce 2s infinite'
  },
  funText: {
    fontSize: '14px',
    color: '#e6e6fa'
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '48px 0',
    marginTop: '64px'
  },
  footerCard: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '24px',
    padding: '32px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  footerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  footerText: {
    color: '#e6e6fa',
    fontSize: '18px',
    marginBottom: '24px'
  },
  footerEmojis: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px'
  },
  footerEmoji: {
    fontSize: '32px',
    animation: 'bounce 2s infinite'
  }
};