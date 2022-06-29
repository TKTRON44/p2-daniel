function IsEmail(email) {
  var exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  var check = /@[w-]+./;
  var checkend = /.[a-zA-Z]{2,3}$/;
  if (
    email.search(exclude) != -1 ||
    email.search(check) == -1 ||
    email.search(checkend) == -1
  ) {
    return false;
  } else {
    alert("Emails não estão corretos");
  }
}

document.getElementById("insert").onclick = () => {};
let newItem = document.getElementById("itemInsert").value;
if (newItem) newItem = document.createTextNode(newItem);

let newLi = document.createElement("li");
newLi.appendChild(newItem);

estruturaLista.appendChild(newLi);

ItemAremover.max = lista.length;

function enviarCadastro() {
  var name = document.getElementById("login_senha").value;
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("").value;
  var pagamento = document.getElementById("").value;
}
