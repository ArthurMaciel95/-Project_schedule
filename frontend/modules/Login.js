import validator from 'validator';

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
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
        const emailInput = el.querySelector('input[name="email')
        const passwordInput = el.querySelector('input[name=password')
        let error = false;

        for(let erroMessage of el.querySelectorAll('.text-danger')){
            erroMessage.remove()
        }


        if(!validator.isEmail(emailInput.value)){
            this.message('E-mail inválido',emailInput)
            error = true;
        }

        if(passwordInput.value.length < 6 || passwordInput.value.length > 20){
            this.message('Password deve conter entre 6 e 20 caracteres',passwordInput)
            error=true;
        }

        if(!error) el.submit();

        console.log(emailInput.value, passwordInput.value)
    }
}