// JSDOC
class StringUtils {
  /**
   * Return all string converted to title
   * @param {string} bigString
   * @returns {string} title case string
   */
  toTitle(bigString) {
    // no olvidar agregar casos de nulidad
    if (!bigString) {
      return bigString;
    }
    const stringParts = bigString.split(' ');
    const newStrings = stringParts.map(str => {
      const firstChar = str.substring(0, 1).toUpperCase();
      const moreChars = str.substring(1).toLowerCase();
      return `${firstChar}${moreChars}`;
    });
    return newStrings.join(' ');
  }

  /**
   * Return true if the string is palindrome.
   * @param {string} cadena cadena que va a ser revisada
   * @returns {boolean}
   */
  isPalindrome(cadena) {
    if (!cadena || typeof cadena !== 'string') {
      throw new Error('Invalid Data Type, required string.');
    }
    return cadena.split('').reverse().join('') === cadena;
  }

  /**
   * Encode a string
   * @param {Any} encoder object with a encode function
   * @param {String} key string to be used as key
   * @param {String} string string to be encoded
   */
  encodeString(encoder, key, string) {
    return encoder.encode(key + string);
  }

  /**
   * Encode a string asynchronously
   * @param {Any} encoder object with a encode function
   * @param {String} key string to be used as key
   * @param {String} string string to be encoded
   */
  encodeStringAsync(encoder, key, string, callback) {
    setTimeout(() => {
      encoder.encodeAsync(key + string, callback);
    }, 500);
  }
}

module.exports = {
  StringUtils,
};
