function emailValid(email){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        return true;
    }
    else{
        return false;
    }
}

document.querySelector('.footer__button').addEventListener("click",()=>{
    let input = document.querySelector('.footer__text').value;
    let result = emailValid(input);
    if(!result){
        document.querySelector('.footer__error').classList.add('active');
        document.querySelector('.footer__text').classList.add('active');
    }
    else{
        document.querySelector('.footer__error').classList.remove('active')
        document.querySelector('.footer__text').classList.remove('active');
    }
})