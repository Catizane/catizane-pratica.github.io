# Plano de Testes - Sauce Demo e Restful-Booker


---

## 1. Plano de Testes
 Este plano de teste abordara a documentacao dois tipos de testes:

1. **UI Testing**
2. **API Testing**

- Os casos de teste deste projeto serão escritos utilizando a linguagem Gherkin, seguindo a abordagem Behavior-Driven Development (BDD).
Essa escolha visa garantir a padronização e a facilidade de entendimento para todos os envolvidos no processo de desenvolvimento e teste.


---
## 2. Criterios de Aceitacao

- **Linkar e vincular doc:** Deve ter links para:
-  o Item Backlog, Item de Requisitos,Planos de Teste Relacionado,
- Suite de testes,Casos de testes ,Script testes relacionados,
  
- **utilizar plano padronizado:** Utilizar o planos de testes principal para escrever os casos de testes,exemplo:
PLTS_README.md_SPRINT0_plataforma_Sauce_ Demo`
- **nota:** 
 Utilziar meotodologia ageis e partir deste plano criar os  suites,casos testes e scripts

---
## 3. Ferramentas de Testes
- **UI Testing -Ferramenta:** Google Chrome.
- **API Testing - Ferramenta:** Postman..

---


## 4. Estratégias de Testes

 - **UI Testing (Sauce Demo):**
   - Fluxos principais:login, navegação, compra e logout.
   -Verificar responsividade e acessibilidade.


- **API Testing (Restful-Booker):**
  - Autenticação, filtros ,gestão de reservas.

 - **Testes Funcionais:**
   - Validação das principais funcionalidades e fluxos críticos.
- **Testes Não Funcionais:**
  - Verificação de acessibilidade, segurança e desempenho.
- **Documentação:**
    - Registros detalhados dos resultados, com evidências e análise de riscos.

---

## 5. Cronograma

| Atividade              | Duração | Data de Início | Data de Término |
|------------------------|---------|----------------|-----------------|
| Criar ITem backlog     | 30 dias   | 26/10/2024     | 26/11/2024      |
| Criar Hist Usuarios    | 30 dias   | 26/10/2024     | 26/11/2024      |
| Planejar Testes        | 14 dias   | 01/11/2024     | 14/11/2024      |
| Criar Casos de Teste   | 14 dias   | 01/11/2024     | 14/11/2024      |
| Criar Suite de Teste   | 14 dias   | 01/11/2024     | 14/11/2024       |
| Criar Script de Teste  | 14 dias   | 01/11/2024     | 14/11/2024       |
| Executar Script Testes | 14 dias   | 01/11/2024     | 14/11/2024       |
| Documentar Resultados  | 14 dias   | 01/11/2024     | 14/11/2024      |

---

## 6. Tipos de Testes

### 6 Testes Funcionais
- Validação de fluxos principais como login, navegação, ordenação,checkout e acessibilidade.

---

# Inicio Sauce Demo 

## 7. Cenários de Testes UI Testing 

### 7.1.1 Login com diferentes tipos de usuários 



**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero ter acesso a plataforma Sauce  Demo
- Para que seja possivel fazer login


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter permissao de acesso a plataforma Sauce Demo
 - Ter usuário de acesso a plataforma Sauce Demo
 
  ## CENARIO 01 - LOGIN
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-LG-001    | Login de usuarios                                 |1. Na tela  plataforma Sauce Demo<br>2. Dado que tenho acesso ao login<br>3. Quando insiro credenciais válidas (usuário padrão)<br>4.  E aciono ação "Login" |  0.usuario:standard_user<br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então tenho acesso a página inicial.                     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_login_A.png " width="102" height="80" alt="login"  />  </a></div>   -|  <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_login_B.png  " width="102" height="80" alt="login"  />  </a></div>  

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-LG-001    | Problema de seguranca                     | Grave            | Ao acessar pagina. |
| BUG-CT-LG-001    | xxxx                                      | Moderado         | Imagens de alguns produtos não estão sendo exibidas corretamente no carrinho. |
| BUG-CT-LG-001    | Mensagem dde erro desconfigurada          | Leve             | A mensagem não informa se o problema é no nome de usuário ou na senha.        |

| Resultado  BUG-CT-LG-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar - Clique na imagem   ao lado              |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas. Na tela login ao clicar em "login" sem preencher nada.. apresenta apenas a mensagem pedindo o usuário e não existe a mensagem para senha.
   - 

---
  ## Cenarios de Login 02
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-LG-002    | Login de usuarios                                 |1. Na tela  plataforma Sauce Demo<br>2. Dado que tenho acesso ao login<br>3. Quando insiro credenciais válidas (usuário padrão)<br>4.  E aciono ação "Login" |  0.usuario:locked_out_user <br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então tenho acesso a página inicial.                     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-004_login_A.png " width="102" height="80" alt="login"  />  </a></div>   -| NAO APLICA

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-LG-004    | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001 |
| BUG-CT-LG-004    | usabilidade                               | Moderado         | Campos Usuario e Senha não são limpos apos a mensagem. |
| BUG-CT-LG-004    | Mensagem dde erro desconfigurada          | Leve             | A mensagem não expandi na tela.        |

| Resultado  BUG-CT-LG-001                                |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Visualizar - Clique na imagem   ao lado                  |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-004.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas.
    - **Acessibilidade/ usabilidade:** Permitir navegação correta do teclado (Tab/Enter) no campos login/senha.                                                                                                                                                                                  
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok                                                                                                                                                                            
                                                       

---

### 7.1.2 Ordenação e filtragem de produtos
  

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero ter acesso a plataforma Sauce  Demo
- Para que seja possivel fazer filtragem e ordenacao de produtos


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter permissao de acesso a plataforma Sauce Demo
 - Ter usuário de acesso a plataforma Sauce Demo
 
  ## CENARIO 01 - Ordenação e filtragem de produtos
    
| ID          | Descrição                                             | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-FL-001    |  Ordernacao e Filtragem de produtos                    |1. Na tela principal da  plataforma Sauce Demo<br>2. Dado que tenho acesso a filtragem de produtos<br>3. Quando seleciono os filtros<br>4.  E seleciono a "Opçao" |  0.usuario:standard_user<br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a visualizaçao da filtragem de produtos      |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_filtro_A.png" width="102" height="80" alt="login"  />  </a></div>   -|  <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_login_B.png  " width="102" height="80" alt="login"  />  </a></div>  

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-FL-001     | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001                              |
| BUG-CT-FL-001    | Nao funciona menu all ITens                | Moderado         | Ao clicar no menu all itens os produtos não estão sendo exibidas.            |


| Resultado  BUG-CT-FL-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Visualizar - Clique na imagem   ao lado               |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
      - **Acessibilidade/ usabilidade:** Permitir navegação usando teclado (Tab/Enter) na tela                                                                                                                                                                                 
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok       
                                                                


---
  ### 7.1.3 Fluxo completo de compra (do carrinho até finalização)
  

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero ter acesso a plataforma Sauce  Demo
- Para que seja possivel fazer Fluxo completo de compra (do carrinho até finalização)


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter permissao de acesso a plataforma Sauce Demo
 - Ter usuário de acesso a plataforma Sauce Demo
 

## CENARIO 01 -  Fluxo completo de compra (do carrinho até finalização)
  
| ID          | Descrição                                                | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-FL-001    |  Fluxo completo de compra (do carrinho até finalização)     |1. Na tela principal da  plataforma Sauce Demo<br>2. Dado queestou na pagina de produtos<br>3. Quando adicono o produto ao carrinho<br>4.  E aciono a açao  "Confirmar" |  0.usuario:standard_user<br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então finalizo a compra com sucesso      |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_fluxoCarrinho_A.png " width="102" height="80" alt="login"  />  </a></div>   -|  <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_fluxoCarrinho_B.png  " width="102" height="80" alt="login"  />  </a></div>  



                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-FL-005    | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001                              |
| BUG-CT-FL-005    | Nao adiciona itens                        | Moderado         | Ao digitar quantidade >1, sem resposta.            |


| Resultado  BUG-CT-FL-005                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar - Clique na imagem   ao lado              |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-005.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
       **Acessibilidade/ usabilidade:** Permitir navegação usando teclado (Tab/Enter) na tela                                                                                                                                                                                 
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok       
   - **Erros detalhados:** Nao Exibir mensagens e conclusao da compra nem opcao para acompanhar a compra. Caso inclua item no carrinho e remova e possivel continuar o processo de compra. Nao é redirecionado a tela anterior
       

---


  ### 7.1.4 Remoção de itens do carrinho
  

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero ter acesso a plataforma Sauce  Demo
- Para que seja possivel remover itens do carrinho de compra 


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter permissao de acesso a plataforma Sauce Demo
 - Ter usuário de acesso a plataforma Sauce Demo
 

## CENARIO 01 -  Remoção de itens do carrinho
  
| ID          | Descrição                                                | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-FL-001    |  Remoção de itens do carrinho                            |1. Na tela principal da  plataforma Sauce Demo<br>2. Dado que estou na pagina de produtos<br>3. Quando adicono o produto ao carrinho<br>4.  E aciono ação "Remover" |  0.usuario:standard_user<br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então removo o item do carrinho     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_fluxoRemocaoITensCarrinho_A.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  



                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-FL-006    | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001                              |
| BUG-CT-FL-006    | Nao adiciona itens                        | Moderado         | Ao digitar quantidade >1, sem resposta.            |


| Resultado  BUG-CT-FL-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar - Clique na imagem   ao lado              |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-006.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
       **Acessibilidade/ usabilidade:** Permitir navegação usando teclado (Tab/Enter) na tela                                                                                                                                                                                 
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok       
       
---

#### 7.1.5 Navegação entre páginas
 **Interface do Usuário (UI):**
       **Acessibilidade/ usabilidade:** Ao abrir algum menu . Nao e possivel retornar a pagina anteriornavegação usando teclado (Tab/Enter) na tela    
        - Caso abra nova aba e  coloque itens no carrinho  e abra uma nova aba e remova este itens.. a primeira aba nao atualiza o carrinho


---

  ### 7.1.6 Logout
  

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero ter acesso a plataforma Sauce  Demo
- Para que seja possivel fazer logout


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter permissao de acesso a plataforma Sauce Demo
 - Ter usuário de acesso a plataforma Sauce Demo
 
 
  ## CENARIO 01 - LOGOUT
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                                      | Insira massa de dados                            |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-LG-001    | Logout de usuarios                                 |1. Na tela  plataforma Sauce Demo<br>2. Dado que tenho acesso ao login<br>3. Quando insiro credenciais válidas (usuário padrão)<br>4.  E aciono ação "Logout" |  0.usuario:standard_user<br>0.1 senha:secret_sauce

| Resultado Esperado                                          |Imagem 01                                                                                                |      Imagem 02          
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 5. Então tenho acesso a página inicial.                     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_logout_A.png" width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-LG-001    | Problema de seguranca                     | Grave            | Ao acessar pagina. |
| BUG-CT-LG-001    | xxxx                                      | Moderado         | Imagens de alguns produtos não estão sendo exibidas corretamente no carrinho. |
| BUG-CT-LG-001    | Mensagem dde erro desconfigurada          | Leve             | A mensagem não informa se o problema é no nome de usuário ou na senha.        |

| Resultado  BUG-CT-LG-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar - Clique na imagem   ao lado              |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias


 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas. Na tela login ao clicar em "login" sem preencher nada.. apresenta apenas a mensagem pedindo o usuário e não existe a mensagem para senha.
 

---

# Inicio API Testing (Restful-Booker)

##### 7.2.1.1 Credenciais Validas e Invalidas

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero Gerar token com credenciais válidas
- Para que seja possivel autenticar


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - TOKEN VALIDO
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0001  | Token valido                                      |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0001_AutenToken.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

                                                               

---
## CENARIO 02 - TOKEN INVALIDO
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0002  | Token valido                                      |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0002_AutenToken_Invalida.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
---       

##### 7.2.1.2 Check-in e Check-Out

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero fazer Check-in e Check-Out
- Para que seja possivel visualizar as informações


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - Check-in e Check-Out
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0003  |  Check-in e Check-Out                                    |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0003_CheckInCheckOut.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

  
 


##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
---       


##### 7.2.1.3 Filtrar os ID

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero fazer filtrar os ID
- Para que seja possivel visualizar as informações


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - Check-in e Check-Out
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0003  | filtrar os ID                                     |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0003_FiltroTodosID.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

           

##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
---       



##### 7.2.1.4 Criar Reserva

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero criar reservas
- Para que seja possivel visualizar as informações


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - Reservas Nomes
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0006  |  reservas   nomes                                 |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0006_CreateReserva.png " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

           
##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
 

---

##### 7.2.1.6 Update Reserva

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero fazer upadate reserva
- Para que seja possivel visualizar as informações


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - Update Reservas
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0006  | update reservas                                   |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0007_UpadateReserva.png" width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

           
##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
   

---


##### 7.2.1.8 Delete Reserva

**1. HISTORIA DE USUARIO:**

- Eu como usuario
- Quero deletar reserva
- Para que seja possivel visualizar as informações


 **1.1 CRITERIOS DE ACEITACAO:**

 - Ter postman instalado
 - Le a documentação do restful-booker.herokuapp.com/apido
 
 
  ## CENARIO 01 - Reservas Nomes
  
| ID          | Descrição                                         | Passos para Reproduzir                                                                                                                    | Insira massa de dados                                              |
|-------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|CT-API-0008 |  deletar reservas                                  |1. Na tela  requisição POST<br>2. Dado que tenho os dados (Informacoes)<br>3. Quando insiro os dados <br>4.  E aciono ação "Send"         |            Dados usados da documentacao de API
 
| Resultado Esperado                                  |Imagem 01                                                                                                |      Imagem 02          
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 5. Então tenho a resposta da requisicao.            | <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/api/CT-API-0008_DeleteReserva.png" width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

 
##  Sugestões de Melhorias

 **Detalhe (API): Tempo de carregamento inferior a 2 segundo -ok **
                                                                                                                                                                                
---       




