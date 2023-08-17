document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth; 
    let currentIndex = 0;
    let timer; 
 
    function showImage(index) {
      const position = -index * imageWidth;
      //css ani
      carousel.style.transition = "transform 0.3s ease"; 
      carousel.style.transform = `translateX(${position}px)`;
    }
 
    function startSlideshow() {
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
      }, 2000); 
    }
 
    function stopSlideshow() {
      clearInterval(timer);
    }
 
    // Start 
    startSlideshow();
 
    // Pause 
    document.getElementById("merchandise").addEventListener("mouseclick", stopSlideshow);
 
    // continue
    document.getElementById("merchandise").addEventListener("mouseclick", startSlideshow);
  });

  function openSocialMediaLink(event) {
    event.preventDefault();
    const targetId = event.currentTarget.id;
    let link = '';

    switch (targetId) {
      case 'facebook-icon':
        link = 'https://www.facebook.com/profile.php?id=100044612701436';
        break;
      case 'instagram-icon':
        link = 'https://www.instagram.com/miketyson/?hl=en';
        break;
      case 'linkedin-icon':
        link = 'https://www.linkedin.com/';
        break;
      case 'twitter-icon':
        link = 'https://twitter.com/MikeTyson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
        break;
      case 'discord-icon':
        link = 'https://discord.com/';
        break;
    }

    if (link !== '') {
      window.open(link, '_blank');
    }
  }

  // Add event listeners to the social media icons
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('click', openSocialMediaLink);
  });