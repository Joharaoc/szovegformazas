(function(){

  if(window.location.hash==="#info") lapoz();

  $('a.extra-info').on('click', function(e){
    lapoz();
  });

  $('#clear').on('click', function(e){
    $('#edit').html("");
  });

  $('#replace').on('click', function(e){
    $('#edit').html(formatText($('#edit')));
  });

  function lapoz(){
    $('#info').toggle();
    $('#app').toggle();
  }

  function formatText(el){

    const replaceRules=[
      {re:/<[^(br)(div)(p)][^>]+>/g, to: ''},
      {re:/<div[^>]*>/g, to: '<br>'},
      {re:/<p[^>]*>/g, to:'<br>'},
      {re:/<br>\s*<br>\s*<br>/gm, to:'<br><br>'},
      {re:/(&nbsp; *)+/g, to:' '},
      {re:/ +/g, to:' '},
      {re:/-+/g, to:'-'},
      {re:/\.\.\.+/g, to:'...'},
      {re:/ ([\.\?\!\,\:])/g, to:'$1'},
      {re:/([\.\?\!\,\:])(?! )/g, to:'$1'},
      {re:/\. \. \.+/g, to:'...'},
      {re:/\? \!/g, to:'?!'},
      {re:/\! \?/g, to:'!?'},
      {re:/\! \! \!/g, to:'$1'},
      {re:/([\(]) /g, to:'$1'},
    ];

    return replaceRules.reduce(
      (acc,{re,to})=>acc.replace(re,to),
      el.html()
    );
  }
})();
