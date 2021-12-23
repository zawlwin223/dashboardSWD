$(".show-sidebar-btn").click(function(){
    $(".side-bar").animate({marginLeft:"0px"})
})
$(".hide-sidebar-btn").click(function(){
    $(".side-bar").animate({marginLeft:"-100%"})
})


  function go(url){
     location.href=(`${url}`)
  }
  let screenHeight=$(window).height();
  let currentMenuHeight=$(".side-bar .active").offset().top;
  if(currentMenuHeight>screenHeight*0.8){
    $('.side-bar').animate({
        scrollTop: currentMenuHeight
    }, 1000);
    console.log("OK")
  }