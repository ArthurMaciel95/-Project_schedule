import validator from 'validator';

export default class Cadastro{
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validate(e);
        })
    }

    message(message,campo){
        
        const areaError = document.createElement('div');
        campo.insertAdjacentElement("afterend", areaError);
        areaError.classList.add('text-danger')
        areaError.style.fontSize="14px"
        return areaError.innerHTML = message;
    }


    validate(e){
        const el = e.target;
        const inputs = el.querySelectorAll('.form-control');
        const emailInput = el.querySelector('input[name="email"]')
 
        for(let erroMessage of el.querySelectorAll('.text-danger')){
            erroMessage.remove()
        }
        


        let error = false;

        inputs.forEach(Inputs =>{
            if(!Inputs.value){
                this.message('Campo vazio', Inputs)
                error = true;
                
            }

        })
        



        if(!validator.isEmail(emailInput.value)){
            this.message('E-mail inválido',emailInput)
            error = true;
        }

  

        if(!error) el.submit();

        
    }




}