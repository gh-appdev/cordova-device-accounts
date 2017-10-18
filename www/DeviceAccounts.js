var deviceAccounts = {
    get: function (onSuccess, onFail) {
        cordova.exec(onSuccess, onFail, 'DeviceAccounts', 'getDeviceAccounts', []);
    },

    getByType: function (type, onSuccess, onFail) {
        cordova.exec(onSuccess, onFail, 'DeviceAccounts', 'getDeviceAccountsByType', [type]);
    },

    getEmails: function (onSuccess, onFail) {
        DeviceAccounts.getByType('com.google', function (accounts) {
            var emails = [];
            for (var i in accounts) {
                emails.push(accounts[i].name);
            }
            onSuccess(emails);
        }, onFail);
    },

    getEmail: function (onSuccess, onFail) {
        DeviceAccounts.getEmails(function (emails) {
            if (emails && emails.length > 0) {
                onSuccess(emails[0]);
            } else {
                onSuccess();
            }
        }, onFail);
    }
}

if (!window.plugins) {
    window.plugins = {};
}

window.plugins.deviceAccounts = deviceAccounts;
return window.plugins.deviceAccounts;
