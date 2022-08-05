const input = document.querySelector('input');

const magicWordArray = ["creation", "abracadabra", "love", "thanks", "presto", "magic", "oillio", "0i11i0"]

const magicWord = input.textContent.toLowerCase

const magicWordfunc = () => {
    for(let i = 0; i < magicWordArray.length; i++) {
        if(input.textContent === magicWordArray[i])
        alert("Access Granted")
    } else
    }


input.addEventListener('enter', magicWordfunc)