import sign from 'jwt-encode';

const data = {
    payload: { user_id: 14 },
    expire: 20,
};
const secret = 'secret';

// $ExpectType string
sign(data, secret);

// $ExpectType string
sign(data, secret, { alg: 'HS256' });

// $ExpectType string
sign(data, secret, { typ: 'JWT' });

// $ExpectType string
sign(data, secret, { typ: 'JWT', info: 'test' });

// $ExpectError
sign(data);

// $ExpectError
sign(data, { typ: 'testy' });
