import unfetch from 'unfetch';

var chicky = function chicky() {

    var methods = ['get', 'post', 'put', 'patch', 'delete'];

    var fly = function fly() {
        return methods.map(function (verb) {
            return methods[verb] = verb === 'get' ? request.bind(null, verb.toUpperCase()) : requestWithBody.bind(null, verb.toUpperCase());
        });
    };

    var request = function request(method, url) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return unfetch(url, Object.assign({}, options, {
            method: method
        }));
    };

    var requestWithBody = function requestWithBody(method, url, body, options) {
        return request(method, url, Object.assign({}, { body: body }, options));
    };

    return fly();
};

var index = chicky();

export default index;
