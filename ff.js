
        // Accordion functionality
        let qCount = 1;
        document.querySelectorAll('.qa-item').forEach(item => {
            const qNumSpan = item.querySelector('.q-num');
            if (qNumSpan) qNumSpan.textContent = qCount++;
            
            item.querySelector('.question').addEventListener('click', () => {
                document.querySelectorAll('.qa-item').forEach(other => {
                    if (other !== item) other.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });
   // Accordion Functionality for QA Items
function initAccordions() {
    const qaItems = document.querySelectorAll('.qa-item');
    
    qaItems.forEach(item => {
        const question = item.querySelector('.question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Toggle active class on this item
                item.classList.toggle('active');
                
                // Optional: Close other open items (accordion behavior)
                // Uncomment the lines below if you want only one open at a time:
                /*
                qaItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                */
            });
        }
    });
}

// Initialize accordions after content is loaded
function enhanceLoadedContent() {
    // Re-initialize after dynamic content load
    setTimeout(() => {
        initAccordions();
    }, 300);
}

// Modify your existing loadUnitContent function
const originalLoadUnitContent = loadUnitContent;
loadUnitContent = async function(unitNum) {
    await originalLoadUnitContent(unitNum);
    enhanceLoadedContent();
};

// Also initialize on page load (in case)
document.addEventListener('DOMContentLoaded', () => {
    initAccordions();
});