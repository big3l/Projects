
function delegateEvent(fromElement, eventName, targetSelector, callback) {
    fromElement.addEventListener(eventName, event => {
        let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];

        if (targetsList.includes(event.target)) {
            callback(event);
        }
    });
}



bindEvents: function() {
    $('.new-todo').on('keyup', this.create.bind(this));
    $('.toggle-all').on('change', this.toggleAll.bind(this));
    $('.footer').on(
        'click',
        '.clear-completed',
        this.destroyCompleted.bind(this)
    );

    delegateEvent(new-todo,"keyup".this.create.bind(this));

    bindEvents: function() {
        let keyUp = document.querySelector("new-todo");
        keyUp.addEventListener("keyup", delegateEvent);
        this.create.bind(this);

        document.querySelector("toggle-all").addEventListener("change", delegateEvent);
        this.toggleAll.bind(this);

        document.querySelector("footer").addEventListener("click", ".clear-completed", delegateEvent);
        this.destroyCompleted.bind(this);
    };


    $('.todo-list')
        .on('change', '.toggle', this.toggle.bind(this))
        .on('dblclick', 'label', this.editingMode.bind(this))
        .on('keyup', '.edit', this.editKeyup.bind(this))
        .on('focusout', '.edit', this.update.bind(this))
        .on('click', '.destroy', this.destroy.bind(this));
}