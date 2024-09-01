// Add event listener to settings link
document.querySelector('.menu-bar li:nth-child(4) a').addEventListener('click', function() {
    // Toggle dropdown menu
    document.querySelector('.dropdown').style.display = 'block';
  });
  
  // Add event listener to dropdown links
  document.querySelectorAll('.dropdown a').forEach(function(link) {
    link.addEventListener('click', function() {
      // Hide dropdown menu
      document.querySelector('.dropdown').style.display = 'none';
    });
  });