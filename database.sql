CREATE TABLE "produtos" (
  "id" SERIAL PRIMARY KEY,
  "categoria_id" int NOT NULL,
  "usuario_id" int,
  "nome" text NOT NULL,
  "descricao" text NOT NULL,
  "antigo_preco" int,
  "preco" int NOT NULL,
  "quantidade" int DEFAULT 0,
  "status" int DEFAULT 1,
  "criado_em" timestamp DEFAULT 'now()',
  "atualizado_em" timestamp DEFAULT 'now()'
);

CREATE TABLE "categorias" (
  "id" SERIAL PRIMARY KEY,
  "nome" text NOT NULL
);

CREATE TABLE "arquivos" (
  "id" SERIAL PRIMARY KEY,
  "nome" text,
  "caminho" text NOT NULL,
  "produto_id" int
);

ALTER TABLE "produtos" ADD FOREIGN KEY ("categoria_id") REFERENCES "categorias" ("id");

ALTER TABLE "arquivos" ADD FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id");
