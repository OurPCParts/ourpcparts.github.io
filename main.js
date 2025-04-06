function addToCart() {
    var kosarUzenet = document.getElementById('kosar-uzenet');
    kosarUzenet.style.display = 'block'; // Megjeleníti az üzenetet
  
    // Eltünteti az üzenetet 3 másodperc után
    setTimeout(function() {
      kosarUzenet.style.display = 'none';
    }, 3000);
  }
  