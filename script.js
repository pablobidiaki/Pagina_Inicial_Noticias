var contagem = 0;
function menuHamburguer(){
    contagem += 1;

    if(contagem%2 == 0){
        document.getElementById('burguer').classList.add('visivel')
        document.querySelector('main').classList.remove('teste')
        document.querySelector('header').classList.remove('teste')

    }else{
        document.getElementById('burguer').classList.remove('visivel')
        document.querySelector('main').classList.add('teste')
        document.querySelector('header').classList.add('teste')
    }
}


