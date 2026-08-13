function showLove(text) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerText = text;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}
