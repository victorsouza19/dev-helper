let html = document.getElementsByTagName("html")[0];
let darkButton = document.getElementById("label-dark");
let lightButton = document.getElementById("label-light");

window.onload = () => {
  let mode = localStorage.getItem('mode');
  
  if(mode == 'dark'){
    html.classList.add("dark-mode");
    window.localStorage.setItem('mode', 'dark');

    lightButton.classList.remove("active");
    darkButton.classList.add("active");
    
  } else if( mode == 'light' || mode == null){
    html.classList.remove('dark-mode');
    window.localStorage.setItem('mode' , 'light');
  } 
};

function toggleSelectMode(event){
  eventButton = event.target || event.srcElement;
  id = eventButton.id;
  console.log(id);

  if(id == 'dark'){
    html.classList.add("dark-mode");
    window.localStorage.setItem('mode', 'dark');
  } else{
    html.classList.remove('dark-mode');
    window.localStorage.setItem('mode' , 'light');
  }
}