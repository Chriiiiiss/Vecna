CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(49) NOT NULL,
	"password" char(61) NOT NULL,
	"role" varchar(6) NOT NULL,
	CONSTRAINT "users_table_name_unique" UNIQUE("name")
);
