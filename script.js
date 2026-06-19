// JavaScript 5-tildagi tarjimon tizimi
const translations = {
    uz: {
        marquee: "Biz bilan birga bo'ling", subtitle: "Kelajak Front-End Dasturchisi",
        tAbout: "🌌 Men haqimda", textAbout: "Salom! Mening ismim Muhriddin. Hozirda Front-End dasturlash yo'nalishini faol o'rganyapman. Veb-saytlarning ko'rinadigan qismini (UI) yaratishga qiziqaman va har kuni bilimlarimni oshirib bormoqdaman.",
        tSkills: "🚀 Ko'nikmalarim", tProjects: "💻 Mening Loyihalarim (GitHub)",
        p1Title: "IT-Platforma", p1Desc: "Ushbu loyiham dasturchilar va informatika ustozlariga dars o'tishda hamda bilimlarni ulashishda juda asqotadi.",
        p2Title: "O'yin Zonasi", p2Desc: "Bu saytim esa qiziqarli va interaktiv onlayn o'yinlar olamini o'z ichiga oladi.",
        view: "Ochish →", view2: "O'yinni ko'rish →", tContact: "📡 Aloqa & Xabar yuborish",
        pName: "Ismingiz", pMsg: "Xabaringizni shu yerga yozing...", btnSend: "Yuborish",
        navAbout: "Men haqimda", navSkills: "Ko'nikmalar", navProjects: "Loyihalarim", navContact: "Aloqa"
    },
    en: {
        marquee: "Be with us / Stay tuned with us", subtitle: "Future Front-End Developer",
        tAbout: "🌌 About Me", textAbout: "Hello! My name is Muhriddin. I am actively learning Front-End development. I love building beautiful UIs and level up my coding skills every single day.",
        tSkills: "🚀 My Skills", tProjects: "💻 My Projects (GitHub)",
        p1Title: "IT Platform", p1Desc: "This project is highly useful for software developers and IT instructors to teach and share knowledge.",
        p2Title: "Game Zone", p2Desc: "This website includes a world of fun and interactive online games.",
        view: "Open Site →", view2: "Play Game →", tContact: "📡 Contact & Send Message",
        pName: "Your Name", pMsg: "Write your message here...", btnSend: "Send Message",
        navAbout: "About Me", navSkills: "Skills", navProjects: "Projects", navContact: "Contact"
    },
    ru: {
        marquee: "Будьте с нами / Присоединяйтесь к нам", subtitle: "Будущий Front-End Разработчик",
        tAbout: "🌌 Обо мне", textAbout: "Привет! Меня зовут Мухриддин. Я активно изучаю Front-End разработку. Мне нравится создавать визуальную часть сайтов, и я каждый день улучшаю свои навыки.",
        tSkills: "🚀 Мои навыки", tProjects: "💻 Мои проекты (GitHub)",
        p1Title: "IT-Платформа", p1Desc: "Этот проект очень пригодится программистам и учителям информатики для проведения уроков и обмена знаниями.",
        p2Title: "Game Zone", p2Desc: "Этот сайт представляет собой мир интересных и интерактивных онлайн-игр.",
        view: "Открыть →", view2: "Играть →", tContact: "📡 Контакты и Сообщение",
        pName: "Ваше имя", pMsg: "Напишите ваше сообщение здесь...", btnSend: "Отправить",
        navAbout: "Обо мне", navSkills: "Навыки", navProjects: "Проекты", navContact: "Контакты"
    },
    tr: {
        marquee: "Bizimle kalın / Bizimle olun", subtitle: "Geleceğin Front-End Geliştiricisi",
        tAbout: "🌌 Hakkımda", textAbout: "Merhaba! Benim adım Muhriddin. Şu anda aktif olarak Front-End geliştirmeyi öğreniyorum. Kullanıcı arayüzleri oluşturmaya meraklıyım.",
        tSkills: "🚀 Yeteneklerim", tProjects: "💻 Projelerim (GitHub)",
        p1Title: "IT Platformu", p1Desc: "Bu proje, yazılımcıların ve bilişim öğretmenlerinin ders anlatması ogrenmesi va bilgi paylaşması için çok faydalıdır.",
        p2Title: "Game Zone", p2Desc: "Bu web sitesi eğlenceli ve etkileşimli çevrimiçi oyunların dünyasını içerir.",
        view: "Aç →", view2: "Oyunu Gör →", tContact: "📡 İletişim & Mesaj Gönder",
        pName: "Adınız", pMsg: "Mesajınızı buraya yazın...", btnSend: "Gönder",
        navAbout: "Hakkımda", navSkills: "Yetenekler", navProjects: "Projelerim", navContact: "İletişim"
    },
    ko: {
        marquee: "우리와 함께 하세요", subtitle: "미래의 프론트엔드 개발자",
        tAbout: "🌌 소개", textAbout: "안녕하세요! 제 이름은 무흐리딘입니다. 현재 프론트엔드 개발을 열심히 배우고 있습니다. 웹사이트의 시각적 요소를 만드는 것에 흥미가 있습니다.",
        tSkills: "🚀 기술 스택", p1Title: "IT 플랫폼",
        tProjects: "💻 프로젝트 (GitHub)", p1Desc: "이 프로젝트는 개발자와 정보 컴공 선생님들이 수업을 진행하고 지식을 공유하는 데 매우 유용합니다.",
        p2Title: "Game Zone", p2Desc: "이 웹사이트는 재미있고 인터랙티브한 온라인 게임의 세계를 담고 있습니다.",
        view: "열기 →", view2: "게임 보기 →", tContact: "📡 연락처 및 메시지 보내기",
        pName: "이름", pMsg: "여기에 메시지를 작성하세요...", btnSend: "보내기",
        navAbout: "소개", navSkills: "기술 스택", navProjects: "프로젝트", navContact: "연락처"
    }
};

function switchLang(lang) {
    document.getElementById('marquee-text').innerText = translations[lang].marquee;
    document.getElementById('title-about').innerText = translations[lang].tAbout;
    document.getElementById('text-about').innerText = translations[lang].textAbout;
    document.getElementById('title-skills').innerText = translations[lang].tSkills;
    document.getElementById('title-projects').innerText = translations[lang].tProjects;
    document.getElementById('p1-title').innerText = translations[lang].p1Title;
    document.getElementById('p1-desc').innerText = translations[lang].p1Desc;
    document.getElementById('p2-title').innerText = translations[lang].p2Title;
    document.getElementById('p2-desc').innerText = translations[lang].p2Desc;
    document.getElementById('p1-link').innerText = translations[lang].view;
    document.getElementById('p2-link').innerText = translations[lang].view2;
    document.getElementById('title-contact').innerText = translations[lang].tContact;
    document.getElementById('input-name').placeholder = translations[lang].pName;
    document.getElementById('input-msg').placeholder = translations[lang].pMsg;
    document.getElementById('btn-send').innerText = translations[lang].btnSend;
    
    document.getElementById('nav-about').innerText = translations[lang].navAbout;
    document.getElementById('nav-skills').innerText = translations[lang].navSkills;
    document.getElementById('nav-projects').innerText = translations[lang].navProjects;
    document.getElementById('nav-contact').innerText = translations[lang].navContact;
}

// KLAVIATURADA YOZILISH EFFEKTI (TYPING EFFECT)
const typingWords = [
    "Kelajak Front-End Dasturchisi",
    "Future Front-End Developer",
    "Будущий Front-End Разработчик",
    "Geleceğin Front-End Geliştiricisi",
    "미래의 프론트엔드 개발자"
];
let wordIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
    const currentWord = typingWords[wordIndex];
    const targetElement = document.getElementById("sub-title");
    if(!targetElement) return;
    
    if (isDeleting) {
        targetElement.innerText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetElement.innerText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        speed = 400;
    }
    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
