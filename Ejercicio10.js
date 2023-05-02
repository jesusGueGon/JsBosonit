function removeHTMLTags(frase)
{

    let noTags = frase.replace(/<[^>]*>/g, '');

    return noTags;

}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result); // lorem ipsum