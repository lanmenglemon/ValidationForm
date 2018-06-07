var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    displayUsers(users);
}
function addUser(user) {
    var newUser = '<tr><td>' + user.username + '</td>' +
                '<td>' + user.email + '</td>' +
                '<td>' + user.location + '</td>' +
                '<td>' + user.company + '</td>' +
                '<td>' + user.gender + '</td></tr>';
    document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].insertAdjacentHTML('afterend', newUser);
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

function checkRadioValues() {
    var genders = document.getElementsByName('gender');
    for (var i = 0; i < genders.length; i++) {
        if(genders[i].checked) {
            return true;
        }
    }
    return false;
}

document.getElementById('btn').addEventListener('click', function() {
    if (document.getElementById('uname').value && document.getElementById('pwd').value && document.getElementById('email').value && document.getElementById('loc').value && document.getElementById('com').value && checkRadioValues()) {
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
        addUser(user);
    }
    else {
        if(!document.getElementById('uname_warning') && !document.getElementById('uname').value) {
            document.getElementById('uname').insertAdjacentHTML('afterend', '<span style="color:red" id="uname_warning">Please enter your name!</span>');
        }
        if(document.getElementById('uname').value && document.getElementById('uname_warning')) {
            document.getElementById('uname_warning').remove();
        }
        if(!document.getElementById('pwd_warning') && !document.getElementById('pwd').value) {
            document.getElementById('pwd').insertAdjacentHTML('afterend', '<span style="color:red" id="pwd_warning">Please enter your password!</span>');
        }
        if(document.getElementById('pwd').value && document.getElementById('pwd_warning')) {
            document.getElementById('pwd_warning').remove();
        }
        if(!document.getElementById('email_warning') && !document.getElementById('email').value) {
            document.getElementById('email').insertAdjacentHTML('afterend', '<span style="color:red" id="email_warning">Please enter your email!</span>');
        }
        if(document.getElementById('email').value && document.getElementById('email_warning')) {
            document.getElementById('email_warning').remove();
        }
        if(!document.getElementById('loc_warning') && !document.getElementById('loc').value) {
            document.getElementById('loc').insertAdjacentHTML('afterend', '<span style="color:red" id="loc_warning">Please enter your location!</span>');
        }
        if(document.getElementById('loc').value && document.getElementById('loc_warning')) {
            document.getElementById('loc_warning').remove();
        }
        if(!document.getElementById('com_warning') && !document.getElementById('com').value) {
            document.getElementById('com').insertAdjacentHTML('afterend', '<span style="color:red" id="com_warning">Please enter your company!</span>');
        }
        if(document.getElementById('com').value && document.getElementById('com_warning')) {
            document.getElementById('com_warning').remove();
        }
        if(!document.getElementById('gender_warning') && !checkRadioValues()) {
            document.getElementById('female').insertAdjacentHTML('afterend', '<span style="color:red" id="gender_warning">Please select your gender!</span>');
        }
        if(checkRadioValues() && document.getElementById('gender_warning')) {
            document.getElementById('gender_warning').remove();
        }
    }
});
