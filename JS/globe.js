function initialize(){
		var options = {scrollWheelZoom: false, dragging: false, tilting: false}
        earth = new WE.map('globecontainer', options);
        earth.setView([46.8011, 8.2266], 3);
        WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(earth);
    
        // Start a simple rotation animation
        var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.5*(elapsed/30)]);
            requestAnimationFrame(animate);
      		});

}