CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
  id uuid DEFAULT uuid_generate_v4(),
  name varchar(50),
  last_name varchar(50),
  born_date timestamp,
  type_document varchar(50),
  identity_document varchar(50),
  PRIMARY KEY (id)
);

