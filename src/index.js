import "./assets/css/style.css";
import container from "./components/container";
import heading from "./components/heading";
import paragraph from "./components/paragraph";

const paragraphText = 'Glad to see you here. If you are up till this point then it means you are enthusiastic enough to learn Webpack!';

document.body.appendChild(container);
document.getElementById('container').appendChild(heading("Hello Zeeshan!"));
document.getElementById('container').appendChild(paragraph(paragraphText));