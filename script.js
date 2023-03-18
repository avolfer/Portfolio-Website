const scroll = document.querySelector('#scrollDownProjects');

scroll.addEventListener('click', () => {
  //Scroll to ID element 
  document.querySelector('#wybrana_sekcja').scrollIntoView({behavior: "smooth"});
});
