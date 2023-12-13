const buttonPlay = document.getElementById('play');

let existence = false;

buttonPlay.addEventListener('click',function(){

    console.log('button',buttonPlay, typeof buttonPlay);
    
    if(existence){
        
        existence = false;

        document.getElementById('contenitore').innerHTML = '';

        document.getElementById('main-container').classList.remove('p-3');
    }
    else{

        existence = true;

        for (let i = 1; i <= 100 ; i++) {
        
            const element = document.createElement('div');
            element.classList.add('cell','col-auto','flex-wrap');
            console.log(element);
    
            document.getElementById('contenitore').append(element);
            element.innerHTML = i

            element.addEventListener('click', function(){

                element.classList.add('active');

                console.log(this.innerHTML);

            })
        }

        document.getElementById('main-container').classList.add('p-3')
    
    }

    




});