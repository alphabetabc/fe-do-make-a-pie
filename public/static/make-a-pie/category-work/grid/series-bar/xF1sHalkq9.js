option={xAxis:{triggerEvent:!0,type:"category",data:["这是名称非常长的商品1","这是名称比商品1还长很多的商品2","这同样是名称很长的商品3","短的商品4"],axisLabel:{formatter:function(n){var e=n;return e.length>7&&(e=e.substring(0,6)+".."),e}}},yAxis:{type:"value"},series:[{data:[120,200,150,80],type:"bar"}]},myChart.setOption(option),extension(myChart);function extension(n){var e=document.getElementById("extension");if(!e){var o=`<div id = 'extension' sytle="display:none"></div>`;$("html").append(o)}n.on("mouseover",function(t){t.componentType=="xAxis"&&($("#extension").css({position:"absolute",color:"black","font-family":"Arial","font-size":"20px",padding:"5px",display:"inline"}).text(t.value),$("html").mousemove(function(i){var s=i.pageX-30,a=i.pageY+20;$("#extension").css("top",a).css("left",s)}))}),n.on("mouseout",function(t){t.componentType=="xAxis"&&$("#extension").css("display","none")})}