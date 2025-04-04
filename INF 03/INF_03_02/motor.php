<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motocykle</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <img src="./pliki/motor.png" alt="motocykl" id="motor">
    <header>
        <h1>Motocykle - moje pasja</h1>
    </header>
    <section id = 'lewy'>
        <h2>Gdzie pojechać?</h2>
        <?php
            $pol = mysqli_connect('localhost','root','','motory');    
            $zap = "SELECT wycieczki.nazwa, wycieczki.opis, wycieczki.poczatek, zdjecia.zrodlo 
            FROM wycieczki JOIN zdjecia ON wycieczki.zdjecia_id = zdjecia.id;";
            $wynik = mysqli_query($pol,$zap);
            while($row=mysqli_fetch_row($wynik)){
                echo "<dt>$row[0], rozpoczyna się w $row[2] <a href='./pliki/$row[3].jpg'>zobacz zdjęcie</a></dt>";
                echo "<dl>$row[1]</dl>";
            }   
            $pol->close();
        ?>
    </section>
    <section id = 'prawy1'>
        <h2>Co kupić?</h2>
        <ol>
            <li>Honda CBR125R</li>
            <li>Yamaha YBR125</li>
            <li>Honda VFR800i</li>
            <li>Honda CBR1100XX</li>
            <li>BMW R1200GS LC</li>
        </ol>
    </section>
    <section id = 'prawy2'>
        <h2>Statystyki</h2>
        <p>Wpisanych wycieczek: 
            <?php 
            $pol = mysqli_connect('localhost','root','','motory');
            $zap = "Select COUNT(wycieczki.id) FROM wycieczki";
            $wynik=mysqli_query($pol,$zap);
            while($row=mysqli_fetch_row($wynik)){
                echo $row[0];
            }
            $pol->close();
            ?>
        </p>
        <p>Użytkowników forum:200</p>
        <p>Przesłanych zdjęć: 1300</p>
    </section>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>
