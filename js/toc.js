$(window).load(function(){var n=window.innerHeight,e=0,a=n/2,t=10,o=0,r=0,i=0,s=0,u=!1;function d(n,e,a,t){return a*(1-Math.pow(2,-10*n/t))+e}blob=$("#blob"),blobPath=$("#blob-path"),hamburger=$(".hamburger"),$(this).on("mousemove",function(n){e=n.pageX,a=n.pageY,e<60&&($("#toc").addClass("expanded"),u=!0)}),$(".hamburger, .menu-inner").on("mouseenter",function(){$(this).parent().addClass("expanded"),u=!0}),$(".menu-inner").on("mouseleave",function(){u=!1,$(this).parent().removeClass("expanded")});var m=150,b=20;window.requestAnimationFrame(function h(){t>e-1&&t<e+1?i=0:(u?r=0:(i=0,r=e>m?0:-(60+b)/100*(e-m)),i++),o>a-1&&o<a+1?s=0:(s=0,s++),t=d(i,t,r-t,100),o=d(s,o,a-o,100);var l=200,p="M60,"+n+"H0V0h60v"+(o-l)+"c0,160,"+t+",160,"+t+","+l+"S60,"+o+",60,"+(o+400)+"V"+n+"z";blobPath.attr("d",p),blob.width(t+60),hamburger.css("transform","translate("+t+"px, "+o+"px)"),$("#toc h2").css("transform","translateY("+o+"px)"),window.requestAnimationFrame(h)})});