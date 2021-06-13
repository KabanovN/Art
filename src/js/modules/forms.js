const forms = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name = "upload"]');

    const status = {
        loading: 'Загрузка...',
        success: 'Ваш запрос успешно отправлен!',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async(url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const array = item.files[0].name.split('.');
            array[0].length > 6 ? dots = '...' : dots = '.';
            const name = array[0].substr(0, 7) + dots + array[1];
            item.previousElementSibling.textContent = name;
        });
    });
 
    forms.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.append(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.src = status.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.append(statusImg);
        
            let statusText = document.createElement('div');
            statusText.textContent = status.loading; 
            statusMessage.append(statusText);

            const formData = new FormData(item);
            let api;
            // if (item.closest('.popup-design') || item.classList.contains('calc_form')) {
            //     api = path.designer;
            // } else {
            //     api = path.question;
            // }
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.src = status.ok;
                    statusText.textContent = status.success;
                })
                .catch(() => {
                    statusImg.src = status.fail;
                    statusText.textContent = status.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 3000);
                });
        });
    });

};

export default forms;