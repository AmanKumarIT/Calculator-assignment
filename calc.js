function appendCharacter(a){
    document.getElementById("Screen").value+=a;
}

function clearScreen(){
    document.getElementById("Screen").value = '';
}

function Answer(){
    try {
        const result = eval(document.getElementById('Screen').value);
        document.getElementById('Screen').value = result;
    } catch (error) {
        document.getElementById('Screen').value = 'Error';
    }
}