document.addEventListener('DOMContentLoaded', function () {


    document.querySelector('button').addEventListener('click', setCount, false)

    function myAction(input) {
        // alert("The entered data is : " + input.value);

        // var m_gen = "";
        // m_gen = input.value
        // console.log("input value is : " + m_gen);

        chrome.tabs.query({
                currentWindow: true,
                active: true
            },
            function (tabs) {
                var m_gen = "";
                m_gen = input.value
                chrome.tabs.sendMessage(tabs[0].id, m_gen)
            })

    }

    function setCount() {

        var architecture_engineering_design = document.getElementById('architecture_engineering_design');
        var civil_engineering_cunstruction = document.getElementById('civil_engineering_cunstruction');
        var commercial_residential_construction = document.getElementById('commercial_residential_construction');
        var chemicals_products_manufacturing = document.getElementById('chemicals_products_manufacturing');
        var database_file_management_software = document.getElementById('database_file_management_software');
        var engineering_software = document.getElementById('engineering_software');
        var financial_software = document.getElementById('financial_software');
        var healthcare_software = document.getElementById('healthcare_software');
        var human_resources_software = document.getElementById('human_resources_software');
        var networking_software = document.getElementById('networking_software');
        var food_beverage_manufacturing = document.getElementById('food_beverage_manufacturing');

        if (architecture_engineering_design.checked == true) {
            myAction(architecture_engineering_design)

        } else if (civil_engineering_cunstruction.checked == true) {
            myAction(civil_engineering_cunstruction)

        } else if (commercial_residential_construction.checked == true) {
            myAction(commercial_residential_construction)

        } else if (chemicals_products_manufacturing.checked == true) {
            myAction(chemicals_products_manufacturing)

        } else if (database_file_management_software.checked == true) {
            myAction(database_file_management_software)

        } else if (engineering_software.checked == true) {
            myAction(engineering_software)

        } else if (financial_software.checked == true) {
            myAction(financial_software)

        } else if (healthcare_software.checked == true) {
            myAction(healthcare_software)

        } else if (human_resources_software.checked == true) {
            myAction(human_resources_software)

        } else if (networking_software.checked == true) {
            myAction(networking_software)

        } else if (food_beverage_manufacturing.checked == true) {
            myAction(food_beverage_manufacturing)

        }

    }

}, false)