class App {
    constructor(){
        const data = new Data();
    }

    static getInstance(){
        if (!App._instance){
            App._instance = new App();
            return App._instance;
        }
        else{
            throw "App Exists";
        }

    }
    

}

(() =>{
    const app= App.getInstance()
})();