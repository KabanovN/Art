const accordion = (triggersSelector, blocksSelector) => {
    const triggers = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(blocksSelector);

    function hideActiveClasses() {
        blocks.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('ui-accordion-content-active');
        });
    
        triggers.forEach(trigger => {
            trigger.classList.remove('ui-accordion-header-active');
        });

    }
    hideActiveClasses();

    triggers.forEach(item => {
        item.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (this.classList.contains('ui-accordion-header-active')) {
               hideActiveClasses();
            } else {
                hideActiveClasses();
                content.classList.toggle('hidden');
                content.classList.toggle('ui-accordion-content-active');
                this.classList.toggle('ui-accordion-header-active');
            }

        });
    });

};

export default accordion;
