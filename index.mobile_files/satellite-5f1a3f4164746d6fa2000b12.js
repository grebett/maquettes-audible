_satellite.pushAsyncScript(function(event, target, $variables){
  var membershipDirectedId = _satellite.getVar("member: ID")
   kochava.identify(
  {directedid: membershipDirectedId});
});
