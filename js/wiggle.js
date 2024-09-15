function wiggle(element) {
  let angle = Math.random() * 2 * Math.PI;
  const radius = 10;  
  const speed = 0.005;  

  function animate() {

    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;


    element.style.transform = `translate(calc(${xOffset}px), calc(${yOffset}px))`;
    angle += speed;
    requestAnimationFrame(animate);
  }

  animate();
}

function expandEvents(){
  // document.querySelectorAll('.Project-Slots').forEach(slot => {
  //   slot.addEventListener('click', function() {
  //       this.classList.toggle('expand');
  //   });
  // });
}
function InfoTabsSetup(str){
  document.querySelectorAll('[name="Information-'+ str+ '"]').forEach(element => {
    element.addEventListener('click', function() {
      if(this.classList.contains("enabled")){return;}
      

      // Remove the 'enabled' class from all children of the element with ID "Information-Tabs"
      const tabsContainer = document.getElementById('Information-Tabs');
      if (tabsContainer) {
          Array.from(tabsContainer.children).forEach(child => {
              child.classList.remove('enabled');
          });
      }
      const tabsContent = document.querySelectorAll('#Information > div');
      if (tabsContent) {
          Array.from(tabsContent).forEach(child => {
              child.classList.remove('enabled');
          });
      }
      const targetElement = document.getElementById('Information-'+ str);
      if (targetElement) {
          targetElement.classList.toggle('enabled');
      }
      this.classList.add('enabled');
  });
  });
}

window.onload = function() {
  const wiggleElements = document.querySelectorAll('.wiggle');
  wiggleElements.forEach(element => {
    wiggle(element);
  });

  expandEvents();
  InfoTabsSetup("Education");
  InfoTabsSetup("Profile");
  InfoTabsSetup("Skills");
  
  const projectSection = document.getElementById('Projects');
  const expandButton = document.getElementById('Expand-Projects');
  expandButton.addEventListener("click", function(){
    projectSection.classList.toggle("expand");
  });


  const follower = document.getElementById('follow-mouse');

  

  document.addEventListener('mousemove', function(event) {

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    follower.style.transform = `translate(calc(${mouseX}px - 4vw), calc(${mouseY}px - 8.5vw))`;
    
  });


  const starCount = 25; 
  const container = document.getElementById('star-container');
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  for (let i = 0; i < starCount; i++) {
    
    const newStar = document.createElement('div');
    newStar.classList.add('star');
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;
    newStar.style.left = `${randomX}px`;
    newStar.style.top = `${randomY}px`;

    const randomDelay = Math.random() * 20;
    newStar.style.animationDelay = `${randomDelay}s`;

    container.appendChild(newStar);
  }

  function updateStarContainerPosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
  
    const moveX = ((mouseX - centerX) / centerX) * 10; 
    const moveY = ((mouseY - centerY) / centerY) * 10;
  
    
    container.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  }
  window.addEventListener('mousemove', updateStarContainerPosition);


  const container2 = document.getElementById('star-container2');
  for (let i = 0; i < 10; i++) {
    
    const newStar = document.createElement('div');
    newStar.classList.add('star');
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;
    newStar.style.left = `${randomX}px`;
    newStar.style.top = `${randomY}px`;

    const randomDelay = Math.random() * 20;
    newStar.style.animationDelay = `${randomDelay}s`;

    container2.appendChild(newStar);
  }

  function updateStarContainerPosition2(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
  
    const moveX = ((mouseX - centerX) / centerX) * 5; 
    const moveY = ((mouseY - centerY) / centerY) * 5;
  
    
    container2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  }
  window.addEventListener('mousemove', updateStarContainerPosition2);

  const container3 = document.getElementById('star-container3');
  for (let i = 0; i < 10; i++) {
    
    const newStar = document.createElement('div');
    newStar.classList.add('star');
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;
    newStar.style.left = `${randomX}px`;
    newStar.style.top = `${randomY}px`;

    const randomDelay = Math.random() * 20;
    newStar.style.animationDelay = `${randomDelay}s`;

    container3.appendChild(newStar);
  }

  function updateStarContainerPosition3(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
  
    const moveX = ((mouseX - centerX) / centerX) * 30; 
    const moveY = ((mouseY - centerY) / centerY) * 30;
  
    
    container3.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  }
  window.addEventListener('mousemove', updateStarContainerPosition3);

  

};