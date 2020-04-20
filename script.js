
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

$('#clear').on('click', function(e){
  $('#edit').html("");

});

$('#replace').on('click', function(e){

var roots=$('#edit');
for (var i = 0; i < roots.length; i++) {
  var root = $(roots[i])
  root.append(root.find("div > div"))
}

var re = new RegExp(/&nbsp;|<br>/, "g");
var prevTagName="";
$('#edit').children().each(function() {
    var $this = $(this);
        console.log($this, prevTagName);
    if($this.html().length != 0 ){
      $('#edit').append(document.createTextNode($this.html().replace(re," ")));
      $('#edit').append('<br>');
    }
    var tagName=$this.prop('tagName');
    if (tagName != 'BR' ) {
      console.log(prevTagName, tagName);
      $this.remove();
    }
    prevTagName=tagName;
});

  var content=$('#edit').html();
  console.log(content);
  content=content.replaceAll('<br> <br>','<br>');
  content=content.replaceAll('--','-');
  content=content.replaceAll('....','...');
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
