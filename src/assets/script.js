function getDevInfos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      let div = document.getElementById('servercount');
      div.innerHTML = '<h2>Horst has over</h2><h1>' + res.horst.serverMembers + '</h1>\n<h2>users!</h2>'
    }
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://horst-infos.herokuapp.com/");
    xhttp.send();
  }