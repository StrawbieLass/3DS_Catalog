///Script by MettleSphee
///spent 45 minutes of typing this thing

function gen_default(){
	document.getElementById("episodeid").value="";
	document.getElementById("episodeNumber").value="0";
	document.getElementById("number").value="0";
	document.getElementById("age").value="0";
	document.getElementById("title").value="";
	document.getElementById("description").value="";
	document.getElementById("mediaUrl").value="";
	document.getElementById("imageUrl").value="";
}
function add_episode(){
	document.getElementById("episodeNumber").value++;
	document.getElementById("number").value++;
}
function reset_field()
{
	document.getElementsByName('result')[0].value="";
	document.getElementsByName('result2')[0].value="";
}

function gen_output(){
	///input
	var resu={};
	var resu2={}
	resu.setNode={};
	resu.setNode.id="episode:"+document.getElementById("episodeid").value+document.getElementById("episodeNumber").value;
	resu.setNode.version="649f671be9bd0e2bf9fa18d73de07d57";
	resu.setNode.type="episode";
	resu.setNode.number=document.getElementById("number").value;
	resu.setNode.ageRate=document.getElementById("age").value;
	resu.setNode.title=document.getElementById("title").value;
	resu.setNode.description=document.getElementById("description").value;
	if (document.getElementById("checkmark").checked===true){
		if (document.getElementById("description").value){
			resu.setNode.description+=" - ";
		}
		resu.setNode.description+="Episode "+document.getElementById("episodeNumber").value;
	}
	resu.setNode.mediaUrls={};
	resu.setNode.mediaUrls.en=document.getElementById("mediaUrl").value;
	resu.setNode.mediaUrls.fr=document.getElementById("mediaUrl").value;
	resu.setNode.viewCount=111;
	resu.setNode.imageUrls=document.getElementById("imageUrl").value;;
	resu.setNode.agePrerollVideo="";
	
	resu2.id=resu.setNode.id;
	resu2.version="55d29a3bf5f0ed8b98234f2b88911f4c";

	///output
	document.getElementsByName('result')[0].value+=JSON.stringify(resu)+",";
	document.getElementsByName('result2')[0].value+=JSON.stringify(resu2)+",";
}