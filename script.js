function handleBusTicket(busTicket, isIncrease){
    const BusTicketInput = document.getElementById(busTicket + '-count');
    const BusTicketCount = getInputValue(busTicket)
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
    
    const totalAmount = fastTicketCount * 150 + ticketCount * 100;
    document.getElementById('total-amount').innerText = '$' + totalAmount;
    
    const vatCharge = totalAmount * 0.1;
    document.getElementById('vat').innerText = '$' + vatCharge;

    const grandTotal = totalAmount + vatCharge;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
function getInputValue(busTicket){
    const busTicketInput = document.getElementById(busTicket + '-count');
    const busTicketCount = parseInt(busTicketInput.value);
    return busTicketCount
}
const bookingBtn = document.getElementById('booking');
bookingBtn.addEventListener('click', function(){
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const successArea = document.getElementById('success-area');
    successArea.style.display = 'block'
})


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