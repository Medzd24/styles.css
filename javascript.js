const popupElement = document.getElementById("popup");
    const countdownElement = document.getElementById("countdown");
    const closeButton = document.getElementById("close-button");


    setTimeout(function () {
        
        popupElement.style.display = "block";
        
        
        let countdown = 8;
        countdownElement.textContent = countdown;
        
        const countdownInterval = setInterval(function () {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = "none"; // J.*AJ 'D9/'/
                closeButton.style.display = "block"; 
            }
        }, 1000);
    }, 9000); // 'F*8'1 5 +H'FJ B(D 916 'D%9D'F
    
   
    closeButton.addEventListener("click", function () {
        popupElement.style.display = "none";
    });
