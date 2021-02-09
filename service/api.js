var API_BASE_URL = 'https://www.direw1025.com/';
export const request = function request(url, method, data) {
    var _url = API_BASE_URL + url;
    var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    return new Promise(function (resolve, reject) {
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: header,
            success: function success(res) {
                resolve(res.data);
            },
            fail: function fail(error) {
                reject(error);
            },
            complete: function complete(aaa) {
                // 加载完成
            }
        });
    });
};




