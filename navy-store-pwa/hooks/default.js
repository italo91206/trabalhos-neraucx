{
    "on-page-*": component => {
        component.$hook('--functions', {}, () => { });
    },
    
    "cart-on-toggle": () => {
        var cart = document.getElementById('ns-cart');
        var bkg = document.getElementsByClassName('nv-overlay')[0];
        var body = document.querySelector('html');

        cart.classList.toggle('nv-active');
        bkg.classList.toggle('nv-is-hidden');
        body.classList.toggle('travar-scroll');
    },

    "--functions": component => {
        // window.PWA.buildStart('any', function () {
        //     console.log('nova página aberta');
        // });

        // window.PWA.previewStart('any', function () {
        //     console.log('nova página aberta');
        // });

        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    },
    "cart-transformer": component => {
        var limite = 400.00;
        var restante = (limite - component.$$cart.subtotal);

        var progressao = document.querySelector('.nv-faltam-carrinho')

        if(restante > 0)
            progressao.innerText = "Faltam apenas R$ " +  `${ restante } para você desbloquear frete grátis`;
        else
            progressao.innerHTML = "Parabéns! Você ganhou frete grátis";
    }
}