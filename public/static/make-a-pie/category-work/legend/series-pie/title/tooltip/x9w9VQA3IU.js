let demo=[{x:"余额宝",y:100.02},{x:"股票",y:604.14},{x:"基金",y:300}],placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=_yAxisData();option={backgroundColor:"#06264D",title:{text:"本月闲钱收益",textStyle:{color:"#fff"},left:"center"},tooltip:{trigger:"item",formatter:function(e){let a=e.dataIndex,o=demo.length;return a===o?"":e.data.name+":"+e.data.value+"("+(Number(e.data.value/(data[0]+data[1]+data[2]))*100).toFixed(2)+"%)"},textStyle:{fontSize:12}},legend:{show:!0,right:20,top:"30%",center:["25%","50%"],orient:"vertical",itemWidth:25,itemHeight:25,textStyle:{color:"rgba(255, 255, 255, 0.8)",fontSize:19},data:["余额宝","股票","基金"]},color:_colors(),series:[{type:"pie",radius:"70%",avoidLabelOverlap:!1,hoverAnimation:!1,startAngle:180,center:["50%","60%"],data:[{value:data[0],name:"余额宝",label:{normal:{show:!0,position:"outside",formatter:function(e){let a=(Number(e.data.value/(data[0]+data[1]))*100).toFixed(2);return[`{a|余额宝}
`,`{b|${a}%}`]},rich:{a:{color:"rgba(255, 255, 255, 0.8)",fontSize:23},b:{color:"#f4b741",fontSize:28,align:"right"}}}},labelLine:{normal:{show:!0}},emphasis:{label:{show:!0,fontWeight:"bold"}}},{value:data[1],name:"股票",label:{normal:{show:!1,color:"rgba(0,0,0,0)"}},labelLine:{normal:{show:!1,color:"rgba(0,0,0,0)"},emphasis:{show:!1}},emphasis:{label:{show:!1}}},{value:data[2],name:"基金",label:{normal:{show:!1,color:"rgba(0,0,0,0)"}},labelLine:{normal:{show:!1,color:"rgba(0,0,0,0)"},emphasis:{show:!1}},emphasis:{label:{show:!1}}},{value:data[0]+data[1]+data[2],itemStyle:placeHolderStyle}]}]};function _colors(){return[new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#d4a26a"},{offset:1,color:"#dec399"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#588ec5"},{offset:1,color:"#93bbd8"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#72ede0"},{offset:1,color:"#02758a"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#db4bb4"},{offset:1,color:"#85035f"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#edd099"},{offset:1,color:"#ffa13c"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5df5af"},{offset:1,color:"#1a8764"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#53b1d9"},{offset:1,color:"#023f8a"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#db8fe6"},{offset:1,color:"#af44e6"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fa864c"},{offset:1,color:"#aa3815"}],!1),new this.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#b4dbf6"},{offset:1,color:"#3c9cff"}],!1)]}function _yAxisData(){return demo&&demo.map(e=>e.y)}