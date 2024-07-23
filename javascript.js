document.getElementById('calculate').onclick = function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmount = (billAmount * tipPercentage / 100).toFixed(2);
    document.getElementById('tipAmount').textContent = `$${tipAmount}`;
}
