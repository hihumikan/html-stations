function getData() {
    const argumentArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    return hogehoge(argumentArray[0], argumentArray[1], argumentArray[2], argumentArray[3], argumentArray[4], argumentArray[5], argumentArray[6], argumentArray[7], argumentArray[8], argumentArray[9], argumentArray[10], argumentArray[11], argumentArray[12], argumentArray[13]);
}

// ↓こちらの関数は触らないこと
function hogehoge(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14) {
  return s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14
}
var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;
