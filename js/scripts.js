  //THIS SECTION SETS THE LINKS

function sidebarToggle(){
	//declare variables
	var openorclose;	//specify the action to perform
	var sidebarWidth;	//current width of the sidebar
	var contentWidth;	//current width of the content (main and titlebar)
	
	document.getElementById("sidebar").innerHTML = '<div id="sidebarContent"><center><p class="sidebarText1">About</p><a href="index.html" class="sidebarItem" id="sidebarLinkContact">TSA</a><a href="elia.html" class="sidebarItem" id="sidebarLinkMain">ELIA</a><a href="chapter.html" class="sidebarItem" id="sidebarLinkContact">Class Modules</a><a href="newchapter.html" class="sidebarItem" id="sidebarLinkGolf">Our Chapter</a><p class="sidebarText1">Artifical Intellegence</p><a href="tech.html" class="sidebarItem" id="sidebarLinkGolf">Available Technology</a><a href="future.html" class="sidebarItem" id="sidebarLinkGolf">Future Technology</a><a href="safety.html" class="sidebarItem" id="sidebarLinkRich">Safety Concerns</a><a href="cited.html" class="sidebarItem" id="sidebarLinkCodeMagic">Works Cited</a><center></div>';

	//check the action, and start that action
	if(document.getElementById("sidebar").style.display == "none"){
		openorclose = 0;
		contentWidth = 70;
		sidebarWidth = 0;
		var intervalId = setInterval(sidebarOpen,10);
  	}
  	else{
  		openorclose = 1;
  		contentWidth = 50;
		sidebarWidth = 20;
  		var intervalId = setInterval(sidebarClose,10);
  	}

  	//perform visibility changes
  	if(openorclose == 0){
	  	document.getElementById("sidebar").style.display = "block";
	  	document.getElementById("sidebarContent").style.display = "block";
  	}

  	//animation updates
  	function sidebarOpen(){
  		//update variables
  		contentWidth -= 1;
  		sidebarWidth += 1;
  		//perform actions
  		document.getElementById("main").style.width = contentWidth + '%';
  		document.getElementById("titlebar").style.width = contentWidth + '%';
  		document.getElementById("main").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("titlebar").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("sidebar").style.width = sidebarWidth + '%';
  		//check animation end
  		if(sidebarWidth == 20){
        		document.getElementById('sidebar').style.height = (document.getElementById('main').offsetHeight + 190) + 'px';
  			clearInterval(intervalId);
  		}
  	}

  	function sidebarClose(){
  		//update variables
  		contentWidth += 1;
  		sidebarWidth -= 1;
  		//perform actions
  		document.getElementById("main").style.width = contentWidth + '%';
  		document.getElementById("titlebar").style.width = contentWidth + '%';
  		document.getElementById("main").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("titlebar").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("sidebar").style.width = sidebarWidth + '%';
  		//check animation end
  		if(sidebarWidth == 0){
  			document.getElementById("sidebar").style.display = "none";
  			clearInterval(intervalId);
  		}
  		if(sidebarWidth <= 15){
  			document.getElementById("sidebarContent").style.display = "none";
  		}
  	}
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
