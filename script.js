const scroll = document.querySelector('#scrollDownFooter');

scroll.addEventListener('click', () => {
  //Scroll to ID element 
  document.querySelector('Footer').scrollIntoView({behavior: "smooth"});
});
