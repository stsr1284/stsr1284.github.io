document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 부드러운 스크롤 구현
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            // 현재 화면 크기에 따라 보이는 요소 찾기
            const targetElement = document.querySelector(
                window.innerWidth <= 600 
                ? `.mobileSections${targetId}, .mobileDivision${targetId}` 
                : `.sections${targetId}, .division${targetId}`
            ) || document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // 화면의 가운데에 위치하도록 설정
                });
            }
        });
    });

    // Intersection Observer 설정
    const observerOptions = {
        threshold: 0.4  // 임계값을 0.2로 낮춤
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                // 모든 링크의 활성 상태 제거
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // href와 현재 보이는 섹션의 id가 일치하면 활성화
                    if (link.getAttribute('href') === '#' + targetId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // 관찰할 요소들 설정
    const sections = document.querySelectorAll('#why, #join, #story, #greeting, #franchise, #menu, #contact');
    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });

    // 화면 크기 변경 시 Observer 재설정
    window.addEventListener('resize', () => {
        sections.forEach(section => {
            if (section) {
                observer.unobserve(section);
                observer.observe(section);
            }
        });
    });
});