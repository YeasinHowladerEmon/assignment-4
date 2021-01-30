function handleBusTicket(busTicket, isIncrease){
    const BusTicketInput = document.getElementById(busTicket + '-count');
    const BusTicketCount = parseInt(BusTicketInput.value)
    let BusTicketNewCount = BusTicketCount
    if(isIncrease == true){
        BusTicketNewCount = BusTicketCount + 1;
    }
    if(isIncrease == false && BusTicketCount > 0){
        BusTicketNewCount = BusTicketCount - 1;
    }
    BusTicketInput.value = BusTicketNewCount;
    calculateTotal()
}
function calculateTotal(){
    const fastTicketCount = getInputValue('fast-ticket');
    const ticketCount = getInputValue('ticket')
    
    const totalPrice = fastTicketCount * 150 + ticketCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;
}
function getInputValue(busTicket){
    const busTicketInput = document.getElementById(busTicket + '-count');
    const busTicketCount = parseInt(busTicketInput.value);
    return busTicketCount

}


// function handleFastTicketChange(isIncrease){
//     const ticketInput = document.getElementById('fast-ticket-count');
//     const ticketCount = parseInt(ticketInput.value)
//     let ticketNewCount = ticketCount
//     if(isIncrease == true){
//         ticketNewCount = ticketCount + 1;
//     }
//     if(isIncrease == false && ticketCount > 0){
//         ticketNewCount = ticketCount - 1;
//     }

//     ticketInput.value = ticketNewCount;
// }
  

// function handleTicketChange(isIncrease){
//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value)
//     let ticketNewCount = ticketCount
//     if(isIncrease == true){
//         ticketNewCount = ticketCount + 1;
//     }
//     if(isIncrease == false && ticketCount > 0){
//         ticketNewCount = ticketCount - 1;
//     }

//     ticketInput.value = ticketNewCount;
// }
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