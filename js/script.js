/**********************************************************
 * task 1: enable tabs
 */
const tabHeaders = document.querySelectorAll('.info-header-tab');
const contentBoxes = document.querySelectorAll('.info-tabcontent')

tabHeaders.forEach(function(item){
   
    // add event-listner on click-event for each tab header
    item.addEventListener('click', function(){
        select_tab(this.dataset.tab);
    })
})

// select the first tab
select_tab('tab-1');

function select_tab( tab_id )
{
    console.log("select tab: #" + tab_id);   
    contentBoxes.forEach(function(item){
        item.classList.add('hide');
        console.log(item.id)
    })

    const contentBox = document.querySelector("#"+tab_id);   
    contentBox.classList.remove('hide');
}

/***************************************************************
 * task 2: enable modal dialog
 */

const modal = document.querySelector('[data-modal')
const modalButton = document.querySelector('[data-modal-button]');
const modalCloseButton = document.querySelector('[data-modal-close]');

console.log(modal)
modalButton.addEventListener('click', function(){
    modal.classList.add('show');
    e.stopPropagation();
})

modalCloseButton.addEventListener('click', function(){
    modal.classList.remove('show');
    e.stopPropagation();
})
