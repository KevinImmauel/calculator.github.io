const isIsogram = 'kenny'

function isIsogram (str) {
    return !/(.).*\1/.test(str);
}