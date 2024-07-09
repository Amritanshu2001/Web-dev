function res(value){
    document.getElementById('R').value += value;

}

function clearR(){
    document.getElementById('R').value = '';
}
function Result(){
    try {
        let R=eval(document.getElementById('R').value);
        document.getElementById('R').value=R;
    }
    catch(e){
        document.getElementById('R').value='Error';
    }
}