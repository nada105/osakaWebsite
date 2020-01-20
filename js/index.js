

//b7dd position bta3 el session elly b3d el home
let aboutOffset=$("#about").offset().top;
$(window).scroll(function(){
let wScroll=$(window).scrollTop();//b7dd mkan el scroll
if(wScroll>aboutOffset -30)//30 de space y3ni abl mkan about b 30px
{
$("nav").addClass("bg-black");//add el class wchange backGround
$("#btnUp").fadeIn(500)
//let taha = setInterval(incr,20)
}
else
{
$("#btnUp").fadeOut(500)//by4el display none l botton
$("nav").removeClass("bg-black");//byrg3 el nav transparent
$("#demoh").text(0)//byrg3 el counter l zero
}
})

/*event backButton*/

$("#btnUp").click(function(){
//$(window).scrollTop(0)//m4 hy4t8l 34an m4 bya5od el window
$("html,body").animate({scrollTop:'0'},1000)//lazm aktb el 2 parm (html, body) 34an m4 kol el browsers bta5od el etnen
})

//lma ados 3la ay link yro7 3le7
$("a[href^='#']").click(function(){
    let aHref=$(this).attr("href");//#home , #about 4of rlly gwah eh
    $("html,body").animate({scrollTop:$(aHref).offset().top},1000) //w 5od7a hna w 4of el top bt37a w e3ml scroll llbody l 7ad el section elly m3ak
    })

//el Counter

/*function incr()
{
let Num=Number($("#demoh").text());
Num++;
if(Num==501)
{
clearInterval(taha);
}
$("#demoh").text(Num)
}*/



$(document).ready(function (){

    
    $("#loading").fadeOut(2000 , function (){
        $("body").css("overflow" , "auto")
    })
    
})

/**************color box*********/

let colorContainer =$(".color-item");
colorContainer.eq(0).css("background-color","#09c")
colorContainer.eq(1).css("background-color","tomato")
colorContainer.eq(2).css("background-color","lightblue")
colorContainer.eq(3).css("background-color","chocolate")
colorContainer.eq(4).css("background-color","red")
colorContainer.eq(5).css("background-color","pink")

colorContainer.click(function (){
    let col= $(this).css("backgroundColor")
    $(".change").css("color",col)
})


$("#options-container i").click(function(){

    let boxWidth = $(".Option-box").outerWidth(true);

    if($("#options-container").css("left") == "0px")
    {
        $("#options-container").animate({left:`-${boxWidth}px`} ,1000)
    }
    else{
        $("#options-container").animate({left:`0px`},1000)
    }
})





