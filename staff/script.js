function getDevInfos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let res = JSON.parse(this.responseText);
      let cards = document.getElementById('cards');
      res.forEach(elem => {
        cards.innerHTML += '<div class="card"><img src="' + elem.avatar + '"><h1>' + elem.name + '<a>#' + elem.discriminator + '</a></h1><h2>' + elem.title +'</h2></div>'
      });
    };
    xhttp.open("GET", "https://horstcors.herokuapp.com/https://horst-infos.herokuapp.com/");
    xhttp.send();
  }