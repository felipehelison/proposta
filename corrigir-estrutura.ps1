# Defina o diretório raiz do seu projeto
$DiretorioRaiz = "C:\Users\Felipe\Documents\AllianceSistema\frontend\src"

# Função para garantir a criação de diretórios
function Criar-Pasta-Segura {
    param ($Path)
    if (-not (Test-Path $Path)) {
        New-Item -ItemType Directory -Path $Path | Out-Null
        Write-Host "Criada pasta: $Path"
    } else {
        Write-Host " Já existe: $Path"
    }
}

# Corrigir nome Pages → pages
$pagesCaminho = Join-Path $DiretorioRaiz "Pages"
$pagesNovoCaminho = Join-Path $DiretorioRaiz "pages"
if (Test-Path $pagesCaminho) {
    Rename-Item -Path $pagesCaminho -NewName "pages"
    Write-Host "Renomeado: Pages para pages"
}

# Apagar componente duplicado ClientRegister.jsx fora da pasta auth
$arquivoDuplicado = Join-Path $DiretorioRaiz "components\ClientRegister.jsx"
if (Test-Path $arquivoDuplicado) {
    Remove-Item $arquivoDuplicado
    Write-Host "Deletado duplicado: components/ClientRegister.jsx"
}

# Criar pastas obrigatórias
Criar-Pasta-Segura (Join-Path $DiretorioRaiz "context")
Criar-Pasta-Segura (Join-Path $DiretorioRaiz "hooks")
Criar-Pasta-Segura (Join-Path $DiretorioRaiz "services")
Criar-Pasta-Segura (Join-Path $DiretorioRaiz "assets\styles")

# Finalização
Write-Host ""
Write-Host "Estrutura reorganizada com sucesso!"
