const businessCard = document.getElementById('businessCard');

document.addEventListener('mousemove', function(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    businessCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

