CREATE TABLE IF NOT EXISTS "spells_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"level" integer NOT NULL,
	"description" varchar NOT NULL,
	"range" varchar NOT NULL,
	"components" varchar NOT NULL,
	"duration" varchar NOT NULL,
	"casting_time" varchar NOT NULL,
	"school" varchar NOT NULL,
	"dice_damage" char(3) NOT NULL
);
