function handleMessage(event) {
	if (event.name != "toggle") return;
    if (document.body.contentEditable == "true") {
		document.body.contentEditable = false;
	} else {
		document.body.contentEditable = true;
	}
}

safari.self.addEventListener("message", handleMessage, false);