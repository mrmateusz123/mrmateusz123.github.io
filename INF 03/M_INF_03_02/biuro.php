<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poznaj Europę</title>
    <link rel="stylesheet" href="styl9.css">
</head>
<body>
    <header>
        <h1>BIURO PODRÓŻY</h1>
    </header>
    <section id="lewy">
        <h2>Promocje</h2>
        <table>
            <tr>
                <td>Warszawa</td>
                <td>od 600 zł</td>
            </tr>
            <tr>
                <td>Wenecja</td>
                <td>od 1200 zł</td>
            </tr>
            <tr>
                <td>Paryż</td>
                <td>od 1200 zł</td>
            </tr>
        </table>
    </section>
    <section id="srodkowy">
        <h2>W tym roku jedziemy do...</h2>
        <?php
            $pol = mysqli_connect("localhost","root","","podroze");
            $zap = "SELECT zdjecia.nazwaPliku,zdjecia.podpis FROM zdjecia ORDER BY 2;";
            $wyn = mysqli_query($pol,$zap);
            while($w = mysqli_fetch_array($wyn)){
                echo "<img src='./pliki/$w[0]' alt='$w[1]' title='$w[1]'>";
            }
            mysqli_close($pol);
        ?>
    </section>
    <section id="prawy">
        <h2>Kontakt</h2>
        <a href="mailto:biuro@wycieczki.pl">napisz do nas</a>
        <p>telefon: 444555666</p>
    </section>
    <section id="dane">
        <h3>W poprzednich latach byliśmy...</h3>
        <ol>
            <?php
                $pol = mysqli_connect("localhost","root","","podroze");
                $zap = "SELECT wycieczki.cel, wycieczki.dataWyjazdu FROM wycieczki WHERE wycieczki.dostepna = 0;";
                $wyn = mysqli_query($pol,$zap);
                while($w = mysqli_fetch_array($wyn)){
                    echo "<li>Dnia $w[1] pojechaliśmy do $w[0]<br></li>";
                }
                mysqli_close($pol);
            ?>
            <!-- – Skrypt 2  – Wysyła do bazy danych zapytanie 2  – Każdy zwrócony zapytaniem wiersz jest wyświetlany w elemencie listy, według wzoru: „Dnia <data> 
pojechaliśmy do <cel>”, gdzie w znakach < > zapisano pola zwracane zapytaniem  – Na końcu działania skrypt zamyka połączenie z serwerem  -->
        </ol>
    </section>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>