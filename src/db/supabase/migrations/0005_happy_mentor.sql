CREATE TABLE IF NOT EXISTS "characters_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"for" integer NOT NULL,
	"dex" integer NOT NULL,
	"cha" integer NOT NULL,
	"sag" integer NOT NULL,
	"cons" integer NOT NULL,
	"int" integer NOT NULL,
	"name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"race_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	"age" integer NOT NULL,
	"alignment" text NOT NULL,
	"health" integer NOT NULL,
	"max_health" integer NOT NULL,
	"armor_class" integer NOT NULL,
	"dice_health" char(3) NOT NULL,
	"level" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "characters_table" ADD CONSTRAINT "characters_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
