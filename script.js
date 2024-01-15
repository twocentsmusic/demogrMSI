// JavaScript (script.js)
let data = {};

document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    data.participantId = this.participantId.value;
    this.classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
});

document.getElementById('intro').addEventListener('submit', function (event) {
    event.preventDefault();
    this.classList.add('hidden');
    document.getElementById('form2').classList.remove('hidden');
});

document.getElementById('form2').addEventListener('submit', function (event) {
    event.preventDefault();
    data.sex = this.sex.value;
    data.age = this.age.value;
    data.yrsCA = this.yrsCA.value;
    var nativlangCheckboxes = document.querySelectorAll('input[name="nativlang"]:checked');

    // Initialize an array to store the values
    var nativlangValues = [];

    // Loop through each checked checkbox
    for (var i = 0; i < nativlangCheckboxes.length; i++) {
        // Add the value of the checkbox to the array
        nativlangValues.push(nativlangCheckboxes[i].value);
    }

    // Add the nativlang values to the data object
    data.nativlang = nativlangValues.join(', ');
    data.nativlangText = this.nativlangText.value;
    data.otherLang1 = this.otherLang1.value;
    data.prof1 = this.prof1.value;
    data.otherLang2 = this.otherLang2.value;
    data.prof2 = this.prof2.value;
    data.otherLang3 = this.otherLang3.value;
    data.prof3 = this.prof3.value;
    data.otherLang4 = this.otherLang4.value;
    data.prof4 = this.prof4.value;
    data.otherLang5 = this.otherLang5.value;
    data.prof5 = this.prof5.value;
    this.classList.add('hidden');
    document.getElementById('form3').classList.remove('hidden');
});

document.getElementById('form3').addEventListener('submit', function (event) {
    event.preventDefault();
    data.Qn1 = this.Qn1.value;
    data.Qn2 = this.Qn2.value;
    data.Qn3 = this.Qn3.value;
    data.Qn4 = this.Qn4.value;
    data.Qn5 = this.Qn5.value;
    data.Qn6 = this.Qn6.value;
    data.Qn7 = this.Qn7.value;
    data.Qn8 = this.Qn8.value;
    data.Qn9 = this.Qn9.value;
    data.Qn10 = this.Qn10.value;
    data.Qn11 = this.Qn11.value;
    data.Qn12 = this.Qn12.value;
    data.Qn13 = this.Qn13.value;
    data.Qn14 = this.Qn14.value;
    data.Qn15 = this.Qn15.value;
    data.Qn16 = this.Qn16.value;
    data.Qn17 = this.Qn17.value;
    data.Qn18 = this.Qn18.value;
    data.Qn19 = this.Qn19.value;
    data.Qn20 = this.Qn20.value;
    data.Qn21 = this.Qn21.value;
    data.Qn22 = this.Qn22.value;
    data.Qn23 = this.Qn23.value;
    data.Qn24 = this.Qn24.value;
    data.Qn25 = this.Qn25.value;
    data.Qn26 = this.Qn26.value;
    data.Qn27 = this.Qn27.value;
    data.Qn28 = this.Qn28.value;
    data.Qn29 = this.Qn29.value;
    data.Qn30 = this.Qn30.value;
    data.Qn31 = this.Qn31.value;
    data.Qn32 = this.Qn32.value;
    data.Qn33 = this.Qn33.value;
    data.Qn34 = this.Qn34.value;
    data.Qn35 = this.Qn35.value;
    data.Qn36 = this.Qn36.value;
    data.Qn37 = this.Qn37.value;
    data.Qn38 = this.Qn38.value;
    data.Qn39 = this.Qn39.value;
    this.classList.add('hidden');
    document.getElementById('end').classList.remove('hidden');
});

document.getElementById('end').addEventListener('submit', function (event) {
    event.preventDefault();
    // Then write the data to a CSV file
    let csvContent = "data:text/csv;charset=utf-8," 
        + Object.keys(data).map(key => `${key},${data[key]}`).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "survey_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "survey_data.csv".
});