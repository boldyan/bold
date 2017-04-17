/**
 * Created by PX on 2017/4/7.
 */
//文章字体缩放
$(document).ready(function(){
    $('#slider').slider({
        max:30,
        min:parseFloat($('#slider_content').css('fontSize')),
        slide:function(event,ui){
            $("#slider_content").css('fontSize',ui.value)
        }
    });
});
//tabs()显示切换
$( function() {
    $( "#tabs" ).tabs();
});
//autocomplete()自动完成
$(document).ready(function(){
    var tags = [ "eclipse", "node plus", "hbuilder", "webstore" ];
    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( tags, function( item ){
                return matcher.test( item );
            }) );
        }
    });
});
var xhr;
if (window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open(method,url,async);
xhr.send(string);
xhr.open("POST",url,async);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");//只有当Open中的method方法是POST才会有这句代码；
xhr.send(string);