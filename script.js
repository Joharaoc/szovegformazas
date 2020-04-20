
function lapoz(){
  $('#info').toggle();
  $('#app').toggle();
}

var hash=window.location.hash;
if(hash==="#info") lapoz();

$('a.extra-info').on('click', function(e){
  lapoz();
});

$('#clear').on('click', function(e){
  $('#edit').html("");

});


$('#replace').on('click', function(e){

  var roots=$('#edit');

  for (var i = 0; i < roots.length; i++) {
    var root = $(roots[i])
    root.append(root.find("div > div"))
  }

  var html=$('#edit').html()
  var text = html.replace(/<[^(br)(div)(p)][^>]+>/g, '');
  text=text.replace(/<div[^>]+>/g, '<br>')
  text=text.replace(/<p[^>]+>/g, '<br>')
  text=text.replace(/<br>\s*<br>\s*<br>/gm, '<br><br>')
  text=text.replace(/(&nbsp;)+/g, ' ')
  text=text.replace(/ +/g, ' ')
  text=text.replace(/-+/g, '-')
  text=text.replace(/\.\.\.+/g, '...')
  text=text.replace(/ ([\.\?\!\,\:])/g, '$1')
  text=text.replace(/([\.\?\!\,\:])(?! )/g, '$1 ')
  text=text.replace(/\? \!/g, '?!')
  text=text.replace(/\! \?/g, '!?')
  text=text.replace(/\! \! \!/g, '!!!')
  text=text.replace(/ ([\)])/g, '$1')
  text=text.replace(/([\(]) /g, '$1')
  $('#edit').html(text);

});
