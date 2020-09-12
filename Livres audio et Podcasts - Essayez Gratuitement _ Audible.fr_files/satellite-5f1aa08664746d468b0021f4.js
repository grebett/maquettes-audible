_satellite.pushAsyncScript(function(event, target, $variables){
  var _STATE = {};
function runOnce(){
    if(!_STATE.hasRunOnce && window.truste && truste.eu &&
truste.eu.prefclose){
} }
console.log("doing run once");
_STATE.oldValue = parseInt(truste.eu.bindMap.prefCookie);
_STATE.oldMethod = truste.eu.prefclose;
truste.eu.prefclose = function(){
       _STATE.oldMethod();
       if(_STATE.oldValue != parseInt(truste.eu.bindMap.prefCookie))
           setTimeout(function(){ window.location.reload(); },20);
};
_STATE.hasRunOnce = true;
_STATE.i && clearInterval(_STATE.i);
_STATE.i = setInterval(runOnce,10);
});
