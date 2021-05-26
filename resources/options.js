
const saveToken = () => {
    const token = document.getElementById('token').value;
    chrome.storage.local.set({
        token: token
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
};

const restoreToken = () => {
    chrome.storage.local.get({
        token: ''
    }, (items) => {
        document.getElementById('token').value = items.token;
    });
};

const saveMembers = () => {
    const member_1 = document.getElementById('member_1').value;
    const member_2 = document.getElementById('member_2').value;
    const member_3 = document.getElementById('member_3').value;
    const member_4 = document.getElementById('member_4').value;
    const member_5 = document.getElementById('member_5').value;
    const member_6 = document.getElementById('member_6').value;
    const member_7 = document.getElementById('member_7').value;
    const member_8 = document.getElementById('member_8').value;
    const member_9 = document.getElementById('member_9').value;
    const member_10 = document.getElementById('member_10').value;
    chrome.storage.local.set({
        member_1: member_1,
        member_2: member_2,
        member_3: member_3,
        member_4: member_4,
        member_5: member_5,
        member_6: member_6,
        member_7: member_7,
        member_8: member_8,
        member_9: member_9,
        member_10: member_10
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
};

const restoreMembers = () => {
    chrome.storage.local.get({
        member_1: '',
        member_2: '',
        member_3: '',
        member_4: '',
        member_5: '',
        member_6: '',
        member_7: '',
        member_8: '',
        member_9: '',
        member_10: ''
    }, (items) => {
        document.getElementById('member_1').value = items.member_1;
        document.getElementById('member_2').value = items.member_2;
        document.getElementById('member_3').value = items.member_3;
        document.getElementById('member_4').value = items.member_4;
        document.getElementById('member_5').value = items.member_5;
        document.getElementById('member_6').value = items.member_6;
        document.getElementById('member_7').value = items.member_7;
        document.getElementById('member_8').value = items.member_8;
        document.getElementById('member_9').value = items.member_9;
        document.getElementById('member_10').value = items.member_10;
    });
};

const restore = () => {
    restoreToken();
    restoreMembers();
};

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('saveToken').addEventListener('click', saveToken);
document.getElementById('saveMembers').addEventListener('click', saveMembers);
