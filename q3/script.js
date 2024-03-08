let submit_button = document.getElementsByTagName('a')[0]; // Assuming you want the first 'a' tag, you may adjust the index as needed.
console.log(submit_button);

submit_button.addEventListener('click', function () {
    const input_tags = document.getElementsByTagName('input');
    const total = input_tags.length;

    let flag = 1;
    //checking if details are completed
    for (let i = 0; i < total; i++) {
        if (input_tags[i].value === ' '){
            console.log('Miss')
            flag=0;
            break;
        }
    }

    if (flag == 1) // all inputs are filled 
    {
        //clearing the old screen first
        document.querySelector('.section').style.opacity = '0'
        document.querySelector('.section').style.position = 'absolute'

        const h1 = document.createElement('h1');
        h1.innerText = 'Your Form Details';
        document.body.appendChild(h1);

        for (let i = 0; i < total; i++) {
            console.log('Hi');
            const h3 = document.createElement('h3');
            h3.innerText = input_tags[i].id;
            document.body.appendChild(h3);

            const h4 = document.createElement('h4');
            h4.innerText = input_tags[i].value;
            document.body.appendChild(h4);
        }
        document.querySelector('.section').style.display = 'none'

    }
    else{
        let checkbox=document.querySelector('#acceptPolicy');
        if(checkbox.value!='on')
        {
            alert('Please accept our Policy !')
        }
        else{
             alert('Some Input Fields are Missing !')
        }
    }
});

