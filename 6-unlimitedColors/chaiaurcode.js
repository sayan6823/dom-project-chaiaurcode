// Random color generator
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    // console.log(color)
    return color;
  };
  console.log(randomColor());
  
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  
  let intervalId;
  
  start.addEventListener('click', () => {
    // Handling corner case
    if (!intervalId) {
      intervalId = setInterval(changeColor, 1000);
    }
  
    function changeColor() {
      document.body.style.backgroundColor = randomColor();
    }
  });
  
  stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; // flush out intervalId after use
    console.log('Stopped');
  });
  