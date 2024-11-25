# Plano de Testes - Sauce Demo e Restful-Booker

## Índice

1. [Plano de Testes](#iplano-de-testes)  
2. [Criterios de Aceitacao](#criterio-de-aceitacao)  
3. [Ferramentas de Testes](#ferramentas-de-testes)  
4. [Estratégias de Testes](#estratégias-de-testes)  
5. [Cronograma](#cronograma)  
6. [Métricas de Qualidade](#métricas-de-qualidade)  
7. [Cenários de Testes UI Testing](#cenários-de-testes-ui-testing)  
      - 7.1.1 [Login com diferentes tipos de usuários ](#711-login-com-diferentes-tipos-de-usuarios )  
     - 7.1.2 [Ordenação e filtragem de produtos](#712-ordenacao-e-filtragem-de-produtos)  
       

       
     - 7.1.3 [Fluxo completo de compra](#713-fluxo-completo-de-compra)  
       - 7.1.3.1 [Testes Funcionais](#7131-testes-funcionais)  
       - 7.1.3.2 [Testes Não Funcionais](#7132-testes-nao-funcionais)  
     - 7.1.4 [Remoção de itens do carrinho](#714-remocao-de-itens-do-carrinho)  
       - 7.1.4.1 [Testes Funcionais](#7141-testes-funcionais)  
       - 7.1.4.2 [Testes Não Funcionais](#7142-testes-nao-funcionais)  
     - 7.1.5 [Navegação entre páginas](#715-navegacao-entre-paginas)  
       - 7.1.5.1 [Testes Funcionais](#7151-testes-funcionais)  
       - 7.1.5.2 [Testes Não Funcionais](#7152-testes-nao-funcionais)  
     - 7.1.6 [Logout](#716-logout)  
       - 7.1.6.1 [Testes Funcionais](#7161-testes-funcionais)  
       - 7.1.6.2 [Testes Não Funcionais](#7162-testes-nao-funcionais)  
   - 7.2 [API Testing (Restful-Booker)](#72-api-testing-restful-booker)  
     - 7.2.1 [Autenticação](#721-autenticacao)  
       - 7.2.1.1 [Testes Funcionais](#7211-testes-funcionais)  
       - 7.2.1.2 [Testes Não Funcionais](#7212-testes-nao-funcionais)  
     - 7.2.2 [Gestão de reservas](#722-gestao-de-reservas)  
       - 7.2.2.1 [Testes Funcionais](#7221-testes-funcionais)  
       - 7.2.2.2 [Testes Não Funcionais](#7222-testes-nao-funcionais)  
     - 7.2.3 [Filtros e buscas](#723-filtros-e-buscas)  
       - 7.2.3.1 [Testes Funcionais](#7231-testes-funcionais)  
       - 7.2.3.2 [Testes Não Funcionais](#7232-testes-nao-funcionais)  

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
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas. Na tela login ao clicar em "login" sem preencher nada.. apresenta apenas a mensagem pedindo o usuário e não existe a mensagem para senha.
   - 

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

| Resultado  BUG-CT-LG-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-004.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas.
    - **Acessibilidade/ usabilidade:** Permitir navegação correta do teclado (Tab/Enter) no campos login/senha.                                                                                                                                                                                  
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok                                                                                                                                                                            
                                                       

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
| 5. Então tenho a visualizaçao da filtragem de produtos      |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_filtro_A " width="102" height="80" alt="login"  />  </a></div>   -|  <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_login_B.png  " width="102" height="80" alt="login"  />  </a></div>  

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-FL-001     | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001                              |
| BUG-CT-FL-001    | Nao funciona menu all ITens                | Moderado         | Ao clicar no menu all itens os produtos não estão sendo exibidas.            |


| Resultado  BUG-CT-FL-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias

 **Interface do Usuário (UI):**
      - **Acessibilidade/ usabilidade:** Permitir navegação usando teclado (Tab/Enter) na tela                                                                                                                                                                                 
    - **Testes Não Funcionais:**  Tempo de carregamento inferior a 2 segundo -ok       
                                                                


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
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-005.png " width="102" height="80" alt="login"  />  </a></div>   

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
| 5. Então removo o item do carrinho     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-FL-001_fluxoRemocaoITensCarrinho_A " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  



                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-FL-006    | Problema de seguranca                     | Grave            | Ao acessar pagina.Mesma imagem do BUG CT-LG-001                              |
| BUG-CT-FL-006    | Nao adiciona itens                        | Moderado         | Ao digitar quantidade >1, sem resposta.            |


| Resultado  BUG-CT-FL-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-FL-006.png " width="102" height="80" alt="login"  />  </a></div>   

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
| 5. Então tenho acesso a página inicial.                     |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/CT-LG-001_logout_A " width="102" height="80" alt="login"  />  </a></div>   -| Nao Aplica  

                                                               
 ## Lista de Bugs Encontrados

| ID do Bug        | Descrição do Bug                          | Classificação    | Observações                                                                   |
|------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------|
| BUG-CT-LG-001    | Problema de seguranca                     | Grave            | Ao acessar pagina. |
| BUG-CT-LG-001    | xxxx                                      | Moderado         | Imagens de alguns produtos não estão sendo exibidas corretamente no carrinho. |
| BUG-CT-LG-001    | Mensagem dde erro desconfigurada          | Leve             | A mensagem não informa se o problema é no nome de usuário ou na senha.        |

| Resultado  BUG-CT-LG-001                                           |Imagem 01                                                                                                      
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visualizar imagem                                    |      <div align="center">  <img src="https://github.com/Catizane/catizane-pratica.github.io/blob/main/docs/resultados/ui/login/BUG-CT-LG-001.png " width="102" height="80" alt="login"  />  </a></div>   

##  Sugestões de Melhorias


 **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade da mensagem.
   - **Redimensionamento de imagens:** Garantir que a imagem seja ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro informativas. Na tela login ao clicar em "login" sem preencher nada.. apresenta apenas a mensagem pedindo o usuário e não existe a mensagem para senha.
 

---

### 7.2 API Testing (Restful-Booker)

#### 7.2.1 Autenticação

##### 7.2.1.1 Testes Funcionais
| ID      | Descrição                                   | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|---------|-------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| AU-001  | Gerar token com credenciais válidas       | 1. Realizar uma requisição POST no endpoint `/auth`<br>2. Enviar credenciais válidas no corpo da requisição | Token de autenticação gerado com sucesso, retornando código 200.          |
| AU-002  | Tentar gerar token com credenciais inválidas | 1. Realizar uma requisição POST no endpoint `/auth`<br>2. Enviar credenciais inválidas no corpo da requisição | Resposta com código 401 e mensagem de erro indicando "Credenciais inválidas".         |

##### 7.2.1.2 Testes Não Funcionais
| ID         | Descrição                                      | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| AU-NF-001  | Verificar tempo de resposta na autenticação   | 1. Realizar uma requisição POST no endpoint `/auth` com credenciais válidas<br>2. Medir o tempo de resposta | Tempo de resposta inferior a 2 segundos.           |
| AU-NF-002  | Testar autenticação com múltiplas requisições simultâneas | 1. Enviar 10 requisições simultâneas ao endpoint `/auth` com credenciais válidas                      | Todas as requisições retornam tokens válidos, sem falhas. |

---

#### 7.2.2 Gestão de reservas

##### 7.2.2.1 Testes Funcionais
| ID      | Descrição                                   | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|---------|-------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| GR-001  | Criar uma nova reserva                    | 1. Realizar uma requisição POST no endpoint `/booking`<br>2. Enviar dados válidos no corpo da requisição | Reserva criada com sucesso, retornando ID da reserva e código 200. |
| GR-002  | Buscar uma reserva específica             | 1. Realizar uma requisição GET no endpoint `/booking/{id}`<br>2. Informar um ID válido na URL           | Detalhes da reserva retornados corretamente, com código 200.        |
| GR-003  | Listar todas as reservas                  | 1. Realizar uma requisição GET no endpoint `/booking`                                                 | Lista de reservas retornada corretamente, com código 200.          |
| GR-004  | Atualizar uma reserva existente           | 1. Realizar uma requisição PUT no endpoint `/booking/{id}`<br>2. Enviar novos dados no corpo da requisição | Reserva atualizada com sucesso, retornando código 200.              |
| GR-005  | Deletar uma reserva existente             | 1. Realizar uma requisição DELETE no endpoint `/booking/{id}`<br>2. Informar um ID válido na URL       | Reserva deletada com sucesso, retornando código 201.                |
| GR-006  | Buscar reserva inexistente                | 1. Realizar uma requisição GET no endpoint `/booking/{id}`<br>2. Informar um ID inválido na URL         | Resposta com código 404 e mensagem de erro indicando que a reserva não existe. |

##### 7.2.2.2 Testes Não Funcionais
| ID         | Descrição                                       | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| GR-NF-001  | Verificar tempo de resposta ao criar reservas  | 1. Realizar uma requisição POST no endpoint `/booking` com dados válidos<br>2. Medir o tempo de resposta | Tempo de resposta inferior a 3 segundos.           |
| GR-NF-002  | Testar comportamento com alta carga de reservas | 1. Criar múltiplas reservas simultaneamente (ex.: 50 requisições)<br>2. Monitorar respostas do servidor | Todas as requisições processadas corretamente, sem quedas de desempenho.      |

---

#### 7.2.3 Filtros e buscas

##### 7.2.3.1 Testes Funcionais
| ID      | Descrição                                   | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|---------|-------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| FB-001  | Buscar reservas por nome                  | 1. Realizar uma requisição GET no endpoint `/booking?firstname={nome}`<br>2. Informar um nome válido na query | Reservas correspondentes ao nome retornadas corretamente, com código 200.        |
| FB-002  | Buscar reservas por data de check-in      | 1. Realizar uma requisição GET no endpoint `/booking?checkin={data}`<br>2. Informar uma data válida na query | Reservas com a data de check-in correspondente retornadas corretamente. |
| FB-003  | Buscar reservas por data de check-out     | 1. Realizar uma requisição GET no endpoint `/booking?checkout={data}`<br>2. Informar uma data válida na query | Reservas com a data de check-out correspondente retornadas corretamente. |
| FB-004  | Buscar reservas com múltiplos filtros     | 1. Realizar uma requisição GET no endpoint `/booking` com múltiplos parâmetros (ex.: `firstname` e `checkin`) | Reservas que atendem a todos os filtros retornadas corretamente, com código 200. |

##### 7.2.3.2 Testes Não Funcionais
| ID         | Descrição                                       | Passos para Reproduzir                                                                                 | Resultado Esperado                                    |
|------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| FB-NF-001  | Verificar tempo de resposta em buscas com filtros | 1. Realizar requisições GET com diferentes combinações de filtros<br>2. Medir o tempo de resposta      | Tempo de resposta inferior a 2 segundos.           |
| FB-NF-002  | Testar comportamento ao aplicar filtros inválidos | 1. Realizar requisições GET com parâmetros inválidos (ex.: `checkin=invalid-date`)<br>2. Verificar respostas | Resposta com código 400 e mensagem de erro clara.   |
| FB-NF-003  | Testar busca em grandes volumes de dados        | 1. Aplicar filtros em uma base de dados com mais de 10.000 registros<br>2. Monitorar o desempenho      | Resultados retornados sem impacto significativo no desempenho. |


---

## 8. Resultados dos Testes

| Cenário  | Resultado | Observações          |
|----------|-----------|----------------------|
| LG-001   | Aprovado  | Login com credenciais válidas funcionando como esperado. |
| LG-002   | Aprovado  | Mensagem de erro clara para login inválido. |
| LG-003   | Aprovado  | Mensagem de erro exibida corretamente para campos vazios. |
| OR-001   | Aprovado  | Ordenação por preço (menor para maior) funcionando corretamente. |
| OR-002   | Aprovado  | Ordenação por preço (maior para menor) funcional. |
| OR-003   | Aprovado  | Filtro por categoria retorna resultados consistentes. |
| FC-001   | Aprovado  | Produto adicionado ao carrinho com sucesso. |
| FC-002   | Aprovado  | Fluxo de compra completo funcionando, sem erros. |
| RC-001   | Aprovado  | Remoção de produto individual do carrinho realizada com sucesso. |
| NP-001   | Aprovado  | Navegação entre páginas principais fluida e funcional. |
| LO-001   | Aprovado  | Logout executado com sucesso, redirecionando corretamente para a página de login. |

---

## 9. Lista de Bugs Encontrados

| ID do Bug | Descrição do Bug                          | Classificação | Observações                                               |
|-----------|------------------------------------------|---------------|----------------------------------------------------------|
| BUG-001   | Problema de navegação na página de checkout | Grave         | A navegação não funciona corretamente em dispositivos móveis. |
| BUG-002   | Falha na exibição de imagens no carrinho de compras | Moderado      | Imagens de alguns produtos não estão sendo exibidas corretamente no carrinho. |
| BUG-003   | Mensagem de erro genérica para login com senha inválida | Leve          | A mensagem não informa se o problema é no nome de usuário ou na senha. |
| BUG-004   | Tempo elevado ao aplicar múltiplos filtros simultâneos | Moderado      | O tempo de resposta excede 5 segundos quando muitos filtros são aplicados. |
| BUG-005   | Botão "Logout" às vezes não responde em dispositivos móveis | Grave         | O botão exige múltiplos cliques para funcionar. |

---

## 10. Sugestões de Melhorias

1. **Interface do Usuário (UI):**
   - **Contraste de cores:** Aumentar o contraste de cores dos botões para melhorar a acessibilidade e a visibilidade.
   - **Redimensionamento de imagens:** Garantir que todas as imagens do carrinho sejam carregadas e ajustadas ao tamanho ideal.
   - **Erros detalhados:** Exibir mensagens de erro mais informativas no login para ajudar os usuários a corrigirem os problemas rapidamente.

2. **Experiência do Usuário (UX):**
   - **Feedback visual:** Adicionar feedback visual (ex.: loaders ou spinners) em ações como filtros e checkout.
   - **Melhoria no fluxo de logout:** Resolver o problema de resposta do botão "Logout" em dispositivos móveis.
   - **Filtros otimizados:** Melhorar o desempenho ao aplicar múltiplos filtros simultaneamente.

3. **Performance:**
   - **Tempo de resposta:** Garantir que todas as ações, como navegação e aplicação de filtros, tenham tempo de resposta inferior a 2 segundos.
   - **Teste de carga:** Simular cenários com alta carga de usuários para garantir estabilidade durante picos de acesso.

4. **Acessibilidade:**
   - **Teclado:** Permitir navegação completa utilizando apenas o teclado (Tab/Enter).
   - **Textos alternativos:** Adicionar textos alternativos (alt) em imagens para suporte a leitores de tela.
   - **Responsividade:** Garantir que todos os elementos sejam funcionais e visíveis em diferentes tamanhos de tela.

5. **Automação:**
   - Sugerir a automação dos fluxos basicos: login, fluxo de compra e filtros,
   -Objetivo:Aumentar a eficiência e a cobertura dos testes.
