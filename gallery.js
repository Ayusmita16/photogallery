
function upDate(previewPic){
		
		var urlstring="url(" + previewPic.src + ")"
		document.getElementById('image').style.backgroundImage= urlstring;
		document.getElementById('image').innerHTML=previewPic.alt;
}
function unDo(){
	//document.getElementById('image').innerHTML= 'Hover ' + 'over ' + 'an ' + 'image ' + 'below '+ 'to ' + 'display '+ 'here.';
	document.getElementById('image').innerHTML='Hover over an image below to display here.'
	x=document.getElementById('image');
		x.style.backgroundColor='#8e68ff';
		x.style.backgroundImage="url('')";
		
	}

