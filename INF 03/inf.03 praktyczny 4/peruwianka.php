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
    <menu>
        <a href="peruwianka.php">Rasa Peruwianka</a>
        <a href="american.php">Rasa American</a>
        <a href="crested.php">Rasa Crested</a>
    </menu>
    <section id = "prawy">
        <h3>Poznaj wszystkie rasy świnek morskich</h3>
        <ol>
            <?php
                $pol = mysqli_connect("localhost","root","","hodowla");
                $zap = "SELECT rasy.rasa FROM rasy;";
                $wyn = mysqli_query($zap);

                while($row = mysqli_fetch_array($wyn)){
                    echo "<li>$row</li>";
                }
                mysqli_close($pol)
            ?>
        </ol>
    </section>
    <main>
        <img src="./pliki/peruwianka.jpg" alt="Świnka morska rasy peruwianka" id="obraz1">
        skrypt2
        <hr>
        <h2>Świnki w tym miocie</h2>
        skrypt3
    </main>
    <footer>
        <p>Stronę wykonał: Pan Mateusz</p>
    </footer>
</body>
</html>
