//Paragraph
function paragraph(text){
    const element = document.createElement('p');
    element.innerText = text;
    return element;
}

module.exports = paragraph;