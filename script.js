// Product data
const products = [
    {
      title: 'Back-Light',
      description: 'Iluminação uniforme para inspeção de superfícies e contornos.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80'
    },
    {
      title: 'Domo-Light',
      description: 'Iluminação difusa para superfícies reflexivas e metálicas.',
      image: 'https://images.unsplash.com/photo-1617839625591-e5a789593135?auto=format&fit=crop&q=80'
    },
    {
      title: 'Ring-Light',
      description: 'Iluminação circular para inspeção de detalhes e características.',
      image: 'https://images.unsplash.com/photo-1610001797724-a1f36b965381?auto=format&fit=crop&q=80'
    },
    {
      title: 'Spot-Light',
      description: 'Iluminação pontual de alta intensidade para áreas específicas.',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80'
    },
    {
      title: 'Linear-Light',
      description: 'Iluminação linear para inspeção de bordas e alinhamentos.',
      image: 'https://images.unsplash.com/photo-1621252179027-65f5fec6f9f4?auto=format&fit=crop&q=80'
    },
    {
      title: 'UV-Light',
      description: 'Iluminação ultravioleta para detecção de materiais fluorescentes.',
      image: 'https://images.unsplash.com/photo-1605468269348-593f05a5a61d?auto=format&fit=crop&q=80'
    }
  ];
  
  // Initialize carousel
  let currentSlide = 0;
  const productsPerSlide = 3;
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselNav = document.querySelector('.carousel-nav');
  
  // Create slides
  function createSlides() {
    const slides = [];
    for (let i = 0; i < products.length; i += productsPerSlide) {
      const slideProducts = products.slice(i, i + productsPerSlide);
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      
      slideProducts.forEach(product => {
        slide.innerHTML += `
          <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-content">
              <h3>${product.title}</h3>
              <p>${product.description}</p>
            </div>
          </div>
        `;
      });
      
      slides.push(slide);
      carouselTrack.appendChild(slide);
    }
    return slides;
  }
  
  // Create navigation dots
  function createDots(slides) {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToSlide(index));
      carouselNav.appendChild(dot);
    });
  }
  
  // Update carousel position
  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  // Go to specific slide
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }
  
  // Initialize carousel
  const slides = createSlides();
  createDots(slides);
  
  // Auto-advance carousel
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }, 5000);
  
  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 20);
  });
  
  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const mainNav = document.querySelector('.main-nav');
  
  menuToggle.addEventListener('click', () => {
    mainNav.classList.add('nav-open');
  });
  
  menuClose.addEventListener('click', () => {
    mainNav.classList.remove('nav-open');
  });
  
  // Smooth scrolling
  document.querySelectorAll('.nav-list button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = button.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        mainNav.classList.remove('nav-open');
      }
    });
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    contactForm.reset();
    alert('Mensagem enviada com sucesso!');
  });