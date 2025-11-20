// Menu hamburguesa
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-items a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuOverlay.contains(e.target)) {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
    }
});

// Menu de propuestas
const openProposals = document.getElementById('openProposals');
const closeProposals = document.getElementById('closeProposals');
const proposalsPanel = document.getElementById('proposalsPanel');

openProposals.addEventListener('click', () => {
    proposalsPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeProposals.addEventListener('click', () => {
    proposalsPanel.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.addEventListener('click', (e) => {
    if (proposalsPanel.classList.contains('active') && 
        !proposalsPanel.contains(e.target) && 
        !openProposals.contains(e.target)) {
        proposalsPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Menu de chat de whatsapp
const whatsappChatPanel = document.getElementById('whatsappChatPanel');
const closeWhatsappChat = document.getElementById('closeWhatsappChat');
const whatsappMessages = document.getElementById('whatsappMessages');
const chatAvatar = document.getElementById('chatAvatar');
const chatName = document.getElementById('chatName');
const chatRole = document.getElementById('chatRole');

// Conversaciones de whatsapp
const conversations = {
    1: {
        name: "Yallex",
        role: "Estudiante",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23667eea'/%3E%3Ctext x='50' y='60' font-size='40' fill='white' text-anchor='middle'%3EYL%3C/text%3E%3C/svg%3E",
        messages: [
            { type: "interviewee", text: "Hola Yallex, podriamos hacerte unas cuantas preguntas para conocer tu opinión de Fredonia?", time: "10:20" },
            { type: "interviewer", sender: "Yallex", text: "Claro que si", time: "10:30" },
            { type: "interviewee", text: "¿Para ti cómo son las condiciones de infraestructura y medio ambiente?", time: "10:32" },
            { type: "interviewer", sender: "Yallex", text: "Son buenas", time: "10:33" },
            { type: "interviewee", text: "¿Cómo calificarias el estado actual de las calles y vías?", time: "10:35" },
            { type: "interviewer", sender: "Yallex", text: "Para mi, regulares aún tiene mucho por mejorar", time: "10:37" },
            { type: "interviewee", text: "¿Qué ocurre en tu calle cuando llueve?", time: "10:40" },
            { type: "interviewer", sender: "Yallex", text: "No ocurre nada grave", time: "10:42" },
            { type: "interviewee", text: "¿La falta de pavimentación o el mal estado de las vías afecta la movilidad y el acceso a servicios?", time: "10:45" },
            { type: "interviewer", sender: "Yallex", text: "En demasiadas ocasiones se han presentado problemas", time: "10:52" },
            { type: "interviewee", text: "¿Cómo calificaría el servicio de recolección de basuras?", time: "10:54" },
            { type: "interviewer", sender: "Yallex", text: "No me parece demasiado bueno asi que digamos que regular", time: "10:58" },
            { type: "interviewee", text: "¿El barrio cuenta con alcantarillado pluvial?", time: "11:00" },
            { type: "interviewer", sender: "Yallex", text: "Si", time: "11:05" },
            { type: "interviewee", text: "Puedes describirnos algún problema ambiental que considere grave en su sector", time: "11:02" },
            { type: "interviewer", sender: "Yallex", text: "En el parque se ponen a fumar y botar basura", time: "11:07" },
            { type: "interviewee", text: "¿Cómo calificarías la convivencia entre los vecinos de su sector?", time: "11:09" },
            { type: "interviewer", sender: "Yallex", text: "Es buena, no ocurre ningún conflicto entre ellos", time: "11:11" },
            { type: "interviewee", text: "Para ti, ¿Qué necesita con urgencia el barrio Olaya Herrera?", time: "11:14" },
            { type: "interviewer", sender: "Yallex", text: "Mejorar los problemas sociales, culturales y educativos", time: "11:20" },
            { type: "interviewee", text: "¿Qué mensaje le daría a las autoridades de Cartagena sobre las necesidades del barrio?", time: "11:22" },
            { type: "interviewer", sender: "Yallex", text: "Hay que mejorar la vigilancia", time: "11:25" },
            { type: "interviewee", text: "¡Gracias por su colaboración!", time: "11:30" }
        ]
    },
    2: {
        name: "Marina",
        role: "Ama de casa",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23764ba2'/%3E%3Ctext x='50' y='60' font-size='40' fill='white' text-anchor='middle'%3EMP%3C/text%3E%3C/svg%3E",
        messages: [
            { type: "interviewee", text: "Hola señora Marina, podríamos hacerle unas cuantas preguntas para conocer su opinión de Fredonia?", time: "10:20" },
            { type: "interviewer", sender: "Marina", text: "Si, por supuesto", time: "10:30" },
            { type: "interviewee", text: "¿Para ti cómo son las condiciones de infraestructura y medio ambiente?", time: "10:32" },
            { type: "interviewer", sender: "Marina", text: "Muy malas, tantos años que llevo aqui y he visto pocos cambios", time: "10:33" },
            { type: "interviewee", text: "¿Cómo calificarías el estado actual de las calles y vías?", time: "10:35" },
            { type: "interviewer", sender: "Marina", text: "Algunas estan dañadas y deberían cambiarlas", time: "10:37" },
            { type: "interviewee", text: "¿Qué ocurre en tu calle cuando llueve?", time: "10:40" },
            { type: "interviewer", sender: "Marina", text: "Se inunda y a veces entra el agua en mi casa", time: "10:42" },
            { type: "interviewee", text: "¿La falta de pavimentación o el mal estado de las vías afecta la movilidad y el acceso a servicios?", time: "10:45" },
            { type: "interviewer", sender: "Marina", text: "Si, por eso mismo digo que las deben arreglar", time: "10:52" },
            { type: "interviewee", text: "¿Cómo calificaría el servicio de recolección de basuras?", time: "10:54" },
            { type: "interviewer", sender: "Marina", text: "Para mi regular, no recogen completamente las bolsas de basura", time: "10:58" },
            { type: "interviewee", text: "¿El barrio cuenta con alcantarillado pluvial?", time: "11:00" },
            { type: "interviewer", sender: "Marina", text: "Si", time: "11:05" },
            { type: "interviewee", text: "Puedes describirnos algún problema ambiental que consideres grave en tu sector", time: "11:02" },
            { type: "interviewer", sender: "Marina", text: "La contaminación del caño", time: "11:07" },
            { type: "interviewee", text: "¿Cómo calificarías la convivencia entre los vecinos de tu sector?", time: "11:09" },
            { type: "interviewer", sender: "Marina", text: "Mala, muchos vecinos son problemáticos y chismosos", time: "11:11" },
            { type: "interviewee", text: "Para ti, ¿qué necesita con urgencia el barrio Olaya Herrera?", time: "11:14" },
            { type: "interviewer", sender: "Marina", text: "Mejorar la seguridad", time: "11:20" },
            { type: "interviewee", text: "¿Qué mensaje le darías a las autoridades de Cartagena sobre las necesidades del barrio?", time: "11:22" },
            { type: "interviewer", sender: "Marina", text: "Más presencia de la policía para garantizar la seguridad de los habitantes y personas aledañas al barrio", time: "11:25" },
            { type: "interviewee", text: "¡Gracias por su colaboración!", time: "11:30" }
        ]
    },
    3: {
        name: "Viviana",
        role: "Docente",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23f093fb'/%3E%3Ctext x='50' y='60' font-size='40' fill='white' text-anchor='middle'%3EMG%3C/text%3E%3C/svg%3E",
        messages: [
            { type: "interviewee", text: "Hola señora Viviana, podríamos hacerte unas cuantas preguntas para conocer tu opinión de Fredonia?", time: "10:20" },
            { type: "interviewer", sender: "Viviana", text: "Claro que si, con mucho gusto les contesto", time: "10:30" },
            { type: "interviewee", text: "¿Para ti cómo son las condiciones de infraestructura y medio ambiente?", time: "10:32" },
            { type: "interviewer", sender: "Viviana", text: "Para mi no son tan buenas", time: "10:33" },
            { type: "interviewee", text: "¿Cómo calificarías el estado actual de las calles y vías?", time: "10:35" },
            { type: "interviewer", sender: "Viviana", text: "Muy malo la verdad, muchas de ellas se inundan cuando llueve", time: "10:37" },
            { type: "interviewee", text: "¿Qué ocurre en tu calle cuando llueve?", time: "10:40" },
            { type: "interviewer", sender: "Viviana", text: "En mi calle como te dije anteriormente se inunda y me es imposible salir a trabajar", time: "10:42" },
            { type: "interviewee", text: "¿La falta de pavimentación o el mal estado de las vías afecta la movilidad y el acceso a servicios?", time: "10:45" },
            { type: "interviewer", sender: "Viviana", text: "Si, muchas veces", time: "10:52" },
            { type: "interviewee", text: "¿Cómo calificaría el servicio de recolección de basuras?", time: "10:54" },
            { type: "interviewer", sender: "Viviana", text: "En mi opinión, excelente", time: "10:58" },
            { type: "interviewee", text: "¿El barrio cuenta con alcantarillado pluvial?", time: "11:00" },
            { type: "interviewer", sender: "Viviana", text: "Claro que si", time: "11:05" },
            { type: "interviewee", text: "Puedes describirnos algún problema ambiental que consideres grave en tu sector", time: "11:02" },
            { type: "interviewer", sender: "Viviana", text: "Bueno como te dije anteriormente el problema con las lluvias, pero aparte de eso ninguno más", time: "11:07" },
            { type: "interviewee", text: "¿Cómo calificarías la convivencia entre los vecinos de tu sector?", time: "11:09" },
            { type: "interviewer", sender: "Viviana", text: "Tenemos una muy buena relación entre nosotros", time: "11:11" },
            { type: "interviewee", text: "Para ti, ¿qué necesita con urgencia el barrio Olaya Herrera?", time: "11:14" },
            { type: "interviewer", sender: "Viviana", text: "Que implementen programas sociales, culturales y educativos", time: "11:20" },
            { type: "interviewee", text: "¿Qué mensaje le darías a las autoridades de Cartagena sobre las necesidades del barrio?", time: "11:22" },
            { type: "interviewer", sender: "Viviana", text: "El barrio necesita mayor protección policial, más apoyo a los jóvenes, empleabilidad para los jóvenes y protección al menor", time: "11:25" },
            { type: "interviewee", text: "¡Gracias por su colaboración!", time: "11:30" }
        ]
    }
};

// Abrir el chat de Whatsapp
document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', function() {
        const personId = this.getAttribute('data-person');
        openWhatsappChat(personId);
    });
});

function openWhatsappChat(personId) {
    const conversation = conversations[personId];
    
    chatName.textContent = conversation.name;
    chatRole.textContent = conversation.role;
    chatAvatar.querySelector('img').src = conversation.avatar;
    
    whatsappMessages.innerHTML = '';
    

    conversation.messages.forEach((msg, index) => {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `whatsapp-message ${msg.type}`;
            
            let messageContent = `
                <div class="message-bubble">
                    ${msg.sender ? `<div class="message-sender">${msg.sender}</div>` : ''}
                    <div class="message-text">${msg.text}</div>
                    <div class="message-time">${msg.time}</div>
                </div>
            `;
            
            messageDiv.innerHTML = messageContent;
            whatsappMessages.appendChild(messageDiv);
            
            whatsappMessages.scrollTop = whatsappMessages.scrollHeight;
        }, index * 1500);
    });
    
    whatsappChatPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
}


closeWhatsappChat.addEventListener('click', () => {
    whatsappChatPanel.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.addEventListener('click', (e) => {
    if (whatsappChatPanel.classList.contains('active') && 
        !whatsappChatPanel.contains(e.target) && 
        !e.target.closest('.profile-card')) {
        whatsappChatPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
