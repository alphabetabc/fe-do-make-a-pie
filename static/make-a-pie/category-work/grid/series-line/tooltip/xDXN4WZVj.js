option={tooltip:{trigger:"axis",formatter:function(r,n,s){for(var e="",t=0;t<r.length;t++){var i=r[t],d=i.name,a=i.seriesName,o=i.value,l=i.color;t===0&&(e+=d+"<br/>"),e+="<div>",a==="额外信息"?(e+='<div style="border: 1px solid #FFEB3B"></div>',e+="XXXXX："+o,e+='<div style="border: 1px solid #FFEB3B"></div>'):(e+='<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+l+';"></span>',e+=a+"："+o+"W"),e+="</div>"}return e}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"收入",data:[820,932,901,934,1290,1330,1320],type:"line"},{name:"额外信息",data:["今天赚大了","今天赚大了","今天赚大了","今天赚大了","今天赚大了","今天赚大了","今天赚大了"],type:"line"}]};