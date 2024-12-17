document.getElementById('calculate-btn').addEventListener('click', function() {
  // Get quantities
  const roundCakesQty = parseInt(document.getElementById('round-cakes-qty').value) || 0;
  const partyCeramQty = parseInt(document.getElementById('party-ceram-qty').value) || 0;
  const chestnutPureQty = parseInt(document.getElementById('chestnut-pure-qty').value) || 0;

  // Calculate total
  const total = (roundCakesQty * 30) + (partyCeramQty * 16) + (chestnutPureQty * 10);

  // Update total price display
  document.getElementById('total-price').textContent = total;

  // Change background color to purple
  document.body.style.backgroundColor = 'purple';
});
