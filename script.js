function handleFastTicketChange(isIncrease){
    const ticketInput = document.getElementById('fast-ticket-count');
    const ticketCount = parseInt(ticketInput.value)
    let ticketNewCount = ticketCount
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;
}
  

function handleTicketChange(isIncrease){
    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value)
    let ticketNewCount = ticketCount
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;
}
// document.getElementById('ticket-increase-economy').addEventListener('click', function(){
//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value)
//     const ticketNewCount = ticketCount + 1;
//     ticketInput.value = ticketNewCount;
// });
// document.getElementById('ticket-decrease-economy').addEventListener('click', function(){
//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value)
//     const ticketNewCount = ticketCount - 1;
//     ticketInput.value = ticketNewCount;
// })