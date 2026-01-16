// ========================================
// CONFIGURACIÓN DE DATOS DE CONTACTO
// ========================================
// Actualiza estos valores cuando tengas los datos reales
const CONTACT_DATA = {
  email: 'hola@pulpo360.com',
  phone: '+5491112345678',
  phoneFormatted: '+54 11 1234-5678',
  location: 'Buenos Aires, Argentina',
  whatsappNumber: '5491112345678',
  whatsappMessage: 'Hola! Me interesa conocer más sobre sus servicios',
  social: {
    instagram: 'https://instagram.com/pulpo360',
    facebook: 'https://facebook.com/pulpo360',
    linkedin: 'https://linkedin.com/company/pulpo360'
  }
};

let mobileMenuOpen = false;
let currentSlide = 0;
let carouselInterval;

const cases = [
  {
    id: 1,
    title: 'Lucca Objetos',
    description: 'Tienda online especializada en lámparas y objetos de diseño.',
    category: 'E-commerce',
    metric: '+280% Ventas B2B',
    duration: '5 meses',
    icon: 'trending-up',
    image: 'lucca.png',
    color: 'lime',
    link: null
  },
  {
    id: 2,
    title: 'Scrapy App',
    description: 'App móvil para optimizar el reciclaje industrial y urbano.',
    category: 'App Móvil',
    metric: '+200% Usuarios',
    duration: '3 meses',
    icon: 'smartphone',
    image: 'scrapy.png',
    color: 'purple',
    link: null
  },
  {
    id: 3,
    title: 'Briqueteado',
    description: 'Estrategia digital completa para empresa industrial.',
    category: 'Marketing Digital',
    metric: '+300 Leads B2B',
    duration: '4 meses',
    icon: 'target',
    image: 'briqueteeado.png',
    color: 'lime',
    link: null
  },
  {
    id: 4,
    title: 'Espacio Mistral',
    description: 'Plataforma web con sistema de reservas y gestión de eventos.',
    category: 'Plataforma Web',
    metric: 'Sistema Completo',
    duration: null,
    icon: 'globe',
    image: 'mistral.png',
    color: 'purple',
    link: 'https://www.espaciomistral.es/'
  },
  {
    id: 5,
    title: 'SeSostenible',
    description: 'App web para medición de impacto ambiental con IA.',
    category: 'Web App',
    metric: 'IA + Análisis',
    duration: null,
    icon: 'layout',
    image: 'ecosnapshot.png',
    color: 'lime',
    link: 'https://sesostenible.com.ar/'
  },
  {
    id: 6,
    title: 'Bar Zoom',
    description: 'Plataforma web completa con tablero de datos e insights de negocio.',
    category: 'Web + BI',
    metric: 'Dashboard Completo',
    duration: null,
    icon: 'bar-chart',
    image: 'zoom.png',
    color: 'purple',
    link: null
  }
];

const icons = {
  'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
  'smartphone': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
  'target': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  'layout': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
  'bar-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>'
};

function getItemsPerSlide() {
  return window.innerWidth >= 1024 ? 2 : 1;
}

function getTotalSlides() {
  return Math.ceil(cases.length / getItemsPerSlide());
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  }
}

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  if (mobileMenuOpen) {
    mobileMenu.classList.add('active');
    mobileMenuBtn.classList.add('active');
  } else {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  }
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenu.classList.remove('active');
  mobileMenuBtn.classList.remove('active');
}

function renderCarousel() {
  const carousel = document.getElementById('carousel');
  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = getTotalSlides();

  carousel.innerHTML = '';

  for (let i = 0; i < totalSlides; i++) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'carousel-slide';

    const gridDiv = document.createElement('div');
    gridDiv.className = 'carousel-grid';

    const startIdx = i * itemsPerSlide;
    const endIdx = Math.min(startIdx + itemsPerSlide, cases.length);
    const slideCases = cases.slice(startIdx, endIdx);

    slideCases.forEach(caseItem => {
      const caseCard = document.createElement('div');
      caseCard.className = 'case-card';

      const imageDiv = document.createElement('div');
      imageDiv.className = `case-image ${caseItem.color}`;
      
      if (caseItem.image) {
        const img = document.createElement('img');
        img.src = caseItem.image;
        img.alt = caseItem.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        imageDiv.appendChild(img);
      } else {
        imageDiv.innerHTML = icons[caseItem.icon];
        imageDiv.style.color = caseItem.color === 'lime' ? 'var(--lime-600)' : 'var(--purple-600)';
      }

      const contentDiv = document.createElement('div');
      contentDiv.className = 'case-content';

      const badge = document.createElement('div');
      badge.className = `case-badge ${caseItem.color}`;
      badge.textContent = caseItem.category;

      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = caseItem.title;

      const description = document.createElement('p');
      description.style.color = 'var(--gray-600)';
      description.style.marginBottom = '1.5rem';
      description.style.lineHeight = '1.75';
      description.textContent = caseItem.description;

      const footer = document.createElement('div');
      footer.style.display = 'flex';
      footer.style.alignItems = 'center';
      footer.style.justifyContent = 'space-between';
      footer.style.paddingTop = '1rem';
      footer.style.borderTop = '1px solid var(--gray-100)';

      const metricDiv = document.createElement('div');
      metricDiv.style.display = 'flex';
      metricDiv.style.alignItems = 'center';
      metricDiv.style.gap = '1rem';

      const metricInfo = document.createElement('div');
      metricInfo.style.display = 'flex';
      metricInfo.style.alignItems = 'center';
      metricInfo.style.gap = '0.5rem';
      metricInfo.style.color = caseItem.color === 'lime' ? 'var(--lime-600)' : 'var(--purple-600)';
      metricInfo.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
        <span style="font-weight: 600;">${caseItem.metric}</span>
      `;

      metricDiv.appendChild(metricInfo);

      if (caseItem.duration) {
        const duration = document.createElement('span');
        duration.style.fontSize = '0.875rem';
        duration.style.color = 'var(--gray-500)';
        duration.textContent = caseItem.duration;
        metricDiv.appendChild(duration);
      }

      footer.appendChild(metricDiv);

      if (caseItem.link) {
        const link = document.createElement('a');
        link.href = caseItem.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.fontWeight = '600';
        link.style.color = caseItem.color === 'lime' ? 'var(--lime-600)' : 'var(--purple-600)';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.gap = '0.25rem';
        link.style.textDecoration = 'none';
        link.innerHTML = `
          <span>Ver</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
        footer.appendChild(link);
      }

      contentDiv.appendChild(badge);
      contentDiv.appendChild(title);
      contentDiv.appendChild(description);
      contentDiv.appendChild(footer);

      caseCard.appendChild(imageDiv);
      caseCard.appendChild(contentDiv);

      gridDiv.appendChild(caseCard);
    });

    slideDiv.appendChild(gridDiv);
    carousel.appendChild(slideDiv);
  }

  updateCarousel();
  renderDots();
}

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function renderDots() {
  const dotsContainer = document.getElementById('carouselDots');
  const totalSlides = getTotalSlides();

  dotsContainer.innerHTML = '';

  if (totalSlides <= 1) {
    return;
  }

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    if (i === currentSlide) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => goToSlide(i));
    dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  const totalSlides = getTotalSlides();
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  const totalSlides = getTotalSlides();
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function startAutoplay() {
  stopAutoplay();
  carouselInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log('Form submitted:', data);
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

  form.reset();
}

function updateCarouselNavigation() {
  const totalSlides = getTotalSlides();
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (totalSlides <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  }
}

function initParallax() {
  if (window.innerWidth < 768) return;

  const shapes = document.querySelectorAll('.shape, .decorative-gradient');
  if (shapes.length === 0) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;

        shapes.forEach((shape, index) => {
          const speed = 0.02 + (index * 0.005);
          const yPos = -(scrolled * speed);
          shape.style.willChange = 'transform';
          shape.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
          navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
          navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }

        ticking = false;
      });

      ticking = true;
    }
  });
}

function observeElements() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.card, .team-feature, .contact-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
}

// ========================================
// ACTUALIZAR DATOS DE CONTACTO EN EL DOM
// ========================================
function updateContactData() {
  // Email
  const emailCard = document.getElementById('contact-email-card');
  const emailText = document.getElementById('contact-email-text');
  const footerEmail = document.getElementById('footer-email');
  if (emailCard) emailCard.href = `mailto:${CONTACT_DATA.email}`;
  if (emailText) emailText.textContent = CONTACT_DATA.email;
  if (footerEmail) footerEmail.href = `mailto:${CONTACT_DATA.email}`;

  // Teléfono
  const phoneCard = document.getElementById('contact-phone-card');
  const phoneText = document.getElementById('contact-phone-text');
  const footerPhone = document.getElementById('footer-phone');
  if (phoneCard) phoneCard.href = `tel:${CONTACT_DATA.phone}`;
  if (phoneText) phoneText.textContent = CONTACT_DATA.phoneFormatted;
  if (footerPhone) footerPhone.href = `tel:${CONTACT_DATA.phone}`;

  // Ubicación
  const locationText = document.getElementById('contact-location-text');
  const footerLocation = document.getElementById('footer-location');
  if (locationText) locationText.textContent = CONTACT_DATA.location;
  if (footerLocation) footerLocation.textContent = CONTACT_DATA.location;

  // WhatsApp
  const whatsappButton = document.getElementById('whatsapp-button');
  if (whatsappButton) {
    const whatsappUrl = `https://wa.me/${CONTACT_DATA.whatsappNumber}?text=${encodeURIComponent(CONTACT_DATA.whatsappMessage)}`;
    whatsappButton.href = whatsappUrl;
  }

  // Redes sociales - Contacto
  const contactInstagram = document.getElementById('contact-instagram');
  const contactFacebook = document.getElementById('contact-facebook');
  const contactLinkedin = document.getElementById('contact-linkedin');
  if (contactInstagram) contactInstagram.href = CONTACT_DATA.social.instagram;
  if (contactFacebook) contactFacebook.href = CONTACT_DATA.social.facebook;
  if (contactLinkedin) contactLinkedin.href = CONTACT_DATA.social.linkedin;

  // Redes sociales - Footer
  const footerInstagram = document.getElementById('footer-instagram');
  const footerFacebook = document.getElementById('footer-facebook');
  const footerLinkedin = document.getElementById('footer-linkedin');
  if (footerInstagram) footerInstagram.href = CONTACT_DATA.social.instagram;
  if (footerFacebook) footerFacebook.href = CONTACT_DATA.social.facebook;
  if (footerLinkedin) footerLinkedin.href = CONTACT_DATA.social.linkedin;
}

document.addEventListener('DOMContentLoaded', () => {
  // Actualizar datos de contacto al cargar la página
  updateContactData();

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  renderCarousel();
  startAutoplay();
  updateCarouselNavigation();

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', handleFormSubmit);

  initParallax();
  initNavbarScroll();
  observeElements();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const oldItemsPerSlide = getItemsPerSlide();
      renderCarousel();
      updateCarouselNavigation();

      if (currentSlide >= getTotalSlides()) {
        currentSlide = getTotalSlides() - 1;
        updateCarousel();
      }
    }, 250);
  });
});
