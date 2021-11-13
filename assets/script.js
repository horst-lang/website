function getHorstInfos() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let res = JSON.parse(this.responseText);
    let infos = document.getElementById('infos');
    let main = document.getElementById('version');
    let version = res.history[res.recent];
    main.innerHTML = '<h2>Current version:</h2>\n<h1>v' + version.versionNr + '</h1>';
    infos.innerHTML = '<h1>Horst infos</h1><ul><li><bl>Version</bl><ul><li><bl>Name:</bl> ' + version.name + '</li><li><bl>Version number:</bl> v' + version.versionNr + '</li><li><bl>Tags:</bl> ' + version.tags + '</li></ul></li></ul>'
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/horst-lang/info/main/version.json");
  xhttp.send();
}