var value=.5555,data=[];data.push(value),data.push(value-value*1/5),data.push(value-value*1/3),data.push(value-value*1/2),option={title:{text:"水球DEMO",textStyle:{fontWeight:"normal",fontSize:25,color:"#3EABE9"}},series:[{type:"liquidFill",data,radius:"80%",backgroundStyle:{borderWidth:10,borderColor:"red",color:"#AAEEF7"},label:{normal:{formatter:value*100+"%",textStyle:{fontSize:50}}}}]};
