var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    displayUsers(users);
}
function displayUsers(users) {
    for (var i = 0; i < users.length; i++) {
        var user = '<tr><td>' + users[i].username + '</td>' +
                    '<td>' + users[i].email + '</td>' +
                    '<td>' + users[i].location + '</td>' +
                    '<td>' + users[i].company + '</td>' +
                    '<td>' + users[i].gender + '</td></tr>';
        document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].insertAdjacentHTML('afterend', user);
    }
}
document.getElementById('btn').addEventListener('click', function() {
    if (document.getElementById('uname').value && document.getElementById('pwd').value && document.getElementById('email').value && document.getElementById('loc').value && document.getElementById('com').value && document.querySelector('input[name="gender"]:checked').value) {
        var user = {
            'username': document.getElementById('uname').value,
            'password': document.getElementById('pwd').value,
            'email': document.getElementById('email').value,
            'location': document.getElementById('loc').value,
            'company': document.getElementById('com').value,
            'gender': document.querySelector('input[name="gender"]:checked').value
        };
        users.push(user);
        localStorage.a_users = JSON.stringify(users);
    }
    else {
        if(!document.getElementById('uname').nextElementSibling) {
            document.getElementById('uname').insertAdjacentHTML('afterend', '<span style="color:red">Please enter your name!</span>');
        }
        if(!document.getElementById('pwd').nextElementSibling) {
            document.getElementById('pwd').insertAdjacentHTML('afterend', '<span style="color:red">Please enter your password!</span>');
        }
        if(!document.getElementById('email').nextElementSibling) {
            document.getElementById('email').insertAdjacentHTML('afterend', '<span style="color:red">Please enter your email!</span>');
        }
        if(!document.getElementById('loc').nextElementSibling) {
            document.getElementById('loc').insertAdjacentHTML('afterend', '<span style="color:red">Please enter your location!</span>');
        }
        if(!document.getElementById('com').nextElementSibling) {
            document.getElementById('com').insertAdjacentHTML('afterend', '<span style="color:red">Please enter your company!</span>');
        }
        if(!document.getElementById('female').nextElementSibling) {
            document.getElementById('female').insertAdjacentHTML('afterend', '<span style="color:red">Please select your gender!</span>');
        }
    }
});
