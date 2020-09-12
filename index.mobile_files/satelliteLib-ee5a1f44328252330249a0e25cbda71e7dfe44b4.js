!function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return r(i?i:e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){(function(i){function n(){function e(){h.windowLoaded=!0}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),h.codeLoadEnd=(new Date).getTime()}/** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 3.1.2
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var r=e("./child/ChildVisitor"),a=e("./child/Message"),s=e("./child/makeChildMessageListener"),o=e("./utils/asyncParallelApply"),l=e("./utils/enums"),u=e("./utils/utils"),d=e("./utils/getDomain"),c=e("./units/version"),f=e("./units/crossDomain"),g=e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),p=e("./units/makeCorsRequest"),m=e("./units/makeDestinationPublishing"),_=e("./utils/constants"),h=function(e,t,n){function r(e){var t=e;return function(e){var i=e||v.location.href;try{var n=S._extractParamFromUri(i,t);if(n)return H.parsePipeDelimetedKeyValues(n)}catch(e){}}}function h(e){function t(e,t){e&&e.match(_.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[k],S.setMarketingCloudVisitorID),S._setFieldExpire(V,-1),t(e[R],S.setAnalyticsVisitorID)}function C(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function D(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e){var t=H.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}function n(e,i){var n=i[0],r=i[1];return null!=r&&r!==N&&(e=t(n,r,e)),e}var r=e.reduce(n,"");return i(r)}function I(e){var t=20160,i=e.minutesToLive,n="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(n=n?n:"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n?n:"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n?n:"Error: config.url is empty"),"undefined"==typeof i?i=t:(i=parseInt(i,10),(isNaN(i)||i<=0)&&(n=n?n:"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:i}}if(!n||n.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this;S.version="3.1.2";var v=i,A=v.Visitor;A.version=S.version,A.AuthState=l.AUTH_STATE,A.OptOut=l.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),S._c="Visitor",S._il=v.s_c_il,S._in=v.s_c_in,S._il[S._in]=S,v.s_c_in++,S._log={requests:[]},S.marketingCloudOrgID=e,S.cookieName="AMCV_"+e,S.sessionCookieName="AMCVS_"+e,S.cookieDomain=d(),S.cookieDomain===v.location.hostname&&(S.cookieDomain=""),S.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var y=v.document,M=null,b="MC",k="MCMID",E="MCORGID",T="MCCIDH",O="MCSYNCSOP",w="MCIDTS",L="MCOPTOUT",P="A",R="MCAID",F="AAM",x="MCAAMLH",V="MCAAMB",N="NONE",j=function(e){return!Object.prototype[e]},U=p(S,G);S.FIELDS=l.FIELDS,S.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+y.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1),r=i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n));return r},S.cookieWrite=function(e,t,i){var n,r=S.cookieLifetime;if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r?r:0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var a=i.getYear();i.setYear(a+2+(a<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(y.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(S.cookieDomain?" domain="+S.cookieDomain+";":""),S.cookieRead(e)===t):0},S.resetState=function(e){e?S._mergeServerState(e):C()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){if(S.isAllowed()){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(k,n,e,t,i)}return""},S.getVisitorValues=function(e,t){var i={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},n=t&&t.length?H.pluck(i,t):i;o(n,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(e){function t(){S._customerIDsHashChanged=!1}if(S.isAllowed()&&e){S._readVisitor();var i,n;for(i in e)if(j(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),S._currentCustomerIDs[i]=r}else S._currentCustomerIDs[i]={id:n};var a=S.getCustomerIDs(),s=S._getField(T),o="";s||(s=0);for(i in a)j(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));S._newCustomerIDsHash=S._hash(o),S._newCustomerIDsHash!==s&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(t))}},S.getCustomerIDs=function(){S._readVisitor();var e,t,i={};for(e in S._currentCustomerIDs)j(e)&&(t=S._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=A.AuthState.UNKNOWN);return i},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,i){if(!H.isTrackingServerPopulated()&&!i)return S._callCallback(e,[""]),"";if(S.isAllowed()){var n="";if(i||(n=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(i?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var s={};if(r){var o="http"+(S.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+S._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=u}return s.url=a,S._getRemoteField(i?k:R,a,e,t,s)}}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._getRemoteField(x,a,e,t,r)}}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._customerIDsHashChanged&&S._setFieldExpire(V,-1),S._getRemoteField(V,a,e,t,r)}}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var i=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(i=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):i&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=i=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),i&&(S._supplementalDataIDCurrentConsumed[e]=!0)),i},S.getOptOut=function(e,t){if(S.isAllowed()){var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(L,n,e,t,i)}return""},S.isOptedOut=function(e,t,i){if(S.isAllowed()){t||(t=A.OptOut.GLOBAL);var n=S.getOptOut(function(i){var n=i===A.OptOut.GLOBAL||i.indexOf(t)>=0;S._callCallback(e,[n])},i);return n?n===A.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},S._generateID=g,S._generateLocalMID=function(){var e=S._generateID(0);return q.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(v,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var i=S._callbackList[e];if(i)for(;i.length>0;)S._callCallback(i.shift(),t)}},S._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=H.parseHash(e),s=H.hashlessUrl(e),o=s.indexOf("?")===-1;if(o)return s+"?"+r+a;var l=s.split("?"),u=l[0]+"?",d=l[1],c=H.addQueryParamAtLocation(d,r,n);return u+c+a},S._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},S._parseAdobeMcFromUrl=r(_.ADOBE_MC),S._parseAdobeMcSdidFromUrl=r(_.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(t){var i=S._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=H.getTimestampInSeconds()-i.TS),i&&i.SDID&&i[E]===e&&n<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=i.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var t=S._parseAdobeMcFromUrl();if(t&&t.TS){var i=H.getTimestampInSeconds(),n=i-t.TS,r=Math.floor(n/60);if(r>_.ADOBE_MC_TTL_IN_MIN||t[E]!==e)return;h(t)}},S._mergeServerState=function(e){function t(e){H.isObject(e)&&S.setCustomerIDs(e)}function i(e){return H.isObject(e)?e:JSON.parse(e)}if(e)try{if(e=i(e),e[S.marketingCloudOrgID]){var n=e[S.marketingCloudOrgID];t(n.customerIDs),C(n.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,i,n){var r="d_fieldgroup";t=S._addQuerystringParam(t,r,e,1),n.url=S._addQuerystringParam(n.url,r,e,1),n.corsUrl=S._addQuerystringParam(n.corsUrl,r,e,1),q.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===U.corsMetadata.corsType&&U.fireCORS(n,i,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,i,n,r,a,s=S._getSettingsDigest(),o=!1,l=S.cookieRead(S.cookieName),u=new Date;if(null==S._fields&&(S._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2===1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&(i===T&&(n=""),r>0&&(r=u.getTime()/1e3-60)),i&&n&&(S._setField(i,n,1),r>0&&(S._fields["expire"+i]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[i]=!0)));!S._getField(R)&&H.isTrackingServerPopulated()&&(l=S.cookieRead("s_vi"),l&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(_.VALID_VISITOR_ID_REGEX)&&S._setField(R,n))))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,i=e?S._getCookieVersion(e):null;return i?c.areVersionsDifferent(i,S.version)&&(e=e.replace(_.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,i=S._getSettingsDigest();for(e in S._fields)j(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],i+=(i?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);i=S._appendVersionTo(i),S.cookieWrite(S.cookieName,i,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,i){null==S._fields&&(S._fields={}),S._fields[e]=t,i||S._writeVisitor()},S._getFieldList=function(e,t){var i=S._getField(e,t);return i?i.split("*"):null},S._setFieldList=function(e,t,i){S._setField(e,t?t.join("*"):"",i)},S._getFieldMap=function(e,t){var i=S._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},S._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)j(n)&&(r.push(n),r.push(t[n]))}S._setFieldList(e,r,i)},S._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),i&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&(e=e.toUpperCase(),"NOTARGET"===e&&(e=N)),e&&(e===N||e.match(_.VALID_VISITOR_ID_REGEX))||(e="")),e},S._setFields=function(e,t){if(S._clearTimeout(e),null!=S._loading&&(S._loading[e]=!1),q.fieldGroupObj[e]&&q.setState(e,!1),e===b){q.isClientSideMarketingCloudVisitorID!==!0&&(q.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(k);if(!i||S.overwriteCrossDomainMCIDAndAID){if(i="object"==typeof t&&t.mid?t.mid:S._findVisitorID(t),!i){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(k,i)}i&&i!==N||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&S._setFields(F,t),S._use1stPartyMarketingCloudServer&&t.mid&&S._setFields(P,{id:t.id})),S._callAllCallbacks(k,[i])}if(e===F&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=B.getRegionAndCheckIfChanged(t,n);S._callAllCallbacks(x,[r]);var a=S._getField(V);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),S._setFieldExpire(V,n),S._setField(V,a)),a||(a=""),S._callAllCallbacks(V,[a]),!t.error_msg&&S._newCustomerIDsHash&&S._setField(T,S._newCustomerIDsHash)}if(e===P){var s=S._getField(R);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(t),s?s!==N&&S._setFieldExpire(V,-1):s=N,S._setField(R,s)),s&&s!==N||(s=""),S._callAllCallbacks(R,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)B.idCallNotProcesssed=!0;else{B.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,B.processIDCallData(o)}if(t===Object(t)){var l,u;S.isAllowed()&&(l=S._getField(L)),l||(l=N,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),S._setFieldExpire(L,u,!0),S._setField(L,l)),S._callAllCallbacks(L,[l])}},S._loading=null,S._getRemoteField=function(e,t,i,n,r){var a,s="",o=H.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(S.isAllowed()){S._readVisitor(),s=S._getField(e,l[e]===!0);var u=function(){return(!s||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||o)};if(u()){if(e===k||e===L?a=b:e===x||e===V?a=F:e===R&&(a=P),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,S._loadData(a,t,function(t){if(!S._getField(e)){t&&q.setState(a,!0);var i="";e===k?i=S._generateLocalMID():a===F&&(i={error_msg:"timeout"}),S._setFields(a,i)}},r)),S._registerCallback(e,i),s?s:(t||S._setFields(a,{id:N}),"")}else s||(e===k?(S._registerCallback(e,i),s=S._generateLocalMID(),S.setMarketingCloudVisitorID(s)):e===R?(S._registerCallback(e,i),s="",S.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==k&&e!==R||s!==N||(s="",n=!0),i&&n&&S._callCallback(i,[s]),s},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(b,e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(P,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(F,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,i="",n=S._getField(k),r=S._getField(V,!0),a=S._getField(R),s=a&&a!==N?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var o,l,u=S.getCustomerIDs();if(u)for(o in u)j(o)&&(l=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var d="http"+(S.loadSSL?"s":"")+"://"+t+"/id",c="d_visid_ver="+S.version+"&d_rtbd=json&d_ver=2"+(!n&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(M===!0?"&d_coop_safe=1":M===!1?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,f=["s_c_il",S._in,e];return i=d+"?"+c+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:i,corsUrl:d+"?"+c,callback:f}}return{url:i}},S.appendVisitorIDsTo=function(e){try{var t=[[k,S._getField(k)],[R,S._getField(R)],[E,S.marketingCloudOrgID]];return S._addQuerystringParam(e,_.ADOBE_MC,D(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(t=t||S.getSupplementalDataID(H.generateRandomString(),!0),!t)return e;try{var i=D([["SDID",t],[E,S.marketingCloudOrgID]]);return S._addQuerystringParam(e,_.ADOBE_MC_SDID,i)}catch(t){return e}};var H={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==R)return!1;var n;return t||(t=S.trackingServer),i||(i=S.trackingServerSecure),n=S.loadSSL?i:t,!("string"!=typeof n||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(S.cookieDomain?" domain="+S.cookieDomain+";":"")},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){var t=e.split("|");return t.reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};S._helpers=H;var B=m(S,A);S._destinationPublishing=B,S.timeoutMetricsLog=[];var G,q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case b:t===!1?this.MCIDCallTimedOut!==!0&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case P:t===!1?this.AnalyticsIDCallTimedOut!==!0&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case F:t===!1?this.AAMIDCallTimedOut!==!0&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return q.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return q.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return q.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return q.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField(O)},S.idSyncByURL=function(e){var t=I(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=B;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=u.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},S.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=_.VERSION_REGEX.exec(e),i=t&&t.length>1?t[1]:null;return i},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!c.isLessThan(t,e)||H.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){M=!0},S.setAsCoopUnsafe=function(){M=!1},S.init=function(){function i(){if(t&&"object"==typeof t){S.configs=Object.create(null);for(var e in t)j(e)&&(S[e]=t[e],S.configs[e]=t[e]);S.idSyncContainerID=S.idSyncContainerID||0,M="boolean"==typeof S.isCoopSafe?S.isCoopSafe:H.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var i=S._getField(w),n=Math.ceil((new Date).getTime()/_.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!B.canMakeSyncIDCall(i,n)||(S._setFieldExpire(V,-1),S._setField(w,n)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}function n(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){B.checkDPIframeSrc();var e=function(){var e=B;e.readyToAttachIframe()&&e.attachIframe()};v.addEventListener("load",function(){A.windowLoaded=!0,e()});try{f.receiveMessage(function(e){B.receiveMessage(e.data)},B.iframeHost)}catch(e){}}}function r(){S.whitelistIframeDomains&&_.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(t){var i=new a(e,t),n=s(S,i);f.receiveMessage(n,t)}))}i(),n(),r()}};h.getInstance=function(e,t){function n(){var t=i.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}function a(){try{return i.self!==i.parent}catch(e){return!0}}function s(){i.s_c_il.splice(--i.s_c_in,1)}function o(e){var t="TEST_AMCV_COOKIE";return e.cookieWrite(t,"T",1),"T"===e.cookieRead(t)&&(e._helpers.removeCookie(t),!0)}if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var l=n();if(l)return l;var d=e,c=d.split("").reverse().join(""),f=new h(e,null,c);s();var g=u.getIeVersion(),p="number"==typeof g&&g<10;if(p)return f._helpers.replaceMethodsWithFunction(f,function(){});var m=a()&&!o(f)&&i.parent?new r(e,t,f,i.parent):new h(e,t,c);return f=null,m.init(),m},n(),i.Visitor=h,t.exports=h}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./child/ChildVisitor":2,"./child/Message":3,"./child/makeChildMessageListener":4,"./units/crossDomain":8,"./units/makeCorsRequest":9,"./units/makeDestinationPublishing":10,"./units/version":11,"./utils/asyncParallelApply":12,"./utils/constants":14,"./utils/enums":15,"./utils/getDomain":16,"./utils/utils":18,"@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID":19}],2:[function(e,t,i){(function(i){e("../utils/polyfills");var n=e("./strategies/LocalVisitor"),r=e("./strategies/ProxyVisitor"),a=e("./strategies/PlaceholderVisitor"),s=e("../utils/callbackRegistryFactory"),o=e("./Message"),l=e("../utils/enums"),u=l.MESSAGES;t.exports=function(e,t,l,d){function c(e){Object.assign(I,e)}function f(e){Object.assign(I.state,e),I.callbackRegistry.executeAll(I.state)}function g(e){if(!A.isInvalid(e)){v=!1;var t=A.parse(e);I.setStateAndPublish(t.state)}}function p(e){!v&&S&&(v=!0,A.send(d,e))}function m(){var e=!0;c(new n(l._generateID)),I.getMarketingCloudVisitorID(),I.callbackRegistry.executeAll(I.state,e),i.removeEventListener("message",_)}function _(e){if(!A.isInvalid(e)){var t=A.parse(e);v=!1,i.clearTimeout(this.timeout),i.removeEventListener("message",_),c(new r(I)),i.addEventListener("message",g),I.setStateAndPublish(t.state),I.callbackRegistry.hasCallbacks()&&p(u.GETSTATE)}}function h(){var e=250;S&&postMessage?(i.addEventListener("message",_),p(u.HANDSHAKE),this.timeout=setTimeout(m,e)):m()}function C(){i.s_c_in||(i.s_c_il=[],i.s_c_in=0),I._c="Visitor",I._il=i.s_c_il,I._in=i.s_c_in,I._il[I._in]=I,i.s_c_in++}function D(){function e(e){0!==e.indexOf("_")&&"function"==typeof l[e]&&(I[e]=function(){})}Object.keys(l).forEach(e),I.getSupplementalDataID=l.getSupplementalDataID}var I=this,S=t.whitelistParentDomain;I.state={},I.version=l.version,I.marketingCloudOrgID=e;var v=!1,A=new o(e,S);I.callbackRegistry=s(),I.init=function(){C(),D(),c(new a(I)),h()},I.findField=function(e,t){if(I.state[e])return t(I.state[e]),I.state[e]},I.messageParent=p,I.setStateAndPublish=f}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/callbackRegistryFactory":13,"../utils/enums":15,"../utils/polyfills":17,"./Message":3,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7}],3:[function(e,t,i){var n=e("../utils/enums"),r=n.MESSAGES,a={0:"prefix",1:"orgID",2:"state"};t.exports=function(e,t){this.parse=function(e){try{var t={},i=e.data.split("|");return i.forEach(function(e,i){if(void 0!==e){var n=a[i];t[n]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var a=e!==n.orgID,s=!t||i.origin!==t,o=Object.keys(r).indexOf(n.prefix)===-1;return a||s||o},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}}},{"../utils/enums":15}],4:[function(e,t,i){var n=e("../utils/enums"),r=e("../utils/utils"),a=n.MESSAGES,s=n.ALL_APIS,o=n.ASYNC_API_MAP,l=n.FIELDGROUP_TO_FIELD;t.exports=function(e,t){function i(){var t={};return Object.keys(s).forEach(function(i){var n=s[i],a=e[n]();r.isValueEmpty(a)||(t[i]=a)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=l[i];t.push(n)}}),t.length?t:null}function u(t){return function i(r){var a=n();if(a){var s=o[a[0]];e[s](i,!0)}else t()}}function d(e,n){var r=i();t.send(e,n,r)}function c(e){g(e),d(e,a.HANDSHAKE)}function f(e){var t=u(function(){d(e,a.PARENTSTATE)});t()}function g(i){function n(n){r.call(e,n),t.send(i,a.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){var i=t.parse(e).prefix,n=i===a.HANDSHAKE?c:f;n(e.source)}}}},{"../utils/enums":15,"../utils/utils":18}],5:[function(e,t,i){var n=e("../../utils/enums"),r=n.STATE_KEYS_MAP;t.exports=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,r.MCMID),a={};return a[r.MCMID]=t,n.setStateAndPublish(a),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(r.MCMID,e),a=i.call(this,r.MCMID,e);return"undefined"!=typeof n?n:a()}}},{"../../utils/enums":15}],6:[function(e,t,i){var n=e("../../utils/enums"),r=n.ASYNC_API_MAP;t.exports=function(){Object.keys(r).forEach(function(e){var t=r[e];this[t]=function(t){this.callbackRegistry.add(e,t)}},this)}},{"../../utils/enums":15}],7:[function(e,t,i){var n=e("../../utils/enums"),r=n.MESSAGES,a=n.ASYNC_API_MAP,s=n.SYNC_API_MAP;t.exports=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(r.GETSTATE),""}}function i(i){var n=a[i];this[n]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return"undefined"!=typeof r?r:a()}}function n(t){var i=s[t];this[i]=function(){var i=this.findField(t,e);return i||{}}}Object.keys(a).forEach(i,this),Object.keys(s).forEach(n,this)}},{"../../utils/enums":15}],8:[function(e,t,i){(function(e){var i=!!e.postMessage;t.exports={postMessage:function(e,t,n){var r=1;t&&(i?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r++ +"&"+e))},receiveMessage:function(t,n){var r;try{i&&(t&&(r=function(e){return!("string"==typeof n&&e.origin!==n||"[object Function]"===Object.prototype.toString.call(n)&&n(e.origin)===!1)&&void t(e)}),e.addEventListener?e[t?"addEventListener":"removeEventListener"]("message",r):e[t?"attachEvent":"detachEvent"]("onmessage",r))}catch(e){}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,i){(function(e){t.exports=function(t,i){return{corsMetadata:function(){var t="none",i=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?t="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(i=!1),Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0&&(i=!1)),{corsType:t,corsCookiesEnabled:i}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new e[this.corsMetadata.corsType]},fireCORS:function(i,n,r){function a(t){var n;try{if(n=JSON.parse(t),n!==Object(n))return void s.handleCORSError(i,null,"Response is not JSON")}catch(e){return void s.handleCORSError(i,e,"Error parsing response as JSON")}try{for(var r=i.callback,a=e,o=0;o<r.length;o++)a=a[r[o]];a(n)}catch(e){s.handleCORSError(i,e,"Error forming callback function")}}var s=this;n&&(i.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",i.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=t.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&a(this.responseText)}),o.onerror=function(e){s.handleCORSError(i,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(i,e,"ontimeout")},o.send(),t._log.requests.push(i.corsUrl)}catch(e){this.handleCORSError(i,e,"try-catch")}},handleCORSError:function(e,i,n){t.CORSErrors.push({corsData:e,error:i,description:n}),e.loadErrorHandler&&("ontimeout"===n?e.loadErrorHandler(!0):e.loadErrorHandler(!1))}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,i){(function(i){var n=e("../utils/constants"),r=e("./crossDomain"),a=e("../utils/utils"),s="MCSYNCSOP",o="MCSYNCS",l="MCAAMLH";t.exports=function(e,t){var u=i.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",n="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),
t=i+this.subdomain+".demdex.net/dest5.html"+n,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:n.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return!e.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){n=u.createElement("iframe"),n.sandbox="allow-scripts allow-same-origin",n.title="Adobe ID Syncing iFrame",n.id=i.id,n.name=i.id+"_name",n.style.cssText="display: none; width: 0; height: 0;",n.src=i.url,i.newIframeCreated=!0,t(),u.body.appendChild(n)}function t(){n.addEventListener("load",function(){n.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,n=u.getElementById(this.id);n?"IFRAME"!==n.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==n.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=n,this.requestToProcess())):e(),this.iframe=n},requestToProcess:function(t){function i(){a.jsonForComparison.push(t),a.jsonWaiting.push(t),a.processSyncOnPage(t)}var r,a=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var s,o,l,u=!1;for(s=0,o=this.jsonForComparison.length;s<o;s++)if(l=this.jsonForComparison[s],r===JSON.stringify(l.ibs||[])){u=!0;break}u?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!n.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}!e.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=n.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField(l),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire(l,i),e._setField(l,r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField(s,""),e._setField(o,""),n=r)):(n=r,n&&(e._setFieldExpire(l,i),e._setField(l,n))),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,s,o=encodeURIComponent,l="",u=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(u=!0,n=0;n<i;n++)r=t[n],s=[o("ibs"),o(r.id||""),o(r.tag||""),a.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"",l,r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(s.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,s.join("|")));u&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,r){var a="syncOnPage"===r,l=a?s:o;e._readVisitor();var u,d,c=e._getField(l),f=!1,g=!1,p=Math.ceil((new Date).getTime()/n.MILLIS_PER_DAY);c?(u=c.split("*"),d=this.pruneSyncData(u,t.id,p),f=d.dataPresent,g=d.dataValid,f&&g||this.fireSync(a,t,i,u,l,p)):(u=[],this.fireSync(a,t,i,u,l,p))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,u,d,c,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,u=f.length;l<u;l++){d=f[l],c=/^\/\//.test(d);var p=new Image;p.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),u=[];if(l){s=l.split("*");var d,c,f;for(d=0,c=s.length;d<c;d++)f=s[d],f.match("^"+i.id+"-")||u.push(f)}o.setSyncTrackingData(u,i,n,r)}}(this.onPagePixels.length,i,a,s)),p.src=(c?g:"")+d,this.onPagePixels.push(p)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,r=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((n.POST_MESSAGE_ENABLED?"":r)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",r=encodeURIComponent;this.regionChanged&&(i=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?n.POST_MESSAGE_ENABLED?(e=i+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){r.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===u.readyState||"loaded"===u.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>n.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(u.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/constants":14,"../utils/utils":18,"./crossDomain":8}],11:[function(e,t,i){function n(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function r(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function a(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function s(e,t){if(e===t)return 0;var i=e.toString().split("."),s=t.toString().split(".");return n(i.concat(s))?(r(i,s),a(i,s)):NaN}t.exports={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}}},{}],12:[function(e,t,i){t.exports=function(e,t){function i(e){return function(i){n[e]=i,r++;var s=r===a;s&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})}},{}],13:[function(e,t,i){function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t="undefined"==typeof t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!r.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}var r=e("./utils");t.exports=n},{"./utils":18}],14:[function(e,t,i){(function(e){t.exports={POST_MESSAGE_ENABLED:!!e.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,i){i.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},i.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},i.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},i.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},i.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},i.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},i.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},i.AUTH_STATE={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},i.OPT_OUT={GLOBAL:"global"}},{}],16:[function(e,t,i){(function(e){t.exports=function(t){var i;if(!t&&e.location&&(t=e.location.hostname),i=t)if(/^[0-9.]+$/.test(i))i="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",r=i.split("."),a=r.length-1,s=a-1;if(a>1&&r[a].length<=2&&(2===r[a-1].length||n.indexOf(","+r[a]+",")<0)&&s--,s>0)for(i="";a>=s;)i=r[a]+(i?".":"")+i,a--}return i}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,i){Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}},{}],18:[function(e,t,i){i.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},i.isValueEmpty=function(e){return""===e||i.isObjectEmpty(e)},i.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},i.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)}},{}],19:[function(e,t,i){t.exports=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a}},{}]},{},[1]);// Dynamic Tag Management Library
// Property: Audible
// All code and conventions are protected by copyright
// Adobe Systems Incorporated

(function(window, document, undefined) {
// Satellite
// =========
//
// Satellite *core*. Yeah, you want it.
//
// In this first section, we have a some useful utility functions.
var ToString = Object.prototype.toString

var Overrides = window._satellite && window._satellite.override

function assert(cond, msg){
  if (!cond){
    throw new Error(msg || "Assertion Failure")
  }
}

var SL = {
  initialized: false,

  // `$data(elm, prop, [val])`
  // ----------------------------
  //
  // Our own `$data()` method, [a la jQuery](http://api.jquery.com/jQuery.data/)
  // , used to get or set
  // properties on DOM elements without going insane.
  // `uuid` and `dataCache` are used by `$data()`
  //
  // Parameters:
  //
  // - `elm` - the element to get or set a property to
  // - `prop` - the property name
  // - `val` - the value of the property, if omitted, the method will
  //      return the existing value of the property, if any
  $data: function(elm, prop, val){
    if (!elm) return;
    var __satellite__ = '__satellite__'
    var cache = SL.dataCache
    var uuid = elm[__satellite__]
    if (!uuid) uuid = elm[__satellite__] = SL.uuid++
    var datas = cache[uuid]
    if (!datas) datas = cache[uuid] = {}
    if (val === undefined)
      return datas[prop]
    else
      datas[prop] = val
  },
  uuid: 1,
  dataCache: {},

  // `keys(object)`
  // --------------
  //
  // Return all keys of an object in an array.
  keys: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(key)
    return ret
  },

  // `values(object)`
  // ----------------
  //
  // Return all values of an object in an array.
  values: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(obj[key])
    return ret
  },

  // `isArray(thing)`
  // --------------
  //
  // Returns whether the given thing is an array.
  isArray: Array.isArray || function(thing){
    return ToString.apply(thing) === "[object Array]"
  },

  // `isObject(thing)`
  // -----------------
  //
  // Returns whether the given thing is a plain object.
  isObject: function(thing){
    return thing != null && !SL.isArray(thing) &&
      typeof thing === 'object'
  },

  // `isString(thing)`
  // -----------------
  //
  // Returns whether thing is a string
  isString: function(thing){
    return typeof thing === 'string'
  },

  // `isNumber(thing)`
  // -----------------
  //
  // Returns whether thing is a number
  isNumber: function(thing){
    return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing)
  },

  // `isNaN(thing)`
  // --------------
  //
  // Return whether thing is NaN
  isNaN: function(thing){
    return thing !== thing
  },

  // `isRegex(thing)`
  // ----------------
  //
  // Returns whether thing is a RegExp object
  isRegex: function(thing){
    return thing instanceof RegExp
  },

  // `isLinkTag(thing)`
  // ----------------
  //
  // Returns whether thing is a DOM link element
  isLinkTag: function(thing){
    return !!(thing && thing.nodeName &&
      thing.nodeName.toLowerCase() === 'a')
  },

  // `each(arr, func, [context])`
  // ------------------
  //
  // A handy method for array iteration wo having to write a for-loop.
  //
  // Parameters:
  //
  // - `arr` - an array
  // - `func(item, index, arr)` - a function which accepts each item in the array
  //      once. I takes these arguments
  //      * `item` - an item
  //      * `index` - the array index of said item
  //      * `arr` - the array
  // - `context` - the context to be bound to `func` when it is invoked
  each: function(arr, func, context){
    for (var i = 0, len = arr.length; i < len; i++)
      func.call(context, arr[i], i, arr)
  },

  // `map(arr, func)`
  // ----------------
  //
  // A handy method for mapping an array to another array using a 1-to-1 mapping
  // for each element
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each`, except that `func` is expected to return
  // a the value you want in the corresponding index of the returned array.
  map: function(arr, func, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++)
      ret.push(func.call(context, arr[i], i, arr))
    return ret
  },

  // `filter(arr, cond)`
  // -------------------
  //
  // Handy method for take an array and filtering down to a subset of the elements.
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each` except the second argument is `cond`
  // instead of `func` and it is expected to return a truthy value respresenting
  // whether to include this item in the return array or not.
  filter: function(arr, cond, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        ret.push(item)
    }
    return ret
  },

  // `any(arr, cond, context)`
  // -------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for any item in the array.
  any: function(arr, cond, context){
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return true
    }
    return false
  },

  // `every(arr, cond, context)`
  // ---------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for every item in the array.
  every: function(arr, cond, context){
    var retval = true
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      retval = retval && cond.call(context, item, i, arr)
    }
    return retval
  },

  // `contains(arr, obj)`
  // -----------------------
  //
  // Tells you whether an array contains an object.
  //
  // Parameters:
  //
  // - `arr` - said array
  // - `obj` - said object
  contains: function(arr, obj){
    return SL.indexOf(arr, obj) !== -1
  },

  // `indexOf(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  indexOf: function(arr, obj){
    if (arr.indexOf)
      return arr.indexOf(obj)
    for (var i = arr.length; i--;)
      if (obj === arr[i])
        return i
    return -1
  },


  // `find(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  find: function(arr, cond, context){
    var ret = []
    if (!arr) return null
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return item
    }
    return null
  },

  // `textMatch(str, str_or_regex)`
  // ------------------------------
  //
  // Perform a string match based on another string or a regex.
  //
  // Parameters:
  //
  // `str` - the input string to be matched
  // `str_or_regex` - the pattern to match against, if this is a string, it requires exact match, if
  //      it's a regex, then it will do regex match
  textMatch: function(str, pattern){
    if (pattern == null) throw new Error('Illegal Argument: Pattern is not present')
    if (str == null) return false
    if (typeof pattern === 'string') return str === pattern
    else if (pattern instanceof RegExp) return pattern.test(str)
    else return false
  },

  // `stringify(obj, [seenValues])`
  // ------------------------------
  //
  // Stringify any type of object.
  //
  // Parameters:
  //
  // `obj` - the object that needs to be stringified
  // `seenValues` - pool of parsed resources; used to avoid circular references;
  stringify: function(obj, seenValues){
    seenValues = seenValues || [];
    if (SL.isObject(obj)) {
      if (SL.contains(seenValues, obj)) {
        return '<Cycle>';
      } else {
        seenValues.push(obj);
      }
    }

    if (SL.isArray(obj)) {
      return '[' + SL.map(obj, function(value){
        return SL.stringify(value, seenValues)
      }).join(',') + ']';
    } else if (SL.isString(obj)) {
      return '"' + String(obj) + '"';
    } if (SL.isObject(obj)) {
      var data = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
      }
      return '{' + data.join(', ') + '}';
    } else {
      return String(obj);
    }
  },

  // `trim(str)`
  // -----------
  //
  // Trims a string.
  //
  // Parameters:
  //
  // `str` - the input string to be trimmed.
  trim: function(str){
    if (str == null) return null
    if (str.trim){
      return str.trim()
    }else{
      return str.replace(/^ */, '').replace(/ *$/, '')
    }
  },

  // `bind(func, context)`
  // ---------------------
  //
  // Binds a context permanently to a context. The returned function is a new function
  // which - when called - will call the passed in function with `context` bound to it.
  //
  // Parameters:
  //
  // `func` - a function
  // `context` - an object to be bound as the context of this function
  bind: function(func, context) {
    return function() {
      return func.apply(context, arguments)
    }
  },

  // `throttle(fn, delay)`
  // ---------------------
  //
  // *Throttles* a function `fn` to be called no more than once during the interval
  // specified by `delay`.
  //
  // Parameters:
  //
  // - `fn` - a function
  // - `delay` - delay in milliseconds
  //
  // *Throttle function stolen from
  //     <http://remysharp.com/2010/07/21/throttling-function-calls/>*
  throttle: function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  // `domReady(callback)`
  // --------------------
  //
  // Registers a callback to be called when the DOM is fully parsed and loaded.
  //
  // Parameters:
  //
  // - `callback` - a function to be called at `domready`
  //
  // *domReady is borrowed from <https://github.com/ded/domready>*
  domReady: (function (ready) {

    var fns = [], fn, f = false
      , doc = document
      , testEl = doc.documentElement
      , hack = testEl.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , addEventListener = 'addEventListener'
      , onreadystatechange = 'onreadystatechange'
      , loaded = /^loade|^c/.test(doc.readyState)

    function flush(f) {
      loaded = 1
      while (f = fns.shift()) f()
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
      doc.removeEventListener(domContentLoaded, fn, f)
      flush()
    }, f)


    hack && doc.attachEvent(onreadystatechange, (fn = function () {
      if (/^c/.test(doc.readyState)) {
        doc.detachEvent(onreadystatechange, fn)
        flush()
      }
    }))

    return (ready = hack ?
      function (fn) {
        self != top ?
          loaded ? fn() : fns.push(fn) :
          function () {
            try {
              testEl.doScroll('left')
            } catch (e) {
              return setTimeout(function() { ready(fn) }, 50)
            }
            fn()
          }()
      } :
      function (fn) {
        loaded ? fn() : fns.push(fn)
      })
  }()),

  // `loadScript(url, [callback])`
  // -----------------------------
  //
  // Load an external script.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScript: function(url, callback){
    var script = document.createElement('script')
    SL.scriptOnLoad(url, script, callback)
    script.src = url
    document.getElementsByTagName('head')[0]
      .appendChild(script)
  },

  scriptOnLoad: function(url, script, callback){
    function cb(err){
      if (err) SL.logError(err)
      if (callback) callback(err)
    }
    if ('onload' in script){
      script.onload = function(){
        cb()
      }
      script.onerror = function(){
        cb(new Error('Failed to load script ' + url))
      }
    }else if ('readyState' in script){
      script.onreadystatechange = function(){
        var rs = script.readyState
        if (rs === 'loaded' || rs === 'complete'){
          script.onreadystatechange = null
          cb()
        }
      }
    }
  },

  // `loadScriptOnce(url, [callback])`
  // -----------------------------
  //
  // Load an external script only if it hasn't been loaded until now.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScriptOnce: function(url, callback){
    if (SL.loadedScriptRegistry[url]) return

    SL.loadScript(url, function(err) {
      if (!err) {
        SL.loadedScriptRegistry[url] = true
      }

      if (callback) callback(err)
    })
  },

  loadedScriptRegistry: {},

  // `loadScriptSync(url)`
  // -----------------------------
  //
  // Load an external script using document.write.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  loadScriptSync: function(url){
    if (!document.write) {
      SL.notify('Cannot load sync the "' + url + '" script because "document.write" is not available', 1)
      return
    }

    if (SL.domReadyFired){
      SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1)
      return
    }

    // If the url contains a double quote, it could be someone trying to switch out of the
    // attribute to introduce an XSS hack. On the other hand, it could just be that the URL
    // was never escaped. We'll escape it to prevent the former while supporting the latter.
    if (url.indexOf('"') > -1) {
      url = encodeURI(url);
    }

    document.write('<script src="' + url + '"></scr' + 'ipt>');
  },

  // `pushAsyncScript(callback)`
  // -------------------
  //
  // Called by an async custom user script.
  pushAsyncScript: function(cb){
    SL.tools['default'].pushAsyncScript(cb)
  },

  // `pushBlockingScript(callback)`
  // ------------------------------
  //
  // Called by a blocking custom user script.
  pushBlockingScript: function(cb){
    SL.tools['default'].pushBlockingScript(cb)
  },

  // `addEventHandler(elm, evt, callback)`
  // -------------------------------------
  //
  // Register an event handler for a element
  //
  // Parameters:
  //
  // - `elm` - the element in question
  // - `evt` - the event type to listen to
  // - `callback` - callback function
  addEventHandler: window.addEventListener ?
    function(node, evt, cb){ node.addEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.attachEvent('on' + evt, cb) },

  removeEventHandler: window.removeEventListener ?
    function(node, evt, cb){ node.removeEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.detachEvent('on' + evt, cb) },

  // `preventDefault(evt)`
  // ---------------------
  //
  // Prevent the default browser behavior for this event
  //
  // Parameters:
  //
  // `evt` - the event triggered
  preventDefault: window.addEventListener ?
    function(e){ e.preventDefault() } :
    function(e){ e.returnValue = false },

  // `stopPropagation(evt)`
  // ----------------------
  //
  // Cross-browser `stopPropagation`
  //
  // Parameters:
  //
  // `evt` - the event triggered
  stopPropagation: function(e){
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
  },

  // `containsElement(container, elm)`
  // ----------------------
  //
  // Given DOM elements `container` and `elm`, returns whether `container` contains `elm`.
  //
  // Parameters:
  //
  // `elm1` - the possible parent
  // `elm2` - the possible child
  containsElement: function(container, elm) {
    return container.contains ? container.contains(elm) :
      !!(container.compareDocumentPosition(elm) & 16);
  },

  // `matchesCss(css, elm)`
  // ----------------------
  //
  // Returns whether a DOM element matches a given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  // - `elm` - the element
  matchesCss: (function(docEl){

    function simpleTagMatch(selector, elm){
      var tagName = elm.tagName
      if (!tagName) return false
      return selector.toLowerCase() === tagName.toLowerCase()
    }

    var matches =
      docEl.matchesSelector ||
      docEl.mozMatchesSelector ||
      docEl.webkitMatchesSelector ||
      docEl.oMatchesSelector ||
      docEl.msMatchesSelector
    if (matches) {
      return function(selector, elm){
        if (elm === document || elm === window) return false
        try{
          return matches.call(elm, selector)
        }catch(e){
          return false
        }
      }
    } else if(docEl.querySelectorAll) {
      return function(selector, elm) {
        var parent = elm.parentNode
        if (!parent) return false
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          var nodeList = elm.parentNode.querySelectorAll(selector)
          for (var i = nodeList.length; i--;)
          if (nodeList[i] === elm) return true
        }catch(e){
          //
        }
        return false
      }
    }else{
      return function(selector, elm){
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          return SL.Sizzle.matches(selector, [elm]).length > 0
        }catch(e){
          return false
        }
      }
    }
  }(document.documentElement)),

  // `cssQuery(css)`
  // ---------------
  //
  // Return a list of element matching the given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  cssQuery: (function(doc){
    if (doc.querySelectorAll) {
      return function(css, cb){
        var results
        try{
          results = doc.querySelectorAll(css)
        }catch(e){
          results = []
        }
        cb(results)
      }
    }else{
      return function(css, cb){
        if (SL.Sizzle){
          var results
          try{
            results = SL.Sizzle(css)
          }catch(e){
            results = []
          }
          cb(results)
        }else
          SL.sizzleQueue.push([css, cb])
      }
    }
  })(document),

  // `hasAttr(elem, attrName)`
  // ---------------
  //
  // Check if attribute is defined on element
  //
  // Parameters:
  //
  // - `elem` - the DOM element
  // - `attrName` - attribute name
  hasAttr: function(elem, attrName) {
    return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
  },

  // `inherit(subClass, superClass)`
  // -------------------------------
  //
  // Make `subClass` inherit `superClass`.
  //
  // Parameters:
  //
  // - `subClass` - a Javascript function representing a constructor - the inheritor
  // - `superClass` - another constructor - the one to inherit from
  inherit: function(subClass, superClass){
    var f = function() {}
    f.prototype = superClass.prototype
    subClass.prototype = new f()
    subClass.prototype.constructor = subClass
  },

  // `extend(dst, src)`
  // ----------------
  //
  // Extend an object with the properties of another.
  //
  // Parameters:
  //
  // - `dst` - object to copy to
  // - `src` - object to copy from
  extend: function(dst, src){
    for (var prop in src)
      if (src.hasOwnProperty(prop))
        dst[prop] = src[prop]
  },

  // `toArray(arrayLike)`
  // --------------------
  //
  // Converts an array-like object to an array.
  //
  // Parameters:
  //
  // - `arrayLike` - an array-like object, meaning it has a length property
  //   which is a number
  toArray: (function(){
    try {
      var slice = Array.prototype.slice
      slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
      return function(thing){
        return slice.call(thing, 0)
      }
    // Provide a fallback method if it does not work
    } catch( e ) {
      return function(thing){
        var ret = []
        for (var i = 0, len = thing.length; i < len; i++)
          ret.push(thing[i])
        return ret
      }
    }
  })(),

  // `equalsIgnoreCase(str1, str2)`
  // ------------------------------
  //
  // Returns true iff str1 and str2 are equal ignoring case.
  //
  // Parameters:
  //
  // * `str1` - the first string
  // * `str2` - the second string
  equalsIgnoreCase: function(str1, str2){
    if (str1 == null) return str2 == null
    if (str2 == null) return false
    return String(str1).toLowerCase() === String(str2).toLowerCase()
  },

  // `poll(fn, [freq], [max_retries])`
  // ------------------
  //
  // Runs `fn` for every `freq` ms. `freq` defaults to 1000. If any
  // invocation of `fn()` returns true, polling will stop.
  // The polling will stop if the number or retries exceeds the
  // provided `max_retries`.
  //
  // Parameters:
  //
  // * `fn` - function to be called repeatedly
  // * `freq` - frequency to call the function
  // * `max_retries` - number of times to retry
  poll: function(fn, freq, max_retries){
    var retries = 0

    freq = freq || 1000
    check()

    function check(){
      if (SL.isNumber(max_retries) && retries++ >= max_retries) {
        return;
      }

      if (!fn()){
        setTimeout(check, freq)
      }
    }
  },
  // ``Html(str)`
  // --------------------
  //
  // Escapes a string for being used in an HTML context. Returns
  // the escaped version of the string. Replaces the characters
  // `&` `<` `>` `"` `'` and `/`.
  //
  // Parameters:
  //
  // * `str` - the string to be escaped
  escapeForHtml: function(str){
    if (!str) return str
    return String(str)
      .replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }
}

// The available tools to use.
SL.availableTools = {}

// The avaliable event emitters to use.
SL.availableEventEmitters = []

// The names of the events which can only fire once.
SL.fireOnceEvents = ['condition', 'elementexists']

// Initialize all event emitters.
SL.initEventEmitters = function(){
  SL.eventEmitters = SL.map(SL.availableEventEmitters, function(ee){
    return new ee()
  })
}

// Call `registerElements` on all event emitters.
SL.eventEmitterBackgroundTasks = function(){
  SL.each(SL.eventEmitters, function(ee){
    if ('backgroundTasks' in ee)
      ee.backgroundTasks()
  })
}

// Initialize all tools.
SL.initTools = function(toolSpecs){
  var tools = { 'default': new DefaultTool() }
  var euCookieName = SL.settings.euCookieName || 'sat_track'
  for (var id in toolSpecs){
    if(toolSpecs.hasOwnProperty(id)) {
      var toolSpec, ctr, tool
      toolSpec = toolSpecs[id]
      if (toolSpec.euCookie){
        var cookieSet = SL.readCookie(euCookieName) !== 'true'
        if (cookieSet) continue
      }
      ctr = SL.availableTools[toolSpec.engine]
      if (!ctr){
        var available = []
        for (var key in SL.availableTools){
          if (SL.availableTools.hasOwnProperty(key)) {
            available.push(key)  
          }
        }
        throw new Error('No tool engine named ' + toolSpec.engine +
          ', available: ' + available.join(',') + '.')
      }
      tool = new ctr(toolSpec)
      tool.id = id
      tools[id] = tool
    }
  }
  return tools
}

// Pre-process arguments (variable substitutions and lower-casing) before
// feeding them to the tools.
SL.preprocessArguments = function(args, elm, evt, forceLowerCase, escapeHtml){
  if (!args) return args
  return preprocessArray(args, forceLowerCase)
  function forceLowerCaseIfNeeded(value) {
    return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value
  }

  function preprocessObject(obj){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        var value = obj[key]
        if (SL.isObject(value)){
          ret[key] = preprocessObject(value)
        }else if (SL.isArray(value)){
          ret[key] = preprocessArray(value, forceLowerCase)
        }else{
          ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml))
        }
      }
    }
    return ret
  }

  function preprocessArray(args, forceLowerCase){
    var ret = []
    for (var i = 0, len = args.length; i < len; i++){
      var value = args[i]
      if (SL.isString(value)){
        value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt))
      }else if (value && value.constructor === Object){
        value = preprocessObject(value)
      }
      ret.push(value)
    }
    return ret
  }

}

// Execute a command.
SL.execute = function(trig, elm, evt, tools){
  if (_satellite.settings.hideActivity) return
  tools = tools || SL.tools

  function doit(toolName){
    var tool = tools[toolName || 'default']
    if (!tool)
      return
    try{
      tool.triggerCommand(trig, elm, evt)
    }catch(e){
      SL.logError(e)
    }
  }
  if (trig.engine){
    var engine = trig.engine
    for (var toolName in tools){
      if (tools.hasOwnProperty(toolName)) {
        var tool = tools[toolName]
        if (tool.settings && tool.settings.engine === engine)
          doit(toolName)
      }
    }
  }else if (trig.tool instanceof Array)
    SL.each(trig.tool, function(toolName){
      doit(toolName)
    })
  else
    doit(trig.tool)
}

// Wrapper object that handles Satellite internal logging.
//
// It saves all messages for future reference (up to `keepLimit`, default 100) and
// outputs to browser's console if `_satellite.settings.notifications` is `true`.
// -----------------------------------------------------
SL.Logger = {
  outputEnabled: false,

  messages: [],
  keepLimit: 100,
  flushed: false,

  // @fixme: remove first 2 items when legacy code is updated
  LEVELS: [null, null, 'log', 'info', 'warn', 'error'],

  // `lvl` should be the index of a level defined in `LEVELS`
  message: function(msg, lvl) {
    var level = this.LEVELS[lvl] || 'log';

    this.messages.push([level, msg]);
    if (this.messages.length > this.keepLimit) {
      this.messages.shift();
    }

    if (this.outputEnabled) {
      this.echo(level, msg)
    }
  },

  getHistory: function() {
    return this.messages;
  },

  clearHistory: function() {
    this.messages = [];
  },

  setOutputState: function(state) {
    if (this.outputEnabled == state) return;

    this.outputEnabled = state;
    if (state) {
      this.flush();
    } else {
      this.flushed = false;
    }
  },

  // Private
  // ----------------------------------------
  echo: function(func, msg) {
    if (!window.console) return;
    window.console[func]("SATELLITE: " + msg);
  },

  flush: function() {
    if (this.flushed) return;

    SL.each(this.messages, function(item) {
      if (item[2] === true) return; // message already flushed
      this.echo(item[0], item[1]);
      item[2] = true;
    }, this);
    this.flushed = true;
  }
};

// `notify(msg, pty)`
// ------------------
//
// Notify the user of things happening in Satellite using `console.log`
//
// - msg - message to print
// - pty - priority
SL.notify = SL.bind(SL.Logger.message, SL.Logger);

// `cleanText(str)`
// ================
//
// "Cleans" the text from an element's innerText. This is used directly by the
// @cleanText special property.
SL.cleanText = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s+/g, ' ')
}

SL.cleanText.legacy = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s{2,}/g, ' ')
    .replace(/[^\000-\177]*/g, '')
}

SL.text = function(obj){
  return obj.textContent || obj.innerText
}

// Special Properties for DOM elements. You use special properties using
// the @ prefix. Example:
//
//     this.@text
SL.specialProperties = {
  text: SL.text,
  cleanText: function(obj){
    return SL.cleanText(SL.text(obj))
  }
}

// `getObjectProperty(obj, property)`
// ============================
//
// Get property(potentially nested) from an object.
SL.getObjectProperty = function(obj, property, supportSpecial){
  var propChain = property.split('.')
  var currValue = obj
  var special = SL.specialProperties
  var attrMatch
  for (var i = 0, len = propChain.length; i < len; i++){
    if (currValue == null) return undefined
    var prop = propChain[i]
    if (supportSpecial && prop.charAt(0) === '@'){
      var specialProp = prop.slice(1)
      currValue = special[specialProp](currValue)
      continue
    }
    if (currValue.getAttribute &&
      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))){
      var attr = attrMatch[1]
      currValue = currValue.getAttribute(attr)
      continue
    }
    currValue = currValue[prop]
  }
  return currValue
}

// `getToolsByType(type)`
// ------------------------------------------------
//
// Returns an array containing all the tools whose engine property match
// the provided type.
//
// - `type` - The searched tool type
SL.getToolsByType = function(type){
  if (!type) {
    throw new Error('Tool type is missing')
  }

  var result = []
  for (var t in SL.tools) {
    if (SL.tools.hasOwnProperty(t)) {
      var tool = SL.tools[t]
      if (tool.settings && tool.settings.engine === type) {
        result.push(tool)
      }
    }
  }

  return result
}

// `setVar(name, value)` or `setVar(mapping)`
// ==========================================
//
// Set a customer variable. Can be either called like this
//
//     _satellite.setVar('name', 'value')
//
// Or by passing in a mapping(object literall) which allows setting multiple variables at
// the same time.
//
//     _satellite.setVar({name: 'value', foo: 'bar'})
SL.setVar = function(){
  var customVars = SL.data.customVars
  if(customVars == null) SL.data.customVars = {}, customVars = SL.data.customVars
  if (typeof arguments[0] === 'string'){
    var prop = arguments[0]
    customVars[prop] = arguments[1]
  }else if (arguments[0]){ // assume an object literal
    var mapping = arguments[0]
    for (var key in mapping)
      if (mapping.hasOwnProperty(key))
        customVars[key] = mapping[key]
  }
}

SL.dataElementSafe = function(key, length){
  if (arguments.length > 2){
    // setter
    var value = arguments[2]
    if (length === 'pageview'){
      SL.dataElementSafe.pageviewCache[key] = value
    }else if (length === 'session'){
      SL.setCookie('_sdsat_' + key, value)
    }else if (length === 'visitor') {
      SL.setCookie('_sdsat_' + key, value, 365 * 2)
    }
  }else{
    // getter
    if (length === 'pageview'){
      return SL.dataElementSafe.pageviewCache[key]
    }else if (length === 'session' || length === 'visitor'){
      return SL.readCookie('_sdsat_' + key)
    }
  }
}
SL.dataElementSafe.pageviewCache = {}

SL.realGetDataElement = function(dataDef){
  var ret
  if (dataDef.selector) {
    if (SL.hasSelector) {
      SL.cssQuery(dataDef.selector, function(elms) {
        if (elms.length > 0) {
          var elm = elms[0]
          if (dataDef.property === 'text') {
            ret = elm.innerText || elm.textContent
          }else if (dataDef.property in elm){
            ret = elm[dataDef.property]
          }else if (SL.hasAttr(elm, dataDef.property)){
            ret = elm.getAttribute(dataDef.property)
          }
        }
      })
    }
  }else if (dataDef.queryParam) {
    if (dataDef.ignoreCase){
      ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam)
    }else{
      ret = SL.getQueryParam(dataDef.queryParam)
    }
  }else if (dataDef.cookie) {
    ret = SL.readCookie(dataDef.cookie)
  }else if (dataDef.jsVariable) {
    ret = SL.getObjectProperty(window, dataDef.jsVariable)
  }else if (dataDef.customJS) {
    ret = dataDef.customJS()
  }else if (dataDef.contextHub) {
    ret = dataDef.contextHub()
  }
  if (SL.isString(ret) && dataDef.cleanText){
    ret = SL.cleanText(ret)
  }
  return ret
}

SL.getDataElement = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || SL.dataElements[variable]
  if (dataDef == null) {
    return SL.settings.undefinedVarsReturnEmpty ? '' : null; 
  }
  var ret = SL.realGetDataElement(dataDef)
  if (ret === undefined && dataDef.storeLength) {
    ret = SL.dataElementSafe(variable, dataDef.storeLength)
  }else if (ret !== undefined && dataDef.storeLength) {
    SL.dataElementSafe(variable, dataDef.storeLength, ret)
  }
  if (!ret && !suppressDefault) {
    ret = dataDef['default'] || ''
  }
  if (SL.isString(ret) && dataDef.forceLowerCase) {
    ret = ret.toLowerCase()
  }
  return ret
}

// getVar(variable, elm, evt)
// ==========================
//
// Return the value of a variable, where the variable
// can be a data element, defined in the "data" section
// of the initial settings, or reference properties on
// an element, event, or target of the event in question,
// a query parameter, or a random number.
//
// - `variable` - the name of the variable to get
// - `[elm]` - the associated element, if any
// - `[evt]` - the associated event, if any
SL.getVar = function(variable, elm, evt){
  var custVars = SL.data.customVars
    , target = evt ? (evt.target || evt.srcElement) : null
    , randMatch
    , value
  var map = {
    uri: SL.URI(),
    protocol: document.location.protocol,
    hostname: document.location.hostname
  }
  if (SL.dataElements && variable in SL.dataElements){
    return SL.getDataElement(variable)
  }
  value = map[variable.toLowerCase()]
  if (value === undefined){
    if (variable.substring(0, 5) === 'this.'){
      variable = variable.slice(5)
      value = SL.getObjectProperty(elm, variable, true)
    }else if(variable.substring(0, 6) === 'event.'){
      variable = variable.slice(6)
      value = SL.getObjectProperty(evt, variable)
    }else if(variable.substring(0, 7) === 'target.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(target, variable)
    }else if(variable.substring(0, 7) === 'window.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(window, variable)
    }else if (variable.substring(0, 6) === 'param.'){
      variable = variable.slice(6)
      value = SL.getQueryParam(variable)
    }else if(randMatch = variable.match(/^rand([0-9]+)$/)){
      var len = Number(randMatch[1])
        , s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0)
      value = Array(len - s.length + 1).join('0') + s
    }else{
      value = SL.getObjectProperty(custVars, variable)
    }
  }
  return value
}

SL.getVars = function(variables, elm, evt){
  var ret = {}
  SL.each(variables, function(variable){
    ret[variable] = SL.getVar(variable, elm, evt)
  })
  return ret
}

// `replace(str, [elm], [target])`
// ---------------------
//
// Perform variable subtitutions substitute to a string where subtitions are
// specified in the form `"%foo%"`. Variables are lookup either in `SL.data.customVars`, or
// if the `elm` parameter is passed it, and the variable spec is of the form `"%this.tagName%"`, it
// is subsituted with the properties on `elm`, *i.e. `elm.tagName`.
//
// Parameters:
//
// - `str` - string to apply substitutions to
// - `elm`(optional) - object or element to use for substitutions of the form `%this.property%`
// - `target`(optional) - element to use for subsitution of the form `%target.property%`
// - `escapeHtml` (optional) - whether or not to escape substitutions for embedding in HTML
SL.replace = function(str, elm, evt, escapeHtml) {
  if (typeof str !== 'string') return str
  return str
    .replace(/%(.*?)%/g, function(m, variable){
      var val = SL.getVar(variable, elm, evt)
      if (val == null) {
        return SL.settings.undefinedVarsReturnEmpty ? '' : m; 
      } else {
        if (escapeHtml) {
          return SL.escapeForHtml(val);
        } else {
          return val;
        }
      }
    });
}

SL.escapeHtmlParams = function(fn){
  fn.escapeHtml = true
  return fn
}

// From a object literal of variable, generate a query string.
SL.searchVariables = function(vars, elm, evt){
  if (!vars || vars.length === 0) return ''
  var qsParts = []
  for (var i = 0, len = vars.length; i < len; i++){
    var varr = vars[i]
      , value = SL.getVar(varr, elm, evt)
       qsParts.push(varr + '=' + escape(value))
  }
  return '?' + qsParts.join('&')
}

// Fire all the trigger actions associated with a rule.
SL.fireRule = function(rule, elm, evt){
  var triggers = rule.trigger
  if (!triggers) return
  for (var i = 0, len = triggers.length; i < len; i++){
    var trig = triggers[i]
    SL.execute(trig, elm, evt)
  }
  if (SL.contains(SL.fireOnceEvents, rule.event))
    rule.expired = true
}

// `isLinked(elm)`
// ---------------
//
// Returns whether the element is either an anchor or a descendant of an anchor or contains an anchor.
//
// `elm` - the element to test
SL.isLinked = function(elm){
  for (var cur = elm; cur; cur = cur.parentNode) {
    if (SL.isLinkTag(cur))
      return true
  }
  return false
}

// Fire a page load event. `type` is one of `pagetop`, `pagebottom`, `domready` and
// `windowload`.
SL.firePageLoadEvent = function(type) {
  var location = document.location
  var evt = {type: type, target: location}
  var rules = SL.pageLoadRules
  var handlers = SL.evtHandlers[evt.type];
  for (var i = rules.length; i--;){
    var rule = rules[i]
    if (SL.ruleMatches(rule, evt, location)){
      SL.notify('Rule "' + rule.name + '" fired.', 1)
      SL.fireRule(rule, location, evt)
    }
  }
  for (var id in SL.tools){
    if (SL.tools.hasOwnProperty(id)) {
      var tool = SL.tools[id]
      if (tool.endPLPhase) {
        tool.endPLPhase(type)
      }
    }
  }
  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }
}

// `track(id)`
// -----------
//
// Directly fire a direct call rule by id.
SL.track = function(ruleName) {
  // trim extra spaces that may exist at beginning or end of string
  ruleName = ruleName.replace(/^\s*/,"").replace(/\s*$/,"")
  for (var i = 0; i < SL.directCallRules.length; i++){
    var rule = SL.directCallRules[i]
    if (rule.name === ruleName){
      SL.notify('Direct call Rule "' + ruleName + '" fired.', 1)
      SL.fireRule(rule, location, {type: ruleName})
      return
    }
  }
  SL.notify('Direct call Rule "' + ruleName + '" not found.', 1)
}

// `basePath()`
// ------------
//
// Returns the base path of all Satellite generated assets.
SL.basePath = function(){
  if (SL.data.host)
    return (document.location.protocol === 'https:' ?
    'https://' + SL.data.host.https :
    'http://' + SL.data.host.http) + '/'
  else
    return this.settings.basePath
}

// `setLocation(url)`
// ------------------
//
// Set the current URL
//
// - `url` - the URL to set to
SL.setLocation = function(url){
  window.location = url
}

SL.parseQueryParams = function(str){
  var URIDecode = function (str) {
    var result = str
    try {
      result = decodeURIComponent(str)
    } catch(err) {}

    return result
  }

  if (str === '' || SL.isString(str) === false) return {}
  if (str.indexOf('?') === 0) {
    str = str.substring(1)
  }
  var ret = {}
    , pairs = str.split('&')
  SL.each(pairs, function(pair){
    pair = pair.split('=')
    if (!pair[1]) {
      return
    }
    ret[URIDecode(pair[0])] = URIDecode(pair[1])
  })
  return ret
}

SL.getCaseSensitivityQueryParamsMap = function (str) {
  var normal = SL.parseQueryParams(str)
  var insensitive = {}

  for (var prop in normal)
    if (normal.hasOwnProperty(prop))
      insensitive[prop.toLowerCase()] = normal[prop]

  return {
    normal: normal,
    caseInsensitive: insensitive
  }
}

SL.updateQueryParams = function(){
  SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
}
SL.updateQueryParams()

SL.getQueryParam = function(key){
  return SL.QueryParams.normal[key]
}

SL.getQueryParamCaseInsensitive = function(key){
  return SL.QueryParams.caseInsensitive[key.toLowerCase()]
}

SL.encodeObjectToURI = function(obj) {
  if (SL.isObject(obj) === false) {
    return ''
  }

  var uri = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return uri.join('&')
}

SL.readCookie = function(name) {
  var nameEQ = name + "="
  var parts = document.cookie.split(';')
  for(var i=0;i < parts.length;i++) {
    var c = parts[i]
    while (c.charAt(0)==' '){
      c = c.substring(1,c.length)
    }
    if (c.indexOf(nameEQ) === 0){
      return c.substring(nameEQ.length,c.length)
    }
  }
  return undefined
}

SL.setCookie = function(name,value,days) {
  var expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  }
  else{
    expires = ""
  }
  document.cookie = name+"="+value+expires+"; path=/"
}

SL.removeCookie = function(name) {
  SL.setCookie(name,"",-1);
}


SL.getElementProperty = function(elm, prop){
  if (prop.charAt(0) === '@'){
    var special = SL.specialProperties[prop.substring(1)]
    if (special){
      return special(elm)
    }
  }
  if (prop === 'innerText'){
    return SL.text(elm)
  }
  if (prop in elm)
    return elm[prop]
  return elm.getAttribute ? elm.getAttribute(prop) : undefined
}

SL.propertiesMatch = function(property, elm){
  if (property){
    for (var prop in property){
      if (property.hasOwnProperty(prop)) {
        var target = property[prop]
        var value = SL.getElementProperty(elm, prop)
        if (typeof target === 'string' && target !== value) return false
        if (target instanceof RegExp && !target.test(value)) return false
      }
    }
  }
  return true
}

// from http://www.quirksmode.org/js/events_properties.html
SL.isRightClick = function(e){
  var ret
  if (e.which){
    ret = e.which == 3
  }else if (e.button){
    ret = e.button == 2
  }
  return ret
}

// `ruleMatches(rule, evt, elm, eventEntriesFound)`
// ------------------------------------------------
//
// - `rule` - the rules to match
// - `evt` - the event triggered
// - `elm` - the element the event was on
// - `eventEntriesFound` - number of rules matched so far
SL.ruleMatches = function(rule, evt, elm, eventEntriesFound){
  var cnd = rule.condition
  var cnds = rule.conditions
  var property = rule.property
  var eventType = evt.type
  var matchValue = rule.value
  var target = evt.target || evt.srcElement
  var initialTarget = elm === target

  if (rule.event !== eventType && (rule.event !== 'custom' || rule.customEvent !== eventType)) return false
  if (!SL.ruleInScope(rule)) return false
  // ignore all right-clicks
  if (rule.event === 'click' && SL.isRightClick(evt)){
    return false
  }
  if (rule.isDefault && eventEntriesFound > 0)
    return false
  if (rule.expired) return false
  if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay){
    return false
  }
  if (!(initialTarget ||
          ((rule.bubbleFireIfParent !== false) && (eventEntriesFound === 0 || (rule.bubbleFireIfChildFired !== false))))) return false

  if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false
  if (!SL.propertiesMatch(property, elm)) return false
  if (matchValue != null){
    if (typeof matchValue === 'string'){
      if (matchValue !== elm.value)
        return false
    }else if (!matchValue.test(elm.value))
      return false
  }
  if (cnd){
    try{
      if (!cnd.call(elm, evt, target)){
        SL.notify('Condition for rule "' + rule.name + '" not met.', 1)
        return false
      }
    }catch(e){
      SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
      return false
    }
  }
  if (cnds){
    var failed = SL.find(cnds, function(cnd){
      try{
        return !cnd.call(elm, evt, target)
      }catch(e){
        SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
        return true
      }
    })
    if (failed){
      SL.notify('Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.', 1)
      return false
    }
  }
  return true
}


SL.evtHandlers = {}
// `bindEvent(evtName, callback)`
// ------------------------------
//
// Register for an event by name. Alias: `whenEvent`.
//
// `evtName` - the name of the event
// `callback` - the function to be called when even fires
SL.bindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName])
    handlers[evtName] = []
  handlers[evtName].push(callback)
}
SL.whenEvent = SL.bindEvent

// `unbindEvent(evtName, callback)
// -------------------------------
//
// Unregister for an event by name.
//
// `evtName` - the name of the event
// `callback` - the function to unregister
SL.unbindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName]) return
  var idx = SL.indexOf(handlers[evtName], callback)
  handlers[evtName].splice(idx, 1)
}

SL.bindEventOnce = function(evtName, callback){
  var wrapped = function(){
    SL.unbindEvent(evtName, wrapped)
    callback.apply(null, arguments)
  }
  SL.bindEvent(evtName, wrapped)
}

// See <http://tobyho.com/2014/02/26/attribute-only-valid-on-v-image/>
SL.isVMLPoisoned = function(elm){
  if (!elm) return false
  try{
    elm.nodeName
  }catch(e){
    if (e.message === 'Attribute only valid on v:image'){
      return true
    }
  }
  return false
}

SL.handleEvent = function(evt) {
  // Don't process an event twice.
  if (SL.$data(evt, 'eventProcessed')) return

  var eventType = evt.type.toLowerCase()
    , target = evt.target || evt.srcElement
    , rulesMatched = 0
    , rules = SL.rules
    , tools = SL.tools
    , handlers = SL.evtHandlers[evt.type]

  if (SL.isVMLPoisoned(target)){
    SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1)
    return
  }

  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }

  var nodeName = target && target.nodeName;
  if (nodeName)
    SL.notify("detected " + eventType + " on " + target.nodeName, 1)
  else
    SL.notify("detected " + eventType, 1)

  for (var curr = target; curr; curr = curr.parentNode) {
    var bubbleStop = false
    SL.each(rules, function(rule){
      if (SL.ruleMatches(rule, evt, curr, rulesMatched)){
        SL.notify('Rule "' + rule.name + '" fired.', 1)
        SL.fireRule(rule, curr, evt)
        rulesMatched++
        if (rule.bubbleStop)
          bubbleStop = true
      }
    })
    if (bubbleStop) break
  }


  SL.$data(evt, 'eventProcessed', true)
}

// `onEvent(evt)`
// ------------
//
// Handle an event, whether it is a DOM event or a synthetic event.
//
// - `evt` - the event triggered
SL.onEvent = document.querySelectorAll ?
function(evt){ SL.handleEvent(evt) } :
(function(){
  var q = []
  var onEvent = function(evt) {
    if (evt.selector)
      q.push(evt)
    else
      SL.handleEvent(evt)
  }
  onEvent.pendingEvents = q
  return onEvent
})()

// `fireEvent(eventType, eventTarget)`
// ------------
//
// Conviniently programmatically fire an event.
//
// - `eventType` - the type of event
// - `eventTarget` - the target object that fired the event
SL.fireEvent = function(type, target){
  SL.onEvent({type: type, target: target})
}

// `registerEvents(elm, events)`
// -----------------------------
//
// Register events for an element using `track` as the callback
//
// - `elm` - the element to listen for events on
// - `events` - an array of event types (strings)
SL.registerEvents = function(elm, events){
  for (var i = events.length - 1; i >= 0; i--){
    var event = events[i]
    if (!SL.$data(elm, event + '.tracked')){
      SL.addEventHandler(elm, event, SL.onEvent)
      SL.$data(elm, event + '.tracked', true)
    }
  }
}

// `registerEventsForTags(tags, events)`
// -------------------------------------
//
// Register events for all element that have the specified tags
//
// - `tags` - an array of tags to match for (strings)
// - `events` - an array of event types (strings)
SL.registerEventsForTags = function(tags, events){
  for (var i = tags.length - 1; i >= 0; i--){
    var tag = tags[i]
    var elms = document.getElementsByTagName(tag);
    for (var j = elms.length - 1; j >= 0; j--)
      SL.registerEvents(elms[j], events)
  }
}

// `setListeners()`
// ----------------
//
// Set events for `document`
SL.setListeners = function() {
  var events = ['click', 'submit'];

  SL.each(SL.rules, function(rule) {
    if (rule.event === 'custom' &&
        rule.hasOwnProperty('customEvent') &&
        !SL.contains(events, rule.customEvent)) {
      events.push(rule.customEvent);
    }
  });

  SL.registerEvents(document, events);
};

// `getUniqueRuleEvents()`
// -----------------------
//
// Returns an array of unique event types for which event-based rules
// have been configured.
SL.getUniqueRuleEvents = function() {
  if (!SL._uniqueRuleEvents) {
    SL._uniqueRuleEvents = [];
    SL.each(SL.rules, function(rule) {
      if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
        SL._uniqueRuleEvents.push(rule.event);
      }
    });
  }

  return SL._uniqueRuleEvents;
};

// `setFormListeners()`
// --------------------
//
// Listen for events on form elements. Listeners for these events are added directly to form
// elements since they don't bubble (though some do in modern browsers).
SL.setFormListeners = function() {
  if (!SL._relevantFormEvents) {
    var formEvents = [
      "change",
      "focus",
      "blur",
      // Why do we add event listeners directly to form elements for the keypress event? The
      // keypress event bubbles so we could add it directly to document. Note that keypress
      // events can be triggered when any element has focus which means that by adding the event
      // listener directly to form elements we're filtering any keypress events from other elements.
      // Is this the intention? If so, we could still add a single listener directly to document
      // and filter on event.target.nodeName.
      "keypress"
    ];

    SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(formEvents, event) !== -1;
    });
  }

  if (SL._relevantFormEvents.length) {
    SL.registerEventsForTags(['input', 'select', 'textarea', 'button'], SL._relevantFormEvents);
  }
};

// `setVideoListeners()`
// ---------------------
//
// Listen for events on video elements. Listeners for these events are added directly to form
// elements since they don't bubble.
SL.setVideoListeners = function() {
  if (!SL._relevantVideoEvents) {
    var videoEvents = [
      "play",
      "pause",
      "ended",
      "volumechange",
      "stalled",
      "loadeddata"
    ];

    SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(videoEvents, event) !== -1;
    });
  }

  if (SL._relevantVideoEvents.length) {
    SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
  }
};

// `readStoredSetting(name)`
// ==================
//
// Reads the cookie of the given name.
// Stolen from <http://www.quirksmode.org/js/cookies.html>
SL.readStoredSetting = function(name) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try{
    name = 'sdsat_' + name
    return window.localStorage.getItem(name)
  }catch(e){
    SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2)
    return null
  }
}

// Read satelliteUtilsCookie values to see about getting bookmarklet running / settings
SL.loadStoredSettings = function () {
  var debug = SL.readStoredSetting('debug')
    , hideActivity = SL.readStoredSetting('hide_activity')
  if (debug)
    SL.settings.notifications = debug === 'true'
  if (hideActivity)
    SL.settings.hideActivity = hideActivity === 'true'
}

SL.isRuleActive = function(rule, date){
  var schd = rule.schedule
  if (!schd) return true

  var utc = schd.utc
    , getDate = utc ? 'getUTCDate' : 'getDate'
    , getDay = utc ? 'getUTCDay' : 'getDay'
    , getFullYear = utc ? 'getUTCFullYear' : 'getFullYear'
    , getMonth = utc ? 'getUTCMonth' : 'getMonth'
    , getHours = utc ? 'getUTCHours' : 'getHours'
    , getMinutes = utc ? 'getUTCMinutes' : 'getMinutes'
    , setHours = utc ? 'setUTCHours' : 'setHours'
    , setMinutes = utc ? 'setUTCMinutes' : 'setMinutes'
    , setDate = utc ? 'setUTCDate' : 'setDate'

  date = date || new Date()

  function dayDiff(one, other){
    other = modifyDate(other, {
      hour: one[getHours](),
      minute: one[getMinutes]()
    })
    return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)))
  }
  function monthDiff(one, other){
    function months(date){
      return date[getFullYear]() * 12 + date[getMonth]()
    }
    return Math.abs(months(one) - months(other))
  }
  function modifyDate(date, fields){
    var retval = new Date(date.getTime())
    for (var field in fields){
      if (fields.hasOwnProperty(field)) {
        var val = fields[field]
        switch(field){
          case 'hour':
            retval[setHours](val)
            break
          case 'minute':
            retval[setMinutes](val)
            break
          case 'date':
            retval[setDate](val)
            break
        }
      }
    }
    return retval
  }
  function timeGreaterThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) > (h2 * 60 + m2)
  }
  function timeLessThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) < (h2 * 60 + m2)
  }


  if (schd.repeat){
    if (timeGreaterThan(schd.start, date)) return false
    if (timeLessThan(schd.end, date)) return false
    if (date < schd.start) return false
    if (schd.endRepeat && date >= schd.endRepeat) return false
    if (schd.repeat === 'daily'){
      if (schd.repeatEvery){
        var dd = dayDiff(schd.start, date)
        if (dd % schd.repeatEvery !== 0) return false
      }
    }else if (schd.repeat === 'weekly'){
      if (schd.days){
        if (!SL.contains(schd.days, date[getDay]())) return false
      }else
        if (schd.start[getDay]() !== date[getDay]()) return false
      if (schd.repeatEvery){
        var diff = dayDiff(schd.start, date)
        if (diff % (7 * schd.repeatEvery) !== 0)
          return false
      }
    }else if (schd.repeat === 'monthly'){
      if (schd.repeatEvery){
        var md = monthDiff(schd.start, date)
        if (md % schd.repeatEvery !== 0) return false
      }
      if (schd.nthWeek && schd.mthDay){
        if (schd.mthDay !== date[getDay]()) return false
        var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7)
        if (schd.nthWeek !== nthWeek) return false
      }else
        if (schd.start[getDate]() !== date[getDate]()) return false
    }else if (schd.repeat === 'yearly'){
      if (schd.start[getMonth]() !== date[getMonth]()) return false
      if (schd.start[getDate]() !== date[getDate]()) return false
      if (schd.repeatEvery){
        var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]())
        if (diff % schd.repeatEvery !== 0) return false
      }
    }
  }else{
    if (schd.start > date) return false
    if (schd.end < date) return false
  }
  return true
}

SL.isOutboundLink = function(elm){
  if (!elm.getAttribute('href')) return false
  var hostname = elm.hostname
  var href = elm.href
  var protocol = elm.protocol
  if (protocol !== 'http:' && protocol !== 'https:') return false
  var isMyDomain = SL.any(SL.settings.domainList, function(domain){
    return SL.isSubdomainOf(hostname, domain)
  })
  if (isMyDomain) return false
  return hostname !== location.hostname
}

SL.isLinkerLink = function(elm){
  if (!elm.getAttribute || !elm.getAttribute('href')) return false
  return SL.hasMultipleDomains() &&
    elm.hostname != location.hostname &&
    !elm.href.match(/^javascript/i) &&
    !SL.isOutboundLink(elm)
}

SL.isSubdomainOf = function(sub, root){
  if (sub === root) return true
  var idx = sub.length - root.length
  if (idx > 0)
    return SL.equalsIgnoreCase(sub.substring(idx), root)
  return false
}

// `getVisitorId()`
// ------------------------------------------------
//
// Returns the library instance associated to a VisitorId tool if the tool exists
//
SL.getVisitorId = function(){
  var visitorIdTools = SL.getToolsByType('visitor_id')
  if (visitorIdTools.length === 0) {
    return null;
  }

  return visitorIdTools[0].getInstance()
}

SL.URI = function(){
  var ret = document.location.pathname + document.location.search
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

SL.URL = function(){
  var ret = document.location.href
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

// Filter `SL.rules` down to only the once relevant for the current page.
SL.filterRules = function(){
  function matches(rule){
    if (!SL.isRuleActive(rule)) return false
    return true
  }

  SL.rules = SL.filter(SL.rules, matches)
  SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches)

}

SL.ruleInScope = function(rule, location){
  location = location || document.location
  var scope = rule.scope
  if (!scope) return true
  var URI = scope.URI
  var subdomains = scope.subdomains
  var domains = scope.domains
  var protocols = scope.protocols
  var hashes = scope.hashes

  if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false
  if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false
  if (domains && matchFails(domains, location.hostname)) return false
  if (protocols && matchFails(protocols, location.protocol)) return false
  if (hashes && includeExcludeFails(hashes, location.hash)) return false

  function includeExcludeFails(matcher, matchee){
    var include = matcher.include
    var exclude = matcher.exclude
    if (include && matchFails(include, matchee)) return true
    if (exclude){
      if (SL.isString(exclude) && exclude === matchee)
        return true
      if (SL.isArray(exclude) && SL.any(exclude, matches))
        return true
      if (SL.isRegex(exclude) && matches(exclude))
        return true
    }

    return false

    function matches(regex){
      return matchee.match(regex)
    }
  }

  function matchFails(matcher, matchee){
    if (SL.isString(matcher) && matcher !== matchee)
      return true
    if (SL.isArray(matcher) && !SL.any(matcher, matches))
      return true
    if (SL.isRegex(matcher) && !matches(matcher))
      return true
    return false

    function matches(regex){
      return matchee.match(regex)
    }

  }

  return true
}


// Run background tasks once. This will get invoked periodically.
SL.backgroundTasks = function(){
  var start = +new Date()
  SL.setFormListeners()
  SL.setVideoListeners()
  SL.loadStoredSettings()
  SL.registerNewElementsForDynamicRules()
  SL.eventEmitterBackgroundTasks()

  // Trigger condition events
  //SL.onEvent({type: 'condition', target: 'document'})
  var end = +new Date()
  // We want to keep an eye on the execution time here.
  // If it gets to around 50ms for any customer site,
  // we want to either optimize or start using a task queue
  //SL.notify('Background tasks executed in ' + (end - start) + 'ms', 3)
}



// For rules that poll for dynamically injected elements on the page,
// find them and register events for them.
SL.registerNewElementsForDynamicRules = function(){
  function cssQuery(selector, callback){
    var hit = cssQuery.cache[selector]
    if (hit){
      return callback(hit)
    }else{
      SL.cssQuery(selector, function(elms){
        cssQuery.cache[selector] = elms
        callback(elms)
      })
    }
  }
  cssQuery.cache = {}


  SL.each(SL.dynamicRules, function(rule){
    cssQuery(rule.selector, function(elms){
      SL.each(elms, function(elm){
        var event = rule.event === 'custom' ? rule.customEvent : rule.event;
        if (SL.$data(elm, 'dynamicRules.seen.' + event)) return
        SL.$data(elm, 'dynamicRules.seen.' + event, true)
        if (SL.propertiesMatch(rule.property, elm)){
          SL.registerEvents(elm, [event])
        }
      })
    })
  })
}

// If the browser doesn't support CSS selector queries, we have to include one.
SL.ensureCSSSelector = function(){
  if (document.querySelectorAll){
    SL.hasSelector = true
    return
  }
  SL.loadingSizzle = true
  SL.sizzleQueue = []
  SL.loadScript(SL.basePath() + 'selector.js', function(){
    if (!SL.Sizzle){
      SL.logError(new Error('Failed to load selector.js'))
      return
    }
    var pending = SL.onEvent.pendingEvents
    SL.each(pending, function(evt){
      SL.handleEvent(evt)
    }, this)
    SL.onEvent = SL.handleEvent
    SL.hasSelector = true
    ;delete SL.loadingSizzle
    SL.each(SL.sizzleQueue, function(item){
      SL.cssQuery(item[0], item[1])
    })
    ;delete SL.sizzleQueue

  })
}

// Error Handling

SL.errors = []
SL.logError = function(err){
  SL.errors.push(err)
  SL.notify(err.name + ' - ' + err.message, 5)
}

// `pageBottom()`
// --------------
//
// The function is to be called by the web page using an script tag like so:
//
//     <script>_satellite.pageBottom()</script>
//
// just before the `</body>` tag.
SL.pageBottom = function(){
  if (!SL.initialized) return
  SL.pageBottomFired = true
  SL.firePageLoadEvent('pagebottom')
}

// This allows Rover to configure the browser to use the staging library instead.
SL.stagingLibraryOverride = function(){
  /*jshint evil:true */
  var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true'
  if (libraryOverride){ // allow Rover to override the library to staging
    var scripts = document.getElementsByTagName('script')
      , regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/
      , regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/
      , match
      , matchStaging
      , src
    for (var i = 0, len = scripts.length; i < len; i++){
      src = scripts[i].getAttribute('src')
      if (!src) continue
      if (!match) match = src.match(regex)
      if (!matchStaging) matchStaging = src.match(regexStaging)
      if (matchStaging) break
    }
    if (match && !matchStaging){
      var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js'
      if (document.write) {
        document.write('<script src="' + stagingURL + '"></script>')
      } else {
        var s = document.createElement('script')
        s.src = stagingURL
        document.head.appendChild(s)
      }
      return true
    }
  }
  return false
}

SL.checkAsyncInclude = function(){
  if (window.satellite_asyncLoad)
    SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
}

SL.hasMultipleDomains = function(){
  return !!SL.settings.domainList && SL.settings.domainList.length > 1
}

SL.handleOverrides = function(){
  if (Overrides){
    for (var key in Overrides){
      if (Overrides.hasOwnProperty(key)){
        SL.data[key] = Overrides[key]
      }
    }
  }
}

SL.privacyManagerParams = function(){
  var params = {}
  SL.extend(params, SL.settings.privacyManagement)
  var analyticsTools = []
  for (var key in SL.tools){
    if (SL.tools.hasOwnProperty(key)) {
      var tool = SL.tools[key]
      var settings = tool.settings
      if (!settings) continue
      if (settings.engine === 'sc'){
        analyticsTools.push(tool)
      }
    }
  }
  var analyticsTrackingServers = SL.filter(SL.map(analyticsTools, function(tool){
    return tool.getTrackingServer()
  }), function(s){ return s != null })
  params.adobeAnalyticsTrackingServers = analyticsTrackingServers
  var substitutable = [
    'bannerText',
    'headline',
    'introductoryText',
    'customCSS'
  ]
  for (var i = 0; i < substitutable.length; i++){
    var prop = substitutable[i]
    var spec = params[prop]
    if (!spec) continue
    if (spec.type === 'text'){
      params[prop] = spec.value
    }else if (spec.type === 'data'){
      params[prop] = SL.getVar(spec.value)
    }else{
      throw new Error('Invalid type: ' + spec.type)
    }
  }
  return params
}

SL.prepareLoadPrivacyManager = function(){
  SL.addEventHandler(window, 'load', function(){
    loadWhenAllSCToolsLoaded(SL.loadPrivacyManager)
  })

  function loadWhenAllSCToolsLoaded(callback){
    var scTools = SL.filter(SL.values(SL.tools), function(tool){
      return tool.settings && tool.settings.engine === 'sc'
    })
    if (scTools.length === 0){
      return callback()
    }
    var numLoaded = 0
    SL.each(scTools, function(tool){
      SL.bindEvent(tool.id + '.load', onLoad)
    })
    var tid = setTimeout(onTimeout, 5000)

    function onLoad(){
      numLoaded++
      if (numLoaded === scTools.length){
        cleanUp()
        clearTimeout(tid)
        callback()
      }
    }

    function cleanUp(){
      SL.each(scTools, function(tool){
        SL.unbindEvent(tool.id + '.load', onLoad)
      })
    }

    function onTimeout(){
      cleanUp()
      callback()
    }
  }

}

// `loadPrivacyManager()`
// ----------------------
//
// Initialize privacy manager
SL.loadPrivacyManager = function(){
  var scriptUrl = SL.basePath() + 'privacy_manager.js'
  SL.loadScript(scriptUrl, function(){
    var pm = SL.privacyManager
    pm.configure(SL.privacyManagerParams())
    pm.openIfRequired()
  })
}

// `init()`
// --------
//
// Initialize Satellite.
//
// - `settings` - all the settings that comprising a library.
SL.init = function(settings) {
  if (SL.stagingLibraryOverride())
    return

  SL.configurationSettings = settings
  var tools = settings.tools
  ;delete settings.tools
  for (var key in settings){
    if (settings.hasOwnProperty(key)){
      SL[key] = settings[key]
    }
  }

  if(SL.data.customVars === undefined)
    SL.data.customVars = {}

  SL.data.queryParams = SL.QueryParams.normal

  SL.handleOverrides()

  SL.detectBrowserInfo()

  if (SL.trackVisitorInfo)
    SL.trackVisitorInfo()

  SL.loadStoredSettings()
  SL.Logger.setOutputState(SL.settings.notifications)

  SL.checkAsyncInclude()

  SL.ensureCSSSelector()

  SL.filterRules()
  SL.dynamicRules = SL.filter(SL.rules, function(rule){
    return rule.eventHandlerOnElement
  })

  SL.tools = SL.initTools(tools)
  SL.initEventEmitters()

  SL.firePageLoadEvent('aftertoolinit')

  if (SL.settings.privacyManagement){
    SL.prepareLoadPrivacyManager()
  }

  if (SL.hasSelector)
    SL.domReady(SL.eventEmitterBackgroundTasks)

  SL.setListeners()

  // Setup background tasks
  SL.domReady(function() {
    SL.poll(
      function() { SL.backgroundTasks() },
      SL.settings.recheckEvery || 3000
    )
  })

  // Setup page load events
  SL.domReady(function(){
    SL.domReadyFired = true
    if (!SL.pageBottomFired)
      SL.pageBottom()

    SL.firePageLoadEvent('domready')
  })

  SL.addEventHandler(window, 'load', function(){
    SL.firePageLoadEvent('windowload')
  })

  SL.firePageLoadEvent('pagetop')
  SL.initialized = true
}

SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']

SL.loadEventBefore = function(one, other){
  return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other)
}

SL.flushPendingCalls = function(tool){
  if (tool.pending){
    SL.each(tool.pending, function(call){
      var cmd = call[0]
        , elm = call[1]
        , evt = call[2]
        , args = call[3]
      if (cmd in tool)
        tool[cmd].apply(tool, [elm, evt].concat(args))
      else if (tool.emit)
        tool.emit(cmd, elm, evt, args)
      else
        SL.notify('Failed to trigger ' + cmd +
          ' for tool ' + tool.id, 1)
    })
    ;delete tool.pending
  }
}

// setDebug(debug)
// --------------
//
// Activate or deactivate debug mode - within which
// log statements will be printed to the JS console.
//
// - `debug` - a boolean indicating whether debug mode
//   should be turned on.
SL.setDebug = function(debug){
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    window.localStorage.setItem('sdsat_debug', debug)
  } catch (e) {
    SL.notify('Cannot set debug mode: ' + e.message, 2)
  };
}

SL.getUserAgent = function() {
  return navigator.userAgent;
};

SL.detectBrowserInfo = function(){
  // Based on <http://jsbin.com/inubez/3/>
  function matcher(regexs){
    return function(userAgent){
      for (var key in regexs){
        if (regexs.hasOwnProperty(key)) {          
          var regex = regexs[key];
          var match = regex.test(userAgent);
          if (match) return key;
        }
      }
      return "Unknown";
    };
  }

  // The order in which these regular expressions are evaluated is important.

  var getBrowser = matcher({
    "IE Edge Mobile": /Windows Phone.*Edge/,
    "IE Edge": /Edge/,
    OmniWeb: /OmniWeb/,
    "Opera Mini": /Opera Mini/,
    "Opera Mobile": /Opera Mobi/,
    Opera: /Opera/,
    Chrome: /Chrome|CriOS|CrMo/,
    Firefox: /Firefox|FxiOS/,
    "IE Mobile": /IEMobile/,
    IE: /MSIE|Trident/,
    "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
    Safari: /Safari/
  });

  var getOS = matcher({
    Blackberry: /BlackBerry|BB10/,
    "Symbian OS": /Symbian|SymbOS/,
    Maemo: /Maemo/,
    Android: /Android/,
    Linux: / Linux /,
    Unix: /FreeBSD|OpenBSD|CrOS/,
    Windows: /[\( ]Windows /,
    iOS: /iPhone|iPad|iPod/,
    MacOS: /Macintosh;/
  });

  var getDeviceType = matcher({
    // This is not entirely accurate. A few old Samsung, Motorola, and Sony Ericsson phones
    // will match but the majority and best guess is Nokia. Also, Nokia makes Windows phones and
    // for those we will make it match Windows Phone and not Nokia.
    Nokia: /Symbian|SymbOS|Maemo/,
    "Windows Phone": /Windows Phone/,
    Blackberry: /BlackBerry|BB10/,
    Android: /Android/,
    iPad: /iPad/,
    iPod: /iPod/,
    iPhone: /iPhone/,
    Desktop: /.*/
  });

  var userAgent = SL.getUserAgent();
  SL.browserInfo = {
    browser: getBrowser(userAgent)
    , os: getOS(userAgent)
    , deviceType: getDeviceType(userAgent)
  }
}

SL.isHttps = function(){
  return 'https:' == document.location.protocol
}

SL.BaseTool = function(settings){
  this.settings = settings || {}

  this.forceLowerCase = SL.settings.forceLowerCase
  if ('forceLowerCase' in this.settings){
    this.forceLowerCase = this.settings.forceLowerCase
  }
}
SL.BaseTool.prototype = {
  triggerCommand: function(trig, elm, evt){
    var settings = this.settings || {}

    if (this.initialize && this.isQueueAvailable()){
      if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)){
        this.queueCommand(trig, elm, evt)
        return
      }
    }

    var cmd = trig.command
    var method = this['$' + cmd]
    var escapeHtml = method ? method.escapeHtml : false
    var args = SL.preprocessArguments(
      trig['arguments'],
      elm,
      evt,
      this.forceLowerCase,
      escapeHtml)

    if (method){
      method.apply(this, [elm, evt].concat(args))
    }else if (this.$missing$){
      this.$missing$(cmd, elm, evt, args)
    }else
      SL.notify('Failed to trigger ' + cmd +
        ' for tool ' + this.id, 1)

  },
  endPLPhase: function(pageLoadEvent){
    // override to handle end initialization
  },
  isQueueable: function(trig){
    // everything is queueable except `cancelToolInit`
    return trig.command !== 'cancelToolInit'
  },
  isQueueAvailable: function(){
    return !this.initialized && !this.initializing
  },
  flushQueue: function(){
    if (this.pending){
      SL.each(this.pending, function(args){
        this.triggerCommand.apply(this, args)
      }, this)
      this.pending = []
    }
  },
  queueCommand: function(trig, elm, evt){
    if (!this.pending)
      this.pending = []
    this.pending.push([trig, elm, evt])
  },
  $cancelToolInit: function(){
    this._cancelToolInit = true
  }
}

// Set Satellite to the global variable `_satellite`.
window._satellite = SL

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

SL.visibility = {
  // Public
  // ------------------------------------------------

  // `isHidden()`
  //
  // The method returns true if the tab is hidden, otherwise false.
  isHidden: function() {
    var prop = this.getHiddenProperty();
    if (!prop) return false;
    return document[prop];
  },

  // `isVisible()`
  //
  // The method is an alias for the `!isHidden`.
  isVisible: function() {
    return !this.isHidden();
  },

  // Private
  // ------------------------------------------------
  getHiddenProperty: function() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document)
        return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
  },

  getVisibilityEvent: function() {
    var ve = this.getHiddenProperty();
    if (!ve) return null;
    return ve.replace(/[H|h]idden/,'') + 'visibilitychange';
  }
};

// E-Commerce APIs
// ---------------
//
// The ecommerce API allows web admins to integrate e-commerce tracking with Satellite.
// More details on the [GA E-Commerce API's](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiEcommerce.html).
// Upon any of the methods on the API being called, they will fire an event, which
// in turn can be handled by a rule in the library.

SL.ecommerce = {
  // `addItem(orderId, sku, name, category, price, quantity)`
  // -------------------------------------
  //
  // Add an item to the transaction.
  addItem: function(){
    var args = [].slice.call(arguments)
    SL.onEvent({type: 'ecommerce.additem', target: args})
  },

  // `addTrans(orderId, affiliation, total, tax, shipping, city, state, country)`
  // ----------------------------------------------------------------------------
  //
  // Add a new transaction.
  addTrans: function(){
    var args = [].slice.call(arguments)
    SL.data.saleData.sale = {
      orderId: args[0],
      revenue: args[2]
    }
    SL.onEvent({type: 'ecommerce.addtrans', target: args})
  },

  // `trackTrans()`
  // --------------
  //
  // Send the transaction data that's been set up using `addItem()` and `addTrans()`
  // to GA to be tracked.
  trackTrans: function(){
    SL.onEvent({type: 'ecommerce.tracktrans', target: []})
  }
}

// Orientation Change Event Emitter
// ================================
//
// The `orientationchange` event on mobile devices fire when the devices switchs between
// portrait and landscape modes. You can use `%event.orientation%` in your command arguments
// to evaluate to either `portrait` or `landscape`.
function OrientationChangeEventEmitter(){
  SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
}
OrientationChangeEventEmitter.orientationChange = function (e) {
  var orientation = window.orientation === 0 ? 
    'portrait' : 
    'landscape'
  e.orientation = orientation
  SL.onEvent(e)
}
SL.availableEventEmitters.push(OrientationChangeEventEmitter)

// InviewEventEmitter
// ==================
//
// Emits the `inview` event. The `inview` event fires on an element when the element
// first comes into the view of the user. If the element is in view immediately upon page
// load, it will be fired right away, if it only comes in view after some scrolling, it
// will fire then. An optional delay interval `inviewDelay` can be specified in the rule
// which determine how long the element has to be in view for before the event fires,
// of which the default value is 1 second.

function InViewEventEmitter(rules){
  rules = rules || SL.rules
  this.rules = SL.filter(rules, function(rule){
    return rule.event === 'inview'
  })
  this.elements = []
  this.eventHandler = SL.bind(this.track, this)
  SL.addEventHandler(window, 'scroll', this.eventHandler)
  SL.addEventHandler(window, 'load', this.eventHandler)
}

// Util functions needed by `InViewEventEmitter`
InViewEventEmitter.offset = function(elem) {
  var top = null, left = null;

  try {
    var box = elem.getBoundingClientRect(),
      doc = document,
      docElem = doc.documentElement,
      body = doc.body,
      win = window,
      clientTop  = docElem.clientTop  || body.clientTop  || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
      scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    top  = box.top  + scrollTop  - clientTop;
    left = box.left + scrollLeft - clientLeft;
  } catch(e) {
  }

  return { top: top, left: left }
}
InViewEventEmitter.getViewportHeight = function() {
  var height = window.innerHeight // Safari, Opera
  var mode = document.compatMode

  if (mode) { // IE, Gecko
    height = (mode == 'CSS1Compat') ?
    document.documentElement.clientHeight : // Standards
    document.body.clientHeight // Quirks
  }

  return height
}
InViewEventEmitter.getScrollTop = function(){
  return (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop)
}

InViewEventEmitter.isElementInDocument = function(el) {
  return document.body.contains(el);
}

InViewEventEmitter.isElementInView = function(el) {
  if (!InViewEventEmitter.isElementInDocument(el)) {
    return false;
  }

  var vpH = InViewEventEmitter.getViewportHeight()
      , scrolltop = InViewEventEmitter.getScrollTop()
      , top = InViewEventEmitter.offset(el).top
      , height = el.offsetHeight;

  if (top !== null) {
    return !(scrolltop > (top + height) || scrolltop + vpH < top)
  }

  return false;
}

InViewEventEmitter.prototype = {
  backgroundTasks: function(){
    var elements = this.elements
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector, function(elms){
        var addCount = 0
        SL.each(elms, function(elm){
          if (!SL.contains(elements, elm)){
            elements.push(elm)
            addCount++
          }
        })
        if (addCount){
          SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1)
        }
      })
    })
    this.track()
  },

  checkInView: function(el, recheck, delay){
    var inview = SL.$data(el, 'inview');
    if (InViewEventEmitter.isElementInView(el)) {
      // it is in view now
      if (!inview)
        SL.$data(el, 'inview', true)
      var self = this
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        if (recheck || !rule.inviewDelay){
          SL.$data(el, viewedProp, true)
          SL.onEvent({type: 'inview', target: el, inviewDelay: rule.inviewDelay})
        }else if(rule.inviewDelay){
          var timeout = SL.$data(el, timeoutIdProp)
          if (!timeout) {
            timeout = setTimeout(function(){
              self.checkInView(el, true, rule.inviewDelay)
            }, rule.inviewDelay)
            SL.$data(el, timeoutIdProp, timeout)
          }
        }
      }, delay)
    } else {
      if (!InViewEventEmitter.isElementInDocument(el)) {
        var idx = SL.indexOf(this.elements, el);
        this.elements.splice(idx, 1)
      }

      // it is not in view now
      if (inview)
        SL.$data(el, 'inview', false)
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        var timeout = SL.$data(el, timeoutIdProp)
        if (timeout){
          clearTimeout(timeout)
        }
      }, delay)
    }
  },
  track: function(){
    // We are not using SL.each here because we might do a splice inisde
    // `checkInView` method.
    for (var i = this.elements.length - 1; i >=0; i--) {
      this.checkInView(this.elements[i]);
    }
  },
  processRules: function(elm, callback, delay){
    var filteredRules = this.rules;
    if (delay) {
        filteredRules = SL.filter(this.rules, function(e){
          return e.inviewDelay == delay;
        });
    }
    SL.each(filteredRules, function(rule, i){
      // viewedProp: for rules that has a timeout, the definition for
      // "viewed" is rule dependent. But for all rules that do not have
      // a timeout, it is independent.
      var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed'
      var timeoutIdProp = 'inview_timeout_id_' + i
      if (SL.$data(elm, viewedProp)) return
      if (SL.matchesCss(rule.selector, elm)){
        callback(rule, viewedProp, timeoutIdProp)
      }
    })
  }
}

SL.availableEventEmitters.push(InViewEventEmitter)

// VideoPlayedEventEmitter
// =======================
//
// Emits the `videoplayed` event, given a specified percentage or duration, i.e. `videoplayed`
// is a parameterized event. A rule looks like this
//
//      {
//          name: "Video 10% complete",
//          event: "videoplayed(10%)",
//          selector: "#video",
//          trigger: [
//              {
//                  tool: "ga",
//                  command: "trackEvent",
//                  arguments: [
//                      "video",
//                      "video 10% complete",
//                      "from: %URI%"
//                  ]
//              }
//          ]
//      }
//
// `10%` is in the paranthesis which indicates this rule will only fire when the 10%
// of the total length of the video has been played.
// You can also specifiy a duration in seconds, which looks like `videoplayed(8s)` - which
// stands for 8 seconds.

function VideoPlayedEventEmitter(){
  this.rules = SL.filter(SL.rules, function(rule){
    return rule.event.substring(0, 11) === 'videoplayed'
  })
  this.eventHandler = SL.bind(this.onUpdateTime, this)
}
VideoPlayedEventEmitter.prototype = {
  backgroundTasks: function(){
    var eventHandler = this.eventHandler
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector || 'video', function(elms){
        SL.each(elms, function(elm){
          if (SL.$data(elm, 'videoplayed.tracked')) return
          SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100))
          SL.$data(elm, 'videoplayed.tracked', true)
        })
      })
    })
  },
  evalRule: function(elm, rule){
    var eventType = rule.event
      , seekable = elm.seekable
      , startTime = seekable.start(0)
      , endTime = seekable.end(0)
      , currentTime = elm.currentTime
      , m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/)
    if (!m) return
    var unit = m[2]
      , amount = Number(m[1])
    var func = unit === '%' ?
      function(){
        return amount <= 
          100 * (currentTime - startTime) / (endTime - startTime)
      } :
      function(){
        return amount <= currentTime - startTime
      }
    if (!SL.$data(elm, eventType) && func()){
      SL.$data(elm, eventType, true)
      SL.onEvent({type: eventType, target: elm})
    }
  },
  onUpdateTime: function(e){
    var rules = this.rules
      , elm = e.target
    if (!elm.seekable || elm.seekable.length === 0) return
    for (var i = 0, len = rules.length; i < len; i++)
      this.evalRule(elm, rules[i])
  }
}
SL.availableEventEmitters.push(VideoPlayedEventEmitter)

// Leave Event Emitter
// ============================
//
// The page leave is an event that is used to detect the moment when the
// browser's tab gets closed.
//

function LeaveEventEmitter() {
  if (SL.getToolsByType('nielsen').length > 0) {
    SL.domReady(SL.bind(this.initialize, this));
  }
}

LeaveEventEmitter.prototype = {
  obue: false,
  initialize: function() {
    this.attachCloseListeners();
  },
  obuePrevUnload: function() {},
  obuePrevBeforeUnload: function() {},
  newObueListener: function() {
    if (!this.obue) {
      this.obue = true;
      this.triggerBeacons();
    }
  },
  attachCloseListeners: function() {
    this.prevUnload = window.onunload;
    this.prevBeforeUnload = window.onbeforeunload;

    window.onunload = SL.bind(function(e) {
      if (this.prevUnload) {
        setTimeout(SL.bind(function() {
          this.prevUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
    window.onbeforeunload = SL.bind(function(e) {
      if (this.prevBeforeUnload) {
        setTimeout(SL.bind(function() {
          this.prevBeforeUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
  },
  triggerBeacons: function() {
    SL.fireEvent('leave', document);
  }
}
SL.availableEventEmitters.push(LeaveEventEmitter);

// Facebook Event Emitter
// ======================
//
// Will track `edge.create`, `edge.remove` and `message.send` events from the Facebook
// Javascript API and emit `facebook.like`, `facebook.unlike` and `facebook.send` events
// respectively.

function FacebookEventEmitter(FB){
  this.delay = 250;
  this.FB = FB;

  SL.domReady(SL.bind(function () {
    SL.poll(SL.bind(this.initialize, this), this.delay, 8);
  }, this));
}

FacebookEventEmitter.prototype = {
  initialize: function() {
    this.FB = this.FB || window.FB;

    if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
      this.bind();
      return true;
    }
  },

  bind: function(){
    this.FB.Event.subscribe('edge.create', function() {
      SL.notify("tracking a facebook like", 1)
      SL.onEvent({type: 'facebook.like', target: document})
    });

    this.FB.Event.subscribe('edge.remove', function() {
      SL.notify("tracking a facebook unlike", 1)
      SL.onEvent({type: 'facebook.unlike', target: document})
    });

    this.FB.Event.subscribe('message.send', function() {
      SL.notify("tracking a facebook share", 1)
      SL.onEvent({type: 'facebook.send', target: document})
    });
  }
}
SL.availableEventEmitters.push(FacebookEventEmitter);

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

function VisibilityEventEmitter() {
  this.defineEvents();
  this.visibilityApiHasPriority = true;
  if (!document.addEventListener) { // Older browers (e.g.: IE8)
    this.attachDetachOlderEventListeners(true, document, 'focusout');
  } else {
    this.setVisibilityApiPriority(false);
  }
  var context = this;
  SL.bindEvent('aftertoolinit', function() {
    SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
  });
}

VisibilityEventEmitter.prototype = {
  defineEvents: function() {
    this.oldBlurClosure = function() {
      SL.fireEvent('tabblur', document)
    };
    this.oldFocusClosure = SL.bind(function() {
      if (this.visibilityApiHasPriority) {
        SL.fireEvent('tabfocus', document);
      } else {
        if (SL.visibility.getHiddenProperty() != null) {
          if(!SL.visibility.isHidden()) {
            SL.fireEvent('tabfocus', document);
          }
        } else {
          SL.fireEvent('tabfocus', document);
        }
      }
    }, this);
  },
  attachDetachModernEventListeners: function(add) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](document,
      SL.visibility.getVisibilityEvent(),
      this.handleVisibilityChange
    );
  },
  attachDetachOlderEventListeners: function(add, blurTarget, blurEventName) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](blurTarget, blurEventName, this.oldBlurClosure);
    SL[method](window, 'focus', this.oldFocusClosure);
  },
  handleVisibilityChange: function() {
    if (SL.visibility.isHidden()) {
      SL.fireEvent('tabblur', document);
    } else {
      SL.fireEvent('tabfocus', document);
    }
  },
  setVisibilityApiPriority: function(visibilityApiHasPriority) {
    this.visibilityApiHasPriority = visibilityApiHasPriority;
    this.attachDetachOlderEventListeners(false, window, 'blur');
    this.attachDetachModernEventListeners(false);
    if (visibilityApiHasPriority) {
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      } else {
        this.attachDetachOlderEventListeners(true, window, 'blur');
      }
    } else {
      this.attachDetachOlderEventListeners(true, window, 'blur');
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      }
    }
  },
  oldBlurClosure: null,
  oldFocusClosure: null,
  visibilityApiHasPriority: true
};

SL.availableEventEmitters.push(VisibilityEventEmitter);

// Location Change Event Emitter
// =============================
//
// Will fire `locationchange` event whenever the browser location
// changes due to `hashchange`, `popstate`, `history.pushState()`,
// or `history.replaceState()`. 

function LocationChangeEventEmitter(){
  this.lastURL = SL.URL()
  this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this)
  this._onPopState = SL.bind(this.onPopState, this)
  this._onHashChange = SL.bind(this.onHashChange, this)
  this._pushState = SL.bind(this.pushState, this)
  this._replaceState = SL.bind(this.replaceState, this)
  this.initialize()
}

LocationChangeEventEmitter.prototype = {
  initialize: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  fireIfURIChanged: function(){
    var URL = SL.URL()
    if (this.lastURL !== URL){
      this.fireEvent()
      this.lastURL = URL
    }
  },

  fireEvent: function(){
    SL.updateQueryParams()
    SL.onEvent({ type: 'locationchange', target: document })
  },

  setupSPASupport: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  setupHistoryAPI: function(){
    var history = window.history
    if (history){
      if (history.pushState){
        this.originalPushState = history.pushState
        history.pushState = this._pushState
      }
      if (history.replaceState){
        this.originalReplaceState = history.replaceState
        history.replaceState = this._replaceState
      }
    }
    SL.addEventHandler(window, 'popstate', this._onPopState)
  },

  pushState: function(){
    var ret = this.originalPushState.apply(history, arguments)
    this.onPushState()
    return ret
  },

  replaceState: function(){
    var ret = this.originalReplaceState.apply(history, arguments)
    this.onReplaceState()
    return ret
  },

  setupHashChange: function(){
    SL.addEventHandler(window, 'hashchange', this._onHashChange)
  },

  onReplaceState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPushState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPopState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onHashChange: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  uninitialize: function(){
    this.cleanUpHistoryAPI()
    this.cleanUpHashChange()
  },

  cleanUpHistoryAPI: function(){
    if (history.pushState === this._pushState){
      history.pushState = this.originalPushState
    }
    if (history.replaceState === this._replaceState){
      history.replaceState = this.originalReplaceState
    }
    SL.removeEventHandler(window, 'popstate', this._onPopState)
  },

  cleanUpHashChange: function(){
    SL.removeEventHandler(window, 'hashchange', this._onHashChange)
  }

}

SL.availableEventEmitters.push(LocationChangeEventEmitter);

function DataElementChangeEmitter() {
  var rules = SL.filter(SL.rules, function(rule) {
    return rule.event.indexOf('dataelementchange') === 0;
  });

  this.dataElementsNames = SL.map(rules, function(rule) {
    var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
    return matchedSubstrings[1];
  }, this);

  this.initPolling();
}

// SL.stringify is not 100% compatible with JSON.stringify (for example JSON.stringify breaks
// whenever it encounters a cyclic reference). Since this check might become intensive,
// only for this case we would prefer using JSON.stringify whenever that's available.
DataElementChangeEmitter.prototype.getStringifiedValue =
    (window.JSON && window.JSON.stringify) || SL.stringify;

DataElementChangeEmitter.prototype.initPolling = function() {
  if (this.dataElementsNames.length === 0) {
    return;
  }

  this.dataElementsStore = this.getDataElementsValues();
  SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
};

DataElementChangeEmitter.prototype.getDataElementsValues = function() {
  var values = {};
  SL.each(this.dataElementsNames, function(dataElementName) {
    var value = SL.getVar(dataElementName);
    values[dataElementName] = this.getStringifiedValue(value);
  }, this);

  return values;
};

DataElementChangeEmitter.prototype.checkDataElementValues = function() {
  SL.each(this.dataElementsNames, SL.bind(function(dataElementName) {
    var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
    var previousStringifiedValue =  this.dataElementsStore[dataElementName];

    if (currentStringifiedValue !== previousStringifiedValue) {
      this.dataElementsStore[dataElementName] = currentStringifiedValue;

      SL.onEvent({
        type: 'dataelementchange(' + dataElementName + ')',
        target: document
      });
    }
  }, this));
};

SL.availableEventEmitters.push(DataElementChangeEmitter);

// ElementExistsEventEmitter
// ==================
//
// Emits the `elementexists` event. The `elementexists` event fires when an element
// of a specified selector becomes into existance - either because it's in the page
// markup or dynamically injected later on. *Each rule only fires once.*

function ElementExistsEventEmitter() {
  this.rules = SL.filter(SL.rules, function(rule) {
    return rule.event === 'elementexists';
  });
}
ElementExistsEventEmitter.prototype.backgroundTasks = function() {
  SL.each(this.rules, function(rule) {
    SL.cssQuery(rule.selector, function(elms) {
      if (elms.length > 0){
        // This results in a bug: https://jira.corp.adobe.com/browse/DTM-6681
        // The fix was reverted due to: https://jira.corp.adobe.com/browse/DTM-7377
        var elm = elms[0];
        if (SL.$data(elm, 'elementexists.seen')) return;
        SL.$data(elm, 'elementexists.seen', true);
        SL.onEvent({type: 'elementexists', target: elm});
      }
    })
  })
}

SL.availableEventEmitters.push(ElementExistsEventEmitter);

// Hover Event Emitter
// =====================
//
// Emits the `hover` event in the event. This is better than `mouseover` because you can introduce a certain delay.
// 
//  {
//        name: "Hover for 1 second"
//        event: "hover(1000)",
//        ...
//  }
function HoverEventEmitter(){
  var eventRegex = this.eventRegex = /^hover\(([0-9]+)\)$/
  var rules = this.rules = []
  SL.each(SL.rules, function(rule){
    var m = rule.event.match(eventRegex)
    if (m){
      rules.push([
        Number(rule.event.match(eventRegex)[1]), 
        rule.selector
      ])
    }
  })
}
HoverEventEmitter.prototype = {
  backgroundTasks: function(){
    var self = this
    SL.each(this.rules, function(rule){
      var selector = rule[1]
        , delay = rule[0]
      SL.cssQuery(selector, function(newElms){
        SL.each(newElms, function(elm){
          self.trackElement(elm, delay)
        })
      })
    }, this)
  },
  trackElement: function(elm, delay){
    var self = this
      , trackDelays = SL.$data(elm, 'hover.delays')
    if (!trackDelays){
      SL.addEventHandler(elm, 'mouseover', function(e){
        self.onMouseOver(e, elm)
      })
      SL.addEventHandler(elm, 'mouseout', function(e){
        self.onMouseOut(e, elm)
      })
      SL.$data(elm, 'hover.delays', [delay])
    }
    else if (!SL.contains(trackDelays, delay)){
      trackDelays.push(delay)
    }
  },
  onMouseOver: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.fromElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseEnter(elem)
  },
  onMouseEnter: function(elm){
    var delays = SL.$data(elm, 'hover.delays')
    var delayTimers = SL.map(delays, function(delay){
      return setTimeout(function(){
        SL.onEvent({type: 'hover(' + delay + ')', target: elm})
      }, delay)
    })
    SL.$data(elm, 'hover.delayTimers', delayTimers)
  },
  onMouseOut: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.toElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseLeave(elem)
  },
  onMouseLeave: function(elm){
    var delayTimers = SL.$data(elm, 'hover.delayTimers')
    if (delayTimers)
      SL.each(delayTimers, function(timer){
        clearTimeout(timer)
      })
  }
}
SL.availableEventEmitters.push(HoverEventEmitter)

// Twitter Event Emitter
// =====================
//
// Emits the `twitter.tweet` event in the event a user tweets from the site.
function TwitterEventEmitter(twttr){
  SL.domReady(SL.bind(function () {
    this.twttr = twttr || window.twttr;
    this.initialize();
  }, this));
}

TwitterEventEmitter.prototype = {
  initialize: function(){
    var twttr = this.twttr;
    if (twttr && typeof twttr.ready === 'function') {
      twttr.ready(SL.bind(this.bind, this));
    }
  },

  bind: function(){
    this.twttr.events.bind('tweet', function(event) {
      if (event) {
        SL.notify("tracking a tweet button", 1);
        SL.onEvent({type: 'twitter.tweet', target: document});
      }
    });

  }
}
SL.availableEventEmitters.push(TwitterEventEmitter)

// The Adobe Target Tool
// ==================
//
// This tool interacts with [Adobe Target library](https://git.corp.adobe.com/mc-visitor/VisitorAPI).
//
// The tool accepts the following settings:
//
// - `engine` - The engine identifier (tnt)
// - `mboxURL` - The URL where the mbox can be found
// - `loadSync` - Specifies how the mbox should be loaded. A true value means
//      that it should be loaded in a synchronous mode.
// - `pageParams` - Object containing key/value pairs used in the mbox retrieval
//      call. The pairs are merged onto the `targetPageParams` property of
//      Target Javascript library. For more information click
//      [here](https://marketing.adobe.com/resources/help/en_US/target/target/c_pass_parameters_to_global_mbox.html).

function Tnt(settings){
  SL.BaseTool.call(this, settings)

  this.styleElements = {}
  this.targetPageParamsStore = {}
}

SL.inherit(Tnt, SL.BaseTool)

SL.extend(Tnt.prototype, {
  // Public
  // ------------------------------------------------
  name: 'tnt',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // When the tool is initialized the global `targetPageParams` are updated with
  // the parameters provided in the settings.
  //
  // It is important to know that the `targetPageParams` property is not
  // overwritten instead a merging process is taking place. If a key is already
  // present then its value is updated.
  //
  // The last step is the loading of the mbox where the `mboxURL` is used.

  endPLPhase: function(pageLoadEvent) {
    if (pageLoadEvent === 'aftertoolinit') {
      this.initialize();
    }
  },

  // Private
  // ------------------------------------------------
  initialize: function() {
    SL.notify('Test & Target: Initializing', 1)
    this.initializeTargetPageParams()
    this.load()
  },

  initializeTargetPageParams: function() {
    if (window.targetPageParams) {
      this.updateTargetPageParams(
        this.parseTargetPageParamsResult(
          window.targetPageParams()
        )
      )
    }

    this.updateTargetPageParams(this.settings.pageParams)
    this.setTargetPageParamsFunction()
  },

  load: function(){
    var url = this.getMboxURL(this.settings.mboxURL)
    if (this.settings.initTool !== false){
      if (this.settings.loadSync) {
        SL.loadScriptSync(url)
        this.onScriptLoaded()
      } else {
        SL.loadScript(url, SL.bind(this.onScriptLoaded, this))
        this.initializing = true
      }
    } else {
      this.initialized = true
    }
  },

  getMboxURL: function(urlData) {
    var url = urlData
    if (SL.isObject(urlData)) {
      if (window.location.protocol === 'https:')
        url = urlData.https
      else
        url = urlData.http
    }
    if (!url.match(/^https?:/))
      return SL.basePath() + url
    else
      return url
  },

  onScriptLoaded: function(){
    SL.notify('Test & Target: loaded.', 1)

    this.flushQueue()

    this.initialized = true
    this.initializing = false
  },

  $addMbox: function(elm, evt, settings){
    var mboxGoesAround = settings.mboxGoesAround
    var styleText = mboxGoesAround + '{visibility: hidden;}'
    var styleElm = this.appendStyle(styleText)
    if (!(mboxGoesAround in this.styleElements)){
      this.styleElements[mboxGoesAround] = styleElm
    }

    if (this.initialized){
      this.$addMBoxStep2(null, null, settings)
    }else if (this.initializing){
      this.queueCommand({
        command: 'addMBoxStep2'
        , "arguments": [settings]
      }, elm, evt)
    }
  },
  $addMBoxStep2: function(elm, evt, settings){
    var mboxID = this.generateID()
    var self = this
    SL.addEventHandler(window, 'load', SL.bind(function(){
      SL.cssQuery(settings.mboxGoesAround, function(elms){
        var elem = elms[0]
        if (!elem) return
        var newDiv = document.createElement("div")
        newDiv.id = mboxID
        elem.parentNode.replaceChild(newDiv, elem)
        newDiv.appendChild(elem)
        window.mboxDefine(mboxID, settings.mboxName)
        var args = [settings.mboxName]
        if (settings.arguments){
          args = args.concat(settings.arguments)
        }
        window.mboxUpdate.apply(null, args)
        self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings)
      });
    }, this))
    this.lastMboxID = mboxID // leave this here for easier testing
  },

  $addTargetPageParams: function(elm, evt, pageParams) {
    this.updateTargetPageParams(pageParams)
  },

  generateID: function(){
    var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_'
    return id
  },
  appendStyle: function(css){
    var head = document.getElementsByTagName('head')[0], 
        style = document.createElement('style');
        
    style.type = 'text/css';
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    
    head.appendChild(style);
    return style;
  },
  reappearWhenCallComesBack: function(elmGoesAround, mboxID, timeout, settings){
    var self = this

    function reappear(){
      var styleElm = self.styleElements[settings.mboxGoesAround]
      if (styleElm){
        styleElm.parentNode.removeChild(styleElm)
        ;delete self.styleElements[settings.mboxGoesAround]
      }
    }

    SL.cssQuery('script[src*="omtrdc.net"]', function(results){
      var script = results[0]
      if (script){
        SL.scriptOnLoad(script.src, script, function(){
          SL.notify('Test & Target: request complete', 1)
          reappear()
          clearTimeout(timeoutID)
        })
        var timeoutID = setTimeout(function(){
          SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1)
          reappear()
        }, timeout)
      }else{
        SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1)
        reappear()
      }
    })
  },

  updateTargetPageParams: function(obj) {
    var o = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[SL.replace(key)] = SL.replace(obj[key])
      }
    }
    SL.extend(
      this.targetPageParamsStore,
      o
    )
  },

  getTargetPageParams: function() {
    return this.targetPageParamsStore
  },

  setTargetPageParamsFunction: function() {
    window.targetPageParams = SL.bind(this.getTargetPageParams, this)
  },

  parseTargetPageParamsResult: function(data) {
    var result = data

    if(SL.isArray(data)) {
      data = data.join('&')
    }

    if (SL.isString(data)) {
      result = SL.parseQueryParams(data)
    }

    return result
  }
})
SL.availableTools.tnt = Tnt

// The Nielsen Tool
// ================
//
// This tool provides the means to make Nielsen tracking possible.
//
// The tool accepts the following settings:
//
// - `collectionServer` - The collection server to be used. The variable
//      specifies the nearest collection server.
// - `clientId` - The client identifier. A unique Nielsen supplied ID that
//      should be alphanumeric and lowercase. A dash (-) character is allowed.
// - `contentGroup` - The content group. A historical variable used for
//      grouping/aggregating content into channels. Currently the
//      default value is "0".
function NielsenTool(settings) {
  SL.BaseTool.call(this, settings);
  this.defineListeners();
  this.beaconMethod = 'plainBeacon';
  this.adapt = new NielsenTool.DataAdapters();
  this.dataProvider = new NielsenTool.DataProvider.Aggregate();
}

SL.inherit(NielsenTool, SL.BaseTool);
SL.extend(NielsenTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'Nielsen',

  // Private
  // ------------------------------------------------

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // This is needed in order to be able to properly hook the needed events.
  endPLPhase: function(pageLoadEvent) {
    switch (pageLoadEvent) {
      case 'pagetop':
        this.initialize();
        break;
      case 'pagebottom':
        if (this.enableTracking) {
          this.queueCommand({ command: 'sendFirstBeacon', "arguments": [] });
          this.flushQueueWhenReady();
        }
        break;
    }
  },

  defineListeners: function() {
    this.onTabFocus = SL.bind(function() {
      this.notify('Tab visible, sending view beacon when ready', 1);
      this.tabEverVisible = true;
      this.flushQueueWhenReady();
    }, this);
    this.onPageLeave = SL.bind(function() {
      this.notify('isHuman? : '+ this.isHuman(), 1);
      if (this.isHuman()) {
        this.sendDurationBeacon(); // track page leave
      }
    }, this);
    this.onHumanDetectionChange = SL.bind(function(e) {
      if (this == e.target.target) this.human = e.target.isHuman;
    }, this);
  },

  initialize: function() {
    this.initializeTracking();
    this.initializeDataProviders();
    this.initializeNonHumanDetection();
    this.tabEverVisible = SL.visibility.isVisible();
    if (!this.tabEverVisible) {
      SL.bindEventOnce('tabfocus', this.onTabFocus);
    }
    else {
      this.notify('Tab visible, sending view beacon when ready', 1);
    }

    this.initialized = true;
  },

  // `initializeTracking()`
  // ------------------------------------------------
  //
  // The method starts the time tracking and hooks on the leave event.
  initializeTracking: function() {
    if (this.initialized) return;
    this.notify('Initializing tracking', 1);
    this.addRemovePageLeaveEvent(this.enableTracking);
    this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
    this.initialized = true;
  },

  // `initializeDataProviders()`
  // ------------------------------------------------
  //
  // The method initializes default data providers for:
  // - Analytics Report Suite ID, if Analytics account is linked
  // - Marketing Cloud Visitor ID, with fallback to auto-generated UUID
  initializeDataProviders: function() {
    var analytics = this.getAnalyticsTool(), rsid;

    this.dataProvider.register(
      new NielsenTool.DataProvider.VisitorID(
        SL.getVisitorId()
      )
    );
    if (analytics) {
      rsid = new NielsenTool.DataProvider.Generic('rsid', function() {
        return analytics.settings.account;
      });
      this.dataProvider.register(rsid);
    }
    else {
      this.notify('Missing integration with Analytics: rsid will not be sent.');
    }
  },

  initializeNonHumanDetection: function() {
    if (SL.nonhumandetection) {
      SL.nonhumandetection.init();
      this.setEnableNonHumanDetection(
        this.settings.enableNonHumanDetection == false ? false : true);
      if (this.settings.nonHumanDetectionDelay > 0) {
        this.setNonHumanDetectionDelay(
          parseInt(this.settings.nonHumanDetectionDelay) * 1000);
      }
    } else {
      this.notify('NHDM is not available.');
    }
  },

  // `getAnalyticsTool()`
  // ------------------------------------------------
  //
  // If integration is defined, this method returns the tool instance of
  // the linked Analytics account
  getAnalyticsTool: function() {
    if (this.settings.integratesWith) {
      return SL.tools[this.settings.integratesWith];
    }
  },

  flushQueueWhenReady: function() {
    if (!this.enableTracking || !this.tabEverVisible) return;
    SL.poll(SL.bind(function() {
      if (this.isReadyToTrack()) {
        this.flushQueue();
        return true;
      }
    }, this), 100, 20);
  },

  isReadyToTrack: function() {
    return this.tabEverVisible && this.dataProvider.isReady();
  },

  // `setVars(vars)`
  // ------------------------------------------------
  //
  // The method is used to set variables on the tool
  $setVars: function(elm, evt, vars) {
    for (var v in vars) {
      var val = vars[v];
      if (typeof val === 'function')
        val = val();
      this.settings[v] = val;
    }
    this.notify('Set variables done', 2);
    this.prepareContextData();
  },

  // `setEnableTracking()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  $setEnableTracking: function(elm, evt, bool) {
    this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
    if (this.enableTracking != bool) {
      this.addRemovePageLeaveEvent(bool);
      this.addRemoveHumanDetectionChangeEvent(bool);
      this.enableTracking = bool;
    }
  },

  // `sendFirstBeacon()`
  // ------------------------------------------------
  //
  // The method is called as soon as everything is in place.
  $sendFirstBeacon: function(elm, evt, settings) {
    this.sendViewBeacon();
  },

  // `setEnableNonHumanDetection()`
  // ------------------------------------------------
  //
  // The method enables/disables the human detection mechanism.
  setEnableNonHumanDetection: function(bool) {
    if (bool) {
      SL.nonhumandetection.register(this);
    } else {
      SL.nonhumandetection.unregister(this);
    }
  },

  // `setNonHumanDetectionDelay()`
  // ------------------------------------------------
  //
  // The method set the timeout for entering in non human state.
  setNonHumanDetectionDelay: function(delay) {
    SL.nonhumandetection.register(this, delay);
  },

  addRemovePageLeaveEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('leave', this.onPageLeave);
  },

  addRemoveHumanDetectionChangeEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('humandetection.change', this.onHumanDetectionChange);
  },

  // `sendViewBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  sendViewBeacon: function() {
    this.notify('Tracked page view.', 1);
    this.sendBeaconWith();
  },

  // `sendDurationBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the duration tracking call. This adds the time
  // spent on the page to the call and is triggered when the user leaves
  // the current web page.
  sendDurationBeacon: function() {
    if (
      !SL.timetracking ||
      typeof SL.timetracking.timeOnPage != 'function' ||
      SL.timetracking.timeOnPage() == null
    ) {
      this.notify('Could not track close due missing time on page', 5);
      return;
    }
    this.notify('Tracked close', 1);
    this.sendBeaconWith({
      timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
      duration: 'D',
      timer: 'timer'
    });
    // a bit of delay to let the network thread finish sending data
    var i,s='';for(i=0;i<this.magicConst;i++){s+='0'};
  },

  // `sendBeaconWith(obj)`
  // ------------------------------------------------
  //
  // The method builds the tracking call based on provided settings and
  // parameters.
  sendBeaconWith: function(params) {
    if (this.enableTracking) {
      this[this.beaconMethod].call(this, this.prepareUrl(params));
    }
  },
  plainBeacon: function(url) {
    var img = new Image();
    img.src = url;
    img.width = 1;
    img.height = 1;
    img.alt = '';
  },
  navigatorSendBeacon: function(url) {
    navigator.sendBeacon(url);
  },
  prepareUrl: function(params) {
    var obj = this.settings;
    SL.extend(obj, this.dataProvider.provide());
    SL.extend(obj, params);
    return this.preparePrefix(this.settings.collectionServer) +
      this.adapt.convertToURI(
        this.adapt.toNielsen(
          this.substituteVariables(obj)));
  },
  preparePrefix: function(server) {
    return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
  },
  substituteVariables: function(hash){
    var obj = {};
    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }
    return obj;
  },
  prepareContextData: function() {
    if (!this.getAnalyticsTool()) {
      this.notify('Adobe Analytics missing.');
      return;
    }
    var obj = this.settings;
    obj.sdkVersion =_satellite.publishDate;
    this.getAnalyticsTool().$setVars(null, null, {
      contextData: this.adapt.toAnalytics(
        this.substituteVariables(obj))
    });
  },
  isHuman: function() {
    return this.human;
  },
  onTabFocus: function() {},
  onPageLeave: function() {},
  onHumanDetectionChange: function() {},
  notify: function(msg, lvl) {
    SL.notify(this.logPrefix + msg, lvl);
  },
  beaconMethod: 'plainBeacon',
  adapt: null,
  enableTracking: false,
  logPrefix: "Nielsen: ",
  tabEverVisible: false,
  human: true,
  magicConst: 0x1e8480
});

// `NielsenTool.DataProvider`
// ==========================
//
// The following components handle the task of providing extra information
// for the Nielsen beacon, with support for asynchronous data
//
NielsenTool.DataProvider = {};
NielsenTool.DataProvider.Generic = function(key, valueFn) {
  this.key = key;
  this.valueFn = valueFn;
};

SL.extend(NielsenTool.DataProvider.Generic.prototype, {
  isReady: function() {
    return true;
  },

  getValue: function() {
    return this.valueFn();
  },

  provide: function() {
    if (!this.isReady()) {
      NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5)
    }
    var data = {};
    data[this.key] = this.getValue();
    return data;
  }
});

// `NielsenTool.DataProvider.VisitorID`
// ====================================
//
// Gets and optionally waits for Marketing Cloud ID to be loaded.
// If no visitor instance is provided, then it falls-back to generated UUID.
//
NielsenTool.DataProvider.VisitorID = function(visitorInstance, key, fallbackProvider) {
  this.key = key || 'uuid';
  this.visitorInstance = visitorInstance;
  if (this.visitorInstance) {
    this.visitorId = visitorInstance.getMarketingCloudVisitorID([this, this._visitorIdCallback]);
  }
  this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
};

SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
  isReady: function() {
    if (this.visitorInstance === null) {
      return true;
    }
    return !!this.visitorId;
  },

  getValue: function() {
    return this.visitorId || this.fallbackProvider.get();
  },

  _visitorIdCallback: function(id) {
    this.visitorId = id;
  }
});

// `NielsenTool.DataProvider.Aggregate`
// ====================================
//
// Aggregates data from multiple providers, being aware of their ready-state.
//
NielsenTool.DataProvider.Aggregate = function() {
  this.providers = [];
  for (var i=0; i<arguments.length; i++) {
    this.register(arguments[i]);
  }
};

SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
  register: function(provider) {
    this.providers.push(provider);
  },

  isReady: function() {
    return SL.every(this.providers, function(provider) {
      return provider.isReady();
    });
  },

  provide: function() {
    var data = {};
    SL.each(this.providers, function(provider) {
      SL.extend(data, provider.provide());
    });
    return data;
  }
});

// `UUID`
// ===============
//
// The follwing generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
// uinique ID and stores it in a cookie.

NielsenTool.UUID = function() {};

SL.extend(NielsenTool.UUID.prototype, {
  // `generate()`
  // ------------------------------------------------
  //
  // Method that generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
  // compliant unique ID.
  //
  // This is needed in for Nielsen tracking w/o Analytics integration.
  generate: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  get: function() {
    var cookieUUID = SL.readCookie(this.key('uuid'));
    if (cookieUUID) return cookieUUID;
    cookieUUID = this.generate();
    SL.setCookie(this.key('uuid'), cookieUUID);
    return cookieUUID;
  },
  key: function(name) {
    return '_dtm_nielsen_' + name;
  }
});

// `Data Adapters`
// ===============
//
// The follwing adapters are used to adapt the settings to the proper format
// for both Nielsen tracking call and AA tracking calls

NielsenTool.DataAdapters = function() {};

SL.extend(NielsenTool.DataAdapters.prototype, {
  toNielsen: function(settings) {
    var cdate = new Date().getTime(),
        nielsenPrefixes = {
          c6: 'vc,',
          c13: 'asid,',
          c15: 'apn,',
          c27: 'cln,',
          c32: 'segA,',
          c33: 'segB,',
          c34: 'segC,',
          c35: 'adrsid,',
          c29: 'plid,',
          c30: 'bldv,',
          c40: 'adbid,'
        },
        nielsenObj = {
          ci: settings.clientId,
          c6: settings.vcid,
          c13: settings.appId,
          c15: settings.appName,
          prv: 1,
          forward: 0,
          ad: 0,
          cr: settings.duration || 'V', // [V|D], default V
          rt: 'text',
          st: 'dcr',
          prd: 'dcr',
          r: cdate,
          at: settings.timer || 'view', // [view|timer], default view
          c16: settings.sdkVersion,
          c27: settings.timeOnPage || 0,
          c40: settings.uuid,
          c35: settings.rsid,
          ti: cdate,
          sup: 0,
          c32: settings.segmentA,
          c33: settings.segmentB,
          c34: settings.segmentC,
          asn: settings.assetName,
          c29: settings.playerID,
          c30: settings.buildVersion
        };
    for (key in nielsenObj) {
      if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
        if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
          var val = encodeURIComponent(nielsenObj[key]);
          if (nielsenPrefixes.hasOwnProperty(key) && val) {
            val = nielsenPrefixes[key] + val;
          }
          nielsenObj[key] = val;
        }
      }
    }
    return this.filterObject(nielsenObj);
  },
  toAnalytics: function(settings) {
    return this.filterObject({
      'a.nielsen.clientid': settings.clientId,
      'a.nielsen.vcid': settings.vcid,
      'a.nielsen.appid': settings.appId,
      'a.nielsen.appname': settings.appName,
      'a.nielsen.accmethod': "0",
      'a.nielsen.ctype': "text",
      'a.nielsen.sega': settings.segmentA,
      'a.nielsen.segb': settings.segmentB,
      'a.nielsen.segc': settings.segmentC,
      'a.nielsen.asset': settings.assetName
    });
  },
  convertToURI: function(obj) {
    if (SL.isObject(obj) === false) return '';
    var uri = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
    }
    return uri.join('&')
  },
  filterObject: function(obj) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k) &&
        (obj[k] == null || obj[k] === undefined)) {
        delete obj[k];
      }
    }
    return obj;
  }
});

SL.availableTools.nielsen = NielsenTool;

// Adobe Analytics Tool
// ================
//
// This tool interacts with the [AppMeasurement library](http://microsite.omniture.com/t2/help/en_US/sc/appmeasurement/release/c_release_notes_mjs.html)
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (sc)
// - `initVars` - It's an array containing key/value pair of AppMeasurement's
//      properties that are used in tracking and for settings. An example of
//      such pair would be: `{ eVar6: "6", server: "tracking.server"}`. For a
//      list of all supported properties please consult the [AppMeasurement's
//      documentation](http://microsite.omniture.com/t2/help/en_US/sc/implement/sc_variables.html).
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `sCodeURL` - Custom URL of the AppMeasurement Javascript library URL
//      location.
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `account` - String containing the report suite ID to track to.
// - `skipSetAccount` - Boolean value that when true disables setting
//      of the `account` with the value provided in settings. Default value
//      is no being set.
// - `euCookie' - Please see the description on SL (core.js) code
// - `renameS` - String specifying the name of the global AppMeasurement
//      instance. If no provided `s` is implied.
// - `executeCustomPageCodeFirst` - Boolean flag that lets the custom
//      initialization code be executed before or after the `initVars` method
//      call. Default value is not set which means false.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call. A false value results in disabling the initial
//      page view tracking call.
//
// The SiteCatalystTool allows to set variables, add events, track link, etc.
// Example:
//
//      trigger: [
//          {
//              tool: "sc",
//              command: "trackLink"
//          }
//      ]
//
function SiteCatalystTool(settings){
  SL.BaseTool.call(this, settings)

  this.varBindings = {}
  this.events = []
  this.products = []
  this.customSetupFuns = []
}
SL.inherit(SiteCatalystTool, SL.BaseTool)
SL.extend(SiteCatalystTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'SC',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      this.initialize(pageLoadEvent)
    }
  },

  // Private
  // ------------------------------------------------

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first check to see if the default initialization is specifically
  // canceled.
  //
  // Then it sets an event listener on `pageLoadeEvent` to update the tracking
  // variables with the ones provided in `initVars` setting object.
  //
  // In case that the user chosen to provide the Javascript code for
  // AppMeasurement by himself instead of using the automatic management
  // then we wait for the library to load.
  //
  // Otherwise we load the AppMeasurement from the storage and then set the
  // setup variables on the tracker object.
  initialize: function(pageLoadEvent){
    if (this._cancelToolInit) return
    this.settings.initVars = this.substituteVariables(
      this.settings.initVars, { type: pageLoadEvent }
    )

    if (this.settings.initTool !== false){
      var url = this.settings.sCodeURL || SL.basePath() + 's_code.js'
      if (typeof url === 'object'){
        if (window.location.protocol === 'https:')
          url = url.https
        else
          url = url.http
      }
      if (!url.match(/^https?:/))
        url = SL.basePath() + url
      if (this.settings.initVars){
        this.$setVars(null, null, this.settings.initVars)
      }
      SL.loadScript(url, SL.bind(this.onSCodeLoaded, this))
      this.initializing = true
    }else{
      // Set to initializing because we are
      // waiting on the AppMeasurement/s_code library to be loaded by
      // the site and we'll detect the completion of the load
      // in a background task.
      this.initializing = true
      this.pollForSC()
    }
  },

  // `getS(s, options)`
  // ------------------------------------------------
  //
  // The method initializes the `s` object.
  //
  // A notificaiton is given and `null` is returned in case of not finding
  // the account/RSID.
  //
  // If Marketing Cloud Visitor ID Service is used that instance is linked
  // with the instatiated `s` object.
  getS: function(s, options){
    var hostname = options && options.hostname || window.location.hostname
    var varBindings = this.concatWithToolVarBindings(
      options && options.setVars || this.varBindings
    )
    var events = options && options.addEvent || this.events
    var acct = this.getAccount(hostname)
    var s_gi = window.s_gi
    if (!s_gi) return null
    if (!this.isValidSCInstance(s)) s = null
    if (!acct && !s) {
      SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1)
      return null
    }
    var s = s || s_gi(acct)

    var DTMversion = 'D' + SL.appVersion;
    if(typeof s.tagContainerMarker !== 'undefined') {
      s.tagContainerMarker = DTMversion
    } else {
      if (typeof s.version === 'string' &&
        s.version.substring(s.version.length - 5) !==
          ('-' + DTMversion)){
        s.version += '-' + DTMversion
      }
    }

    if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false) s.sa(this.settings.account)
    this.applyVarBindingsOnTracker(s, varBindings)
    if (events.length > 0)
      s.events = events.join(',')

    var visitorIdInstance = SL.getVisitorId()
    if (visitorIdInstance) {
      s.visitor = SL.getVisitorId()
    }

    return s
  },

  // `onSCodeLoaded()`
  // ------------------------------------------------
  //
  // The method triggers load event on Analytics tool so all subsequent and
  // listening methods would be properly triggered.
  //
  // Before cleaning up the queue the tracking beacon call is made.
  onSCodeLoaded: function(loaded_manually){
    this.initialized = true
    this.initializing = false

    var msg = [
      'Adobe Analytics: loaded',
      loaded_manually ? ' (manual)' : '',
      '.'
    ]
    SL.notify(msg.join(''), 1)

    SL.fireEvent(this.id + '.load', this.getS())

    if (!loaded_manually) {
      this.flushQueueExceptTrackLink()
      this.sendBeacon()
    }

    this.flushQueue()
  },

  // `getAccount(hostname)`
  // ------------------------------------------------
  //
  // The returns the `s_account` for a specified `hostname`
  //
  // TODO: need to be refactored because `accountByHost` is no longer used.
  getAccount: function(hostname){
    if (window.s_account){
      return window.s_account
    }
    if (hostname && this.settings.accountByHost){
      return this.settings.accountByHost[hostname] || this.settings.account
    }else{
      return this.settings.account
    }
  },

  // `getTrackingServer()`
  // ------------------------------------------------
  //
  // The method tries to retrieve the tracking server from the `s` object
  // otherwise falls back on generating one based on the `account`.
  //
  // If neither `account` or `trackingServer` are availalble, `null` is
  // returned.
  //
  // TODO: need to be refactored to remove the tracking server generate method
  // as Analytics now offers a central point to shoot to.
  getTrackingServer: function(){
    var tool = this
    var s = tool.getS()
    if (s) {
      if (s.ssl && s.trackingServerSecure) {
        return s.trackingServerSecure
      }
      else if (s.trackingServer) {
        return s.trackingServer
      }
    }
    var account = tool.getAccount(window.location.hostname)
    if (!account) return null
    // Based on code in app measurement.
    var w
    var c = ''
    var d = s && s.dc
    var e
    var f
    w = account
    e = w.indexOf(",")
    e >= 0 && (w = w.gb(0, e))
    w = w.replace(/[^A-Za-z0-9]/g, "")
    c || (c = "2o7.net")
    d = d ? ("" + d).toLowerCase() : "d1"
    c == "2o7.net" && (d == "d1" ? d = "112" : d == "d2" && (d = "122"), f = "")
    e = w + "." + d + "." + f + c
    return e
  },

  // `sendBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the tracking call.
  //
  // If custom initialization is used the beacon is supressed. Also, if custom
  // code is provided and specifically stated that it should be executed first
  // (`executeCustomPageCodeFirst`) the tracker get updated with the result of
  // the code.
  sendBeacon: function(){
    var s = this.getS(window[this.settings.renameS || 's'])
    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    if (this.settings.customInit){
      if (this.settings.customInit(s) === false){
        SL.notify("Adobe Analytics: custom init suppressed beacon", 1)
        return
      }
    }

    if (this.settings.executeCustomPageCodeFirst) {
      this.applyVarBindingsOnTracker(s, this.varBindings)
    }
    this.executeCustomSetupFuns(s)
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  pollForSC: function(){
    SL.poll(SL.bind(function(){
      if (typeof window.s_gi === 'function'){
        this.onSCodeLoaded(true)
        return true
      }
    }, this))
  },
  flushQueueExceptTrackLink: function(){
    // Because we always s.tl() after the first s.t()
    // that way the variables set by s.tl() will not
    // contaminate the s.t() call.
    if (!this.pending) return
    var left = []
    for (var i = 0; i < this.pending.length; i++){
      var args = this.pending[i]
      var trig = args[0]
      if (trig.command === 'trackLink'){
        left.push(args)
      }else{
        this.triggerCommand.apply(this, args)
      }
    }
    this.pending = left
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  substituteVariables: function(obj, evt){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        ret[key] = SL.replace(value, location, evt)
      }
    }
    return ret
  },
  $setVars: function(elm, evt, vars){
    for (var v in vars){
      if (vars.hasOwnProperty(v)) {
        var val = vars[v]
        if (typeof val === 'function')
          val = val()
        this.varBindings[v] = val
      }
    }
    SL.notify('Adobe Analytics: set variables.', 2)
  },
  $customSetup: function(elm, evt, setup){
    this.customSetupFuns.push(function(s){
      setup.call(elm, evt, s)
    })
  },
  isValidSCInstance: function(s) {
    return !!s && typeof s.t === 'function' && typeof s.tl === 'function'
  },
  concatWithToolVarBindings: function(varBindings){
    var settingsInitVars = this.settings.initVars || {}

    SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
      if (settingsInitVars[item] && !varBindings[item]) {
        varBindings[item] = settingsInitVars[item]
      }
    });

    return varBindings
  },
  applyVarBindingsOnTracker: function (s, varBindings) {
    for (var v in varBindings){
      if (varBindings.hasOwnProperty(v)) {
        s[v] = varBindings[v]
      }
    }
  },
  clearVarBindings: function(){
    this.varBindings = {}
  },
  clearCustomSetup: function(){
    this.customSetupFuns = []
  },
  executeCustomSetupFuns: function(s){
    SL.each(this.customSetupFuns, function(fun){
      fun.call(window, s)
    })
  },
  $trackLink: function(elm, evt, params){
    params = params || {}
    var type = params.type
    var linkName = params.linkName
    if (!linkName &&
      elm &&
      elm.nodeName &&
      elm.nodeName.toLowerCase() === 'a'){
      linkName = elm.innerHTML
    }
    if (!linkName){
      linkName = 'link clicked'
    }
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }

    var orgLinkTrackVars = s.linkTrackVars
    var orgLinkTrackEvents = s.linkTrackEvents
    var definedVarNames = this.definedVarNames(vars)

    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }

    if (events.length > 0)
      definedVarNames.push('events')
    if (s.products)
      definedVarNames.push('products')

    // add back the vars from s
    definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames)

    // add back events from s
    events = this.mergeTrackLinkVars(s.linkTrackEvents, events)

    s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames)

    var eventsKeys = SL.map(events, function(item) {
      return item.split(':')[0]
    });
    s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys)

    s.tl(true, type || 'o', linkName)
    SL.notify([
      'Adobe Analytics: tracked link ',
      'using: linkTrackVars=',
      SL.stringify(s.linkTrackVars),
      '; linkTrackEvents=',
      SL.stringify(s.linkTrackEvents)
    ].join(''), 1)

    s.linkTrackVars = orgLinkTrackVars
    s.linkTrackEvents = orgLinkTrackEvents
  },
  mergeTrackLinkVars: function(newVarsStr, varsArr){
    if (newVarsStr) {
      varsArr = newVarsStr.split(',').concat(varsArr)
    }

    return varsArr
  },
  getCustomLinkVarsList: function (keysArr) {
    var noneIndex = SL.indexOf(keysArr, 'None');
    if (noneIndex > -1 && keysArr.length > 1) {
      keysArr.splice(noneIndex, 1)
    }

    return keysArr.join(',');
  },
  definedVarNames: function(vars){
    vars = vars || this.varBindings
    var ret = []
    for (var varname in vars){
      if (vars.hasOwnProperty(varname) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(varname))
        ret.push(varname)
    }
    return ret
  },
  $trackPageView: function(elm, evt, params){
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    s.linkTrackVars = ''
    s.linkTrackEvents = ''
    this.executeCustomSetupFuns(s)
    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.transaction = window[varname]
      , s = this.varBindings
      , mapping = this.settings.fieldVarMapping

    SL.each(trans.items, function(item){
      this.products.push(item)
    }, this)

    s.products = SL.map(this.products, function(item){
      var vars = []
      if (mapping && mapping.item){
        for (var field in mapping.item){
          if (mapping.item.hasOwnProperty(field)) {
            var varname = mapping.item[field]
            vars.push(varname + '=' + item[field])
            if (varname.substring(0, 5) === 'event')
              this.events.push(varname)
          }
        }
      }
      var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity]
      if (vars.length > 0)
        arr.push(vars.join('|'))
      return arr.join(';')
    }, this).join(',')

    if (mapping && mapping.transaction){
      // Add top-level events/eVars to products string.
      var topLevelVars = []
      for (var field in mapping.transaction){
        if (mapping.transaction.hasOwnProperty(field)) { 
          var varname = mapping.transaction[field]
          topLevelVars.push(varname + '=' + trans[field])
          if (varname.substring(0, 5) === 'event')
            this.events.push(varname)
        }
      }
      if (s.products.length > 0)
        s.products += ','
      s.products += ';;;;' + topLevelVars.join('|')
    }


  },
  $addEvent: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.events.push(arguments[i])
    }
  },
  $addProduct: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.products.push(arguments[i])
    }
  }

})
SL.availableTools.sc = SiteCatalystTool

// The Default Tool
// ================
//
// The default tool comes with several handy utilities.

function DefaultTool(){
  SL.BaseTool.call(this)

  this.asyncScriptCallbackQueue = []
  this.argsForBlockingScripts = []
}
SL.inherit(DefaultTool, SL.BaseTool)
SL.extend(DefaultTool.prototype, {
  name: 'Default',

  // `loadIframe(src, variables)`
  // ----------------------------
  //
  // Dynamically create an iframe to load a URL.
  //
  // - src - the URL to load
  // - variables - an object literal of which the key/value pairs will be used
  //      to create the query string to use in the src URL
  $loadIframe: function(elm, evt, options){
    var pages = options.pages
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(pages, function(page){
        this.loadIframe(elm, evt, page)
      }, this)
    }, this)
    if (!loadOn) doit()
    if (loadOn === 'domready') SL.domReady(doit)
    if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadIframe: function(elm, evt, page){
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    var host = SL.data.host
      , data = page.data
      , src = this.scriptURL(page.src)
      , search = SL.searchVariables(data, elm, evt)
    if (host)
      src = SL.basePath() + src
    src += search
    iframe.src = src
    var body = document.getElementsByTagName('body')[0]
    if (body)
      body.appendChild(iframe)
    else
      SL.domReady(function(){
        document.getElementsByTagName('body')[0].appendChild(iframe)
      })
  },

  scriptURL: function(url){
    var scriptDir = SL.settings.scriptDir || ''
    return scriptDir + url
  },

  // `loadScript(options)
  // ------------------------------
  //
  // Load any number of Javascript files using dynamically generated script tags.
  // If you provide multiple file URLs, they will be loaded sequentially.
  $loadScript: function(elm, evt, options){
    var scripts = options.scripts
      , sequential = options.sequential
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      if (sequential){
        this.loadScripts(elm, evt, scripts)
      }else{
        SL.each(scripts, function(script){
          this.loadScripts(elm, evt, [script])
        }, this)
      }
    }, this)

    if (!loadOn) doit()
    else if (loadOn === 'domready') SL.domReady(doit)
    else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadScripts: function(elm, evt, scripts) {
    try{
    var scripts = scripts.slice(0)
      , q = this.asyncScriptCallbackQueue
      , lastScript
      , target = evt.target || evt.srcElement
      , self = this
    }catch(e){
      console.error('scripts is', SL.stringify(scripts))
    }
    function loadNext(){
      if (q.length > 0 && lastScript){
        var callback = q.shift()
        callback.call(elm, evt, target)
      }
      var script = scripts.shift()
      if (script){
        var host = SL.data.host
          , src = self.scriptURL(script.src)
        if (host)
          src = SL.basePath() + src
        lastScript = script
        SL.loadScript(src, loadNext)
      }
    }
    loadNext()
  },

  $loadBlockingScript: function(elm, evt, options){
    var scripts = options.scripts
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(scripts, function(script){
        this.loadBlockingScript(elm, evt, script)
      }, this)
    }, this)
    //if (!loadOn || loadOn === evt.type) doit()
    doit()
  },

  loadBlockingScript: function(elm, evt, script){
    /*jshint evil:true */
    var src = this.scriptURL(script.src)
      , host = SL.data.host
      , target = evt.target || evt.srcElement
    if (host)
      src = SL.basePath() + src
    this.argsForBlockingScripts.push([elm, evt, target])
    SL.loadScriptSync(src)
  },

  pushAsyncScript: function(callback){
    this.asyncScriptCallbackQueue.push(callback)
  },

  pushBlockingScript: function(callback){
    var args = this.argsForBlockingScripts.shift()
    var element = args[0]
    callback.apply(element, args.slice(1))
  },

  // `writeHTML(html)`
  // -----------------
  //
  // Write an HTML fragment onto the page using `document.write()`.
  //
  // - `html` - the HTML fragment
  $writeHTML: SL.escapeHtmlParams(function(elm, evt){
    /*jshint evil:true */
    if (SL.domReadyFired || !document.write){
      SL.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1)
      return
    }
    if (evt.type !== 'pagebottom' && evt.type !== 'pagetop'){
      SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1)
      return
    }
    for (var i = 2, len = arguments.length; i < len; i++){
      var html = arguments[i].html
      html = SL.replace(html, elm, evt)
      document.write(html)
    }
  }),

  linkNeedsDelayActivate: function(a, win){
    win = win || window
    var tagName = a.tagName
      , target = a.getAttribute('target')
      , location = a.getAttribute('href')
    if (tagName && tagName.toLowerCase() !== 'a')
      return false
    if (!location)
      return false
    else if (!target)
      return true
    else if (target === '_blank')
      return false
    else if (target === '_top')
      return win.top === win
    else if (target === '_parent')
      return false
    else if (target === '_self')
      return true
    else if (win.name)
      return target === win.name
    else
      return true
  },

  // `delayActivateLink()`
  // ---------------------
  //
  // Delay the activation of an anchor link by first using `evt.preventDefault()` on
  // the click event, and then setting the window location to the destination after
  // a small delay. The default delay is 100 milliseconds, which can be configured in
  // `_satellite.settings.linkDelay`
  $delayActivateLink: function(elm, evt){
    if (!this.linkNeedsDelayActivate(elm)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      SL.setLocation(elm.href)
    }, linkDelay)
  },

  isQueueable: function(trig){
    return trig.command !== 'writeHTML'
  }
})
SL.availableTools['default'] = DefaultTool

// Basic Tool
// ------------
//
// This is a generic tool that allows integrating with
// various simple tools.
//

function BasicTool(settings){
  SL.BaseTool.call(this, settings)

  this.name = settings.name || 'Basic'
}

SL.inherit(BasicTool, SL.BaseTool)

SL.extend(BasicTool.prototype, {
  initialize: function(){
    var settings = this.settings
    if (this.settings.initTool !== false){
      var url = settings.url
      if (typeof url === 'string'){
        url = SL.basePath() + url
      }else{
        url = SL.isHttps() ? url.https : url.http
      }
      SL.loadScript(url, SL.bind(this.onLoad, this))
      this.initializing = true
    }else{
      this.initialized = true
    }
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  onLoad: function(){
    this.initialized = true
    this.initializing = false
    if (this.settings.initialBeacon){
      this.settings.initialBeacon()
    }
    this.flushQueue()
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1)
      this.initialize()
    }
  },
  $fire: function(elm, evt, fun){
    if (this.initializing){
      this.queueCommand({
        command: 'fire',
        arguments: [fun]
      }, elm, evt)
      return
    }
    fun.call(this.settings, elm, evt)
  }
})

SL.availableTools.am = BasicTool
SL.availableTools.adlens = BasicTool
SL.availableTools.aem = BasicTool
SL.availableTools.__basic = BasicTool

// The Marketing Cloud Visitor ID Service Tool
// ================
//
// This tool interacts with the [Visitor ID library](https://git.corp.adobe.com/mc-visitor/VisitorAPI/tree/master/js/src).
// The tool initilizes the Visitor ID library as soon as the tool itself is
// created, by calling the `initialize` method. Find out more info about the
// initializing sequence by clicking [here](#-initialize-).
//
// The tool accepts the following settings:
//
// - `mcOrgId` - The Adobe Marketing Cloud Organization ID (Required)
// - `initVars` - Map containing properties that can be set on the Visitor ID
//      instance. The following keys can be set here:
//      * `trackingServer`,
//      * `trackingServerSecure`,
//      * `marketingCloudServer`
//      * `marketingCloudServerSecure`
// - `customerIDs` - Map containing Customer IDs values that will be set on the
//      instance
// - `autoRequest` - Flag that will read the Marketing Cloud Visitor ID by
//      calling `getMarketingCloudVisitorID` method
function VisitorIdTool(settings) {
  SL.BaseTool.call(this, settings);
  this.name = settings.name || 'VisitorID';

  this.initialize();
}

SL.extend(VisitorIdTool.prototype, {
  // Public
  // ------------------------------------------------
  //
  // `getInstance()`
  // ------------------------------------------------
  //
  // Returns the Visitor ID instance that was created when the tool was
  // initialized.
  getInstance: function() {
    return this.instance;
  },

  // Private
  // ------------------------------------------------
  //
  // `initialize()`
  // ------------------------------------------------
  //
  // The method creates a Visitor ID instance if all the data provided is valid.
  // The instance will contain all the keys defined in the `initVar` setting.
  // Any `dataElement` present as a value in the initVars map will be replaced
  // with the correct value.
  //
  // It applies then a the map of Customer IDs by calling the `setCustomerIDs`
  // method from the newly created instance. Any `dataElement` present as a
  // value in the Customer IDs map will be replaced with the correct value.
  //
  // After that, the `getMarketingCloudVisitorID` method from the newly created
  // instance is called, provided that the `autoRequest` settings is set to true.
  initialize: function() {
    var settings = this.settings, visitor;

    SL.notify('Visitor ID: Initializing tool', 1);

    visitor = this.createInstance(
      settings.mcOrgId,
      settings.initVars
    );
    if (visitor === null) {
      return;
    }

    if (settings.customerIDs) {
      this.applyCustomerIDs(visitor, settings.customerIDs);
    }

    if (settings.autoRequest) {
      visitor.getMarketingCloudVisitorID();
    }

    this.instance = visitor;
  },

  createInstance: function(mcOrgId, initVars) {
    if(!SL.isString(mcOrgId)) {
      SL.notify(
        'Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
      return null;
    }

    mcOrgId = SL.replace(mcOrgId);
    SL.notify(
      'Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);

    initVars = this.parseValues(initVars);
    var instance = Visitor.getInstance(mcOrgId, initVars);
    SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);

    return instance;
  },

  applyCustomerIDs: function(instance, ids) {
    var parsedIds = this.parseIds(ids);
    instance.setCustomerIDs(parsedIds);
    SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
  },

  parseValues: function(hash) {
    if (SL.isObject(hash) === false) {
      return {};
    }

    var obj = {};

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }

    return obj;
  },

  parseIds: function(hash) {
    var parsedIds = {};
    if (SL.isObject(hash) === false) {
      return {};
    }

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        var id = SL.replace(hash[v]['id']);
        // All IDs should be data elements. If no replacement has taken place,
        // then we can conclude that the data element doesn't exists.
        // Also we should ignore existing data elements that are empty.
        if (id !== hash[v]['id'] && id) {
          parsedIds[v] = {};
          parsedIds[v]['id'] = id;
          parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
        }
      }
    }

    return parsedIds;
  }
});

SL.availableTools.visitor_id = VisitorIdTool;

var GAUtils = {
  allowLinker: function() {
    return SL.hasMultipleDomains();
  },
  cookieDomain: function() {
    var domainList = SL.settings.domainList;
    var domainName = SL.find(domainList, function(domain) {
      var hostname = window.location.hostname;
      return SL.equalsIgnoreCase(
        hostname.slice(hostname.length - domain.length),
        domain);
    });
    var cookieDomain = domainName ? ('.' + domainName) : 'auto';

    return cookieDomain;
  }
};

// The Google Analytics Universal Tool
// ================
//
// This tool interacts with the [GAU library](https://developers.google.com/analytics/devguides/collection/analyticsjs/).
//
// From a high end perspective the following steps will happen. A `ga` dummy
// object will be initialized. Until the `analytics.js` file will be loaded in
// the browser, any triggered command will be queued in the `ga` object. Once
// the `analytics.js` will finish to load, all the queued commands will be
// executed.
//
// The tool is initialized during one of the following page load phases:
// top, bottom. Find out more info about the initializing sequence by clicking
// [here](#-endplphase-).
//
// Data elements are replaced when the tracker is created and on the commands
// from `initCommands` array. For the other situations, the data elements are
// replaced in the `triggerCommand` method from BaseTool.
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (ga_universal)
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `url` - Custom URL of the `analytics.js` URL location. If none is provided
//      the Google default URL will be used.
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `trackerSettings` - Object containing properties that will be added on the
//      command that will create the GAU tracker. For a list of all supported
//      properties please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create)
// - `initCommands` - It's an array containing commands. A command example:
//      `["set", "anonymizeIp", true]`. For a list of all supported commands
//      please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference#tracker)
//      The commands defined here will be executed after the tracker is created.
// - `allowLinker` - Flag that will make the GAU library load the cross domain
//      linking plugin.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call.

function GAUniversalTool(settings) {
  SL.BaseTool.call(this, settings)
}

SL.inherit(GAUniversalTool, SL.BaseTool);

SL.extend(GAUniversalTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'GAUniversal',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent) {
    var settings = this.settings;
    var loadOn = settings.loadOn;

    if (pageLoadEvent === loadOn) {
      SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
      this.initialize();
      this.flushQueue();
      this.trackInitialPageView();
    }
  },

  // `getTrackerName()`
  // ------------------------------------------------
  //
  // Returns the name of the GA tracker initialized by this tool.
  getTrackerName: function () {
    return this.settings.trackerSettings.name || '';
  },

  // Private
  // ------------------------------------------------
  isPageCodeLoadSuppressed: function() {
    return this.settings.initTool === false || this._cancelToolInit === true;
  },

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first creates the GA scaffolding objects (the `ga` object and
  // the `GoogleAnalyticsObject` object.
  //
  // Then it loads the `analytics.js` library and append the command that will
  // create the GAU tracker object to the `ga` object.
  //
  // Next, the commands from the `initCommands` array will be appended to
  // the `ga` object. Finally the JS code defined in the `customInit` setting
  // variable will be called.
  initialize: function() {
    if (this.isPageCodeLoadSuppressed()) {
      this.initialized = true;
      SL.notify('GAU: Page code not loaded (suppressed).', 1);
      return;
    }

    var gaName = 'ga';

    window[gaName] = window[gaName] || this.createGAObject();
    window.GoogleAnalyticsObject = gaName;

    SL.notify('GAU: Page code loaded.', 1);
    SL.loadScriptOnce(this.getToolUrl());

    var settings = this.settings;

    if (GAUtils.allowLinker() && settings.allowLinker !== false) {
      this.createAccountForLinker();
    } else {
      this.createAccount();
    }

    this.executeInitCommands();

    if (settings.customInit){
      var customInit = settings.customInit
      var result = customInit(window[gaName], this.getTrackerName())
      if (result === false){
        this.suppressInitialPageView = true;
      }
    }

    this.initialized = true;
  },

  createGAObject: function() {
    var ga = function() {
      ga.q.push(arguments);
    };

    ga.q = [];
    ga.l = 1 * new Date();
    return ga;
  },

  createAccount: function() {
    this.create();
  },

  createAccountForLinker: function() {
    var options = {};
    if (GAUtils.allowLinker())
      options.allowLinker = true;

    this.create(options);
    this.call('require', 'linker');
    this.call('linker:autoLink', this.autoLinkDomains(), false, true);
  },

  create: function(extra){
    var options = this.settings.trackerSettings;
    options =
      SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
    options.trackingId =
      SL.replace(this.settings.trackerSettings.trackingId, location);

    if (!options.cookieDomain) {
      options.cookieDomain = GAUtils.cookieDomain();
    }

    SL.extend(options, extra || {});
    this.call('create', options);
  },

  autoLinkDomains: function() {
    var ourDomain = location.hostname;
    return SL.filter(SL.settings.domainList, function(domain) {
      return domain !== ourDomain;
    });
  },

  executeInitCommands: function() {
    var settings = this.settings;

    if (settings.initCommands) {
      SL.each(settings.initCommands, function(command) {
        var args = command.splice(2, command.length - 2);
        command = command.concat(
          SL.preprocessArguments(args, location, null, this.forceLowerCase)
        );
        this.call.apply(this, command);
      }, this);
    }
  },

  trackInitialPageView: function(){
    if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
      return;
    }

    this.call('send', 'pageview');
  },

  call: function() {
    if (typeof ga !== 'function') {
      SL.notify('GA Universal function not found!', 4);
      return;
    }

    if (this.isCallSuppressed()) {
      return;
    }

    arguments[0] = this.cmd(arguments[0]);
    this.log(SL.toArray(arguments));
    ga.apply(window, arguments);
  },

  isCallSuppressed: function() {
    return this._cancelToolInit === true;
  },

  $missing$: function(command, elm, evt, args) {
    args = args || [];

    args = [command].concat(args);
    this.call.apply(this, args);
  },

  getToolUrl: function() {
    var settings = this.settings;
    var isHttps = SL.isHttps();

    if (settings.url) {
      return isHttps ? settings.url.https : settings.url.http;
    }

    return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
  },

  cmd: function(command) {
    var trackerCommands = ['send', 'set', 'get'];
    var trackerName = this.getTrackerName();

    if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
      return command;
    }

    return trackerName + '.' + command;
  },

  log: function(args) {
    var cmd = args[0];
    var tracker = this.getTrackerName() || 'default';

    var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
    if (args.length > 1) {
      var parameters = SL.stringify(args.slice(1));
      msg += ' with parameters ' + SL.stringify(args.slice(1));
    }
    msg += '.';
    SL.notify(msg, 1);
  }
});

SL.availableTools.ga_universal = GAUniversalTool;

// Google Analytics Tool
// ---------------------
//
// The GATool allows you to use any Google Analytics command.
// Example:
//
//      trigger: [
//          {
//              tool: "ga",
//              command: "trackEvent",
//              arguments: [
//                  "video",
//                  "video 10% complete"
//              ]
//          }
//      ]
//
// This trigger will call the `trackEvent` method, which is equivalent to
//
//     _gaq.push(['_trackEvent', 'video', 'video 10% complete'])
function GATool(settings){
  SL.BaseTool.call(this, settings)
}
SL.inherit(GATool, SL.BaseTool)
SL.extend(GATool.prototype, {
  name: 'GA',
  initialize: function(){
    var settings = this.settings
    var before = window._gaq
      , initCommands = settings.initCommands || []
      , customInit = settings.customInit

    if (!before){
      // And yes, I *do* mean to set a global variable
      // of `_gaq` here
      _gaq = []
    }

    if (!this.isSuppressed()){
      if (!before && !GATool.scriptLoaded){
        var https = SL.isHttps()
        var url =
          (https ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js'
        if (settings.url){
          url = https ? settings.url.https : settings.url.http
        }
        SL.loadScript(url)
        GATool.scriptLoaded = true
        SL.notify('GA: page code loaded.', 1)
      }
      var domain = settings.domain
        , trackerName = settings.trackerName
        , allowLinker = GAUtils.allowLinker()
        , account = SL.replace(settings.account, location)
        , domainList = SL.settings.domainList || []
      _gaq.push([this.cmd('setAccount'), account])
      if (allowLinker)
        _gaq.push([this.cmd('setAllowLinker'), allowLinker])
      _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()])
      SL.each(initCommands, function(cmd){
        var arr = [this.cmd(cmd[0])].concat(SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase))
        _gaq.push(arr)
      }, this)
      if (customInit)
        this.suppressInitialPageView = false === customInit(_gaq, trackerName)
      if (settings.pageName)
        this.$overrideInitialPageView(null, null, settings.pageName)
    }else{
      SL.notify('GA: page code not loaded(suppressed).', 1)
    }

    this.initialized = true
    SL.fireEvent(this.id + '.configure', _gaq, trackerName)

  },
  isSuppressed: function(){
    return this._cancelToolInit || this.settings.initTool === false
  },
  tracker: function(){
    return this.settings.trackerName
  },
  cmd: function(cmd){
    var tracker = this.tracker()
    return tracker ? tracker + '._' + cmd : '_' + cmd
  },
  $overrideInitialPageView: function(elm, evt, url){
    this.urlOverride = url
  },
  trackInitialPageView: function(){
    if (this.isSuppressed()) return
    if (this.suppressInitialPageView) return
    if (this.urlOverride){
      var args = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase)
      this.$missing$('trackPageview', null, null, args)
    }else{
      this.$missing$('trackPageview')
    }
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify('GA: Initializing at ' + pageLoadEvent, 1)
      this.initialize()
      this.flushQueue()
      this.trackInitialPageView()
    }
  },
  call: function(cmd, elm, evt, args){
    if (this._cancelToolInit) return
    var settings = this.settings
      , tracker = this.tracker()
      , fullCmd = this.cmd(cmd)
      , args = args ? [fullCmd].concat(args) : [fullCmd]
    _gaq.push(args)
    if (tracker)
      SL.notify("GA: sent command " + cmd + " to tracker " + tracker +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]" :
          '') + ".", 1)
    else
      SL.notify("GA: sent command " + cmd +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]":
          '') + ".", 1)
  },
  $missing$: function(cmd, elm, evt, args){
    this.call(cmd, elm, evt, args)
  },
  // individual command methods
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.customVars.transaction = window[varname]
    this.call('addTrans', elm, evt, [
      trans.orderID,
      trans.affiliation,
      trans.total,
      trans.tax,
      trans.shipping,
      trans.city,
      trans.state,
      trans.country
    ])
    SL.each(trans.items, function(item){
      this.call('addItem', elm, evt, [
        item.orderID,
        item.sku,
        item.product,
        item.category,
        item.unitPrice,
        item.quantity
      ])
    }, this)
    this.call('trackTrans', elm, evt)
  },
  delayLink: function(elm, evt){
    var ga = this
    if (!GAUtils.allowLinker()) return
    if (!elm.hostname.match(this.settings.linkerDomains)) return
    if (SL.isSubdomainOf(elm.hostname, location.hostname)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      ga.call('link', elm, evt, [elm.href])
    }, linkDelay)
  },
  popupLink: function(elm, evt){
    if (!window._gat) return
    SL.preventDefault(evt)
    var account = this.settings.account
    var tracker = window._gat._createTracker(account)
    var url = tracker._getLinkerUrl(elm.href)
    window.open(url)
  },
  $link: function(elm, evt){
    if (elm.getAttribute('target') === '_blank'){
      this.popupLink(elm, evt)
    }else{
      this.delayLink(elm, evt)
    }
  },
  $trackEvent: function(elm, evt){
    var args = Array.prototype.slice.call(arguments, 2)
    if (args.length >= 4 && args[3] != null){
      // acertain that the 4th element is a number, falling back to 1
      var value = parseInt(args[3], 10)
      if (SL.isNaN(value)){
        value = 1
      }
      args[3] = value
    }
    this.call('trackEvent', elm, evt, args)
  }
})
SL.availableTools.ga = GATool

_satellite.init({
  "tools": {
    "fe2c075924ce8c3736faae81fc6b6e32": {
      "engine": "sc",
      "loadOn": "pagebottom",
      "euCookie": false,
      "sCodeURL": "843e2f5b8ab495a5f828c0b9302ff13fbaff1d33/s-code-contents-e9e532e935cc587862e6557b3e3815b0795b8de2.js",
      "renameS": "s",
      "initVars": {
        "trackingServer": "audible.sc.omtrdc.net",
        "trackingServerSecure": "audible.sc.omtrdc.net",
        "trackInlineStats": true,
        "trackDownloadLinks": true,
        "linkDownloadFileTypes": "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
        "trackExternalLinks": false,
        "linkLeaveQueryString": false,
        "dynamicVariablePrefix": "D="
      },
      "skipSetAccount": true,
      "customInit": function(s){
// if the page's parent is not the entire window itself, we can safely assume
// that it is an iframe, and that we should not be firing any events for it.
if(parent !== window){
  	return false;
}

// Check if it is the UK, DE, FR or IT website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		return false;
	}
}
}
    },
    "b3b50eb5cb95a5af5be85a4c741a4cd7a6c1dc24": {
      "engine": "tnt",
      "mboxURL": "843e2f5b8ab495a5f828c0b9302ff13fbaff1d33/mbox-contents-b3b50eb5cb95a5af5be85a4c741a4cd7a6c1dc24.js",
      "loadSync": true,
      "pageParams": {
        "customerSegment": "%member: sub segment%"
      }
    },
    "befbbd9324a55464ef44d95cb1d368fbe8b7b4ee": {
      "engine": "visitor_id",
      "loadOn": "pagetop",
      "name": "VisitorID",
      "mcOrgId": "165958B4533AEE5B0A490D45@AdobeOrg",
      "autoRequest": true,
      "initVars": {
        "trackingServer": "audible.sc.omtrdc.net",
        "cookieDomain": "%cookieDomain%"
      },
      "customerIDs": {
        "AudibleCRMuser": {
          "id": "%member: ID%",
          "authState": "AUTHENTICATED"
        }
      }
    }
  },
  "pageLoadRules": [
    {"name":" TagUS - Mobile TYP Free Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74c01a64746d448d000330.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"AU Tracking","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d4db7a364746d092d000717.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
}],"event":"windowload"},
    {"name":"Checkout Step 1/Cart","trigger":[{"engine":"sc","command":"addEvent","arguments":["event88","scView"]}],"scope":{"URI":{"include":["/cart/view"]}},"event":"pagebottom"},
    {"name":"Checkout Step 2","trigger":[{"engine":"sc","command":"addEvent","arguments":["event89"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products="";//define the variable to prevent errors 
for (var i=0;i<digitalData.product.length;i++){
s.products=s.products+";"+digitalData.product[i].productInfo.productID+","
_satellite.notify(s.products,1)//for debugging purposes, to run for each loop 
};
}]}],"scope":{"URI":{"include":["/cart/confirm"]}},"event":"pagebottom"},
    {"name":"Checkout Step 3","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar18":"%cart: order ID%","eVar22":"%product: purchase type%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products="";//define the variable to prevent errors 

if (digitalData.product === undefined || digitalData.product == null || !Array.isArray(digitalData.product)) {
	s.products="EmptyDataLayerForProduct";
  _satellite.notify(s.products,1)//for debugging purposes, to run for each loop 
}
else {
  for (var i=0;i<digitalData.product.length;i++){
  var price=0.0;
    if(digitalData.product[i].productInfo.creditRevenue>0){
      price = digitalData.product[i].productInfo.creditRevenue;
    }
    else{
      price=digitalData.product[i].productInfo.price;
    }

  s.products=s.products+";"+digitalData.product[i].productInfo.productID+";"+digitalData.product[i].productInfo.units+";"+price+";"+"event79="+digitalData.product[i].productInfo.creditRevenue+"|"+"event80="+digitalData.product[i].productInfo.cashRevenue+"|"+"event14="+digitalData.product[i].productInfo.taxAmount+","
  _satellite.notify(s.products,1)//for debugging purposes, to run for each loop 
  };
}

//event83 (transaction level), order/purchase id, 
var discount = _satellite.getVar("purchase: discount amount")
var orderID = _satellite.getVar("cart: order ID")
if(orderID!="null"){
	s.purchaseID = orderID;
}
s.events=s.apl(s.events,'event79,event80,event14,event16,purchase,event83='+discount,',',1);

}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0516e264746d15340046ee.js"}]}]}],"scope":{"URI":{"include":["/typ"]}},"event":"pagebottom"},
    {"name":"PD-Video-Metadata-Tracking","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar2":"%realm%","eVar6":"%content : contentType%","eVar96":"%content: pageName%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//Rule: PD-Video-Metadata-Tracking
 
var trackingVideos = document.getElementsByClassName('dtm-video-tracking');
var s = _satellite.getToolsByType('sc')[0].getS();

for(var i = 0; i < trackingVideos.length; i++) {

    (function() {
        var curEvents = [];
        var curVideo = trackingVideos[i].querySelector('video');
        var curSource = curVideo.querySelector('source');
        var curVideoName = curSource.src.substring(curSource.src.lastIndexOf('/') + 1);

        var videoStarted, videoTwentyFive, videoFifty, videoSeventyFive, videoComplete;
        videoStarted = videoTwentyFive = videoFifty = videoSeventyFive = videoComplete = false;

        curVideo.ontimeupdate = function() {
            getPercentage();
        }

        // event50 Video Pause
        curVideo.onpause = function() {
            curEvents.push('event50');
            s.events = curEvents.join(',');
            s.eVar26 = curVideoName;
            s.tl();
        }

        // event30 Video Play
        curVideo.onplay = function() {
            if (!videoStarted) {
                videoStarted = true;
                curEvents.push('event30');
                s.events = curEvents.join(',');
                s.eVar26 = curVideoName;
                s.tl();
            }
        }

        function getPercentage() {
            var percentageCompleted = (curVideo.currentTime / curVideo.duration) * 100;

            if ((!videoComplete) && (percentageCompleted === 100)) { // event34 Video Complete
                videoComplete = true;
                videoSeventyFive = true;
                videoFifty = true;
                videoTwentyFive = true;
                curEvents.push('event34');
                s.events = curEvents.join(',');
                s.eVar26 = curVideoName;
                s.tl();
            } else if ((!videoSeventyFive) && (percentageCompleted > 75)) { // event33 75% of Video played
                videoSeventyFive = true;
                videoFifty = true;
                videoTwentyFive = true;
                curEvents.push('event33');
                s.events = curEvents.join(',');
                s.eVar26 = curVideoName;
                s.tl();
            } else if ((!videoFifty) && (percentageCompleted > 50)) { // event32 50% of Video played
                videoFifty = true;
                videoTwentyFive = true;
                curEvents.push('event32');
                s.events = curEvents.join(',');
                s.eVar26 = curVideoName;
                s.tl();
            } else if ((!videoTwentyFive) && (percentageCompleted > 25)) { // event31 25% of Video played
                videoTwentyFive = true;
                curEvents.push('event31');
                s.events = curEvents.join(',');
                s.eVar26 = curVideoName;
                s.tl();
            }
        }
    })();
}
}]}],"scope":{"URI":{"include":["/pd/"]}},"conditions":[function(event,target){
var trackingVideos = document.getElementsByClassName('dtm-video-tracking');
if (trackingVideos.length === 0) {
  return false;
}	else {
	return true;
}
}],"event":"domready"},
    {"name":"TagAU - AllSurf All Pages Onload","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Global site tag (gtag.js) - Google AdWords: 1002317844 --\u003e \n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-1002317844\"\u003e\u003c/script\u003e \n\u003cscript\u003e \n  window.dataLayer = window.dataLayer || []; \n  function gtag(){\n    dataLayer.push(arguments);\n  } \n  gtag('js', new Date()); gtag('config', 'AW-1002317844'); \n\u003c/script\u003e "}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d243b7664746d1be4003c5b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
}],"event":"pagetop"},
    {"name":"TagAU - AllSurf TYP DAL BOP","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!--\nEvent snippet for 01/19 - Direct AL Conversion on http://www.audible.com.au: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 01/10/2019\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8055435/purch0/0119-0+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8055435;type=purch0;cat=0119-0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /^paid-membership.*$/i);
}],"event":"pagebottom"},
    {"name":"TagAU - AllSurf TYP Free Trial Bottom of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for AUNZ Free Trial Conversion conversion page --\u003e \u003cscript\u003e gtag('event', 'conversion', {'send_to': 'AW-1002317844/O_LJCJil1IQBEJTQ-N0D'}); \u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d243ddf64746d153600393c.js"},{"src":"satellite-5ec7486664746d4c54000b51.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
}],"event":"pagebottom"},
    {"name":"TagAU - AllSurf TYP Freebie BOP","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!--\nEvent snippet for 19-02 It burns downloads on http://www.audible.com.au: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 02/21/2019\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8055435/conte0/19-020+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8055435;type=conte0;cat=19-020;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e\n"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
}],"event":"pagebottom"},
    {"name":"TagAU - DeskMob All Pages BoP","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\n/* \u003c![CDATA[ */\nvar google_conversion_id = 976907435;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]\u003e */\n\u003c/script\u003e\n\u003cscript type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\"\u003e\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cdiv style=\"display:inline;\"\u003e\n\u003cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/976907435/?guid=ON\u0026amp;script=0\"/\u003e\n\u003c/div\u003e\n\u003c/noscript\u003e\n"},{"html":"\u003c!--\nEvent snippet for 17-07 All Pages on http://www.audible.com.au/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 05/28/2020\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'u17': '[aamsegmentid]',\n    'u5': '[Page URL]',\n    'send_to': 'DC-8055435/gener0/17-070+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8055435;type=gener0;cat=17-070;u5=[Page URL];u17=[aamsegmentid];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript type=\"text/javascript\"\u003e\n/* \u003c![CDATA[ */\nvar google_conversion_id = 945930078;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]\u003e */\n\u003c/script\u003e\n\u003cscript type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\"\u003e\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cdiv style=\"display:inline;\"\u003e\n\u003cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/945930078/?guid=ON\u0026amp;script=0\"/\u003e\n\u003c/div\u003e\n\u003c/noscript\u003e\n"},{"html":"\u003cscript\u003e(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:\"5139959\"};o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s\u0026\u0026s!==\"loaded\"\u0026\u0026s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\u003c/script\u003e\u003cnoscript\u003e\u003cimg src=\"//bat.bing.com/action/0?ti=5139959\u0026Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\" /\u003e\u003c/noscript\u003e\n"},{"html":"\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'u1': _satellite.getVar('product: product ID') || \"\",\n    'u2': _satellite.getVar('product: product ID') || \"\",\n    'send_to': 'DC-8055435/retar0/17-070+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"\"https://ad.doubleclick.net/ddm/activity/src=8055435;type=retar0;cat=17-070\"\" + ((_satellite.getVar('product: product ID') !== '') ? (';u1=' + _satellite.getVar('product: product ID')) : '') + ((_satellite.getVar('product: product ID') !== '') ? (';u2=' + _satellite.getVar('product: product ID')) : '') + \"\"dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\"\" width=\"\"1\"\" height=\"\"1\"\" alt=\"\"\"\"/\u003e\n\u003c/noscript\u003e"},{"html":"\u003cscript src=\"https://js.adsrvr.org/up_loader.1.1.0.js\" type=\"text/javascript\"\u003e\u003c/script\u003e\n        \u003cscript type=\"text/javascript\"\u003e\n            ttd_dom_ready( function() {\n                if (typeof TTDUniversalPixelApi === 'function') {\n                    var universalPixelApi = new TTDUniversalPixelApi();\n                    universalPixelApi.init(\"pbkkw73\", [\"mty8ktg\"], \"https://insight.adsrvr.org/track/up\");\n                }\n            });\n        \u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a27458f64746d3511008111.js"},{"src":"satellite-5a27458f64746d3511008112.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
}],"event":"pagebottom"},
    {"name":"TagAU - DeskMob All Pages Top of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8055435\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8055435');\n\u003c/script\u003e"}]},{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5a27455764746d1efb00b887.js"},{"src":"satellite-5a789bac64746d40ea000750.js"}]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d243bce64746d1b2c003e10.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
}],"event":"pagetop"},
    {"name":"TagAU - DeskMob TYP Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f536464746d153a009cb9.js"},{"src":"satellite-5a27467264746d108e0053f7.js"},{"src":"satellite-5a27467264746d108e0053f8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(AUAmazon|auamazon)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
}],"event":"pagebottom"},
    {"name":"TagAU - DeskMob TYP Free Trial","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8055435/conve0/17-070+unique'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8055435;type=conve0;cat=17-070;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "AUAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - All Pages Bottom of the Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Global site tag (gtag.js) - Google Ads: 849034187 --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-849034187\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-849034187');\n\u003c/script\u003e"},{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - Google Marketing Platform --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8127728\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8127728');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b9be4b064746d6dc00013e3.js"},{"src":"satellite-5bbe5fbf64746d3d760003a4.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - All Pages Except TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c7edcef64746d326500103f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), /^(?!.*(PurchaseConfirmation))/i);
}],"event":"windowload"},
    {"name":"TagCA - Cart Bottom of the Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c49381064746d2698001661.js"}]}]}],"scope":{"URI":{"include":["/cart/view"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - Cart Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a38397164746d54a701a58c.js"}]}]}],"scope":{"URI":{"include":["/cart/view"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"windowload"},
    {"name":"TagCA - Facebook PD and Landing Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5aa12e3064746d5a650007f0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"windowload"},
    {"name":"TagCA - TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a38360564746d18f9001d97.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"windowload"},
    {"name":"TagCA - TYP ALC Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a38388c64746d1efb013138.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - TYP ALC Purchase","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for ALC conversion page --\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n      'send_to': 'AW-849034187/rX2iCMefv3IQy_fslAM',\n      'transaction_id': ''\n  });\n\u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3ad72d64746d0864008d40.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - TYP Free Trial","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for Free Trials conversion page --\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {'send_to': 'AW-849034187/ugtPCLre13IQy_fslAM'});\n\u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3ad7e064746d153d01bb4c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - TYP Free Trial Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a38383864746d1b2c002107.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"pagebottom"},
    {"name":"TagCA - TYP Is Freebie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d7aaa9064746d7ddf000b50.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
},function(){
return _satellite.textMatch(_satellite.getQueryParam('ca'), "B07BQGCR9D")
},function(){
return _satellite.textMatch(_satellite.getQueryParam('ref'), "a_cart_checkout_succeeded")
}],"event":"pagebottom"},
    {"name":"TagCA - TYP Not Free Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c485a1464746d19e601c6ef.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), /CAAmazon/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), /PurchaseConfirmation/i);
}],"event":"pagebottom"},
    {"name":"TagCA - TYP Paid Membership","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for Paid Membership conversion page --\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {'send_to': 'AW-849034187/la-jCMTc13IQy_fslAM'});\n\u003c/script\u003e\n"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3ad86564746d6c3b0045e6.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), "paid-membership + content");
}],"event":"windowload"},
    {"name":"TagCA - TYP Quebec Membership","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for Quebec Free Month Membership conversion page --\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {'send_to': 'AW-849034187/mvKjCOiS33IQy_fslAM'});\n\u003c/script\u003e\n"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3838e164746d1dae00c90e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isQuebecMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "CAAmazon");
}],"event":"windowload"},
    {"name":"TagDE  - All Pages","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-1022450408\"\u003e\u003c/script\u003e\n\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-1022450408');\n  gtag('config', 'DC-8360274');\n  gtag('config', 'AW-935221289');\n  \n\n\u003c/script\u003e\n"},{"html":"\u003cscript\u003e\n  gtag('event', 'conversion',\n{'send_to': 'AW-935221289/mLoGCP_R4aUBEKmw-b0D'}\n);\n\u003c/script\u003e\n\n"},{"html":"\u003cscript\u003e\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n   n.queue=[];t=b.createElement(e);t.async=!0;\n   t.src=v;s=b.getElementsByTagName(e)[0];\n   s.parentNode.insertBefore(t,s)}(window,document,'script',\n                                   'https://connect.facebook.net/en_US/fbevents.js');\n  fbq('init', '284028401803117'); \n  fbq('track', 'PageView');\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n  (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:\"22008924\"};o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s\u0026\u0026s!==\"loaded\"\u0026\u0026s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\n\u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e66747564746d71ae000b7d.js"},{"src":"satellite-5e988f3b64746d58c50034ae.js"},{"src":"satellite-5f2ac94164746d48d7002323.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE  - All Pages - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a353b64746d07fe00038a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"domready"},
    {"name":"TagDE - All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b9f5d8a64746d6dc00016c8.js"},{"src":"satellite-5a0f4ed264746d153d009ce0.js"},{"src":"satellite-5a0f4ed264746d153d009ce1.js"},{"src":"satellite-5bcda01064746d6b86001df0.js"},{"src":"satellite-5ec5429f64746d645000010f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - All Pages Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f17042b64746d4b810009b1.js"},{"src":"satellite-5f1ee22764746d07fe000764.js"},{"src":"satellite-5f1ee22764746d07fe000765.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
}],"event":"windowload"},
    {"name":"TagDE - All Pages Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a366064746d5af9000573.js"},{"src":"satellite-5f1a39db64746d0b6c0022b3.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
}],"event":"windowload"},
    {"name":"TagDE - Android - All pages - Top of page","trigger":[{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5f2c2ddc64746d3fed002265.js"}]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f2c343b64746d3a5000121c.js"},{"src":"satellite-5f4e75c764746d315b001b7e.js"},{"src":"satellite-5f4e772364746d625a00068b.js"},{"src":"satellite-5f4e786b64746d60b6001188.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("platform"), "Android");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
}],"event":"pagetop"},
    {"name":"TagDE - Category Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e198c64746d07f700967e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Discovery");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "category");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Checkout Step 2","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cbefc2264746d53bb000635.js"}]}]}],"scope":{"URI":{"include":["/cart/confirm"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - Hoerbuecher Landing Page Onload","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), /MERCHANT_PAGE|LANDING_PAGE/i);
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), /hoerbuecher-testen/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Homepage Anon Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a31841164746d1efb010be8.js"},{"src":"satellite-5a0e1d9d64746d2eb8009d16.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Homepage Anon and Registered Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a31812564746d5703001a25.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), /Anon HP|Reg HP/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Homepage Registered Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a30496d64746d133d009a13.js"},{"src":"satellite-5a30496d64746d133d009a14.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5a30496d64746d133d009a15.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Reg HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Membership Offer page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ab2764764746d5322007d69.js"},{"src":"satellite-5acafbcc64746d5a680115c1.js"},{"src":"satellite-5acafbcc64746d5a680115c2.js"},{"src":"satellite-5af00d2064746d2f49003299.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "MembershipSubscription");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Product Detail Page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a9716f764746d59c60002f3.js"},{"src":"satellite-5a99176f64746d59c6001059.js"},{"src":"satellite-5aeb1c0864746d7493002770.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - Search Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5aaf7f1b64746d3291001e2c.js"},{"src":"satellite-5aeb1c3764746d7496002441.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "search");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - TYP ALC Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e131164746d07f700966e.js"},{"src":"satellite-5a0e131164746d07f7009669.js"},{"src":"satellite-5a0e131164746d07f700966d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP ALOP Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e13d464746d0bc600a0ef.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(event,target){
if (_satellite.getVar('purchase: cash revenue') === "0.0"){
	return false
}else{
	return true
}
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), / ^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP All Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a9913ab64746d3837001186.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP All Purchases Except Credit Consumed","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e00c364746d1efb00249a.js"},{"src":"satellite-5a0e00c364746d1efb00249b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(event,target){
//prevent credit consumption purchases from counting
if(_satellite.getVar('tm: hasMembership') == 'true' &&	_satellite.getVar('purchase: revenue') == 0.0 &&	_satellite.getVar('tm: isFreebiePurchase') == 'false'){
  return false;
}else{
	return true;
}

},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP All Purchases Except Credit Consumed - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f18c42b64746d02e30019a7.js"},{"src":"satellite-5f18c42b64746d02e30019a8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(event,target){
//prevent credit consumption purchases from counting
if(_satellite.getVar('tm: hasMembership') == 'true' &&	_satellite.getVar('purchase: revenue') == 0.0 &&	_satellite.getVar('tm: isFreebiePurchase') == 'false'){
  return false;
}else{
	return true;
}

},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Credit Consumed Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e14ca64746d1b9e001cf2.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("purchase: revenue"), "0.0");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Direct MFA Error","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6d444364746d7b1c000272.js"},{"src":"satellite-5d6d472c64746d27960018fc.js"},{"src":"satellite-5d6d490364746d55c2003ce6.js"},{"src":"satellite-5d6f742364746d1ee70014ae.js"},{"src":"satellite-5d6f75d764746d2232001b7d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIOIFE|B07CV4L1LL)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Direct Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5add6c3d64746d073b006ade.js"},{"src":"satellite-5ad069a364746d46d1001300.js"},{"src":"satellite-5ea06f8c64746d6ace000cc2.js"},{"src":"satellite-5bcdecd364746d01db001945.js"},{"src":"satellite-5cbf0c9a64746d628f001224.js"},{"src":"satellite-5ad069a364746d46d1001304.js"},{"src":"satellite-5e7c826c64746d141c0002f3.js"},{"src":"satellite-5ea0413c64746d10ef00096f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIOIFE|B07CV4L1LL|B004RIN2L0|B07BYHVSP6|B004RIOJOY|B07D2K538Q)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - TYP Direct Purchases - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f17059264746d1308000027.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIOIFE|B07CV4L1LL|B004RIN2L0|B07BYHVSP6|B004RIOJOY|B07D2K538Q)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
}],"event":"windowload"},
    {"name":"TagDE - TYP Free Trial Credit Consumed Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6fd1b764746d2edf000087.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("purchase: revenue"), "0.0");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(event,target){
if(_satellite.getVar('product: purchase type') == 'Trial Membership + Content'||(_satellite.getVar('member: sub segment') == 'Trial AL')){
  return true;
}else{
  return false;
}
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Free Trial MFA Error","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6d434964746d27960018fa.js"},{"src":"satellite-5d6d454564746d5881000435.js"},{"src":"satellite-5d6d471b64746d61c90012cc.js"},{"src":"satellite-5d6d471b64746d61c90012cd.js"},{"src":"satellite-5d6d471b64746d61c90012ce.js"},{"src":"satellite-5d6d48ed64746d55c2003ce3.js"},{"src":"satellite-5d6d48ed64746d55c2003ce4.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIN2PQ|B07D2J62NN)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Free-Trial Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e060764746d7039009382.js"},{"src":"satellite-5a0e0ef164746d1efb00266f.js"},{"src":"satellite-5e7c82a164746d5b1d000355.js"},{"src":"satellite-5ea040e164746d1694001a1e.js"},{"src":"satellite-5ea06f6864746d7a6d0030f7.js"},{"src":"satellite-5a0e060764746d7039009384.js"},{"src":"satellite-5a0e060764746d7039009385.js"},{"src":"satellite-5c2ded7b64746d461601668d.js"},{"src":"satellite-5cbf072364746d5d85000f1d.js"},{"src":"satellite-5cdae6bf64746d5ab9000335.js"},{"src":"satellite-5a0e060764746d703900937e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - TYP Free-Trial Purchases - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f17070464746d5af90001d5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
}],"event":"windowload"},
    {"name":"TagDE - TYP Free-Trial Purchases - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a3dc864746d7467000831.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - TYP Free-Trial/Direct Only","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e03dd64746d0bc30099a4.js"},{"src":"satellite-5a0e03dd64746d0bc30099a7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(event,target){
//prevent ALOP purchases from counting
if(_satellite.getVar('tm: isFreeTrial') == "true" || _satellite.getVar('product: purchase type').includes("Paid Membership"))
	return true;
else
	return false;
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIN2PQ|B004RIOIFE)$/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Freebie Purchases","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0e10bc64746d1efb002671.js"},{"src":"satellite-5a0e10bc64746d1efb002673.js"},{"src":"satellite-5a0e10bc64746d1efb002674.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP No Free-Trial or Credit Consumed Purchases","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(event,target){
//prevent credit consumption & free trial purchases from counting
if((_satellite.getVar('tm: hasMembership') == 'true' && _satellite.getVar('purchase: revenue') == 0.0 && _satellite.getVar('tm: isFreebiePurchase') == 'false') || _satellite.getVar('tm: isFreeTrial') == 'true'){
  return false;
}else{
	return true;
}

},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - TYP Non Prime Free-Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ea06e8a64746d4a6a002352.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B004RIN2PQ|B07D2J62NN)$/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagDE - TYP Prime membership","trigger":[{"engine":"sc","command":"addEvent","arguments":["event218"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6d438864746d7b1c000265.js"},{"src":"satellite-5f15551c64746d03a00005cd.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B07JBB11NQ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagDE - View Cart page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a99196664746d40de005ff5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), /viewCart/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagEROW - All Pages Except TYP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a2036a064746d2da9005367.js"},{"src":"satellite-5a285cb964746d3f4e00be40.js"},{"src":"satellite-5b9f90bc64746d598b002dc1.js"},{"src":"satellite-5ba2270a64746d132300257f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), /^((?!\/typ).)*$/i);
}],"event":"windowload"},
    {"name":"TagEROW - All Pages Top of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-827055970\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-827055970');\n  gtag('config', 'DC-8272590');\n\n\u003c/script\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagetop"},
    {"name":"TagEROW - Chinese Landing Page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a7c39a164746d5dd7000045.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), /mobile|desktop/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), "/ep/chinese");
}],"event":"windowload"},
    {"name":"TagEROW - Free Trial TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ad8738f64746d5f7e0079c9.js"},{"src":"satellite-5b97cc5864746d085a0019e0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagEROW - TYP Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a285c4d64746d3f4e00be3c.js"},{"src":"satellite-5b97d12364746d08a5001d45.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
}],"event":"pagebottom"},
    {"name":"TagES  - All pages - Top of page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Global site tag (gtag.js) - Google Ads: 609369668 --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-609369668\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-609369668');\n\u003c/script\u003e\n"},{"html":"\u003cscript\u003e\n    (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:\"22020576\"};o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s\u0026\u0026s!==\"loaded\"\u0026\u0026s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\n\u003c/script\u003e"},{"html":"\u003c!-- Facebook Pixel Code --\u003e\n\u003cscript\u003e\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '1779811125517637');\nfbq('track', 'PageView');\nfbq('track', 'ViewContent');\n\u003c/script\u003e"},{"html":"\u003c!-- Global site tag (gtag.js) - Google Marketing Platform --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-10255122\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-10255122');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagetop"},
    {"name":"TagES - Add Payment Info - Bottom of page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f47708564746d60b6000a34.js"},{"src":"satellite-5f4e17e664746d326d000644.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "MembershipSubscription");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - All pages - Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4ec0bf64746d7fd1000713.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
}],"event":"windowload"},
    {"name":"TagES - Category pages","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4e225164746d3a50002b60.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "category");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Discovery");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - Checkout step 2","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f476f1264746d136d000762.js"},{"src":"satellite-5f4e36e864746d625a000634.js"}]}]}],"scope":{"URI":{"include":["/cart/confirm"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - Editorial pages","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4e263164746d60b600113d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - Homepage","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4e29be64746d315b001b04.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), /Anon HP|Reg HP/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - PDP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4e28e864746d625a00061c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), "DETAIL");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - Search - Bottom of page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f476fc564746d486800015d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "search");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - TYP - Bottom of page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4626c764746d3ad3000c64.js"},{"src":"satellite-5f4a198364746d4de800050f.js"},{"src":"satellite-5f4e33be64746d3a50002b73.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagES - TYP - Free trial - Bottom of page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f476e7064746d7a460000c8.js"},{"src":"satellite-5f4e26cb64746d3a50002b6f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagFR  - All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f654664746d0bc300ae74.js"},{"src":"satellite-5c41c5be64746d728c01f7c0.js"},{"src":"satellite-5c45976364746d728c01fd6c.js"},{"src":"satellite-5a13372064746d0bc300bb8b.js"},{"src":"satellite-5c6a904264746d2dde00403f.js"},{"src":"satellite-5d8c89e264746d1618001ae5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR  - All Pages Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1aa08664746d468b0021f4.js"},{"src":"satellite-5f1ebc1a64746d262f00065b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
}],"event":"windowload"},
    {"name":"TagFR  - All Pages Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a3f4164746d6fa2000b12.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR -  Discovery Category Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f705d64746d2eb500ab00.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Discovery");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "category");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - All Pages Top of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-1022450408\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-1022450408', {'send_page_view': false});\n  gtag('config', 'DC-8366944');\n\u003c/script\u003e"}]},{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5a3150b164746d5703001784.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagetop"},
    {"name":"TagFR - All Pages Top of Page - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a40ee64746d07fe000398.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagetop"},
    {"name":"TagFR - Anon HP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f6fb464746d476b00345f.js"},{"src":"satellite-5e42bbff64746d6b1a0004b6.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Landing Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3027ab64746d3e39008a1f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), "LANDING_PAGE");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Product Detail Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f72b164746d2eb500ab0a.js"},{"src":"satellite-5f311fd864746d0eb2000cfe.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Registered Homepage Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f718a64746d2eb500ab08.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Reg HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Search Results Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f73bb64746d476b003489.js"},{"src":"satellite-5a0f73bb64746d476b00348a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "search");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Shopping View Cart Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f752c64746d1537009095.js"},{"src":"satellite-5a0f752c64746d1537009096.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "shopping");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "viewCart");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP ALC Purchases Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f635364746d284a00280e.js"},{"src":"satellite-5c57f09964746d330c00031a.js"},{"src":"satellite-5a0f63e164746d1b9e0026a3.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP ALC Purchases Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f17089964746d262f000059.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
}],"event":"windowload"},
    {"name":"TagFR - TYP Direct AL Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0de67964746d15370086df.js"},{"src":"satellite-5a0de78f64746d2eb8009aa4.js"},{"src":"satellite-5a0de80d64746d54a70081a8.js"},{"src":"satellite-5e8219d464746d703b001a2d.js"},{"src":"satellite-5e8e014164746d599f000f76.js"},{"src":"satellite-5f1fd41e64746d130800080b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWPPQA|B07BWCYDZX)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP Free Trial Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0dd47164746d0bc300986b.js"},{"src":"satellite-5a0dd5dc64746d2eb80099e0.js"},{"src":"satellite-5a0dd8e564746d476b001ca0.js"},{"src":"satellite-5e8210b964746d39240022ce.js"},{"src":"satellite-5e8dffc664746d16940003ed.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWQC3U|B07BW17X3R)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP Free Trial Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170a2364746d2663002897.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWQC3U|B07BW17X3R)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
}],"event":"windowload"},
    {"name":"TagFR - TYP Free Trial Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a42f664746d07fe0003a7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWQC3U|B07BW17X3R)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP Freebie Purchases Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a0f646464746d1537009071.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP Freebie Purchases Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170ad564746d262f00006a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
}],"event":"windowload"},
    {"name":"TagFR - TYP MFA Failure Direct AL Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d652a1364746d3495001172.js"},{"src":"satellite-5d6e93b364746d58810008d6.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWPPQA|B07BWCYDZX)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP MFA Failure Free Trial  Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d66967a64746d4d2b0000a7.js"},{"src":"satellite-5d6e93c464746d65e300283e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), /^(B008OWQC3U|B07BW17X3R)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP PRIME Free Trial Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d66980864746d55bc002ee6.js"},{"src":"satellite-5d6e8e2064746d7b1c000579.js"},{"src":"satellite-5dea5b8c64746d5379001031.js"},{"src":"satellite-5e82184664746d7c270004bc.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B07HR24KZF");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - TYP PRIME Free Trial Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170c0e64746d1350000057.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B07HR24KZF");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
}],"event":"windowload"},
    {"name":"TagFR - TYP PRIME Free Trial Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a447164746d5eb9000099.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B07HR24KZF");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "false");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagFR - Wishlist Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a13357b64746d2eb800b5f9.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "Wishlist");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIN - All pages onload except TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be3163464746d581700012c.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5be4278e64746d728c004086.html","data":[]},{"src":"satellite-5be4505764746d3e160057c5.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "INAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), /^(?:(?!PurchaseConfirmation).)*$/i);
}],"event":"windowload"},
    {"name":"TagIN - TYP - Bottom of page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be314d164746d019e003943.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5be4518864746d019e003fd9.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "INAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
}],"event":"pagebottom"},
    {"name":"TagIN - TYP Free Trial","trigger":[{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5be428fb64746d41ce000973.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "INAmazon");
}],"event":"pagebottom"},
    {"name":"TagIN All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f03f39264746d0478000137.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "INAmazon");
}],"event":"pagebottom"},
    {"name":"TagIT - All pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f160b6764746d468b001c76.js"},{"src":"satellite-5f1ebc4a64746d55390003cc.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
}],"event":"windowload"},
    {"name":"TagIT - All pages Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1a9f9d64746d55390001be.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - All pages Top of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-920122472\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-920122472');\n  gtag('config', 'AW-919482474');\n\u003c/script\u003e"},{"html":"\u003cscript type=\"text/javascript\"\u003e\n/* \u003c![CDATA[ */\nvar google_conversion_id = 919482474;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]\u003e */\n\u003c/script\u003e\n\u003cscript type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\"\u003e\u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a80746064746d4f2f000048.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5d495a7264746d4825000174.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagetop"},
    {"name":"TagIT - All pages Top of Page - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1ac4e664746d07fe000441.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Category Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a995e7964746d6f63004631.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "category");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Discovery");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - Checkout Step 2","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5da6f3fe64746d3b15000d90.js"}]}]}],"scope":{"URI":{"include":["/account/payments"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Direct MFA Error","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B004RIOIFE");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Homepage Anon","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\ndocument.write('\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e');\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e\n\u003c/noscript\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Homepage Anon and Registered Onload","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), /Anon HP|Reg HP/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*2[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - Homepage Registered","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\ndocument.write('\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e');\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e\n\u003c/noscript\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Reg HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Landing Pages","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\ndocument.write('\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e');\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e\n\u003c/noscript\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), "MERCHANT_PAGE");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Membership Offer page Onload","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "MembershipSubscription");
}],"event":"windowload"},
    {"name":"TagIT - Product Detail","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\ndocument.write('\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e');\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003ciframe src=\"https://5584066.fls.doubleclick.net/activityi;src=5584066;type=lptsn0;cat=dcmfl005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003e\u003c/iframe\u003e\n\u003c/noscript\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a80723964746d309d0009d8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagIT - Search Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a80715464746d1453000979.js"},{"src":"satellite-5f0da5e464746d5e9c000136.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "search");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP - Free Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a8070c464746d73280001ff.js"},{"src":"satellite-5bcf208d64746d3f8f002586.js"},{"src":"satellite-5a8070c464746d7328000201.js"},{"src":"satellite-5d384a6d64746d1bb200052a.js"},{"src":"satellite-5a8070c464746d7328000202.js"},{"src":"satellite-5e8dff9264746d151b001522.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B019H1ZTPI");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP - Free Trial - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1acf7c64746d5539000206.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B019H1ZTPI");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP Direct MFA Error","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d7631e964746d65e3004541.js"},{"src":"satellite-5da6f7f464746d688f003ecb.js"},{"src":"satellite-5dada39d64746d66ad0026b8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B019H27ZLS");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), " ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP Direct Purchases - Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d3eadf764746d3794001414.js"},{"src":"satellite-5dada1a264746d2f74001605.js"},{"src":"satellite-5e8e01b064746d6662003bac.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B019H27ZLS");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP Free-Trial/Direct Only","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagIT - TYP Freetrial MFA Error","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d76311564746d2edf000fc8.js"},{"src":"satellite-5dada3f664746d2f74001608.js"},{"src":"satellite-5dada3f664746d2f74001609.js"},{"src":"satellite-5dada42d64746d66f8001913.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B019H1ZTPI");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: mfaFailed"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "mfa-error-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagJP - All Pages Top of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- Global site tag (gtag.js) - Google Ads: 762891749 --\u003e \u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=AW-762891749\"\u003e\u003c/script\u003e \u003cscript\u003e window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-762891749'); gtag('config', 'AW-1002317844'); \u003c/script\u003e"},{"html":"\u003c!--\nStart of Floodlight Tag: Please do not remove\nActivity name of this tag: 19-03 All pages + URL\nURL of the webpage where the tag is expected to be placed: http://www.audible.co.jp\nThis tag must be placed between the \u003cbody\u003e and \u003c/body\u003e tags, as close as possible to the opening tag.\nCreation Date: 04/01/2019\n--\u003e\n\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\n//document.write('\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=allpa0;cat=19-030;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?\" width=\"1\" height=\"1\" alt=\"\"/\u003e');\nvar tagimg = document.createElement('img'); \ntagimg.src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=allpa0;cat=19-030;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=\" + a + \"?\";\ntagimg.width='1';\ntagimg.height='1';\ndocument.body.appendChild(tagimg);\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=allpa0;cat=19-030;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of Floodlight Tag: Please do not remove --\u003e"},{"html":"\u003cscript async src=\"https://s.yimg.jp/images/listing/tool/cv/ytag.js\"\u003e\u003c/script\u003e\n\u003cscript\u003e\nwindow.yjDataLayer = window.yjDataLayer || [];\nfunction ytag() { yjDataLayer.push(arguments); }\nytag({\"type\":\"ycl_cookie\"});\n\u003c/script\u003e\n"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b11203564746d45bb00402e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "JPAmazon");
}],"event":"pagetop"},
    {"name":"TagJP - TYP DAL BOP","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!--\nStart of Floodlight Tag: Please do not remove\nActivity name of this tag: Direct AL (not eligible for Trial, skip to paid membership)\nURL of the webpage where the tag is expected to be placed: http://www.audible.com.au\nThis tag must be placed between the \u003cbody\u003e and \u003c/body\u003e tags, as close as possible to the opening tag.\nCreation Date: 09/17/2019\n--\u003e\n\u003cscript type=\"text/javascript\"\u003e\nvar axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\n//document.write('\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=conve00;cat=direc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=' + a + '?\" width=\"1\" height=\"1\" alt=\"\"/\u003e');\nvar tagbop = document.createElement('img');\ntagbop.src = \"https://ad.doubleclick.net/ddm/activity/src=9264256;type=conve00;cat=direc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=\" + a + \"?\";\ntagbop.width = '1';\ntagbip.height = '1';\ndocument.body.appendChild(tagbop);\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=conve00;cat=direc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of Floodlight Tag: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), "Paid Membership");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "adbl-checkout-typ");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), /(JPAmazon|jpamazon)/i);
}],"event":"pagebottom"},
    {"name":"TagJP - TYP Free Trial PageBottom","trigger":[{"engine":"sc","command":"addEvent","arguments":["event25"]},{"command":"writeHTML","arguments":[{"html":"\u003c!-- Event snippet for Audible Japan - Free Trial conversion page --\u003e \u003cscript\u003e gtag('event', 'conversion', {'send_to': 'AW-762891749/0zJnCNuRipUBEOWb4-sC'}); \u003c/script\u003e"},{"html":"\u003c!--\nStart of Floodlight Tag: Please do not remove\nActivity name of this tag: 19-03 Trial conversion (Mobile + desktop)\nURL of the webpage where the tag is expected to be placed: \nThis tag must be placed between the \u003cbody\u003e and \u003c/body\u003e tags, as close as possible to the opening tag.\nCreation Date: 04/01/2019\n--\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=9264256;type=conve0;cat=19-030;qty=1;cost=[Revenue];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[OrderID]?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c!-- End of Floodlight Tag: Please do not remove --\u003e"},{"html":"\u003c!-- Event snippet for JP Free Trial Conversion conversion page --\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {'send_to': 'AW-1002317844/FPFMCNKX9aUBEJTQ-N0D'});\n\u003c/script\u003e\n"},{"html":"\u003cscript async\u003e\nytag({\n  \"type\": \"yss_conversion\",\n  \"config\": {\n    \"yahoo_conversion_id\": \"1001104759\",\n    \"yahoo_conversion_label\": \"rEYNCM3VoLkBEPi11ckC\",\n    \"yahoo_conversion_value\": \"0\"\n  }\n});\n\u003c/script\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "JPAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
}],"event":"pagebottom"},
    {"name":"TagJP - products Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bb3945d64746d715f000065.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "JPAmazon");
}],"event":"pagebottom"},
    {"name":"TagUK  - All Pages - Bottom of page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\n!function(e,i){if(!e.pixie){var n=e.pixie=function(e,i,a){n.actionQueue.push({action:e,actionValue:i,params:a})};n.actionQueue=[];var a=i.createElement(\"script\");a.async=!0,a.src=\"//acdn.adnxs.com/dmp/up/pixie.js\";var t=i.getElementsByTagName(\"head\")[0];t.insertBefore(a,t.firstChild)}}(window,document);\npixie('init', '2f2662d2-826b-4902-a468-2960913be911');\npixie('event', 'PageView');\n\u003c/script\u003e\n\u003cnoscript\u003e\u003cimg width=\"1\" height=\"1\" style=\"display:none;\" src=\"//ib.adnxs.com/pixie?pi=2f2662d2-826b-4902-a468-2960913be911\u0026e=PageView\u0026script=0\" /\u003e\u003c/noscript\u003e"},{"html":"\u003cscript\u003e\n  var Nano = new Object();\n  Nano.pid = \"5ed78e9b0ae89917aa70a3c5\";\n  // Nano.productid = \"VALUE\";  // productId\n\u003c/script\u003e\n\u003cscript type=\"text/javascript\" src=\"https://cdn.audiencemanager.de/ppixel.min.js\"\u003e\u003c/script\u003e"}]},{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5b9798a864746d081f001913.js"},{"src":"satellite-5c9e07b464746d76a6008c30.js"},{"src":"satellite-5c9e169d64746d7610000a93.js"},{"src":"satellite-5d36d89f64746d2006004625.js"},{"src":"satellite-5f350e3f64746d61fa00021f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK  - All Pages - Top of page - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1ad86c64746d3a500006fa.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagetop"},
    {"name":"TagUK - All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b9f8b9564746d085e003c65.js"},{"src":"satellite-5e38561a64746d6b5e000ed8.js"},{"src":"satellite-5f17675364746d275a001b09.js"},{"src":"satellite-5f17675364746d275a001b0a.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5f17675364746d275a001b0b.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - All Pages Onload - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170cbe64746d2b24000f14.js"},{"src":"satellite-5f1aa22264746d4b81000e2c.js"},{"src":"satellite-5f1e8f4f64746d2663002e42.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
}],"event":"windowload"},
    {"name":"TagUK - All Pages Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1ad9d264746d74670008d0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Android - All pages - Top of page","trigger":[{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5f522cc664746d66ef000000.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("platform"), "Android");
}],"event":"pagetop"},
    {"name":"TagUK - Desktop Add Payment Info Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b2b8d4a64746d3f92001bfe.js"},{"src":"satellite-5bb234f764746d2698005ce7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "MembershipSubscription");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - Desktop All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a29a54b64746d2eb80151f4.js"},{"src":"satellite-5a29a6a764746d7fe8006465.js"},{"src":"satellite-5a29a71064746d7c6f006545.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop Anon HP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a29a97f64746d378b007caf.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop Cart Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6f211564746d2c55000000.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), "/cart/view");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop Dynamic Offer Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6f118964746d22c30012a9.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), "/dynamic-offer");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop Dynamic PDP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6f165c64746d1d090002ea.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), /^\/t2\/title($|\?asin=.*$)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop PDP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a05c5cc64746d2ebe005a8f.js"},{"src":"satellite-5ab914d564746d3db300562d.js"},{"src":"satellite-5ab914d564746d3db300562e.js"},{"src":"satellite-5ab914d564746d3db300562f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Desktop Reg HP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a29aa5164746d3f4e00cc96.js"},{"src":"satellite-5a33e61764746d01b500ae05.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Reg HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Mobile Acquisition Offer Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6f035a64746d2c85000edd.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), "/membershipOffer.htm");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Mobile Add Payment Info Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b2b900d64746d3d190006ac.js"},{"src":"satellite-5bb2351a64746d2698005ce9.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "MembershipSubscription");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - Mobile All Pages Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a296fa664746d7c6f0062e6.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Mobile Anon HP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a29a87e64746d378b007cab.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5e8e497464746d692c0009f4.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Mobile Anon HP Onload - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1add5664746d07fe000462.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Anon HP");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - Mobile PDP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a053b5464746d703f004d6b.js"},{"src":"satellite-5af5535564746d64810018a4.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5e8e484164746d1694000433.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*2[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Mobile Reg HP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a29a9cc64746d108b007cef.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5e8e49a564746d7c270018b9.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Reg HP");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*2[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - PDP - Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bb2340364746d56cd004e3f.js"},{"src":"satellite-5c9e081864746d76a6008c32.js"},{"src":"satellite-5c9e17b964746d622600067e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), "DETAIL");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - Product \u0026 Transaction Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e38503464746d735f00036a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), /^(Product|PurchaseConfirmation)$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - Search Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d54368b64746d49fc000196.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "search");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - TYP ALC Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bcdaa0864746d217e00200c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP ALC Bottom of Page - Mobile","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bcdac7e64746d3f89001833.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP BAS DOM Ready","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e8f743e64746d14e6000994.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /^Paid Membership.*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"domready"},
    {"name":"TagUK - TYP BAS DOM Ready - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170d7364746d5af90001e6.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /^Paid Membership.*$/i);
}],"event":"domready"},
    {"name":"TagUK - TYP Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a05dad464746d0bc3005802.js"},{"src":"satellite-5a05dad464746d0bc3005803.js"},{"src":"satellite-5b97a83064746d08a8001e56.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP DOM Ready","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a05d43064746d2eb8005981.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"domready"},
    {"name":"TagUK - TYP Free Trial Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b97c4e664746d08a8001f3b.js"},{"src":"satellite-5bb2345b64746d2698005ce5.js"},{"src":"satellite-5c9e098b64746d76a6008c4a.js"},{"src":"satellite-5c9e188e64746d494c000bdf.js"},{"src":"satellite-5d54370e64746d232c000c12.js"},{"src":"satellite-5e8f743664746d3e9c0032c4.js"},{"src":"satellite-5eb4484b64746d4c010001f8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Free Trial Bottom of Page - Desktop","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bcda89164746d01db0017dc.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5e8e516a64746d3e9c002fc0.html","data":[]},{"src":"satellite-5e8e516a64746d3e9c002fc1.html","data":[]},{"src":"satellite-5e8e516a64746d3e9c002fc2.html","data":[]},{"src":"satellite-5e8e516a64746d3e9c002fc3.html","data":[]},{"src":"satellite-5e8e516a64746d3e9c002fc4.html","data":[]},{"src":"satellite-5e8e516a64746d3e9c002fc5.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Free Trial Bottom of Page - Mobile","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bcdac0064746d3348001a66.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5e8e4c5c64746d1694000436.html","data":[]},{"src":"satellite-5e8e4c5c64746d1694000437.html","data":[]},{"src":"satellite-5e8e4c5c64746d1694000438.html","data":[]},{"src":"satellite-5e8e4c5c64746d1694000439.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Free Trial Bottom of Page - Performance tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f1ae03664746d6fa2000c03.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*1[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Free Trial DOM ready","conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"domready"},
    {"name":"TagUK - TYP Free Trial DOM ready - Essential tags","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f170e3264746d3fed000ce9.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
}],"event":"domready"},
    {"name":"TagUK - TYP Mobile","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a33e8aa64746d3f4e010e60.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "UKAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Mobile Bottom of Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b97aa9a64746d085a001842.js"},{"src":"satellite-5ba35c3264746d04bb004d30.js"},{"src":"satellite-5a05298664746d7042005461.js"},{"src":"satellite-5a05298664746d7042005463.js"},{"src":"satellite-5a05298664746d7042005464.js"},{"src":"satellite-5a05298664746d7042005465.js"},{"src":"satellite-5a052e5164746d153a004884.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - TYP Mobile Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a05336864746d2eb50050b2.js"}]}]}],"scope":{"URI":{"include":["/typ"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - TYP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a05d09b64746d7d40004193.js"},{"src":"satellite-5aeb30dc64746d0d8a000c01.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"windowload"},
    {"name":"TagUK - TYP Tablet","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a2af35964746d7fe8006f32.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "tablet");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUK - viewCart","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5bb2362564746d04bb009a52.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "viewCart");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"event":"pagebottom"},
    {"name":"TagUS - Account Pages onLoad","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b86fd4864746d76f90002f3.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Account");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - Acquisition Pages onLoad","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b86fc0464746d4e960054f5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "acquisition");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - All Pages Bottom of Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-5164101\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\tgtag('config', 'AW-973853048');\n  gtag('config', 'DC-5164101');\n\u003c/script\u003e\n\n\n"},{"html":"\u003cscript\u003e\n    (function(w, d, t, r, u) {\n        var f, n, i;\n        w[u] = w[u] || [], f = function() {\n            var o = {\n                ti: \"4004590\"\n            };\n            o.q = w[u], w[u] = new UET(o), w[u].push(\"pageLoad\")\n        }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {\n            var s = this.readyState;\n            s \u0026\u0026 s !== \"loaded\" \u0026\u0026 s !== \"complete\" || (f(), n.onload = n.onreadystatechange = null)\n        }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)\n    })(window, document, \"script\", \"//bat.bing.com/bat.js\", \"uetq\");\n\u003c/script\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ae213ab64746d79c10146e6.js"},{"src":"satellite-5b0701f164746d45be000d7b.js"},{"src":"satellite-5b3670e564746d12b9007403.js"}]}]}],"scope":{"URI":{"exclude":["/legal/terms_and_conditions_ios"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - All Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5accf17e64746d0963002f17.js"},{"src":"satellite-5eb5aea364746d3868000afe.js"},{"src":"satellite-5a393e7c64746d43450006d5.js"},{"src":"satellite-5a393e7c64746d43450006d6.js"},{"src":"satellite-5a70abe364746d7f7b0001d5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - All Pages with Membership Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a398e3864746d1dae00d487.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), /true|1/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - Audible for Business - All Pages Except TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e6667ac64746d29b00015fa.js"},{"src":"satellite-5e6fda1764746d704100022a.js"},{"src":"satellite-5eb5afaf64746d6870000fc7.js"},{"src":"satellite-5ecebe9164746d0781000148.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "Business");
}],"event":"pagebottom"},
    {"name":"TagUS - Audible for Business - Cart/Register Page","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e70ff0664746d732f0006c2.js"},{"src":"satellite-5e70ff0664746d732f0006c3.js"},{"src":"satellite-5eced1aa64746d468b0000f0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), /\/business\/register|\/business\/checkout/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Audible for Business - TYP Pages","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5e71108264746d664f000450.js"},{"src":"satellite-5e71108264746d664f000451.js"},{"src":"satellite-5ecec53564746d4c01001d60.js"},{"src":"satellite-5ecec53564746d4c01001d61.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "enterprise-purchase-complete");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Cart Page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b1053c664746d56b4000c38.js"},{"src":"satellite-5b746c2564746d2bd3004b73.js"},{"src":"satellite-5be0fd2b64746d408b004142.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "viewCart");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "shopping");
}],"event":"windowload"},
    {"name":"TagUS - Desktop TYP ALC Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a724ec164746d4d86000237.js"},{"src":"satellite-5a93f12b64746d4ce5005886.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
}],"event":"pagebottom"},
    {"name":"TagUS - Desktop TYP Free Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74bffb64746d7ab20000dd.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Desktop TYP Member Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74c15264746d5d3b000143.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Desktop TYP Membership Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a72505564746d1797000ad7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "desktop");
},function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /^(paid-membership \+ content|Paid Membership \+ Content)$/i);
}],"event":"pagebottom"},
    {"name":"TagUS - Discovery Pages onLoad","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b86fe7d64746d267a002feb.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Discovery");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - Escape LP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d692df864746d4d2b000ac9.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audible-escape");
}],"event":"pagebottom"},
    {"name":"TagUS - Gift Center TYP - 1 month","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be3580a64746d777d0043f5.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("product: product ID"), "B07FQQN7QX");
}],"event":"pagebottom"},
    {"name":"TagUS - Gift Center TYP - 12 month","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be483a564746d17ce0047d3.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: product ID"), "B0060L0T6I");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
}],"event":"pagebottom"},
    {"name":"TagUS - Gift Center TYP - 3 month","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be47cb964746d17ce0047b7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("product: product ID"), "B005WZL5SY");
}],"event":"pagebottom"},
    {"name":"TagUS - Gift Center TYP - 6 month","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5be481b164746d19d3000cd0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: product ID"), "B005WZL7N2");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
}],"event":"pagebottom"},
    {"name":"TagUS - Hispanic English Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c4b295964746d2cab00105f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "en-espanol");
}],"event":"pagebottom"},
    {"name":"TagUS - Hispanic Spanish Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c4b299664746d138c00082d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "espanol");
}],"event":"pagebottom"},
    {"name":"TagUS - Merchandising Pages onLoad","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b86fb7f64746d610400314c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - Merchandising and Acquisition Pages Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a662a4a64746d333f0096bc.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), /Acquisition|Merchandising/i);
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - Mobile TYP ALC Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74bedf64746d5ae400006d.js"},{"src":"satellite-5a93f15464746d4ce2005d21.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Mobile TYP Member Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74c18464746d75b6000260.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Mobile TYP Member Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74c18564746d665d0005f2.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - Mobile TYP Membership Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a74c36764746d19ae000063.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("surface"), "mobile");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /(paid-membership \+ content|Paid Membership \+ Content)/i);
}],"event":"pagebottom"},
    {"name":"TagUS - PDP Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a93ed5864746d08050059bf.js"},{"src":"satellite-5accdd6f64746d6a73002752.js"},{"src":"satellite-5acce8a564746d56500018f2.js"},{"src":"satellite-5b86bccb64746d7c0c0000bb.js"},{"src":"satellite-5bc7baab64746d3f89000299.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "Product");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - SignUp Page Onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b071b0e64746d507a000e2c.js"},{"src":"satellite-5ba3c39864746d14a600167d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), /\/subscription\/confirmation/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "MembershipSubscription");
}],"event":"windowload"},
    {"name":"TagUS - TYP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b07155664746d3c2800100c.js"},{"src":"satellite-5b746a5e64746d2bd3004b69.js"},{"src":"satellite-5be1fde664746d259f0035d3.js"},{"src":"satellite-5d8bb0c164746d1e5c001d7c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - TYP ALC Purchase Never a Member","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6b77a364746d659000030d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: hasPurchasedMembership"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isALCPurchase"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - TYP Escape_onload","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d85410464746d39df000b4f.js"},{"src":"satellite-5da4a24464746d15c40004d0.js"},{"src":"satellite-5dd6d24d64746d26b80024ae.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getQueryParam('membershipAsin'), "B07N15FHVR")
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "adbl-checkout-typ-romance");
}],"event":"windowload"},
    {"name":"TagUS - TYP First Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a662d1f64746d6cd10081f4.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
}],"event":"pagebottom"},
    {"name":"TagUS - TYP Free Trial","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3adbc464746d18f90036b5.js"},{"src":"satellite-5b07150964746d3c28000fda.js"},{"src":"satellite-5b6c8e6164746d11c2002c99.js"},{"src":"satellite-5b87049e64746d267a003002.js"},{"src":"satellite-5a3c0e6664746d58a40019d9.js"},{"src":"satellite-5a6b767164746d22c3000cab.js"},{"src":"satellite-5a93f1fa64746d06b60016df.js"},{"src":"satellite-5accf44764746d6a730028da.js"},{"src":"satellite-5ace3a8b64746d79c100cb98.js"},{"src":"satellite-5ad8ec0e64746d6955004e7a.js"},{"src":"satellite-5af5de6964746d7496008382.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"windowload"},
    {"name":"TagUS - TYP Member Purchase","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a6b7a9f64746d2a140005cc.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
}],"event":"pagebottom"},
    {"name":"TagUS - TYP Membership Purchase new","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ba3c1fe64746d5e7800093b.js"},{"src":"satellite-5bd0ec8a64746d040200030e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B003320GHE");
}],"event":"windowload"},
    {"name":"TagUS - TYP Membership Purchase new - Edited for new ASIN","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5de6cfd264746d6b9600b524.js"},{"src":"satellite-5de6cfd264746d6b9600b525.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: isFreeTrial"), "false");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: membershipAsin"), "B0757CNHCM");
}],"event":"windowload"},
    {"name":"TagUS - TYP is Freebie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a398ec664746d7fe800ba7c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: isCartFreebie"), "true");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - TYP with Membership","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a398ded64746d1dae00d485.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: hasMembership"), /true|1/i);
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "PurchaseConfirmation");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH HarryPotter","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c8eee5564746d45b100190b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "Series:Harry Potter [Spanish Edition]");
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageType"), "SERIES");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_en_espanol-2_english","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bdcb664746d6f95000165.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "en-espanol-2");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_en_espanol-3_english","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bdde464746d65cc000032.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "en-espanol-3");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_en_languagelearning_english","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bdf2a64746d21f6004344.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audiblelatino-languagelearning-es");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_en_latinoculture_english","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bdf4e64746d58810000cf.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audiblelatino-latinoculture");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_en_latinxauthors_english","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bde5864746d2232001253.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audiblelatino-latinxauthors");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_espanol-2","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bd2ec64746d124c000620.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "espanol-2");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_espanol-3","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bd42864746d1ee7000a42.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "espanol-3");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_espanol-4","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bd4b864746d1ee7000a5d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "espanol-4");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_language_learning","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bd60e64746d55c200377a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audiblelatino-languagelearning");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"TagUS - USH_latino_culture","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d6bd57264746d55c2003760.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageIdent"), "audiblelatino-latinoculture-es");
},function(){
return _satellite.textMatch(_satellite.getVar("tm: pageGroup"), "merchandising");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"event":"pagebottom"},
    {"name":"campaign: click","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar34":"%internal campaign: id%"}]}],"scope":{"URI":{"include":[/intcid/i]}},"event":"pagebottom"},
    {"name":"cancel membership: show offers","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar85":"%cancel membership: reason%"}]},{"engine":"sc","command":"addEvent","arguments":["event66"]}],"scope":{"URI":{"include":["/account/membership/cancel/show-offers"]}},"event":"pagebottom"},
    {"name":"cancel membership: show reasons","trigger":[{"engine":"sc","command":"addEvent","arguments":["event65"]}],"scope":{"URI":{"include":["/account/membership/cancel/show-reasons"]}},"event":"pagebottom"},
    {"name":"cancel membership: start","trigger":[{"engine":"sc","command":"addEvent","arguments":["event64"]}],"scope":{"URI":{"include":["/account/membership/cancel/interrupt"]}},"event":"pagebottom"},
    {"name":"content: all pages","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar1":"%product: product ID%","eVar13":"D=c2","eVar14":"D=c8","eVar15":"D=c9","eVar2":"%realm%","eVar205":"%PremiumMembershipASIN%","eVar206":"%AYCLRomanceMembershipASIN%","eVar207":"%AYCLItalyMembershipASIN%","eVar34":"%membership: status%","eVar38":"D=c17","eVar39":"D=c18","eVar40":"%customer_plan%","eVar41":"%member: ID%","eVar42":"%user: login status%","eVar43":"D=c48","eVar44":"%platform%","eVar5":"D=c4","eVar58":"%content: website type%","eVar6":"%content : contentType%","eVar7":"D=c5","eVar8":"D=c43","eVar80":"%language_of_preference%","eVar84":"%navigator: useragent%","eVar87":"%login: credits available%","eVar88":"%login: number of credits%","eVar95":"%content: trafficType%","eVar96":"%content: pageName%","eVar97":"D=c46","prop17":"%member: segment%","prop18":"%member: sub segment%","prop2":"%content: category%","prop4":"%content: pageType%","prop48":"%content: site experience%","prop5":"%action_code%","prop75":"content: all pages","prop8":"%content: subCategory%","prop9":"%content: subSubCategory%","pageName":"%content: pageName%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
if(!s.eVar27){
if(s.campaign){s.eVar27="campaign"}
	else if(s.eVar3){s.eVar27="internal search"}
  else if(s.eVar34){s.eVar27="internal promotion"}
	else if(s.eVar5 == "catalog"){s.eVar27="browse: category"}//need to replace for whatever value is being used on cat pages.
	else if(s.eVar4){s.eVar27="external search"}
}
else if(document.referrer==""){s.eVar27="direct or bookmarked"}
else if(s.refDomain.indexOf("audible.com")==-1){s.eVar27="external site"}
}]}],"scope":{"URI":{"exclude":[/\/amazon-reviews\//i]}},"conditions":[function(event,target){
if(parent != window){
    s.abort = true;
}else{
    return true;
}
}],"event":"pagebottom"},
    {"name":"free membership: completes","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop1":"Free Membership Purchase Complete"}]},{"engine":"sc","command":"addEvent","arguments":["event25"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /trial-membership|Trial Membership/i);
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "adbl-checkout-typ");
}],"event":"pagebottom"},
    {"name":"free membership: step2","trigger":[{"engine":"sc","command":"addEvent","arguments":["event55"]}],"scope":{"URI":{"include":["/subscription/confirmation"]}},"event":"pagebottom"},
    {"name":"membership: completes","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop1":"Paid Membership Purchase Complete"}]},{"engine":"sc","command":"addEvent","arguments":["event24"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("product: purchase type"), /paid-membership|Paid Membership/i);
},function(){
return _satellite.textMatch(_satellite.getVar("content: pageName"), "adbl-checkout-typ");
}],"event":"pagebottom"},
    {"name":"orderConfirmPage mBox","trigger":[{"engine":"tnt","command":"addMbox","arguments":[{"mboxGoesAround":"#orderConfirmPageMboxDiv","mboxName":"orderConfirmPageKofiA","arguments":["orderId=%cart: order ID%","orderTotal=%purchase: revenue%","productPurchasedId=%product: product ID%","productPurchasedIds=%product: product IDs%"],"timeout":"1500"}]},{"command":"writeHTML","arguments":[{"html":"\u003cdiv id=\"orderConfirmPageMboxDiv\" style=\"display:none;visibility:hidden;\"\u003e\u003c/div\u003e"}]}],"scope":{"URI":{"include":["typ"]}},"event":"pagebottom"},
    {"name":"page: product page","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar6":"%content : contentType%"}]},{"engine":"sc","command":"addEvent","arguments":["event47","prodView"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products=";"+_satellite.getVar('product: product ID');
}]}],"scope":{"URI":{"include":["/pd/"]}},"event":"pagebottom"},
    {"name":"search : search results","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar3":"%search: search term%","eVar90":"%search: search results%","prop1":"Search","prop11":"D=v3","prop13":"D=v90"}]},{"engine":"sc","command":"addEvent","arguments":["event1","event20"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
if(s.eVar90==0){s.events=s.apl(s.events,"event21",",",2)}
else{s.events=s.apl(s.events,"event81="+_satellite.getVar('search: search results'),",",2)}
if (_satellite.getVar('search: author')!=""){
  s.pageName=s.eVar96='author search';
}
else if (_satellite.getVar('search: narrator')!=""){
  s.pageName=s.eVar96='narrator search';
}
}]}],"scope":{"URI":{"include":["/search"]}},"event":"pagebottom"},
    {"name":"content: all pages - (Global Mbox Parameters)","event":"aftertoolinit","scope":{"URI":{"exclude":[/\/amazon-reviews\//i]}},"trigger":[{"engine":"tnt","command":"addTargetPageParams","arguments":[{"entity.categoryId":"%content: category%","profile.language":"%language_of_preference%","loginStatus":"%user: login status%","pageType":"%content: pageType%","customerSubSegment":"%member: sub segment%","Action_Code":"%action_code%","tm_actioncode":"%tm: action_code%","Customer_Plan":"%customer_plan%","pageName":"%content: pageName%"}]}],"conditions":[function(event,target){
if(parent != window){
    s.abort = true;
}else{
    return true;
}
}]},
    {"name":"page: product page - (Global Mbox Parameters)","event":"aftertoolinit","scope":{"URI":{"include":["/pd/"]}},"trigger":[{"engine":"tnt","command":"addTargetPageParams","arguments":[{"entity.categoryId":"%content: category%","entity.id":"%product: product ID%"}]}]}
  ],
  "rules": [
    {"name":"Student Status Button","trigger":[{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-5ca4cb2464746d29290064e0.html","data":[]}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("tm: pageURL"), "https://www.audible.com/ep/students");
},function(){
return _satellite.textMatch(_satellite.getVar("realm"), "USAmazon");
}],"selector":"#images-in-tabs-button-section-desktop .bc-size-base","event":"click","bubbleFireIfParent":false,"bubbleFireIfChildFired":true,"bubbleStop":true},
    {"name":"TagDE - Add to Cart PDP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d31c3d964746d200600349f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"#adbl-buy-for-button \u003e button \u003e span","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagDE - Add to Cart Search","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cb08cde64746d6caa002419.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"button \u003e span \u003e span.bc-text.adblAddToCartText","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagDE - Add to Wishlist","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cbf377264746d71bb0001e0.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "DEAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"span.adblAddToWishlistButton","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagES - Add to Cart PDP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4a1a3664746d326d00031d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"#adbl-buy-for-button \u003e button \u003e span","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagES - Add to Cart Search","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f4a1ade64746d25a1000daa.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"button \u003e span \u003e span.bc-text.adblAddToCartText","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagES - Add to Wishlist","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5f47715864746d3a500027c4.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ESAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"span.adblAddToWishlistButton","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagFR - Add to Cart PDP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d9ee5be64746d4c2e002d0f.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"#adbl-buy-for-button \u003e button \u003e span","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagFR - Add to Cart Search","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d9ee64c64746d30b3002586.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"button \u003e span \u003e span.bc-text.adblAddToCartText","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagFR - Add to Wishlist","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d9ee53a64746d588e0003aa.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "FRAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]3[^:]*:/i);
}],"selector":"span.adblAddToWishlistButton","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagIT - Add to Cart (Library)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5dad8d0d64746d15c400167e.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "ITAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]3[^:]*:/i);
}],"selector":"adbl-buy-box-add-to-library","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagUK - Add to Cart PDP","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d54381164746d38be000082.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"#adbl-buy-for-button \u003e button \u003e span","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"TagUK - Add to Cart Search","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d5437d464746d38be000077.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("realm"), "GBAmazon");
},function(){
return _satellite.textMatch(_satellite.readCookie("notice_gdpr_prefs"), /^[^:]*3[^:]*:/i);
}],"selector":"button \u003e span \u003e span.bc-text.adblAddToCartText","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"search: search results","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop1":"Search"},"addEvent":["event1","event20"]}]}],"event":"dataelementchange(search: search term)","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false}
  ],
  "directCallRules": [
    {"name":"oneClickPause","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar105":"%product: selectedAsin%","eVar106":"%product: selectedAsinContentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: selectedAsin');
},"addEvent":["event90"]}]}]},
    {"name":"oneClickPlay","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"oneClickPlay","setVars":{"eVar105":"%product: selectedAsin%","eVar106":"%product: selectedAsinContentType%","eVar54":"%product: selectedAsinListIndex%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event18"]}]}]},
    {"name":"adblBuyBoxViewAllEpisodes","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"adblBuyBoxViewAllEpisodes","setVars":{"eVar1":"%product: selectedAsin%","eVar6":"%product: selectedAsinContentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: selectedAsin');
}}]}]},
    {"name":"audible.action.hidetitleinvoked","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listenhistory : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event220"]}]}]},
    {"name":"audioComplete","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop1":"Play Sample Complete"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

//define the variable to prevent errors
s.products="";
//loop through the data layer products array and build s.products to include just SKUS
for (var i=0;i<digitalData.product.length;i++){
  s.products=s.products+ ";"+digitalData.product[i].productInfo.productID +";" +" ;" +" ;" +";" +";"+",";
}
},"addEvent":["event28"]}]}]},
    {"name":"audioStart","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop1":"Play Sample Start"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

//define the variable to prevent errors
s.products="";
//loop through the data layer products array and build s.products to include just SKUS
for (var i=0;i<digitalData.product.length;i++){
  s.products=s.products+ ";"+digitalData.product[i].productInfo.productID +";" +" ;" +" ;" +";" +";"+",";
}
},"addEvent":["event19"]}]}]},
    {"name":"adblBuyBoxDwonlaodContent","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: selectedAsin%","eVar54":"%product: selectedAsinListIndex%","eVar6":"%product: selectedAsinContentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: selectedAsin');
},"addEvent":["event59"]}]}]},
    {"name":"addToLibrary","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: product ID%","eVar16":"%content: pageName%","eVar65":"%product: product ID%","prop1":"Add to Library"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: product ID');
},"addEvent":["event139"]}]}]},
    {"name":"removeFromLibrary","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: selectedAsin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: selectedAsin');
},"addEvent":["event219"]}]}]},
    {"name":"bannerClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar94":"%internal campaign: banner message%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event82"]}]}]},
    {"name":"redeemCancelOffer","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop1":"Cancel Membership Complete"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event67"]}]}]},
    {"name":"cancelMembershipWithoutRedeem","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event68"]}]}]},
    {"name":"cartAdd","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"add to cart","setVars":{"prop1":"Add to Cart"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

_satellite.notify("Products: " + _satellite.getVar("product: product ID"),3);
s.products = ";" + _satellite.getVar("product: product ID");
s.linkTrackVars+="products";

},"addEvent":["scAdd"]}]}]},
    {"name":"audible.action.createCollection","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event229"]}]}]},
    {"name":"audible.action.deleteCollection","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop10":"%collection:collectionCountDeleted%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event227"]}]}]},
    {"name":"buyNowCashCartAddClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: product ID%","prop1":"Buy Now Cart Add - Cash"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";" + _satellite.getVar("product: product ID");
},"addEvent":["event74"]}]}]},
    {"name":"buyNowCreditCartAddClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: product ID%","prop1":"Buy Now Add - Credit"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";" + _satellite.getVar("product: product ID");
},"addEvent":["event73"]}]}]},
    {"name":"buyNowCashPurchase","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: product ID%","eVar76":"%product: buy now type%","prop1":"Buy Now Purchase - Cash"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";" + _satellite.getVar("product: product ID");
},"addEvent":["event75"]}]}]},
    {"name":"buyNowCreditPurchase","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: product ID%","eVar170":"%product: creditPrice%","eVar76":"%product: buy now type%","prop1":"Buy Now Purchase - Credit"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";" + _satellite.getVar("product: product ID");
},"addEvent":["event76"]}]}]},
    {"name":"cancelMembershipWithoutRedeem"},
    {"name":"moveFromCartToWishlist"},
    {"name":"redeemPromoCode"},
    {"name":"wishlistRemoveClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"wishlistRemoveClick","setVars":{"prop1":"Remove From Wishlist"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}


s.products="";
},"addEvent":["event49"]}]}]},
    {"name":"membershipSignUp","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"membershipSignUp","setVars":{"eVar1":"%product: selectedAsin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event190"]}]}]},
    {"name":"socialLinkClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar92":"%social: social share name%","eVar93":"%social: content shared%","prop1":"Social Share Initiated"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event54"]}]}]},
    {"name":"freeMembershipStart","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event56"]}]}]},
    {"name":"audible.action.download","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%library:asin%","eVar54":"%library:itemIndex%","eVar6":"%library:contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event59"]}]}]},
    {"name":"audible.action.filterLibrary","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar175":"%library:newFilter%","eVar176":"%library:previousFilter%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event5"]}]}]},
    {"name":"audible.action.unavailableContent","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%library:asin%","prop1":"%library:modalMessage%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event286"]}]}]},
    {"name":"audible.action.markAsFinished","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%library:asin%","eVar6":"%library:contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event7"]}]}]},
    {"name":"audible.action.markAsUnfinished","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%library:asin%","eVar6":"%library:contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event8"]}]}]},
    {"name":"audible.action.libraryPlay","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar105":"%library:asin%","eVar106":"%library:contentType%","eVar54":"%library:itemIndex%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event18"]}]}]},
    {"name":"audible.action.removeFromLibrary","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%library:asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event219"]}]}]},
    {"name":"audible.action.sortLibrary","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar172":"%library:previousSort%","eVar173":"%library:newSort%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event6"]}]}]},
    {"name":"audible.action.jumpbackward","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar106":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event96"]}]}]},
    {"name":"audible.action.jumpforward","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar106":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event95"]}]}]},
    {"name":"audible.action.setspeed","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar106":"%listen :  contentType%","eVar164":"%listen :  newSpeed%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event99"]}]}]},
    {"name":"audible.action.next","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar142":"%listen : toTrackNumber%","eVar143":"%listen : toTrackNumber%","eVar144":"%listen : fromTrackNumber%","eVar146":"%listen : fromTrackHierarchy%","eVar6":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event93"]}]}]},
    {"name":"audible.action.pause","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar106":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event90"]}]}]},
    {"name":"audible.action.play","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar6":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event18"]}]}]},
    {"name":"audible.action.back","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar1":"%listen : asin%","eVar142":"%listen : toTrackNumber%","eVar143":"%listen : toTrackHierarchy%","eVar144":"%listen : fromTrackNumber%","eVar146":"%listen : fromTrackHierarchy%","eVar6":"%listen :  contentType%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event94"]}]}]},
    {"name":"learnMoreAboutMembershipClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"learnMoreAboutMembershipClick","setVars":{"eVar1":"%product: product ID%","prop1":"Learn More About Membership"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
}}]}]},
    {"name":"membershipPurchaseStart","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event58"]}]}]},
    {"name":"playNowFromBuyBox","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar2":"%product: product IDs%","eVar3":"%Product:podcastAsin%"},"customSetup":function(event,s){
s.products=";"+_satellite.getVar('product: selectedAsin');
},"addEvent":["event838"]}]}]},
    {"name":"audible.action.chapterselected","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event35"]}]}]},
    {"name":"audible.action.jumpbackward","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event96"]}]}]},
    {"name":"audible.action.jumpforward","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event95"]}]}]},
    {"name":"audible.action.setspeed","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event99"]}]}]},
    {"name":"audible.action.next","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event93"]}]}]},
    {"name":"audible.action.back","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event94"]}]}]},
    {"name":"audible.action.pause"},
    {"name":"audible.action.play","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%listen : asin%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event18"]}]}]},
    {"name":"ShowMoreReviewsClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"ShowMoreReviewsClick","setVars":{"eVar1":"%product: product ID%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
},"addEvent":["event228"]}]}]},
    {"name":"wishlistAddClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"wishlistAddClick","setVars":{"eVar1":"%product: product ID%","eVar6":"%product: selectedAsinContentType%","prop1":"Add To Wishlist"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";"+_satellite.getVar('product: product ID');
},"addEvent":["event48"]}]}]},
    {"name":"learnMoreAboutExtendedCatalogClick","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"learnMoreAboutExtendedCatalogClick","setVars":{"eVar1":"%product: product ID%","prop1":"Learn More About Extended Catalog"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
}}]}]},
    {"name":"reviewSubmitted","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"reviewSubmitted","setVars":{"prop1":"Review"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

s.products=";" + _satellite.getVar("product: product ID");
s.list2=_satellite.getVar("product: review");
s.linkTrackVars="list2";

},"addEvent":["event114","event149"]}]}]},
    {"name":"audible.action.reportlphprompt","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop6":"%LPH Prompt%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
}}]}]},
    {"name":"adblBuyBoxReviewIneligibleAlert","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"%product: selectedAsin%","prop70":"%review: buyboxIneligibleAlertMessage%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}
s.products=";"+_satellite.getVar('product: selectedAsin');
}}]}]},
    {"name":"searchRefinement","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar3":"D=c11","eVar90":"D=c13","prop11":"%search: search term%","prop13":"%search: search results%"},"customSetup":function(event,s){
// Check if it is the UK, DE, FR, IT or ES website
var marketReg = RegExp(/^(GB|DE|FR|IT|ES)Amazon$/,'g');
if (marketReg.test(_satellite.getVar('realm'))) {
	// If it is, abort the next s.t() call if the TrustArc cookie does not exist or does not contain '1' which indicates the inclusion of performance cookies
	var perfReg = RegExp(/^[^:]*1[^:]*:/,'g');
	if (typeof _satellite.readCookie('notice_gdpr_prefs') === 'undefined' || perfReg.test(_satellite.readCookie('notice_gdpr_prefs')) === false) {
		s.abort = true;
	}
}

if(s.eVar90=="zero"){s.events=s.apl(s.events,"event21,event81=0","",2)}
},"addEvent":["event81:%search: search results%","event90"]}]}]}
  ],
  "settings": {
    "trackInternalLinks": true,
    "libraryName": "satelliteLib-ee5a1f44328252330249a0e25cbda71e7dfe44b4",
    "isStaging": false,
    "allowGATTcalls": false,
    "downloadExtensions": /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
    "notifications": false,
    "utilVisible": false,
    "domainList": [
      "audible.com"
    ],
    "scriptDir": "843e2f5b8ab495a5f828c0b9302ff13fbaff1d33/scripts/",
    "tagTimeout": 3000
  },
  "data": {
    "URI": 
document.location.pathname + document.location.search
,
    "browser": {
    },
    "cartItems": [

    ],
    "revenue": "",
    "host": {
      "http": "images-na.ssl-images-amazon.com/images/S/audible-seo-analytics-satellitescripts/2020-09-08-01",
      "https": "images-na.ssl-images-amazon.com/images/S/audible-seo-analytics-satellitescripts/2020-09-08-01"
    }
  },
  "dataElements": {
    "action_code": {"jsVariable":"digitalData.ACTION_CODE","storeLength":"pageview"},
    "affilinet site": {"queryParam":"site","default":"n/a","storeLength":"session","ignoreCase":1},
    "AYCLItalyMembershipASIN": {"customJS":function(){
if (Array.isArray(digitalData.PLAN_ARRAY)){
  if (digitalData.PLAN_ARRAY[0] === undefined || digitalData.PLAN_ARRAY[0] == null) {
		return ""; 
	}  
 	return digitalData.PLAN_ARRAY[0].evar207
}
return "";
},"storeLength":"pageview"},
    "AYCLRomanceMembershipASIN": {"customJS":function(){
if (Array.isArray(digitalData.PLAN_ARRAY)){
  if (digitalData.PLAN_ARRAY[0] === undefined || digitalData.PLAN_ARRAY[0] == null) {
		return ""; 
	}  
 	return digitalData.PLAN_ARRAY[0].evar206
}
return "";
},"storeLength":"pageview"},
    "buy now: cash revenue": {"jsVariable":"digitalData.product[0].productInfo.cashRevenue","storeLength":"pageview"},
    "buy now: credit revenue": {"jsVariable":"digitalData.product[0].productInfo.creditRevenue","storeLength":"pageview"},
    "cancel membership: message key": {"jsVariable":"digitalData.cancel_membership_messageKey","storeLength":"pageview"},
    "cancel membership: offer": {"jsVariable":"digitalData.cancel_membership_offer","storeLength":"pageview"},
    "cancel membership: reason": {"jsVariable":"digitalData.cancel_membership_reason","storeLength":"pageview"},
    "cart: order ID": {"jsVariable":"digitalData.transaction.orderID","storeLength":"pageview"},
    "cart: purchase ID": {"jsVariable":"digitalData.cart_purchase_id","storeLength":"pageview","forceLowerCase":true},
    "collection:collectionCountDeleted": {"jsVariable":"digitalData.collectionCountDeleted","storeLength":"pageview"},
    "content: category": {"jsVariable":"digitalData.page.category.primaryCategory","default":"n/a","storeLength":"pageview","forceLowerCase":true},
    "content : contentType": {"jsVariable":"digitalData.page.pageInfo.contentType","storeLength":"pageview"},
    "content: pageName": {"jsVariable":"digitalData.page.pageInfo.pageName","storeLength":"pageview"},
    "content: pageType": {"jsVariable":"digitalData.page.category.pageType","storeLength":"pageview"},
    "content: site experience": {"jsVariable":"digitalData.SURFACE","storeLength":"pageview","forceLowerCase":true},
    "content: subCategory": {"jsVariable":"digitalData.page.category.subCategory1","default":"n/a","storeLength":"pageview","forceLowerCase":true},
    "content: subSubCategory": {"jsVariable":"digitalData.page.category.subCategory2","default":"n/a","storeLength":"pageview","forceLowerCase":true},
    "content: trafficType": {"jsVariable":"digitalData.page.pageInfo.trafficType","default":"secure","storeLength":"pageview","forceLowerCase":true},
    "content: website type": {"jsVariable":"digitalData.page.pageInfo.websiteType","storeLength":"pageview","forceLowerCase":true},
    "cookieDomain": {"customJS":function(){
var domain=document.domain;
if (domain.indexOf('www.')>=0){
    domain=domain.substring(4,domain.length);
}
return domain;
},"storeLength":"pageview"},
    "Crealytics cclid": {"queryParam":"_cclid","storeLength":"session","ignoreCase":1},
    "customer_plan": {"jsVariable":"digitalData.CUSTOMER_PLAN","storeLength":"pageview"},
    "external campaign: id": {"queryParam":"?cid=","storeLength":"pageview","forceLowerCase":true,"ignoreCase":1},
    "external campaign : source code": {"queryParam":"?source_code=","storeLength":"pageview","ignoreCase":1},
    "internal campaign: banner message": {"jsVariable":"digitalData.eventData.bannerMessage","storeLength":"pageview","forceLowerCase":true},
    "internal campaign: id": {"queryParam":"?intcid=","storeLength":"pageview","forceLowerCase":true,"ignoreCase":1},
    "language_of_preference": {"jsVariable":"digitalData.language_of_preference","storeLength":"pageview"},
    "library:asin": {"jsVariable":"digitalData.libraryAsin","storeLength":"pageview"},
    "library:contentType": {"jsVariable":"digitalData.libraryContentType","storeLength":"pageview"},
    "library:itemIndex": {"jsVariable":"digitalData.libraryItemIndex","storeLength":"pageview"},
    "library:modalMessage": {"customJS":function(){
var asin = digitalData.libraryAsin;
var elem = document.getElementById("adbl-library-modal-dtm-tracking-" + asin);
var message = elem.innerHTML.trim();
return message;
},"storeLength":"pageview"},
    "library:newFilter": {"jsVariable":"digitalData.libraryNewFilter","storeLength":"pageview"},
    "library:newSort": {"jsVariable":"digitalData.libraryNewSort","storeLength":"pageview"},
    "library:previousFilter": {"jsVariable":"digitalData.libraryPreviousFilter","storeLength":"pageview"},
    "library:previousSort": {"jsVariable":"digitalData.libraryPreviousSort","storeLength":"pageview"},
    "listenhistory : asin": {"jsVariable":"digitalData.listenHistoryAsin","storeLength":"pageview"},
    "login: credits available": {"jsVariable":"digitalData.userStatus.loginCredits","storeLength":"pageview","forceLowerCase":true},
    "login: number of credits": {"jsVariable":"digitalData.userStatus.numberOfLoginCredits","storeLength":"pageview"},
    "LPH Prompt": {"jsVariable":"digitalData.lphPrompt","storeLength":"pageview"},
    "member: ID": {"jsVariable":"digitalData.member.memberID","storeLength":"pageview"},
    "member: orderID": {"jsVariable":"digitalData.transaction.membershipOrderID","storeLength":"pageview"},
    "member: segment": {"jsVariable":"digitalData.member.memberSegment","storeLength":"pageview","forceLowerCase":true},
    "membership: purchase type": {"jsVariable":"digitalData.purchase_type","storeLength":"pageview","forceLowerCase":true},
    "membership: status": {"jsVariable":"digitalData.membership_status","storeLength":"pageview"},
    "member: sub segment": {"jsVariable":"digitalData.member.memberSubSegment","storeLength":"pageview"},
    "PLAN_ARRAY": {"jsVariable":"digitalData.PLAN_ARRAY","storeLength":"pageview"},
    "platform": {"jsVariable":"digitalData.Platform","storeLength":"pageview"},
    "PremiumMembershipASIN": {"customJS":function(){
if (Array.isArray(digitalData.PLAN_ARRAY)){
  if (digitalData.PLAN_ARRAY[0] === undefined || digitalData.PLAN_ARRAY[0] == null) {
		return ""; 
	}  
 	return digitalData.PLAN_ARRAY[0].evar205
}
return "";
},"storeLength":"pageview"},
    "preorder: revenue": {"jsVariable":"digitalData.preorder_revenue","storeLength":"pageview","forceLowerCase":true},
    "preorder: units": {"jsVariable":"digitalData.preorder_units","storeLength":"pageview","forceLowerCase":true},
    "product": {"jsVariable":"digitalData.product","storeLength":"pageview"},
    "product: buy now type": {"customJS":function(){
if (Array.isArray(digitalData.product)){
  if (digitalData.product[0] === undefined || digitalData.product[0] == null) {
      return ""; 
  }
  return digitalData.product[0].productInfo.buyNowType;
}
return "";
},"storeLength":"pageview"},
    "product: finding method": {"jsVariable":"digitalData.eventData.method","storeLength":"pageview","forceLowerCase":true},
    "product: product ID": {"customJS":function(){
if (Array.isArray(digitalData.product)){
  if (digitalData.product[0] === undefined || digitalData.product[0] == null) {
		return ""; 
	}  
	return digitalData.product[0].productInfo.productID;
}
return "";

},"storeLength":"pageview"},
    "product: product IDs": {"customJS":function(){
if (Array.isArray(digitalData.product)){
  if (digitalData.product[0] === undefined || digitalData.product[0] == null) {
		return ""; 
   }  
	var productIDs = [];
	digitalData.product.forEach(el => {
		productIDs.push(el.productInfo.productID);
	});
	return productIDs.toString();
}
return ""; 
},"storeLength":"pageview"},
    "product: productName": {"customJS":function(){
if (Array.isArray(digitalData.product)){
  if (digitalData.product[0] === undefined || digitalData.product[0] == null) {
		return ""; 
	}  
	return digitalData.product[0].productInfo.productName;
}
return "";

},"storeLength":"pageview"},
    "product: purchase type": {"jsVariable":"digitalData.transaction.purchaseType","storeLength":"pageview"},
    "product: review": {"jsVariable":"digitalData.Review","storeLength":"pageview"},
    "product: selectedAsin": {"customJS":function(){
 if (digitalData.clickedAsin === undefined || digitalData.clickedAsin == null) {
		return ""; 
	}  
	return digitalData.clickedAsin;
},"storeLength":"pageview"},
    "product: selectedAsinContentType": {"customJS":function(){
 if (digitalData.clickedAsinContentType === undefined || digitalData.clickedAsinContentType == null) {
		return ""; 
	}  
	return digitalData.clickedAsinContentType;
},"storeLength":"pageview"},
    "product: selectedAsinListIndex": {"customJS":function(){
 if (digitalData.clickedAsinListIndex === undefined || digitalData.clickedAsinListIndex == null) {
		return ""; 
	}  
	return digitalData.clickedAsinListIndex;
},"storeLength":"pageview"},
    "proxy_type": {"jsVariable":"digitalData.proxy","storeLength":"pageview"},
    "purchase: cash revenue": {"jsVariable":"digitalData.transaction.cashRevenue","storeLength":"pageview","forceLowerCase":true},
    "purchase: credit revenue": {"jsVariable":"digitalData.transaction.creditRevenue","storeLength":"pageview","forceLowerCase":true},
    "purchase: discount amount": {"jsVariable":"digitalData.transaction.discountAmount","storeLength":"pageview","forceLowerCase":true},
    "purchase: revenue": {"jsVariable":"digitalData.transaction.revenue","storeLength":"pageview","forceLowerCase":true},
    "purchase: tax amount": {"customJS":function(){
if (Array.isArray(digitalData.product)){
  if (digitalData.product[0] === undefined || digitalData.product[0] == null) {
		return ""; 
	} 
  return digitalData.product[0].productInfo.taxAmount;
}
return ""; 
},"storeLength":"pageview","forceLowerCase":true},
    "purchase: units": {"jsVariable":"digitalData.product[0].productInfo.units","storeLength":"pageview","forceLowerCase":true},
    "realm": {"jsVariable":"digitalData.realm","storeLength":"pageview"},
    "review: buyboxIneligibleAlertMessage": {"customJS":function(){
var elem = document.querySelector('button[name="adblBuyBoxReviewAlertButton"]')
if (elem) {
    return elem.getAttribute('reviewalertmessage')
} else {
    return '';
}
},"storeLength":"pageview"},
    "scAdd: cart location": {"jsVariable":"digitalData.product[0].productInfo.cartLocation","storeLength":"pageview"},
    "search: author": {"queryParam":"searchAuthor","storeLength":"pageview","forceLowerCase":true,"ignoreCase":1},
    "search: narrator": {"queryParam":"searchNarrator","storeLength":"pageview","ignoreCase":1},
    "search: search results": {"jsVariable":"digitalData.page.pageInfo.onsiteSearchResults","storeLength":"pageview","forceLowerCase":true},
    "search: search term": {"jsVariable":"digitalData.page.pageInfo.onsiteSearchTerm","storeLength":"pageview","forceLowerCase":true},
    "site: report suite id": {"jsVariable":"digitalData.REPORT_SUITE","storeLength":"pageview","forceLowerCase":true},
    "social: content shared": {"jsVariable":"digitalData.eventData.contentShared","storeLength":"pageview","forceLowerCase":true},
    "social: social share name": {"jsVariable":"digitalData.eventData.socialShareName","storeLength":"pageview","forceLowerCase":true},
    "sovendus trackingID": {"queryParam":"trackingId","default":"n/a","storeLength":"session","ignoreCase":1},
    "surface": {"jsVariable":"digitalData.SURFACE","storeLength":"pageview"},
    "tm: action_code": {"jsVariable":"digitalData.tm_action_code","storeLength":"pageview"},
    "tm: adFormSaleType": {"jsVariable":"digitalData.tm_adformsale_type","storeLength":"pageview"},
    "tm: adFormSaleTypeDesc": {"jsVariable":"digitalData.tm_adFormSaleTypeDesc","storeLength":"pageview"},
    "tm: categoryId": {"jsVariable":"digitalData.tm_category_id","storeLength":"pageview"},
    "tm: currency_code": {"jsVariable":"digitalData.tm_currency_code","storeLength":"pageview","forceLowerCase":true},
    "tm: hasMembership": {"jsVariable":"digitalData.tm_has_membership","storeLength":"pageview"},
    "tm: hasPurchasedContent": {"jsVariable":"digitalData.tm_has_purchased_content","storeLength":"pageview"},
    "tm: hasPurchasedMembership": {"jsVariable":"digitalData.tm_has_purchased_membership","storeLength":"pageview","forceLowerCase":true},
    "tm: isALCPurchase": {"jsVariable":"digitalData.tm_is_alc_purchase","storeLength":"pageview"},
    "tm: isALOPPurchase": {"jsVariable":"digitalData.tm_alop_purchase","storeLength":"pageview"},
    "tm: isCartFreebie": {"jsVariable":"digitalData.tm_is_cart_freebie","storeLength":"pageview"},
    "tm: isExistingMember": {"jsVariable":"digitalData.tm_existing_member","storeLength":"pageview"},
    "tm: isFirstOrder": {"jsVariable":"digitalData.tm_is_first_order","storeLength":"pageview"},
    "tm: isFreebiePurchase": {"jsVariable":"digitalData.tm_is_freebie_purchase","storeLength":"pageview"},
    "tm: isFreeTrial": {"jsVariable":"digitalData.tm_is_free_trial","storeLength":"pageview"},
    "tm: isGoldMemberPurchase": {"jsVariable":"digitalData.tm_is_goldmember_purchase","storeLength":"pageview"},
    "tm: isOtherMemberPurchase": {"jsVariable":"digitalData.tm_is_othermember_purchase","storeLength":"pageview","forceLowerCase":true},
    "tm: isPlatinumMemberPurchase": {"jsVariable":"digitalData.tm_is_platinummember_purchase","storeLength":"pageview"},
    "tm: isQuebecMembership": {"jsVariable":"digitalData.is_quebec_membership","storeLength":"pageview"},
    "tm: marinConversionType": {"jsVariable":"digitalData.tm_marinConversionType","storeLength":"pageview"},
    "tm: membershipAsin": {"jsVariable":"digitalData.membershipAsin","storeLength":"pageview"},
    "tm: mfaFailed": {"jsVariable":"digitalData.tm_mfa_failed","storeLength":"pageview"},
    "tm: mpuid": {"jsVariable":"digitalData.tm_mpuid","storeLength":"pageview"},
    "tm: pageGroup": {"jsVariable":"digitalData.tm_page_group","storeLength":"pageview"},
    "tm: pageIdent": {"jsVariable":"digitalData.tm_page_ident","storeLength":"pageview"},
    "tm: pageURL": {"jsVariable":"digitalData.tm_page_url","storeLength":"pageview"},
    "tm: productName": {"jsVariable":"digitalData.tm_product_name","storeLength":"pageview"},
    "tm: productPrice": {"jsVariable":"digitalData.tm_product_price","storeLength":"pageview","forceLowerCase":true},
    "tm: product_sale_type_desc": {"jsVariable":"digitalData.tm_product_sale_type_desc","storeLength":"pageview"},
    "tm: promoCode": {"jsVariable":"digitalData.tm_promo_code","storeLength":"pageview"},
    "tm: timestamp": {"jsVariable":"digitalData.tm_timestamp","storeLength":"pageview"},
    "tm: wishlist_count": {"jsVariable":"digitalData.tm_wishlist_count","storeLength":"pageview","forceLowerCase":true},
    "tm: wishlist_product_asins": {"jsVariable":"digitalData.tm_wishlist_product_asins","storeLength":"pageview"},
    "user: login status": {"jsVariable":"digitalData.userStatus.loginStatus","storeLength":"pageview","forceLowerCase":true},
    "WebSessionID": {"jsVariable":"digitalData.webSessionId","storeLength":"pageview"}
  },
  "appVersion": "7QN",
  "buildDate": "2020-09-08 17:20:50 UTC",
  "publishDate": "2020-09-08 17:20:48 UTC"
});
})(window, document);
