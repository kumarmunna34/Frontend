var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode){
    tabButtons.forEach(function(node){
        //node.style.backgroundColor="";
        //node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');

function refresh(){
    location.reload();
}

let btnBack =  document.querySelector(".Navigation button[type='button']")
btnBack.addEventListener('click', ()=>{
    window.history.back();
});