document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart-btn');
    const checkoutButton = document.getElementBy

// Basic form handling example
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display the form data in the console (just for demo purposes)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Form feedback (AJAX can be added here to send data to a server)
  alert('Thank you for reaching out! We will get back to you soon.');
});

// Scroll-based animations for smooth UI/UX
const elements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});

// Example of interaction for Buy Now Button
const buyNowButtons = document.querySelectorAll('.buy-now-btn');

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('The UV-C LED Air Sanitizer has been added to your cart! Proceed to checkout.');
    });
});