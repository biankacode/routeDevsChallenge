const leetAlphabet = {
  "a": "4",
  "b": "8",
  "c": "(",
  "d": "|)",
  "e": "3",
  "f": "|=",
  "g": "6",
  "h": "|-|",
  "i": "1",
  "j": "|)",
  "k": "|<",
  "l": "|",
  "m": "|v|",
  "n": "|v",
  "o": "0",
  "p": "|>",
  "q": "0",
  "r": "2",
  "s": "5",
  "t": "7",
  "u": "|_|",
  "v": "|",
  "w": "||",
  "x": "><",
  "y": "1|",
  "z": "2"
}

  

  function codeToLeet (str) {
    let srtToLeet = '';
    for (let i = 0; i < str.length; i ++) {
        srtToLeet += leetAlphabet[str[i]]
    }
    return srtToLeet
  }

 console.log('Output ---->', codeToLeet('codigohaker'));
  