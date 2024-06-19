export default function decorate(block) {
    const text = document.body.innerText || document.body.textContent;

    const words = text.match(/\b\w+\b/g);

    const wordCount = words ? words.length : 0;
}