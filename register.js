document.addEventListener('DOMContentLoaded', function() {

    function validateForm(e) {
        e.preventDefault(); 
        let numberOfChair = document.forms['register']['chairs'].value;
        let companyName = document.forms['register']['cname'].value;
        let contactName = document.forms['register']['contactname'].value;
        let phoneNumber = document.forms['register']['phonenumber'].value;

        if (companyName == "") {
            alert("The company name is required");
            return false;
        }
        if (numberOfChair > 10) {
            alert("The number of chairs could not be over 10");
            return false;
        }
        if (contactName == "") {
            alert("The contact name is required");
            return false;
        }

        if (phoneNumber == "") {
            alert("The phone number is required");
            return false;
        }

        alert("Successful!");
        return true;
    }

    document.getElementById('registerForm').addEventListener('submit', validateForm);
});
