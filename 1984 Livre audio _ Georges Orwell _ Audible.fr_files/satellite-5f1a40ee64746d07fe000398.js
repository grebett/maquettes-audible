_satellite.pushAsyncScript(function(event, target, $variables){
  !function(e,t,o,a,n){
  var i=window.kochava=window.kochava||[];
  if(i.loaded)window.console&&console.error&&console.error("Kochava snippet already included");
  else{i.loaded=!0,i.methods=["page","identify","activity","conversion","init","submitCookieId","getCookieId","getMAID"],stub=function(e){return function(){var t=Array.prototype.slice.call(arguments);
  return t.unshift(e),i.push(t),i}};for(var r=0;r<i.methods.length;r++){var c=i.methods[r];i[c]=stub(c)}i.init((new Date).getTime(),e,!0),function(){var e=document.createElement("script");
  e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"assets.kochava.com/kochava.js/v2/kochava.min.js";
  var t=document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e,t)}(),i.page()}}("koaudible-web-4a2ufcd8o","v2",true,false,false);
});
