document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('consultationForm');
    const modalForm = document.getElementById('modalConsultationForm');

    const handleFormSubmit = function(e) {
        e.preventDefault();
        
        const name = e.target.querySelector('#name').value;
        const phone = e.target.querySelector('#phone').value;
        const message = e.target.querySelector('#message').value;
        const consent = e.target.querySelector('#checkInform').checked;
        e.target.querySelector('#name').value = "";
        e.target.querySelector('#phone').value = "";
        e.target.querySelector('#message').value = "";
        e.target.querySelector('#checkInform').checked = false;
        
        if (!name || !phone || !message) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        
        if (!consent) {
            alert('개인정보수집에 동의해주세요.');
            return;
        }
        
        // sendEmail(name, phone, message);
        var data = {
            service_id: 'service_ex0jqk8',
            template_id: 'template_1w7shpo',
            user_id: 'n332wdxJc15zXZBBi',
            template_params: {
                'from_name': `${name}`,
                'message': `번호: ${phone}\n내용: ${message}`
            }
        };
    
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .then(text => {
            return ;
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
        
    };

    form.addEventListener('submit', handleFormSubmit);
    modalForm.addEventListener('submit', handleFormSubmit);

    // Phone number formatting
    const phoneInputs = document.querySelectorAll('#phone, #phone2');
    phoneInputs.forEach(function(phoneInput) {
        phoneInput.addEventListener('input', function(e) {
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
});
