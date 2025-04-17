<?php
    header('refresh: 10;');
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ważenie samochodów ciężarowych</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header id="head1">
        <h1>Ważenie pojazdów we Wrocławiu</h1>
    </header>
    <header id="head2">
        <img src="./pliki/obraz1.png" alt="waga">
    </header>
    <section id="lewy">
        <h2>Lokalizacje wag</h2>
        <ol>
            <?php
                $conn = mysqli_connect("localhost",'root','','wazenietirow');
                $zap  = "SELECT lokalizacje.ulica FROM lokalizacje;";
                $wyn = mysqli_query($conn,$zap);
                while($w = mysqli_fetch_array($wyn)){
                    echo "<li> ulica ", $w[0],"</li>" ;
                }
                mysqli_close($conn);
            ?>
        </ol>
        <h2>Kontakt</h2>
        <a href="mialto:wazenie@wroclaw.pl">napisz</a>
    </section>
    <section id="srod">
        <h2>Alerty</h2>
        <table>
            <tr>
                <th>rejestracja</th>
                <th>ulica</th>
                <th>waga</th>
                <th>dzień</th>
                <th>czas</th>
            </tr>
            <?php
                $conn = mysqli_connect("localhost",'root','','wazenietirow');
                $zap  = "SELECT wagi.rejestracja, wagi.waga, wagi.dzien, wagi.czas, lokalizacje.ulica FROM wagi JOIN lokalizacje ON wagi.lokalizacje_id = lokalizacje.id;";
                $wyn = mysqli_query($conn,$zap);
                while($w = mysqli_fetch_array($wyn)){
                    echo "<tr>","<td>",$w[0],"</td>","<td>",$w[4],"</td>","<td>",$w[1],"</td>","<td>",$w[2],"</td>","<td>",$w[3],"</td>","</tr>";
                }
                mysqli_close($conn);
            ?>
        </table>
        <?php

            $conn = mysqli_connect("localhost",'root','','wazenietirow');
            $zap  = "INSERT INTO wagi (lokalizacje_id, waga, rejestracja, dzien, czas) VALUES (5, FLOOR(RAND() * 10) + 1, 'DW12345', CURRENT_DATE, CURRENT_TIME);";
            $wyn = mysqli_query($conn,$zap);
            mysqli_close($conn);

        ?>
    </section>
    <section id="prawy">
        <img src="./pliki/obraz2.jpg" alt="tir" id="obr2">
    </section>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>