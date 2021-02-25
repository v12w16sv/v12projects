function billingFunction(){
    /* declaring variables */
    let tempName = document.getElementById('shippingName');
    let tempZip = document.getElementById('shippingZip');
  
    /* If button pressed */
    if(document.getElementById('same').checked){ 
      document.getElementById('billingName').value = tempName.value;
      document.getElementById('billingZip').value = tempZip.value;
    }
  
    /* If button not pressed */
    else {
      document.getElementById('billingName').value = document.getElementById('billingZip').value = "";
    }
}