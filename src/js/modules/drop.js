import {postData} from "./services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDeafaults, false);
        });
    });

    function preventDeafaults(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.borderRadius = '50px';    
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,0.3)';   
    }

    function unhighlight(item) {
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (item.getAttribute('data-upload') !== null) {
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6'; 
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });   

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });
    
    fileInputs.forEach(input => {
        input.addEventListener('drop', (evt) => {
            input.files = evt.dataTransfer.files;
            
            if (input.getAttribute('data-upload') !== null) {
                // сразу отправляем на сервер
                const formData = new FormData();
                formData.append('file', input.files[0]);
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                    });

            } else {
                // отражаем имя файла
                let dots;
                const array = input.files[0].name.split('.');
                array[0].length > 6 ? dots = '...' : dots = '.';
                const name = array[0].substr(0, 6) + dots + array[1];
                input.previousElementSibling.textContent = name;
            }
        });
    });
};

export default drop;