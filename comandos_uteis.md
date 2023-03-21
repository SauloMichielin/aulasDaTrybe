
### Verificar se SAFE MODE está ativado

```sql
SHOW VARIABLES LIKE "sql_safe_updates";
```

### Alterar Safe Mode

```sql
SET SQL_SAFE_UPDATES = 1; -- para ativar o modo seguro
SET SQL_SAFE_UPDATES = 0; -- para desativar o modo seguro
```

---

### Exemplo Commit e Rollback

###### Criando Tabela Aulas em Faculdade

```sql
USE faculdade;

CREATE TABLE aulas (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    materia VARCHAR(100) NOT NULL
);

SHOW VARIABLES LIKE 'autocommit'; -- verificar se autocommit está on ou off

SET autocommit = 0; -- desabilitar autocommit

INSERT INTO aulas(materia) VALUES ('matemática'), ('biologia');

SELECT * FROM aulas;

-- Gravar as informações no banco
COMMIT;

-- Voltar comando
ROLLBACK;

```