{
    "--telefone-mask": (component,el) =>{
        
        function mascaraTelefone(tel){
            tel=tel.replace(/\D/g,"")
            tel=tel.replace(/^(\d)/,"($1")
            tel=tel.replace(/(.{3})(\d)/,"$1)$2")
            
            if(tel.length == 9)
                tel=tel.replace(/(.{1})$/,"-$1")
            else if (tel.length == 10)
                tel=tel.replace(/(.{2})$/,"-$1")
            else if (tel.length == 11) 
                tel=tel.replace(/(.{3})$/,"-$1")
            else if (tel.length == 12) 
                tel=tel.replace(/(.{4})$/,"-$1")
            else if (tel.length > 12)
                tel=tel.replace(/(.{4})$/,"-$1")
            
            return tel;
        }

        function is_tel(c) {
            if ((c = c.replace(/[^\d]/g, "")).length != 11)
                return false
        
            if (c == "00000000000" || c == "11111111111" || c == "22222222222" || c == "33333333333" || c == "44444444444" ||
                c == "55555555555" || c == "66666666666" || c == "77777777777" || c == "88888888888" || c == "99999999999" || c == "12345678910" || c == "12345678911")
                return false;
        
            return true;
        }

        el.addEventListener("keyup", function(){
            var check = document.getElementById('telResponse');
            var response = {
                valid: `<span class="pwa-input-valido">válido</span>`,
                invalid: `<span class="pwa-input-invalido">inválido</span>`
            }

            check.innerHTML = is_tel(el.value) ? response.valid : response.invalid;
            
            if(el.value == "")
                check.innerHTML = "";
        })

        el.addEventListener("keydown", function(){
            this.value = mascaraTelefone(this.value);
        })
    }
}