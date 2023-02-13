$(() => {
    const registerComponents = () => {
        const components = ['navigation'];
        components.forEach(component => {
            $('head').append(`<script src="components/${component}/${component}.js" />`);
        });
    }
    
    registerComponents();
    
    const navigation = new Navigation();
    navigation.render('#navigation');
});

