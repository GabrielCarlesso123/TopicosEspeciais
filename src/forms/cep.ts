export const cep = () => {

    const input = document.querySelector<HTMLInputElement>('#cep')
    const form = document.querySelector('form')

    if (input && form) {


    }

    if (input && form) {
        input.oninput = () => {
            input.value = input.value
                .replace(/\D/g, '')
                .replace(/(\d{5})(\d{3})/, '$1-$2')

        }

        input.onblur = () => {
            if (input.validity.valid) {
                const api = `https://viacep.com.br/ws/${input.value}/json/`;

                fetch(api)
                    .then(response => response.json())
                    .then((data) => {
                        if (data.cep) {
                            Object.keys(data).forEach((name) => {
                                if (form[name]) {
                                    form[name].value = data[name]
                                }
                            })

                        } else {
                            input.style.border = "1px solid red"
                        }
                    });
            }
        }
    }
}


