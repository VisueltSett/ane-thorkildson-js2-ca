export function feedbackMessage(messageType, messageText, target){
    const targetElement = document.querySelector(target);
    targetElement.innerHTML = `<div class="feedbackMessage ${messageType}"> ${messageText}</div>`;
}