var skipEmptyFieldsSubmission = function(formClass)
{
    var forms = document.getElementsByClassName(formClass);
    for(var i=0;i<forms.length;++i)
    {
        var form = forms[i];
        var inputs = form.getElementsByTagName("input");
        for(var j=0;j<inputs.length;++j)
        {
            var input = inputs[j];
            if(input.type == "submit")
            {
                continue;
            }
            var inputName = input.name.slice();
            input.setAttribute("data-name", inputName);
            if(input.value.length == 0)
            {
                input.name = "";
            }
            input.addEventListener("change", toggleInputName);
        }

        var selects = form.getElementsByTagName("select");
        for(var j=0;j<selects.length;++j)
        {
            var select = selects[j];
            var selectName = select.name.slice();
            select.setAttribute("data-name", selectName);
            select.name = "";
            select.addEventListener("change", toggleInputName);
        }
    }
};

var toggleInputName = function()
{
    if(this.value.length > 0)
    {
        this.name = this.getAttribute("data-name");
    }
    else
    {
        this.name = "";
    }
}