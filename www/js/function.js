Url = {
    get get(){
        var vars= {};
        if(window.location.search.length!==0)
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
                key=decodeURIComponent(key);
                if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
                else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
            });
        return vars;
    }
};

$(".otherApp").bind("click",function(){
	e.preventDefault();

	var target = "_system";
	var options = "location=yes";
	var url = "https://play.google.com/store/apps/developer?id=Sky+Explorer";
	window.open(url, target, options);
	
})