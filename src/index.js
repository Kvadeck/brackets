
module.exports = function check(str, config) {

  let strCopy = str;
  let pairLen = Array.from(str).length / 2;

  if (Array.from(str).length % 2 !== 0) return false;

  // Config pair trans
  const transPair = config.reduce((pr, cur) => {
    pr.push(cur.join(''))
    return pr;
  }, []);

  // Loop all over the str
  for (let i = 0; i < pairLen; i++) {
    for (let i = 0; i < transPair.length; i++) {
      let el = transPair[i];
      strCopy = strCopy.replace(el, '');
    }
  }

  return (strCopy) ? false : true;

}


