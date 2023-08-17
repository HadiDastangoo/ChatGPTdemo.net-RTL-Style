// main style file url to inject
const file_url = "https://raw.githubusercontent.com/HadiDastangoo/ChatGPTdemo.net-RTL-Style/main/style.css";

const file_ref = document.createElement("link");
file_ref.setAttribute("rel", "stylesheet");
file_ref.setAttribute("type", "text/css");
file_ref.setAttribute("href", file_url);

// inject css file
document.getElementsByTagName("head")[0].appendChild(file_ref);
