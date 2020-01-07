function showPopup(imageId) {
	
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(imageId);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
	}
}

function installationInstructionsForMac() {
	var message = "1. Download the archive file 'Equinox.dmg.zip' into desired location,\n\n";
	message += "2. Double-click on the archive file 'Equinox.dmg.zip' and extract it to current directory,\n\n";
	message += "3. Double-click on the DMG file 'Equinox Digital Twin.dmg'. This will open the installation window.\n\n";
	message += "4. In the installation window, drag the Equinox icon onto Applications icon. This will copy Equinox into Applications directory.\n\n";
	message += "5. Right-click on the installation window and select Eject Equinox from the menu.\n\n";
	message += "6. Start Equinox via Launch Pad.";
	alert(message);
}

function installationInstructionsForWindows() {
	var message = "1. Download the archive file 'Equinox.exe.zip' into desired location,\n\n";
	message += "2. Right-click on the archive file 'Equinox.exe.zip' and extract it to desired location,\n\n";
	message += "3. Double-click on the EXE file 'Equinox.exe'. This will open the installation window.\n\n";
	message += "4. In the installation window, accept the license agreement and follow the instructions. This will install Equinox to your system.\n\n";
	message += "5. Click 'Finish' in the installation window. Equinox will be launched automatically after setup exits. Note that, a desktop shortcut and start menu item are added on your system.";
	alert(message);
}

function installationInstructionsForLinux() {
	var message = "1. Download the archive file 'Equinox.tar.gz' into desired location,\n\n";
	message += "2. Open terminal window in the download directory. Enter the command tar -xvzf Equinox.tar.gz. This will extract the directory 'EquinoxDigitalTwin' into current directory.\n\n";
	message += "3. Change to directory 'EquinoxDigitalTwin'. Enter the command chmod +x EquinoxDigitalTwin to set it executable.\n\n";
	message += "4. Enter the command ./EquinoxDigitalTwin to start Equinox.";
	alert(message);
}