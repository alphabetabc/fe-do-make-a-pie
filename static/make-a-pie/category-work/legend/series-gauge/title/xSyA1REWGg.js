var data1=[{q:[{y:"西二旗",x:"13号线",id:"1",z:"3.87",t:"201601",time:"6-8时",r:"第1行"},{y:"西二旗",x:"13号线",id:"2",z:"30.20",t:"201601",time:"12-14时",r:"第1行"},{y:"西二旗",x:"13号线",id:"3",z:"30.61",t:"201601",time:"18-20时",r:"第1行"},{y:"西二旗",x:"13号线",id:"4",z:"6.46",t:"201601",time:"6-8时",r:"第2行"},{y:"西二旗",x:"13号线",id:"5",z:"56.19",t:"201601",time:"12-14时",r:"第2行"},{y:"西二旗",x:"13号线",id:"6",z:"57.24",t:"201601",time:"18-20时",r:"第2行"}]},{q:[{y:"天通苑",x:"5号线",id:"13",z:"0.93",t:"201601",time:"6-8时",r:"第1行"},{y:"天通苑",x:"5号线",id:"14",z:"5.66",t:"201601",time:"12-14时",r:"第1行"},{y:"天通苑",x:"5号线",id:"15",z:"7.19",t:"201601",time:"18-20时",r:"第1行"},{y:"天通苑",x:"5号线",id:"16",z:"1.53",t:"201601",time:"6-8时",r:"第2行"},{y:"天通苑",x:"5号线",id:"17",z:"11.41",t:"201601",time:"12-14时",r:"第2行"},{y:"天通苑",x:"5号线",id:"18",z:"13.71",t:"201601",time:"18-20时",r:"第2行"}]}];obj=createGaugeOption(data1,"q",["x","y"],"z",["r","time"]),option={title:{text:`长宽比必须是2比1
另外legend处echars还是有bug`},legend:obj.legend,series:obj.series};function createGaugeOption(datas,colName,legColName,dataColName,categoryColName){console.log(JSON.stringify(datas));for(var colors=["#3374b4","#f23b67","#04a0ea","#aad529","#f0b503","#12b5b2"],obj={},series=new Array,legs=new Array,rows=new Array,cols=new Array,n=0;n<datas.length;n++)for(var data=datas[n],d=eval("data."+colName),i=0;i<d.length;i++){var rowname=ArrToStr(d[i],categoryColName[0]),colname=ArrToStr(d[i],categoryColName[1]);$.inArray(rowname,rows)<0&&rows.push(rowname),$.inArray(colname,cols)<0&&cols.push(colname)}rows=rows.sort(fncSort),cols=cols.sort(fncSort);for(var n=0;n<datas.length;n++){var data=datas[n],d=eval("data."+colName);if(d.length>0){var lstr="";lstr=ArrToStr(d[0],legColName),legs.push({name:lstr,textStyle:{color:colors[n]}})}for(var i=0;i<d.length;i++){var rowname=ArrToStr(d[i],categoryColName[0]),colname=ArrToStr(d[i],categoryColName[1]),x=($.inArray(colname,cols)+1)/(cols.length+1),y=($.inArray(rowname,rows)+1)/(rows.length+1),size=0;size=1/rows.length-.05-.15*n;var offset=[];($.inArray(rowname,rows)*cols.length+$.inArray(colname,cols))%2==0?offset=[0,titleOffset(.15,y,size)+"%"]:offset=[titleOffset(.15,x,size)*2+"%",-10];var o={name:lstr,type:"gauge",z:100-n,min:0,max:100,splitNumber:10,center:[x*100+"%",y*100+"%"],startAngle:180,endAngle:0,radius:size*100+"%",axisLine:{lineStyle:{width:8,color:[[100,colors[n]]]}},axisTick:{length:5,lineStyle:{color:"auto"}},splitLine:{length:15,lineStyle:{color:"auto"}},pointer:{width:4},title:{show:n==0,offsetCenter:offset,textStyle:{fontWeight:"bolder",fontSize:20,fontStyle:"italic"}},detail:{show:!1},data:[{value:eval("d[i]."+dataColName),name:($.inArray(rowname,rows)*cols.length+$.inArray(colname,cols))%2==0?colname:rowname}]};series.push(o)}}return obj.series=series,obj.legend={selectedMode:!1,data:legs},obj}function ReservedDecimal(e,t){var r=e+"";return r.indexOf(".")<0?r:r.substring(0,r.indexOf(".")+t+1)}function ArrToStr(data,arr){var str="";if(isArray(arr))for(var i=0;i<arr.length;i++)i!=0&&(str+=","),str+=eval("data."+arr[i]);else str=eval("data."+arr);return str}function fncSort(e,t){var r=parseInt(e),a=parseInt(t);return r!=a?r-a:e-t}function isArray(e){return Object.prototype.toString.call(e)==="[object Array]"}function titleOffset(e,t,r){return(e-t*2)/r*100}