
/*
    -------------------------------
         Author: Hirep Noham
    -------------------------------
*/

//function to generate div
let grid = document.querySelector('#Grid');
var i = 0
while ( i <289){
    let NewDiv = document.createElement('div')
    grid.appendChild(NewDiv);
    NewDiv.classList.add('ChangeColor');
    i++
    
}
// Clear all color with button clear
const remove = document.querySelector('#remove')
const DivColor = document.getElementsByClassName('ChangeColor')
remove.addEventListener('click', event => {
       for(var i = 0; i<DivColor.length;i++)
        DivColor[i].removeAttribute('style')
        
 });




// Draw function Add Color 
let addColor = document.getElementsByClassName("ChangeColor")
function AddColor(){
            for(var i = 0; i < addColor.length; i++){
            addColor[i].onclick = function(event) {
            event.target.style.backgroundColor = color(color) ;
            console.log("Color Add !")
        }

    }
}
AddColor()
 //select Color

//Return of the Selected Color 
function color (){
    let color = document.querySelector('#Button').value;
    return color ;
}








