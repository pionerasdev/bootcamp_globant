const { StringUtils } = require('../src/sincronous-code');

describe('Sync Code Suite - toTitle', () => {
  let stringUtils;

  beforeAll(() => {
    stringUtils = new StringUtils();
  });

  test('A title from a non-titled string.', () => {
    stringUtils.toTitle()
    const value = stringUtils.toTitle('sAmPlE');
    expect(value).toBe('Sample');
  });

  test('A title from a non-titled strings.', () => {
    const value = stringUtils.toTitle('this is JUST a Sample');
    expect(value).toBe('This Is Just A Sample');
  });

  test('A null value test.', () => {
    const value = stringUtils.toTitle(null);
    expect(value).toBe(null);
  });
});

describe('Sync Code Suite - Encoding', () => {
  let stringUtils;
  let dummyEncoder;

  beforeAll(() => {
    stringUtils = new StringUtils();
    dummyEncoder = {
      encode(recStr) {
        return recStr.split('').reverse().join('');
      },
      encodeAsync(recStr, cb) {
        return cb(recStr.split('').reverse().join(''));
      },
    };
  });

  test('Encode a string.', () => {
    const value = stringUtils.encodeString(dummyEncoder, '*', 'Hello');
    expect(value).toBe('olleH*');
  });

  test('Encode asynchronously a string.', done => {
    const encodeAsync = jest.fn((cadena1, callback) => {
      callback(`***${cadena1}***`.toUpperCase());
    });
    stringUtils.encodeStringAsync(
      { encodeAsync },
      '*',
      'Hello',
      value => {
        // expect(value).toBe('****HELLO***');
        expect(encodeAsync.mock.calls.length).toBe(1);
        expect(encodeAsync.mock.calls[0][0]).toBe('*Hello');
        done();
      },
    );
  });
});

describe('Suite Palindrome', () => {
  let stringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  test('Debe existir isPalindrome', () => {
    expect(stringUtils.isPalindrome).toBeInstanceOf(Function);
  });

  test('Debe recibir una cadena', () => {
    expect(stringUtils.isPalindrome).toThrowError(
      /Invalid Data Type, required \w+.$/
    );
  });

  test('Debe retornar true si es palindrome', () => {
    expect(stringUtils.isPalindrome('hola')).toBeFalsy();
    expect(stringUtils.isPalindrome('ana')).toBeTruthy();
  });

});
