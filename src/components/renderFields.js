const renderFields = (value) => {
    const allFields = document.querySelectorAll(".input-group");

    if(value === "")
        value = "technical";

    const fieldsToShow = document.querySelectorAll(".input-group[" + value + "='true']");

    allFields.forEach((field, index) => {
        if(index !== 0)
            field.style.display = "none";
    });

    fieldsToShow.forEach(field => {
        field.style.display = "flex";
    });
}

export default renderFields;