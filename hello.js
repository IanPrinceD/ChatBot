function chat() {
  alert('Click the START button!');

  const yourName = prompt('Type your name');
  

  if (yourName === null) {
    return;
  }

  alert('Hi, ' + yourName);

  const mood = prompt('Are you good?');
  
  if (mood === null) {
    return; 
  }

  if (mood === "Yes") {
    alert('Oh, Great to hear!');
  }
  else if (mood === "No") {
    alert('Sorry to hear that.');
  }
  else {
    alert('Oh! I see');
  }
}