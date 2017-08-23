import unfetch from 'unfetch';

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var chicky = function chicky() {

    var methods = ['get', 'post', 'put', 'patch', 'delete'];

    var fly = function fly() {
        return methods.reduce(function (list, verb) {
            return Object.assign({}, list, defineProperty({}, verb, methods[verb] = verb === 'get' ? request.bind(null, verb.toUpperCase()) : requestWithBody.bind(null, verb.toUpperCase())));
        }, {});
    };

    var handleErrors = function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };

    var request = function request(method, url) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return unfetch(url, Object.assign({}, options, {
            method: method
        })).then(handleErrors);
    };

    var requestWithBody = function requestWithBody(method, url, body, options) {
        return request(method, url, Object.assign({}, { body: body }, options));
    };

    return fly();
};

var index = chicky();

export default index;
