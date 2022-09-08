option={backgroundColor:"#001c91",grid:{left:"3%",right:"5%",bottom:"5%",top:"15%",containLabel:!0},tooltip:{trigger:"axis",backgroundColor:"rgba(50,50,50,0.7)",borderWidth:0,padding:10,formatter:function(e){console.log(e);var a=e[0].name+"<br>",o=e[0].marker+"收缩压:"+e[0].value+"mmHg, ",A="舒张压:"+e[1].value+"mmHg<br>",t=e[2].marker+"收缩压:"+e[2].value+"mmHg, ",l="舒张压:"+e[3].value+"mmHg<br>";return a+o+A+t+l},textStyle:{color:"#fff",fontSize:"13"}},legend:{data:[{name:"收缩压(男)",icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAAkElEQVQokaXSwQnCQBCF4W8lBaQJsQXPYgV6SCuCd7GUXEwFFmAJEZsIWMB6yAoiYbPoD3PYN/tmmGGCNipgiTO26X3FAY/Y5I1VQfEVbqg/tB02WOOeMy8KGpy+ir+pUy5L0MaiHf1KyQR/USHM/LkYdz5FFxv7nLlkgiOGCX1IuSwlDXrjtXR4puiS1s+ZX8gUGBXgDJGMAAAAAElFTkSuQmCC"},{name:"舒张压(男)",icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAApklEQVQokaXSwQnCQBQE0BfxKJImxBY8ixXoIa0I3sVS9JICxAIsIWITEb2vh6yiEuOCA3v4M8z8nWUz2yABI2wwi/MBS5xD0W3sJ4SPcUT+ws0xxQSnLnMvYcH6I/yBPGqdyGxDQPbChafW4ILhF/8NAwjFW4Zs1+SkNPgLfe+31zIfNG/ehn0oLNqER6OUBivULXwdtU6kLKg0v6XENZ4yctUv8x3dxR+I2KAVAgAAAABJRU5ErkJggg=="},{name:"收缩压(女)",icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAAlUlEQVQokaWSMQqDQBBF3waLLb1E8ArWQbCPlwmklxxGt97CA3gEJZcQUlgmhRMQkXFIHmyxf/bPZ5Zxc1lh4Aw8gELuHXADnj42qjExNM+AHkhX2hW4ADkwauaTIaDeNP+SSk3FzWX1NoT8jGWCv0gAd/CmZfnzPYKPjbollgnuwLSjT1JTsQQMLNsSgJecINpwZP4ArGgYFYxQSi8AAAAASUVORK5CYII="},{name:"舒张压(女)",icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAArklEQVQokaWSQQrCMBBFX6SLLER6CfEKrkWoa+thBPfiYULXRXoAj1DxEi0KdRcXnUCUGAN+CGH+8P/kh1FDUZKAOXAC1lI3wB646dpEhVmC+QK4ALnHbYEVsASuMfEkYcDxw9whl14UaihKCyiPs64ndw/MvugfwBRA18b34LnZWUhL8Bcy3l9PoG4Y/zyEs65NcEtcopQEB6AL8J30okgZ0DJuSwXc5VTCtb/EL106IJ6ZnOSFAAAAAElFTkSuQmCC"}],itemWidth:24,itemHeight:8,itemGap:20,right:"2%",top:"5%",textStyle:{color:"#fff",fontSize:13}},xAxis:{type:"category",boundaryGap:!1,data:["0-10岁","11-20岁","21-40岁","41-60",">60"],axisLabel:{interval:0,margin:20,textStyle:{color:"#EBEBEB",fontSize:12}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#cbcace"}},splitLine:{show:!1}},yAxis:[{name:"单位：mmHg",nameTextStyle:{color:"#fff"},minInterval:1,type:"value",axisLabel:{margin:15,textStyle:{color:"#fff",fontSize:13}},axisLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#fff",opacity:.2}}}],series:[{name:"收缩压(男)",symbol:"circle",symbolSize:8,type:"line",itemStyle:{normal:{color:"#00a0e9",lineStyle:{width:2},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:.4,color:"rgba(0,168,255,0.0)"},{offset:.8,color:"rgba(0,160,233,0.3)"}])}}},data:[100,100,300,120,150]},{name:"舒张压(男)",symbol:"circle",symbolSize:8,type:"line",itemStyle:{normal:{color:"#00a0e9",lineStyle:{width:2,type:"dotted"},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:.4,color:"rgba(0,168,255,0.0)"},{offset:.8,color:"rgba(0,160,233,0.3)"}])}}},data:[70,80,90,85,75]},{name:"收缩压(女)",type:"line",symbol:"circle",symbolSize:8,itemStyle:{normal:{color:"#ce5a60",lineStyle:{width:2},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:.4,color:"rgba(247,71,83,0.0)"},{offset:.8,color:"rgba(247,71,83,0.3)"}])}}},data:[120,140,110,180,170]},{name:"舒张压(女)",type:"line",symbol:"circle",symbolSize:8,legendHoverLink:!1,itemStyle:{normal:{color:"#ce5a60",lineStyle:{width:2,type:"dotted"},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:.4,color:"rgba(247,71,83,0.0)"},{offset:.8,color:"rgba(247,71,83,0.3)"}])}}},data:[150,120,170,140,120]}]};
