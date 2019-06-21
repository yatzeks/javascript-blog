var buttonTest;
// tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonTest = document.getElementById('button-test');
// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty");

    // tu znajdzie się cała dotychczasowa zawartość pliku js/script.js
    // czyli efekt ćwiczenia z poprzedniego submodułu
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)
