document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreFranchiseBtn');
    const buttonText = showMoreBtn.querySelector('.show-more-franchise-text');
    const menuListWrapper = document.querySelector('.franchiseListWrapper');
    let isExpanded = false;

    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // 버튼 상태 변경
        this.classList.toggle('expanded');
        
        // 텍스트 변경
        buttonText.textContent = isExpanded ? '접기' : '더보기';
        
        // 메뉴 리스트 표시/숨김
        menuListWrapper.classList.toggle('expanded');

        // display 속성 변경
        menuListWrapper.style.display = isExpanded ? 'block' : 'none';

        // 스크롤 애니메이션 (선택적)
        if (isExpanded) {
            menuListWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const buttonText = showMoreBtn.querySelector('.show-more-text');
    const menuListWrapper = document.querySelector('.menuListWrapper');
    let isExpanded = false;

    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // 버튼 상태 변경
        this.classList.toggle('expanded');
        
        // 텍스트 변경
        buttonText.textContent = isExpanded ? '접기' : '더보기';
        
        // 메뉴 리스트 표시/숨김
        menuListWrapper.classList.toggle('expanded');

        // display 속성 변경
        menuListWrapper.style.display = isExpanded ? 'block' : 'none';

        // 스크롤 애니메이션 (선택적)
        if (isExpanded) {
            menuListWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
