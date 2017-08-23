import unfetch from 'unfetch';

const chicky = () => {

    const methods = [
        'get',
        'post',
        'put',
        'patch',
        'delete'
    ];

    const fly = () => {
        return methods.reduce((list, verb) =>  Object.assign({}, list, {
            [verb]: methods[verb] = verb === 'get' ?
                request.bind(null, verb.toUpperCase()) :
                requestWithBody.bind(null, verb.toUpperCase())
        }), {});
    };

    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const request = (method, url, options = {}) =>
        unfetch(
            url,
            Object.assign({}, options, {
                method
            })
        ).then(handleErrors);

    const requestWithBody = (method, url, body, options) =>
        request(method, url, Object.assign({}, { body }, options));

    return fly();
};

export default chicky();