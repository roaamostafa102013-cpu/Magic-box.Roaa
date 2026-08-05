$(document).ready(function(){

    $("#btn1").click(function(){
        $("#roaa").slideDown(1000)
    })

     $("#btn2").click(function(){
        $("#roaa").slideUp(1000)
    })

     $("#btn3").click(function(){
        $("#roaa").slideToggle(1000)
    })

     $("#btn4").click(function(){
        $("#roaa")
        .css("background","pink")
        .slideUp(2000)
        .slideDown(2000)
        .fadeOut(2000)
        .fadeIn(2000,function(){
            alert("🎉 Congratulations!\nYou Found The Secret Gift!");
        })
    })
})