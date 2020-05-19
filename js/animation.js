let icon = document.getElementsByClassName('icon')[0];
let lineOne = document.getElementsByClassName('line')[0];
let lineTwo = document.getElementsByClassName('line')[1];
let lineThree = document.getElementsByClassName('line')[2];
let meni = document.getElementsByClassName('hamburger')[0];
let sve = document.getElementsByClassName('anim')[0];
let open = false;

icon.addEventListener('click', show);

function show() {
    if (open === false) {
        meni.className += ' in';
        meni.classList.remove('out');

        sve.className += ' animIn';
        sve.classList.remove('animOut');

        lineTwo.className += ' fadeOut';
        lineTwo.classList.remove('fadeIn');

        lineOne.className += ' rotationOne';
        lineOne.classList.remove('rotationOneReverse');

        lineThree.className += ' rotationTwo';
        lineThree.classList.remove('rotationTwoReverse');

        open = true;

        meni.addEventListener('click', hide);
        function hide(e) {
            if (e.target.tagName.toUpperCase()=== "A") {
            
            meni.classList.toggle('out');
            meni.classList.remove('in');
    
            sve.classList.toggle('animOut');
            sve.classList.remove('animIn');
    
            lineTwo.classList.toggle('fadeIn');
            lineTwo.classList.remove('fadeOut');
    
            lineOne.classList.toggle('rotationOneReverse');
            lineOne.classList.remove('rotationOne');
    
            lineThree.classList.toggle('rotationTwoReverse');
            lineThree.classList.remove('rotationTwo');
    
            open=false;
                
            }
    }

     
    

    } else {
        meni.classList.toggle('out');
        meni.classList.remove('in');

        sve.classList.toggle('animOut');
        sve.classList.remove('animIn');

        lineTwo.classList.toggle('fadeIn');
        lineTwo.classList.remove('fadeOut');

        lineOne.classList.toggle('rotationOneReverse');
        lineOne.classList.remove('rotationOne');

        lineThree.classList.toggle('rotationTwoReverse');
        lineThree.classList.remove('rotationTwo');

        open = false;
    }

}