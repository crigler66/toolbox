// Start
_("#calendar").innerHTML = calendar();

//short querySelector
function _(s) {
  return document.querySelector(s);
}

// show info
function showInfo(event) {
  //link
  var url = ""

  //get json
  getjson(url, function (obj) {
    for (var key in obj) {
      if (_('[data-id="'  + key + '"]')) {
        _('[data-id="' + key + '"]').classList.add("event");
      }
      if (event === key) {
        _("#calendar_data").classList.toggle("show_data");
        //template info
        
      }
    }
  })
}
