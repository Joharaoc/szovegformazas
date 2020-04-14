
const irasjelek=",;:.!?)";

String.prototype.remove_spacechar = function (char) {
    var temp=this;
    var spacechar=' '+char;
    while (temp.indexOf(spacechar) !== -1) {
      temp=temp.replace(spacechar, char);
    }
    return temp;
};
String.prototype.replaceAll = function (a,b) {
    var temp=this;
    while (temp.indexOf(a) !== -1) {
      temp=temp.replace(a, b);
    }
    return temp;
};


function lapoz(){
  $('#info').toggle();
  $('#app').toggle();
}

var hash=window.location.hash;
if(hash==="#info") lapoz();

$('a.extra-info').on('click', function(e){
  lapoz();
});

$('#divborder').on('click', function(e){
  if($('#edit').hasClass('active')){
    $('#divborder').removeClass('active');
    $('#edit').removeClass('active');

  }else if ($('#edit div').length) {
    $('#divborder').addClass('active');
    $('#edit').addClass('active');
  }


});

$('#replace').on('click', function(e){
  $('#edit div').removeAttr('style');

  var content=$('#edit').html();
  content=content.replaceAll('&nbsp;',' ');
  content=content.replaceAll('--','-');
  content=content.replaceAll('....','...');
  content=content.replaceAll('<div><br></div><div><br></div>','<div><br></div>');
  content=content.replaceAll('<div><div>','<div>');
  content=content.replaceAll('</div></div>','</div>');
  content=content.replaceAll('<div></div><div></div>','<div></div>');
  content=content.replace(/^ /g,'');
  content=content.replace(/-/g,' - ');
  content=content.replace(/\+/g,' + ');
  content=content.replace(/\*/g,' * ');
  content=content.replace(/=/g,' = ');
  content=content.replace(/\(/g,' (');
  content=content.replace(/\( /g,'(');

  for (var i = 0; i < irasjelek.length; i++) {
    var irasjel = irasjelek.charAt(i);
    var re = new RegExp('\\'+irasjel,"g");
    content=content.replace(re,irasjel+" ");
    content=content.remove_spacechar(irasjel);
  }
  content=content.replaceAll('  ',' ');


  $('#edit').html(content);
});
