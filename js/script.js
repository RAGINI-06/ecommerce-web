// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
  
    const lazyLoad = (image) => {
      const src = image.getAttribute('data-src');
      if (src) {
        image.src = src;
        image.removeAttribute('data-src');
      }
    };
  
    const onScroll = () => {
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !image.src) {
          lazyLoad(image);
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check when page loads
  });
  
  // Smooth scrolling for the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add hover effect for images in the gallery
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach((img) => {
    img.addEventListener('mouseenter', function () {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseleave', function () {
      img.style.transform = 'scale(1)';
    });
  });
  