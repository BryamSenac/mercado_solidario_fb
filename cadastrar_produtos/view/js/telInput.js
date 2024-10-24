export function telInput() {
    document.getElementById('phone').addEventListener('input', function (e) {
        let phone = e.target.value;
        
        // Remove tudo que não seja número
        phone = phone.replace(/\D/g, '');

        // Adiciona o parênteses ao DDD e o hífen ao número
        if (phone.length > 0) {
            phone = '(' + phone;
        }
        if (phone.length > 3) {
            phone = phone.slice(0, 3) + ') ' + phone.slice(3);
        }
        if (phone.length > 10) {
            phone = phone.slice(0, 10) + '-' + phone.slice(10);
        }

        // Limita a entrada a 15 caracteres (formato: (XX) XXXXX-XXXX)
        if (phone.length > 15) {
            phone = phone.slice(0, 15);
        }

        // Atualiza o valor no campo
        e.target.value = phone;
    });
}