function makeStyle(tyu,perme){var string=tyu;if(perme == true){for(let y=0;y<string.length;y++){string=string.replace("<","＜");string=string.replace(">","＞")}}var t=string.split("");var star=[];var line=[];var curl=[];var all="";for(let u=0;u<t.length;u++){if(t[u]=="*"){star.push(u)}if(t[u]=="_"){line.push(u)}if(t[u]=="~"){curl.push(u)}}if(star.length%2!=0){star.pop()}if(line.length%2!=0){line.pop()}if(curl.length%2!=0){curl.pop()}for(let r=0;r<star.length;r++){if(r%2==0){t[star[r]]="<b>"}else{t[star[r]]="</b>"}}for(let v=0;v<line.length;v++){if(v%2==0){t[line[v]]="<i>"}else{t[line[v]]="</i>"}}for(let s=0;s<curl.length;s++){if(s%2==0){t[curl[s]]="<u>"}else{t[curl[s]]="</u>"}}var dash=[];for(let oo=0;oo<t.length;oo++){if(t[oo]=="-"){dash.push(oo)}}if(dash.length%2!=0){dash.pop()}for(let j=0;j<dash.length;j++){if(j%2==0){t[dash[j]]="<p style='text-decoration: line-through;'>"}else{t[dash[j]]="</p>"}}for(let q = 0;q<t.length;q++){all+=t[q]};return unescape(all)}