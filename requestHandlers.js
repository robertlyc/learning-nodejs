function start () {
	console.log("Request hanlder 'start' was called.");
	return "Hello Strat";
}

function upload () {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;