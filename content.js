
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    // name
    try {

        var mname = document.getElementsByClassName("company-name")[0].innerText;
    }
    catch (err) {
        var mname = "NA";
    }

    // console.log(mname);

    // email
    try {

        var memail = document.getElementById("company-domain").innerText;
    }
    catch (err) {
        var memail = "NA";
    }

    // address
    try {

        var maddress = document.getElementsByClassName("full-page-address")[0].innerText;
    }
    catch (err) {
        var maddress = "NA";
    }

    //phone
    try {

        var mphone = document.getElementsByClassName("header-phone")[0].innerText;
    }
    catch (err) {
        var mphone = "NA";
    }

    // revenue

    try {

        var mrevenue = document.getElementsByClassName("revenue-range")[0].innerText;
    }
    catch (err) {
        var mrevenue = "NA";
    }

    try {
        var top_executive_details_1 = document.getElementsByClassName("overview-executives ng-star-inserted")[0].innerText;

        var my_details = top_executive_details_1.split("\n");
        var name_1 = my_details[1];
        var position_1 = my_details[2];
        var position_1 = position_1.split(',');
        var position_1 = position_1[0];
        var email_1 = my_details.slice(-1)[0];
        var phone_1 = my_details.slice(-3)[0];
        if (phone_1.includes(' ') || phone_1.includes('') || phone_1.includes(null)){
            var phone_1 = my_details.slice(-2)[0];
            if (phone_1.includes('@')){
                var phone_1 = my_details.slice(-3)[0];
            }
        }
        if (email_1.includes('(Direct)') || email_1.includes('(HQ)') || email_1.includes('(Mobile)')){
            phone_1 = email_1;
            email_1 = 'NA';
        }
    }
    catch (err) {
        var name_1 = "NA"
        var position_1 = "NA"
        var email_1 = "NA"
        var phone_1 = "NA"
    }

    try {
        var top_executive_details_2 = document.getElementsByClassName("overview-executives ng-star-inserted")[1].innerText;

        var my_details_2 = top_executive_details_2.split("\n");
        var name_2 = my_details_2[1];
        var position_2 = my_details_2[2];
        var position_2 = position_2.split(',');
        var position_2 = position_2[0];
        var email_2 = my_details_2.slice(-1)[0];
        var phone_2 = my_details_2.slice(-3)[0];
        if (phone_2.includes(' ') || phone_2.includes('') || phone_2.includes(null)){
            var phone_2 = my_details_2.slice(-2)[0];
            if (phone_2.includes('@')){
                var phone_2= my_details_2.slice(-3)[0];
            }
        }
        if (email_2.includes('(Direct)') || email_2.includes('(HQ)') || email_2.includes('(Mobile)')){
            phone_2 = email_2;
            email_2 = 'NA';
        }
    }
    catch (err) {
        var name_2 = "NA"
        var position_2 = "NA"
        var email_2 = "NA"
        var phone_2 = "NA"
    }
    
    try {
        var top_executive_details_3 = document.getElementsByClassName("overview-executives ng-star-inserted")[2].innerText;

        var my_details_3 = top_executive_details_3.split("\n");
        var name_3 = my_details_3[1];
        var position_3 = my_details_3[2];
        var position_3 = position_3.split(',');
        var position_3 = position_3[0];
        var email_3 = my_details_3.slice(-1)[0];
        var phone_3 = my_details_3.slice(-3)[0];
        if (phone_3.includes(' ') || phone_3.includes('') || phone_3.includes(null)){
            var phone_3 = my_details_3.slice(-2)[0];
            if (phone_3.includes('@')){
                var phone_3 = my_details_3.slice(-3)[0];
            }
        }
        if (email_3.includes('(Direct)') || email_3.includes('(HQ)') || email_3.includes('(Mobile)')){
            phone_3 = email_3;
            email_3 = 'NA';
        }
    }
    catch (err) {
        var name_3 = "NA"
        var position_3 = "NA"
        var email_3 = "NA"
        var phone_3 = "NA"
    }

    fname = '';
    fposition = '';
    femail = '';
    fphone = '';

    if (email_1.includes('(Business)') || email_1.includes('(Supplemental)') || email_1.includes('NA')){
        fname = name_1;
        fposition = position_1;
        femail = email_1;
        fphone = phone_1;  
    }else if (email_2.includes('(Business)') || email_2.includes('(Supplemental)') || email_2.includes('NA')){
        fname = name_2;
        fposition = position_2;
        femail = email_2;
        fphone = phone_2;  
    }else if (email_3.includes('(Business)') || email_3.includes('(Supplemental)') || email_3.includes('NA')){
        fname = name_3;
        fposition = position_3;
        femail = email_3;
        fphone = phone_3;  
    }

    var emp_name = 'Ikrash';

    window.open('https://tenders2bidinfo.herokuapp.com//data/' + mname + '/' + mphone + '/' + memail + '/' + mrevenue + '/' + fname + '/' + fposition + '/' + femail + '/' + fphone + '/' + emp_name + '/' + maddress, "_blank") || window.location.replace('https://tenders2bidinfo.herokuapp.com/' + mname + '/' + mphone + '/' + memail + '/' + mrevenue + '/' + fname + '/' + fposition + '/' + femail + '/' + fphone + '/' + emp_name + '/' + maddress,);

    
});
