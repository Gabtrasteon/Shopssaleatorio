function procura() {
    var input, filter, divs, h1s, i, txtValue;
    input = document.getElementById("pesquisaInput");
    filter = input.value.toUpperCase();
    divs = document.getElementsByClassName("prod");
    for (i = 0; i < divs.length; i++) {
        h1s = divs[i].getElementsByTagName("h1")[0];
        txtValue = h1s.textContent || h1s.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}
