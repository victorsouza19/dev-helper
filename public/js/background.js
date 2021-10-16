var html = document.getElementsByTagName("html")[0];

window.onload = () => {
  let mode = localStorage.getItem('mode');
  

  if(mode == 'dark'){
    html.classList.add("dark-mode");
    window.localStorage.setItem('mode', 'dark');
  } else{
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