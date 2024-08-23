const footer = document.createElement ('footer'); 
const body = document.querySelector('body');
body.appendChild(footer); 

const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Jeremy</span><span>&#169;</span><span>${year}</span>`
footer.appendChild(copyright);

const skillsList = ['Javascript', 'HTML', 'CSS', 'GitHub'];
const skillsSection = document.getElementById('Skills'); 
const skillsUL = skillsSection.querySelector('ul');

for (let skill of skillsList) {
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsUL.appendChild(skillLI);
}
console.log("I am from Javascript"); 