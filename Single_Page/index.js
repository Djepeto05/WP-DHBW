$(() => {
    // definition of pages
    const pages = {
        
        home: () =>  new Home(),
        details: () => new Details(),
        pants: () => new Pants(), 
        
    }

    const navigateTo = (id) => {
        // navigate to page (call render function)
        pages[id]().render('#main-content');
    }

    const registerPages = () => {
        const pageKeys = Object.keys(pages);
        pageKeys.forEach(pageKey => {
            $('head').append(`<script src="pages/${pageKey}/${pageKey}.js" />`);
        });
    }
    
    const registerComponents = () => {
        const components = ['navigation', 'product'];
        components.forEach(component => {
            $('head').append(`<script src="components/${component}/${component}.js" />`);
        });
    }
    
    registerComponents();
    registerPages();
    
    const navigation = new Navigation(navigateTo);
    navigation.render('#navigation');
});

