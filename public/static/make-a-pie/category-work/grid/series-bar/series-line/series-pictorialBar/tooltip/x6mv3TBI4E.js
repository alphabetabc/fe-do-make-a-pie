option={backgroundColor:"#000",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return e[0].axisValueLabel+"<br />"+e[0].seriesName+": "+e[0].data}},grid:{top:40,right:20,left:50,bottom:30},xAxis:[{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{lineStyle:{color:"#FFFFFF"}},axisTick:{show:!1},axisLabel:{color:"#FFFFFF",fontSize:12,interval:0}},{type:"category",show:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,margin:10,color:"#fff",fontSize:"10"},data:[120,200,150,80,70,110,130]}],yAxis:[{max:200,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#FFFFFF"}},axisLabel:{textStyle:{color:"#FFFFFF"}}}],series:[{name:"数量",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#10bffc"},symbolRepeat:!0,symbolSize:[14,4],symbolMargin:.5,symbolPosition:"start",z:-20,data:[120,200,150,80,70,110,130],label:{normal:{show:!1,position:"top",verticalAlign:"top"}}},{name:"",type:"bar",barWidth:19,itemStyle:{color:"rgba(0,0,0,0)",borderWidth:2,borderColor:"#10bffc",padding:0},label:{show:!1},z:-10,data:[200,200,200,200,200,200,200]},{name:"",type:"line",symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAADFJREFUGJVjFNj/hwEK/jMQBxgZGBgYWNAFiAUwjcTaBrcEppEk22A2kmobAwMDAwMA74EE3gW8aacAAAAASUVORK5CYII=",symbolSize:[14,6],symbolOffset:[0,"-70%"],itemStyle:{color:"rgba(0,0,0,0)",borderWidth:2,borderColor:"#10bffc",padding:0},hoverAnimation:!1,legendHoverLink:!1,z:-10,data:[200,200,200,200,200,200,200]}]};