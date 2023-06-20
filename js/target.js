
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return results[1] || 0;
  }
}

function initialize() {
  target = new Date($.urlParam('y'), $.urlParam('m') - 1, $.urlParam('d'), $.urlParam('hr'), $.urlParam('min'), 0, 0);
}

initialize();
