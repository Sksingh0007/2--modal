const openBtn = document.getElementById('open-modal');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', function(){
    modalContainer.style.display = "block";
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = "none"; 
});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});