/**
 * ! REQUIRES JQUERY
 * e => alert text
 * c => box color 
 */

function c$alert(e,c,t){
    let color = '';
    // if .alertBox dont exist create one
    if($('.calertBox').length == 0){
        $('body').append(`<div class="calertBox"></div>`);
    }
    // color picker
    if(c == 'red'){
        color = '#f8d7da';
    }else if(c == 'green'){
        color = '#d4edda';
    }else if(c == 'yellow'){
        color = '#fff3cd';
    }else{
        color = '#cce5ff';
    }
    // x => id for delete specific alert
    let x = `c${$('.alert').length}`;
    // append to .alertbox an alert
    $('.calertBox').append(`<span class="calert" style="background: ${color}" id="${x}">${e}<span onclick="removeAlert('${x}')">x</span></span>`);
    if(t != undefined){
        if(isNaN(t)){
            t = 5000;
        }
        timeOut(x,t)   
    }
    // ! Fix this
    function timeOut(e, t){
        setTimeout(function(){ 
            removeAlert(e)
         }, t);
    }
}
// delete an specific alert
async function removeAlert(e){
    if($('span .calert').length == 1){
        await $('.calertBox').remove();
    }
    $(`#${e}`).remove();
}

