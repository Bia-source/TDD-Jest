import { User } from "../models/User.model.js";

function sum(a,b){
  return a + b;
}
// 2 parametros 
// descricao do teste
// callback do teste
test('testando funcao somar', ()=> {
    // espero que quando utilizar a funcao somar(1,3)
    // espero que a resposta seja 4
    // dentro do expect colocamos a funcao que queremos testar
    // dentro do toBe o valor que esperamos ter como resultado 
    expect(sum(1,3)).toBe(4)
});

test('tentando criar um usuario', async ()=> {
    const newUser = {
        name: 'Beatriz',
        email: 'bia@gmail.com',
        password: 'bia123'
    }
    await User.sync();

    const result = await User.create({
        name: 'Beatriz teste', 
        email: 'bia@yahoo.com', 
        password: 'bia123'
    })
    // await User.create({
    //     id: 'wuieiuw1hh28h3189h23'
    //     name: newUser.name, 
    //     email: newUser.email, 
    //     password: newUser.password
    // });

    expect(result).toHaveProperty('id');
});

test('verificando se existe usuarios', async()=> {
    const result = await User.findAll();

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
})