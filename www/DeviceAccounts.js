var deviceAccounts = {
    get: function (onSuccess, onFail) {
        cordova.exec(onSuccess, onFail, 'DeviceAccounts', 'getDeviceAccounts', []);
    },

    getByType: function (type, onSuccess, onFail) {
        cordova.exec(onSuccess, onFail, 'DeviceAccounts', 'getDeviceAccountsByType', [type]);
    },

    getEmails: function (onSuccess, onFail) {
        cordova.exec(function (accounts) {
            var emails = [];
            for (var i in accounts) {
                emails.push(accounts[i].name);
            }
            onSuccess(emails);
        }, onFail, 'DeviceAccounts', 'getDeviceAccountsByType', 'com.google');
    },

    getEmail: function (onSuccess, onFail) {
        cordova.exec(function (accounts) {
            if(accounts && accounts.length > 0) {
                onSuccess(accounts[0].name);
            } else {
                onSuccess();
            }
        }, onFail, 'DeviceAccounts', 'getDeviceAccountsByType', ['com.google']);
    }
}

if (!window.plugins) {
    window.plugins = {};
}

window.plugins.deviceAccounts = deviceAccounts;
return window.plugins.deviceAccounts;
