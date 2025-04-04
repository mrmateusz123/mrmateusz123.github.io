<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hodowla świnek morskich</title>
    <link rel="stylesheet" href = "styl.css">
</head>
<body>
    <header>
        <h1>Hodowla świnek morskich - zamów świnkowe maluszki</h1>
    </header>
    <section id = "menu">
        <a href="peruwianka.php">Rasa Peruwianka</a>
        <a href="american.php">Rasa American</a>
        <a href="crested.php">Rasa Crested</a>
</section>
    <section id = "prawy">
        <h3>Poznaj wszystkie rasy świnek morskich</h3>
        <ol>
            <?php
                $pol = mysqli_connect("localhost","root","","hodowla");
                $zap = "SELECT rasy.rasa FROM rasy;";
                $wyn = mysqli_query($pol,$zap);
                while($row = mysqli_fetch_array($wyn)){
                    echo "<li>$row[0]</li>";
                }
                mysqli_close($pol)
            ?>
        </ol>
    </section>
    <section id = "main">
        <img src="./pliki/american.jpg" alt="Świnka morska rasy american" id="obraz1">
        <?php
            $pol = mysqli_connect("localhost","root","","hodowla");
            $zap = "SELECT DISTINCT swinki.data_ur, swinki.miot, rasy.rasa FROM swinki JOIN rasy ON rasy.id = swinki.rasy_id WHERE rasy.id = 6;";
            $wyn = mysqli_query($pol,$zap);
            while($row = mysqli_fetch_array($wyn)){
                echo "<h2>Rasa: $row[2]</h2>
                <p>Data urodzenia: $row[0]</p>
                <p>Oznaczenie miotu: $row[1]</p>";
            }
            mysqli_close($pol)
        ?>
        <hr>
        <h2>Świnki w tym miocie</h2>
        <?php
            $pol = mysqli_connect("localhost","root","","hodowla");
            $zap = "SELECT swinki.imie, swinki.cena, swinki.opis FROM swinki WHERE swinki.rasy_id = 6;";
            $wyn = mysqli_query($pol,$zap);
            while($row = mysqli_fetch_array($wyn)){
                echo "<h3>$row[0] - $row[1] zł</h3>
                <p>$row[2]</p>";
            }
            mysqli_close($pol)
        ?>
    </section>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>
