class FormItemBuilder {

    formItemObj ;

    constructor(id){
        this.formItemObj = {id};
    }

    static create = id => new FormItemBuilder(id);

    getOptions = ()=> {
        const {
            options = {}
        } = this.formItemObj;
        return options ;
    }

    setOptions = (options = {}) => {
        this.formItemObj.options = options;
    }

    addInitialValue = (initialValue) => {
        const options = this.getOptions();
        this.setOptions({initialValue});
    }
    addRules = (rule) => {
        const options = this.getOptions();
        const {
            rules = []
        } = options;
        rules.push(rule);
        options.rules = rules;
        this.setOptions({options})
    }
    addChild = (child) => {
        this.formItemObj.child = child;
    }
    addParams = (key, value) => {
        this.formItemObj[key] = value;
        return this;
    } 

    build = () => {
        let formItemObj = this.formItemObj;
        this.formItemObj = null;
        return formItemObj;
    }
}

export default FormItemBuilder;