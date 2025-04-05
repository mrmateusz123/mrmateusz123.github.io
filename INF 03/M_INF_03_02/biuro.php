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
            $pol = mysqli_connect("loaclhost","root","","biuro");
            $zap = "SELECT zdjecia.nazwaPliku,zdjecia.podpis FROM zdjecia ORDER BY 2;";
            $wyn = mysqli_query($pol,$zap);
            while($w = fetch_array($wyn)){
                echo "<figure>";
                echo "<img src=./pliki/".$w['nazwaPliku']."\" alt=\"".$w['podpis']."\" title=\"".$w['podpis']."\" />";
                echo "<figcaption>".$w['podpis']."</figcaption>";
                echo "</figure>";
            }
        ?>
        <!-- Wysyła do bazy danych zapytanie 1  
         – Dane z każdego zwróconego zapytaniem wiersza są wykorzystane do wyświetlenia kolejnych 
obrazów, w ten sposób, że pole nazwaPliku jest źródłem obrazu, a pole podpis jest tekstem 
alternatywnym obrazu oraz tekstem pokazującym się w dymku, gdy kursor znajdzie się na grafice, 
patrz Obraz 2, dymek do grafiki z Londynem -->
    </section>
    <section id="prawy">
        <h2>Kontakt</h2>
        <a href="mailto:biuro@wycieczki.pl">napisz do nas</a>
        <p>telefon: 444555666</p>
    </section>
    <section id="dane">
        <h3>W poprzednich latach byliśmy...</h3>
        <ol>
            skrypt2
        </ol>
    </section>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>