var skipEmptyFieldsSubmission = function(formClass) {
    var forms = document.getElementsByClassName(formClass);
    // selection failed, we do not need to keep going
    if(forms === null) return;
    
    for(let idx = 0; idx < forms.length; ++idx) {
        let form = forms[idx];
        var inputs = form.getElementsByTagName('input');
        if(inputs === null) continue;
        
        for( let inputIdx = 0; inputIdx < inputs.length; ++inputIdx) {
            var input = inputs[inputIdx];
            
            if(input === null || input.type === 'submit') {
                continue;
            }
            
            var inputName = input.name.slice();
            input.setAttribute('data-name', inputName);
            
            if(input.value.length === 0) {
                input.name = '';
            }
            
            input.addEventListener('change', toggleInputName);
        }

        var selects = form.getElementsByTagName('select');
        for(let selectIdx = 0; selectIdx <selects.length; ++selectIdx) {
            var select = selects[selectIdx];
            if(select === null) continue;
            
            var selectName = select.name.slice();
            select.setAttribute('data-name', selectName);
            select.name = '';
            select.addEventListener('change', toggleInputName);
        }
    }
};

var toggleInputName = function() {
    if(this.value.length > 0) {
        this.name = this.getAttribute('data-name');
    }
    else {
        this.name = '';
    }
}
