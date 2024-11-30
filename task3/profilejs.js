// Smooth scroll for the "About Me" button
document.getElementById('aboutBtn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Smooth scroll for navbar links
  document.querySelectorAll('.navbar nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Feedback form submission
  document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // For now, just show an alert with feedback (this can be replaced with backend logic)
    alert(Thank you for your feedback, ${name}! We'll reach out to you at ${email} if needed.);
    
    // Reset the form
    e.target.reset();
  });