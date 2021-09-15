$("#nameNotEnabled").on("change",function(){
    if($('input:radio[name="1"]:checked').val() == "on"){
        $("#ullist").css("display","none");
        console.log($("#ullist").css);
    }
})
$("#nameEnabled").on("change",function(){
    if($('input:radio[name="1"]:checked').val() == "on"){
        $("#ullist").css("display","block");
        console.log($("#ullist").css);
    }
})








