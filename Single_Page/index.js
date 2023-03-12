$(function () {

    const pages = {
        home: {
            getInstance: (c) => new Home(c),
            label: 'Home'
        },
        tops: {
            getInstance: () => new Products('Tops'),
            label: 'Tops'
        },
        pants: {
            getInstance: () => new Products('Pants'),
            label: 'Pants'
        }
    }

    
    const navigateTo = (id) => {
        pages[id].getInstance().render('#main-content');
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

    
    const navigation = new Navigation(pages, navigateTo);
    navigation.render('#navigation');

});
