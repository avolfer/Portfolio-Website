let scroll = document.querySelector('#scrollDownSkills');

scroll.addEventListener('click', () => {
  //Scroll to ID element
  document.querySelector('#techSkillsSection').scrollIntoView({behavior: "smooth"});
});



let scroll2 = document.querySelector('#scrollDownProjects');

scroll2.addEventListener('click', () => {
  //Scroll to ID element
  document.querySelector('#projectSection').scrollIntoView({behavior: "smooth"});
});



let scroll3 = document.querySelector('#scrollDownExp');

scroll3.addEventListener('click', () => {
  //Scroll to ID element
  document.querySelector('#expSection').scrollIntoView({behavior: "smooth"});
});



let scroll4 = document.querySelector('#scrollDownBio');

scroll4.addEventListener('click', () => {
  //Scroll to ID element
  document.querySelector('bioSection').scrollIntoView({behavior: "smooth"});
});



 scroll5 = document.querySelector('#scrollDownFooter');

scroll5.addEventListener('click', () => {
  //Scroll to ID element
  document.querySelector('Footer').scrollIntoView({behavior: "smooth"});
});
