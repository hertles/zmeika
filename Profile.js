
    document.addEventListener('keydown',Profile)
    function Profile(event){
        let key=`${event.code}`
        if (key=='Backquote')
            document.querySelector('.Profile').classList.toggle('hidden')
    }
    function Exit(){
        window.location.href='login.php'
    }
