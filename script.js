// main style file url to inject
const custom_style_url = "https://raw.githubusercontent.com/HadiDastangoo/ChatGPTdemo.net-RTL-Style/main/style.css";

function loadStyle( file_url ) {
	const file_ref = document.createElement("link");
	file_ref.setAttribute("rel", "stylesheet");
	file_ref.setAttribute("type", "text/css");
	file_ref.setAttribute("href", file_url);
	document.getElementsByTagName("head")[0].appendChild(file_ref);
}

loadStyle( custom_style_url );
