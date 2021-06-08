document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
            })
    }
    function setCount(res) {
        const div = document.createElement('b')
        div.textContent = `${res.executive_name},${res.executive_phone}`
        document.body.appendChild(div);
    }
}, false)