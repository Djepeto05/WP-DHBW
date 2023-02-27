class Navigation {
    onClickCallback;
    parentSelector;
    constructor(callback) {
        this.onClickCallback = callback;
    }

    
    
    render(parentSelector) {
        console.log(parentSelector);
        this.parentSelector = parentSelector;
        
        // add reference to style sheet
        $('head').append('<link rel="stylesheet" href="components/navigation/navigation.css">');

        $(parentSelector).load('.\\components\\navigation\\navigation.html', () => {

            

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
