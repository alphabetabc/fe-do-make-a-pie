var chinaContourUrl="/asset/get/s/data-1469097271266-SkyrH7CP.json";$.getJSON(chinaContourUrl,function(a){echarts.registerMap("china-contour",a),myChart.setOption({geo:[{map:"china-contour",itemStyle:{normal:{borderWidth:2,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.2)"}}},{map:"china",itemStyle:{normal:{borderColor:"#aaa"}}}]})});
