var uploadedDataURL="/asset/get/s/data-1463377204568-ByTVpRIz.csv",nameMap={"United States":"United States of America"};$.get(uploadedDataURL).done(function(a){var e=Papa.parse(a);myChart.setOption({title:{text:"Alcohol Consumption Per Country",subtext:`The World Health Organization (WHO)'s breakdown of per capita alcohol
consumption among adults over 15.`,sublink:"https://opendata.socrata.com/Government/Alcohol-Consumption-Per-Country/hj43-2bpj",textStyle:{fontSize:30}},visualMap:{min:0,max:15,formatter:"{value} liters / captita"},series:[{type:"map",map:"world",data:e.data.map(function(t){return{name:nameMap[t[0]]||t[0],value:t[1]}})}]})});