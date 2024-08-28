# Guia para Iniciantes: Git e GitHub

Este guia ajudará você a começar com Git e GitHub. Siga os passos abaixo para configurar seu ambiente e começar a usar o controle de versão.

## 1. Configurações do Git

Antes de começar a usar o Git, você precisa configurá-lo. Abra o terminal e execute os seguintes comandos para definir seu nome de usuário e e-mail, que serão associados aos seus commits.

```bash
# Configura o nome de usuário
git config --global user.name "Seu Nome"

# Configura o e-mail
git config --global user.email "seuemail@exemplo.com"
Para verificar as configurações atuais, você pode usar:

bash
git config --list
2. Criação de um Novo Repositório
No seu computador:
Crie uma nova pasta para seu projeto, se ainda não tiver uma:

bash
mkdir nome-do-repositorio
cd nome-do-repositorio
Inicialize um repositório Git na pasta:

bash
git init
Adicione alguns arquivos ao seu repositório, se necessário, e faça seu primeiro commit:

bash
echo "# Meu Novo Projeto" > README.md
git add README.md
git commit -m "Primeiro commit"
No GitHub:
Acesse GitHub e faça login na sua conta.

Clique no botão “+” no canto superior direito e selecione “New repository”.

Preencha o nome do repositório e adicione uma descrição, se desejar. Escolha se deseja tornar o repositório público ou privado.

Clique em “Create repository”.

3. Acessar um Repositório Salvo no GitHub
Para clonar um repositório existente do GitHub para sua máquina local, siga estes passos:

No GitHub, vá até o repositório que você deseja clonar.

Clique no botão “Code” e copie o URL fornecido.

No terminal, execute o comando para clonar o repositório:

bash
git clone https://github.com/usuario/nome-do-repositorio.git
Substitua o URL pelo que você copiou.

4. Envio de Alterações para um Repositório Remoto
Depois de fazer alterações no seu projeto localmente, você pode enviá-las para o repositório remoto no GitHub:

Adicione os arquivos alterados ao estágio:

bash
git add .
Faça um commit com uma mensagem descritiva:

bash
git commit -m "Descrição das alterações"
Envie as alterações para o repositório remoto:

bash
git push origin main
Substitua main pelo nome da sua branch, se for diferente.

5. Atualização do Repositório Local
Para manter seu repositório local atualizado com as alterações feitas no repositório remoto, use o comando:

bash
git pull origin main
Novamente, substitua main pelo nome da branch que você deseja atualizar.

6. Referências
Git Documentation
GitHub Docs
Pro Git Book
Siga este guia e pratique regularmente para se tornar mais confortável com Git e GitHub. Boa codificação!