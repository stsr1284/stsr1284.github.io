document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('consultationForm');

    const handleFormSubmit = function(e) {
        e.preventDefault();
        
        const name = e.target.querySelector('#name').value;
        const phone = e.target.querySelector('#phone').value;
        const message = e.target.querySelector('#message').value;
        const hopeArea = e.target.querySelector('#hopeArea').value;
        const consent = e.target.querySelector('#checkInform').checked;
        e.target.querySelector('#name').value = "";
        e.target.querySelector('#phone').value = "";
        e.target.querySelector('#message').value = "";
        e.target.querySelector('#hopeArea').value = "";
        e.target.querySelector('#checkInform').checked = false;
        
        if (!name || !phone || !message || !hopeArea) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        
        if (!consent) {
            alert('개인정보수집에 동의해주세요.');
            return;
        }
    };

    form.addEventListener('submit', handleFormSubmit);


    // Phone number formatting
    const phoneInputs = document.querySelector('#phone');
    phoneInputs.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        // Format: XXX-XXXX-XXXX
        if (value.length > 7) {
            value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
        } else if (value.length > 3) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        }
        
        e.target.value = value;
    });
});
