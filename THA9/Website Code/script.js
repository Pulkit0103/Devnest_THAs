const box = document.querySelector('.box');
box.addEventListener('click', () => {
    if((box.classList.contains('boxclicked'))){
        box.classList.remove('boxclicked');
        book--;
        remain++;
    }
    else{
        box.classList.add('boxclicked');
        book++;
        remain--;
    }
})