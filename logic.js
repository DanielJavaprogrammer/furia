//Abrir Menu
document.querySelector('.abrir_menu').addEventListener("click", () => {
    const menu = document.querySelector("#menu_mobile");
    if (menu.style.right != '0px') {
        menu.style.right = '0px'
    }
})

//Fechar Menu
document.querySelector(".fechar_menu").addEventListener("click", () => {
    const fechar_menu = document.querySelector("#menu_mobile");
    fechar_menu.style.right = '-1000px'
})

//Fechar menu ao redimensionar a tela
window.addEventListener("resize", () => {
    if (window.innerWidth > 765) {
        document.querySelector("#menu_mobile").style.right = "-1000px";
    }
});


// Seletor para todos os botões que abrem o chat
document.querySelectorAll('.open-chat-button').forEach(button => {
    button.addEventListener('click', function () {
        openChatbot();
    });
});

// Função para abrir o chat diretamente
function openChatbot() {
    const chat = document.querySelector('.chatbot-furia');
    if (chat) {
        chat.classList.add('show');
    } else {
        console.log('Chatbot não encontrado.');
    }
}