function getDevInfos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      let c1 = document.getElementById('c1');
      let c2 = document.getElementById('c2');
      c1.innerHTML = '<img src="' + res.ninods.avatar + '"><h1>' + res.ninods.name + '<a>#' + res.ninods.discriminator + '</a></h1><h2>Head developer</h2>'
      c2.innerHTML = '<img src="' + res.jimbob.avatar + '"><h1>' + res.jimbob.name + '<a>#' + res.jimbob.discriminator + '</a></h1><h2>Something else</h2>'
    }
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://horst-infos.herokuapp.com/");
    xhttp.send();
  }