class Navigation {
    render(parentSelector) {
        console.log(parentSelector);
        this.parentSelector = parentSelector;
        
        // add reference to style sheet
        $('head').append('<link rel="stylesheet" href="components/navigation/navigation.css">');

        $(parentSelector).load('.\\components\\navigation\\navigation.html');
    }
}
