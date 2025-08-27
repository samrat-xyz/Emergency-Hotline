function getNavValue(id) {
    const NavValue = document.getElementById(id);
    const NavValueNumber = parseInt(NavValue.innerText); 
    return NavValueNumber;
}

// Hurt Increment
document.querySelectorAll('.hurt-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        let hurtValue = getNavValue('hurt');
        document.getElementById('hurt').innerText = hurtValue + 1; 
    });
});

// Copy functionality
document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', function() {
        const phoneNumber = this.closest('.bg-white').querySelector('.phone-number').textContent.trim();
        navigator.clipboard.writeText(phoneNumber);

        // Increment copy counter
        let copyUpdation = getNavValue('copy-update');
        document.getElementById('copy-update').innerText = copyUpdation + 1; 
    });
});

// Call functionality
document.querySelectorAll('.call-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        // Get subtitle and phone number relative to this card
        const card = this.closest('.bg-white');
        const subTitleText = card.querySelector('.sub-title').innerText;
        const phoneNumber = card.querySelector('.phone-number').innerText;
        const callTitle = `📞 Calling ${subTitleText} ${phoneNumber} ......`;

        let coinsValue = getNavValue('coins'); 

        if (coinsValue >= 20) {
            alert(callTitle);
            document.getElementById('coins').innerText = coinsValue - 20;
        } else {
            alert("No Coins, you can't call");
        }
    });
});
