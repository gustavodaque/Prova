let usuarios = [];
console.log("Lista de usuários inicial:", usuarios);

function adicionarUsuario(nome, idade, email) {

    if (!nome || !idade || !email) {
        console.log("Erro: Todos os dados (nome, idade e email) devem ser preenchidos.");
        return;
    }


    if (idade <= 0) {
        console.log("Erro: A idade deve ser maior que 0.");
        return;
    }


    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };


    usuarios.push(usuario);
    console.log(`Usuário ${nome} adicionado com sucesso!`);
}


adicionarUsuario("Gustavo", 16, "gustavo_gameplays@gmail.com");
adicionarUsuario("Dennis", 16, "dennis_hinkel@gmail.com");

function listarUsuarios() {

    if (usuarios.length === 0) {
        console.log("Nenhum usuário disponível.");
        return;
    }


    console.log("Usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}: Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}

listarUsuarios();
