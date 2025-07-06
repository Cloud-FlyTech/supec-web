document.addEventListener('DOMContentLoaded', function() {

    // 1. スムーススクロール機能
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // ヘッダーの高さを考慮してスクロール位置を調整
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. スクロールに応じたフェードインアニメーション
    // IntersectionObserverを使って、要素が画面内に入ったらクラスを付与
    const fadeUpElements = document.querySelectorAll('.content-section, .tech-card, .timeline-item, .developer-profile');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // 一度表示されたら監視を解除
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 10%表示されたら実行
    });

    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

});

// フェードイン用のアニメーションCSSを動的に追加
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
