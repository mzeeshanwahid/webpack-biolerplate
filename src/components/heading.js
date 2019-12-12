//Heading
function heading(text){
    const element = document.createElement('h1');
    element.innerText = text; //'Hello Zeeshan!';
    element.className = "text";
    element.id = "text";
    return element;
}

module.exports = heading;