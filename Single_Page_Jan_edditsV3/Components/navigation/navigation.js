class Navigation {
    onClickCallback;
    parentSelector;
    pages;
    constructor(pages, callback) {
        this.onClickCallback = callback;
        this.pages = pages;
    }

    render(parentSelector) {
        console.log(parentSelector);
        this.parentSelector = parentSelector;
        
        // add reference to style sheet
        $('head').append('<link rel="stylesheet" href="components/navigation/navigation.css">');

        // load html file async
        $(parentSelector).load('.\\components\\navigation\\navigation.html', () => {

            // register dynamic links to pages
            const pageKeys = Object.keys(this.pages);
            pageKeys.forEach((pageKey) => {
                $(`${parentSelector} .navigation`).append(`<a id="${pageKey}">${this.pages[pageKey].label}</a>`)
            });

            // register for click events
            $(`${parentSelector} a`).on('click', (e) => {
                console.log('clicked!', e);
                console.log(this.onClickCallback);
                this.navigateTo(e.target.id);
            });
        });
    }

    navigateTo(id) {
        // mark active page
        $(`${this.parentSelector} a`).removeClass('active');
        $(`${this.parentSelector} a#${id}`).addClass('active');

        // inform parent about change
        this.onClickCallback(id);
    }
}