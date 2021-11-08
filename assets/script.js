function getDevInfos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      let div = document.getElementById('version');
      div.innerHTML = '<h2>Current version:</h2>\n<h1>v' + res.horst.version + '</h1>';
    }
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://horst-infos.herokuapp.com/");
    xhttp.send();
  }

function getHorstInfos() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let res = JSON.parse(this.responseText);
    let infos = document.getElementById('infos');
    infos.innerHTML = '<h1>Horst infos</h1><ul><li><bl>Version</bl><ul><li><bl>Name:</bl> ' + res.name + '</li><li><bl>Version number:</bl> v' + res.versionNr + '</li><li><bl>Tags:</bl> ' + res.tags + '</li></ul></li></ul>'
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/horst-lang/info/main/version.json");
  xhttp.send();
}