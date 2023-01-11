
const full_amount_string = "full-amount";
const amount_received_string = "amount-received";
const extra_fee_string = "extra-fees";

function resetResults() {
    document.getElementById("did_receive_one").innerHTML = ""
    document.getElementById("did_receive_two").innerHTML = ""
    document.getElementById("normally_receive_one").innerHTML = ""
    document.getElementById("normally_receive_two").innerHTML = ""
    document.getElementById("difference_one").innerHTML = ""
    document.getElementById("difference_two").innerHTML = ""
    document.getElementById("based_on_one").innerHTML = ""
    document.getElementById("based_on_two").innerHTML = ""
    document.getElementById("based_on_three").innerHTML = ""
}

function resetInputFields() {
    document.getElementById("full-amount").value = ""
    document.getElementById("amount-received").value = ""
    document.getElementById("extra-fees").value = "0.25"
}

function resetPressed() {
    resetInputFields()
    resetResults()
}

function calculatePressed() {

    const full_amount = parseFloat(document.getElementById(full_amount_string).value);
    const amount_received = parseFloat(document.getElementById(amount_received_string).value);
    const fee_paid = full_amount - amount_received;

    const extra_fees = parseFloat(document.getElementById(extra_fee_string).value) || 0;
    const fee_should_have_paid = ((full_amount * 0.1066666) + extra_fees) * 1.2;

    const amount_should_have_received = full_amount.toFixed(2) - fee_should_have_paid.toFixed(2);
    const difference = fee_should_have_paid - fee_paid;

    if((isNaN(full_amount)) || (isNaN(amount_received))) {
        
        resetResults()

        // document.getElementById("did_receive_one").innerHTML = "'Amount Listed For' and 'Amount\
        // Received' must have a value";
        alert("The amount fields cannot be empty")

    } else {
        document.getElementById("did_receive_one").innerHTML = "Did receive: £ ";
        document.getElementById("did_receive_two").innerHTML = amount_received.toFixed(2);

        document.getElementById("normally_receive_one").innerHTML = "Normally receive: £ ";
        document.getElementById("normally_receive_two").innerHTML = amount_should_have_received.toFixed(2);

        document.getElementById("difference_one").innerHTML = "Difference: £ ";
        document.getElementById("difference_two").innerHTML = difference.toFixed(2);

        if(difference < 0) {
            document.getElementById("difference_one").style.color = 'red';
            document.getElementById("difference_two").style.color = 'red';
        } else {
            document.getElementById("difference_one").style.color = '#40ff00';
            document.getElementById("difference_two").style.color = '#40ff00';
        }

        document.getElementById("based_on_one").innerHTML = "(Calculation based on 10.67% FV Fee + ";
        document.getElementById("based_on_two").innerHTML = `£${extra_fees.toFixed(2)} extra Fee`;
        document.getElementById("based_on_three").innerHTML = " + 20% VAT)";
    }
    
}