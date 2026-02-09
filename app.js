// 初始化markdown解析器
const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true
});

// 设置头像
function setupAvatar() {
    const avatarContainer = document.querySelector('.avatar-container');
    const avatar = document.getElementById('avatar');
    
    avatar.src = config.avatar.normal;
    avatarContainer.style.setProperty('--hover-avatar', `url(${config.avatar.hover})`);
}

// 设置社交链接
function setupSocialLinks() {
    const githubLink = document.getElementById('github-link');
    const scholarLink = document.getElementById('scholar-link');
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const resumeLink = document.getElementById('resume-link');

    githubLink.href = config.social.github;
    scholarLink.href = config.social.scholar;
    emailLink.href = `mailto:${config.social.email}`;
    linkedinLink.href = config.social.linkedin;
    resumeLink.href = config.social.resume;

    emailLink.addEventListener('click', async (event) => {
        event.preventDefault();
        const email = config.social.email;
        const message = 'Email address copied to clipboard :)';

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(email);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
        } catch (error) {
            console.error('Email copy failed:', error);
        }

        const existingToast = emailLink.querySelector('.email-toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('span');
        toast.className = 'email-toast show';
        toast.textContent = message;
        emailLink.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
        }, 100);

        setTimeout(() => {
            toast.remove();
        }, 1100);
    });
}

// 加载markdown内容
async function loadMarkdownContent(file, elementId) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const html = md.render(text);
        document.getElementById(elementId).innerHTML = html;
        
        // 为图片添加自定义类支持
        processImages(elementId);
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        document.getElementById(elementId).innerHTML = `<p>内容加载失败。</p>`;
    }
}

// 处理图片，添加自定义类支持
function processImages(elementId) {
    const container = document.getElementById(elementId);
    const images = container.querySelectorAll('img');
    
    images.forEach(img => {
        const alt = img.alt;
        
        // 检查alt文本中的尺寸标记
        if (alt.includes('[small]')) {
            img.classList.add('img-small');
            img.alt = alt.replace('[small]', '').trim();
        } else if (alt.includes('[medium]')) {
            img.classList.add('img-medium');
            img.alt = alt.replace('[medium]', '').trim();
        } else if (alt.includes('[large]')) {
            img.classList.add('img-large');
            img.alt = alt.replace('[large]', '').trim();
        }
        
        // 检查alt文本中的位置标记
        if (alt.includes('[left]')) {
            img.classList.add('img-left');
            img.alt = alt.replace('[left]', '').trim();
        } else if (alt.includes('[right]')) {
            img.classList.add('img-right');
            img.alt = alt.replace('[right]', '').trim();
        } else if (alt.includes('[center]')) {
            img.classList.add('img-center');
            img.alt = alt.replace('[center]', '').trim();
        }
    });
}

// 初始化页面
async function init() {
    setupAvatar();
    setupSocialLinks();
    
    // 根据visibility配置显示/隐藏sections
    const sections = ['about', 'publications', 'projects', 'education'];
    sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (config.visibility && config.visibility[section] === false) {
            // 隐藏section
            if (sectionElement) {
                sectionElement.style.display = 'none';
            }
        }
    });
    
    // 只加载显示的内容
    const loadPromises = [];
    if (config.visibility.about !== false) {
        loadPromises.push(loadMarkdownContent(config.content.about, 'about-content'));
    }
    if (config.visibility.publications !== false) {
        loadPromises.push(loadMarkdownContent(config.content.publications, 'publications-content'));
    }
    if (config.visibility.projects !== false) {
        loadPromises.push(loadMarkdownContent(config.content.projects, 'projects-content'));
    }
    if (config.visibility.education !== false) {
        loadPromises.push(loadMarkdownContent(config.content.education, 'education-content'));
    }
    
    await Promise.all(loadPromises);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

