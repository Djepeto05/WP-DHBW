// parent class to avoid typos

// clear lifecycle: create instance in index.js, 'render' function called on click
class Page {
    pageName;
    constructor(pageName, hasCssFile) {
        this.pageName = pageName;
        //Ohne If funktioniert das css file
        
            $('head').append(`<link rel="stylesheet" href=".\\pages\\${this.pageName}\\${pageName}.css" />`)
        
    }

    render(parentSelector) {
        // care: async function
        $(parentSelector).load(`.\\pages\\${this.pageName}\\${this.pageName}.html`);
    }
}