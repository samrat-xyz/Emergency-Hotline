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
        const phoneNumber = this.closest('.bg-white')
            .querySelector('.phone-number')
            .textContent.trim();

        navigator.clipboard.writeText(phoneNumber).then(() => {
          
            alert(`Copied: ${phoneNumber}`);

            // Increment copy counter
            let copyUpdation = parseInt(document.getElementById('copy-update').innerText, 10);
            document.getElementById('copy-update').innerText = copyUpdation + 1;

        }).catch(err => {
            
            alert('Failed to copy number: ' + err);
        });
    });
});



// Call History with Array

let callHistory = []; 

const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

function renderHistory() {
    historyList.innerHTML = ""; 
    callHistory.slice().reverse().forEach(item => {
        const historyItem = document.createElement("div");
        historyItem.className = "flex justify-between items-center bg-gray-100 rounded-lg p-3";

        historyItem.innerHTML = `
            <div>
                <p class="font-bold">${item.title}</p>
                <p class="text-sm text-gray-600">${item.number}</p>
            </div>
            <div class="text-sm text-gray-500">${item.time}</div>
        `;

        historyList.appendChild(historyItem);
    });
}

// Function to add call history 
function addCallHistory(subTitleText, phoneNumber) {
    const now = new Date();
    const time = now.toLocaleTimeString();

    const newHistory = {
        title: subTitleText,
        number: phoneNumber,
        time: time
    };

    callHistory.push(newHistory);
    renderHistory(); 
}

// Clear button
clearBtn.addEventListener("click", function () {
    callHistory = []; 
    renderHistory();  
});

// Call functionality

document.querySelectorAll('.call-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        const card = this.closest('.bg-white');
        const subTitleText = card.querySelector('.sub-title').innerText;
        const phoneNumber = card.querySelector('.phone-number').innerText;
        const callTitle = `📞 Calling ${subTitleText} ${phoneNumber} ......`;

        let coinsValue = getNavValue('coins'); 

        if (coinsValue >= 20) {
            alert(callTitle);
            document.getElementById('coins').innerText = coinsValue - 20;
            
            addCallHistory(subTitleText, phoneNumber);

        } else {
            alert("❌ Call failed! Not enough coins in your balance.");

        }
    });
});
