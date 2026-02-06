$Content = @'
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>American Fit — Sua jornada fitness começa aqui</title>
  <link rel="stylesheet" href="script.css">
</head>
<body>
  <header>
    <h1>American Fit — Sua jornada fitness começa aqui</h1>
  </header>
  <main>
    <p>Bem-vindo(a) à American Fit.</p>
  </main>
  <script src="style.js"></script>
  $Content = @'
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>American Fit — Sua jornada fitness começa aqui</title>
  <link rel="stylesheet" href="script.css">
</head>
<body>
  <header>
    <h1>American Fit — Sua jornada fitness começa aqui</h1>
  </header>
  <main>
    <p>Bem-vindo(a) à American Fit.</p>
  </main>
  <script src="style.js"></script>
</body>
</html>
'@
[System.IO.File]::WriteAllText('C:\Users\User\OneDrive\Área de Trabalho\american fit\index.html', $Content, [System.Text.Encoding]::UTF8)