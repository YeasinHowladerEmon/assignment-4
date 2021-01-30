        // fastClass = fast-Ticket-count,     And    EconomyClass = ticket-count //
function handleBusTicket(busTicket, isIncrease){
    const BusTicketCount = getInputValue(busTicket);
    let BusTicketNewCount = BusTicketCount;
    if(isIncrease == true){
        BusTicketNewCount = BusTicketCount + 1;
    }
    if(isIncrease == false && BusTicketCount > 0){
        BusTicketNewCount = BusTicketCount - 1;
    }
    document.getElementById(busTicket + '-count').value = BusTicketNewCount;
    calculateTotal()
}
        // calculateTotal //
function calculateTotal(){
    const fastTicketCount = getInputValue('fast-ticket');
    const ticketCount = getInputValue('ticket');
    
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
    return busTicketCount;
}


      //bookingButton//
const bookingBtn = document.getElementById('booking');
bookingBtn.addEventListener('click', function(){
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const successArea = document.getElementById('success-area');
    successArea.style.display = 'block';
})
        //  Thank You //