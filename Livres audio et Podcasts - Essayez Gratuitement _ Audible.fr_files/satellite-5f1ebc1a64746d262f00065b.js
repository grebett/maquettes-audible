_satellite.pushAsyncScript(function(event, target, $variables){
  document.body.addEventListener("click", function(event) {
  if (event && event.target && event.target.id === 'truste-consent-button') {
    setTimeout(() => {  window.location.reload(); }, 1000 );
	}
});
});
