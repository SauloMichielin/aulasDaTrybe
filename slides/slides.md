---
theme: "night"
transition: "slide"
title: "Banco de dados"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

### 2. Introdução à SQL

<img src="./images/sql-insert.jpg" width=500 >

<small>Back-end: 2.4: Manipulando Tabelas</small>

---

### Foco de hoje

- INSERT
- UPDATE
- DELETE

---

### Tópico 1

Inserindo Dados

---

### O que inserir?

```sql
 DESCRIBE <nome da tabela>;
```

---

### INSERT

<img src="./images/INSERT_INTO.png" width=55% >

---

### Duplicados?

---

### Logs

```sql
    SHOW WARNINGS;
```

---

### O Auto Increment

---

### Como inserir mais de um valor ao mesmo tempo?

---

### Erros?

<img src="./images/help.jpeg" width=300>

---

### INSERT IGNORE

<img src="./images/INSERT_IGNORE.png" width=55% >

---

### Copiando dados para outras tabelas

Qual motivação disso?

---

### Sintaxe

```sql
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;
```

```sql
SELECT * FROM sakila.actor ORDER BY actor_id DESC;
```

---

### Tópico 2

Atualizando dados

<img src="./images/UPDATE.png" width=55% >

---

### SERÁ QUE FUNCIONA?

```sql
UPDATE sakila.actor SET actor.last_name = 'BENNING';
```

---

### SAFE UPDATE MODE

---

### Como desativar

```sql
    SET SQL_SAFE_UPDATES = 0;
```

---

### Prêmio Update sem Where

<img src="./images/update-sem-where.jpeg" width=55% >

---

### UPDATE COM WHERE

<img src="./images/UPDATE_WHERE.png" width=55% >

---

### COMO FAZER UPDATE
 
~~SEM PERDER O EMPREGO?~~ Do modo certo

```mysql
UPDATE
    sakila.actor 
SET 
    actor.last_name = 'BENNING'
WHERE
    actor.last_name = 'BENING';
```

---

### DB sakila


> Queremos aumentar em 1 dia o tempo de devolução dos 15 filmes mais longos


---

### Verificando a tabela

```sql
SELECT title, rental_duration, length, last_update 
FROM sakila.film 
ORDER BY length DESC 
LIMIT 20; -- Mostre mais registros dos que foram atualizados
```

---

### Resposta:

```sql
UPDATE sakila.film
SET rental_duration = rental_duration + 1 -- Aumenta em 1 dia o tempo para devolução
ORDER BY length DESC -- Ordena os resultados pelo filme de maior duração
LIMIT 15 -- Limita os primeiros resultados
```

---

### Mais alguns cenários

> Estamos em semana de promoção em nossa locadora e queremos aplicar 30% de desconto em filmes específicos

<small> Ids: 609, 612, 622, 626, 650, 653</small>

---

### Tópico 3

Excluíndo dados

<img src="./images/DELETE_FROM.png" width=55% >

---

### DELETE Lógico

---

### Exemplo

```sql
UPDATE sakila.customer
SET active = 0 -- Colocar o valor zero (false) na coluna active
WHERE customer_id = 1; -- O identificador do cliente em questão
```

---

### UM DELETE EXEMPLAR

```mysql
DELETE FROM
    sakila.actor 
WHERE
    actor.last_name = 'BENNING';
```

---

### O QUE DEU ERRADO?

```mysql
SHOW WARNINGS;
```

---

### Por quê?

---

```sql
ON DELETE RESTRICT | NO ACTION
ON DELETE SET NULL
ON DELETE CASCADE
```

---

### Onde encontro isso?

- __Table Inspector__
- [DER](https://trifulcas.com/wp-content/uploads/2018/03/sakila-er.png)

---

### VAMOS REMOVER AS REFERÊNCIAS

```mysql
DELETE FROM
    sakila.film_actor
WHERE
    actor_id IN (124, 174);
```

---

### AGORA VAI

```mysql
DELETE FROM
    sakila.actor 
WHERE
    actor.last_name = 'BENNING';
```

---

### Não seja um leitor deste livro!

<img src="./images/delete-sem-where.jpeg" width=80% >

---

<img src="./images/DELETE_FROM_WHERE.png" width=55% >

---

### TRUNCATE vs. DELETE

---

### E o CTRL + Z ?

---

### Dúvidas?

<img src="https://media3.giphy.com/media/3o6MbudLhIoFwrkTQY/giphy.gif?cid=790b76117789c6161150915091725a365bdeac4e06fd01cd&rid=giphy.gif&ct=g" width=90% >

