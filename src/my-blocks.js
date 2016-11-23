var myBlocks = function() {
  function loadList() {
    var savedText = sessionStorage.getItem('blocks');
    if (savedText) {
      var saved = JSON.parse(savedText);
      return saved;
    }
    return [];
  }

  function saveOne(label, xml) {
    var id = (new Date()).getTime();
    var one = {
      id: id,
      label: label,
      xml: xml
    };

    var savedList = loadList();
    savedList.push(one);

    sessionStorage.setItem('blocks', JSON.stringify(savedList));

    return loadList();
  }

  function _loadOne(id){
    var res;
    var list = loadList();
    for(var i = 0; i < list.length; i ++){
      if(list[i].id == id){
        res = list[i];
        break;
      }
    }
    return res;
  }

  function _deleteOne(id){
    var deleted = [];
    var list = loadList();
    for(var i = 0; i < list.length; i ++){
      if(list[i].id != id){
        deleted.push(list[i]);
      }
    }
    sessionStorage.setItem('blocks', JSON.stringify(deleted));
    return loadList();
  }

  var func = {
    load: function() {
      return loadList();
    },
    save: function(label, xml) {
      if(!label){
        var label = (new Date()).toString();
      }
      return saveOne(label, xml);
    },
    loadOne:function(id){
      return _loadOne(id);
    },
    deleteOne:function(id){
      return _deleteOne(id);
    }
  }

  return func;
}
