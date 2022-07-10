function one() {
    var storeId = document.getElementById("store_id").value;

    var spanShow = document.querySelector('.show');
    var errowE = document.querySelector('.errow');


    if (storeId == null || storeId == "") {
        console.log(1);
        spanShow.innerHTML = ' *'
        errowE.innerHTML = 'required'
        return;
    } else {


        spanShow.innerHTML = ' '
        errowE.innerHTML = ''
        return false;

    }
}

function two() {
    var nameId = document.getElementById("name_id").value;

    var spanShow2 = document.querySelector('.show2');
    var errowE2 = document.querySelector('.errow2');


    if (nameId == null || nameId == "") {
        console.log(3);
        spanShow2.innerHTML = ' *'
        errowE2.innerHTML = 'required'
        return;
    } else {


        spanShow2.innerHTML = ' '
        errowE2.innerHTML = ''
        return false;

    }
}

function three() {
    var phoneId = document.getElementById("phone_id").value;

    var spanShow3 = document.querySelector('.show3');
    var errowE3 = document.querySelector('.errow3');


    if (phoneId == null || phoneId == "") {
        console.log(3);
        spanShow3.innerHTML = ' *'
        errowE3.innerHTML = 'required'
        return;
    } else {


        spanShow3.innerHTML = ' '
        errowE3.innerHTML = ''
        return false;

    }
}