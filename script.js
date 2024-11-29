function calculate(operation) {
//Dpkończ kod - pobierz liczby i sprawdź czy są poprawne
    
        a = document.getElementById("number1").value
        b = document.getElementById("number2").value
        if(isNaN(a) || isNaN(b)){    
            alert('Proszę wprowadzić prawidłowe liczby.');
        }
        else{
            return wynik(a,b,operation);

        }
    }
function wynik(a,b,operation){

    switch(operation) {
       //Dokończ funkcję działań: dodawania, odejmowania, dzielenia, mnożenia
            case operation = 1:
                    result = parseInt(a) + parseInt(b)
                break;
            case operation=2:
                    result = a - b
                break;
            case operation=3:
                    result = a * b
                break;
            case operation=4:
                if(b != 0){
                    result = a / b}
                else{
                    alert('Nie można dzielić przez zero.');
                    result = 'Nieznana operacja.'}
                break;
             //uzupełnij   alert('Nie można dzielić przez zero.');
    }

    document.getElementById('result').textContent = result;

}
