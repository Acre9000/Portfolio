document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable-image');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
  
    const expandedImage = document.createElement('img');
    expandedImage.className = 'expanded-image';
  
    images.forEach((image) => {
      image.addEventListener('click', function () {
        expandedImage.src = image.src;
        document.body.appendChild(expandedImage);
        expandedImage.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Hide scrollbars
      });
    });
  
    expandedImage.addEventListener('click', function () {
      expandedImage.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrollbars
    });
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        expandedImage.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrollbars
      }
    });
  });