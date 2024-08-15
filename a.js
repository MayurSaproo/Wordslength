function textf(){
    let textenter = document.getElementById("textenter").value
    let word = " "
    countOccurrences(textenter,word)
}
function countOccurrences(textenter, word) {
    document.getElementById("textlength").value =  textenter.split(word).length - 1;
  }

