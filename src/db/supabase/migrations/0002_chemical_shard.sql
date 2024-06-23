CREATE TABLE IF NOT EXISTS "class_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "spell_to_class_table" (
	"spell_id" integer NOT NULL,
	"class_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "spell_to_class_table" ADD CONSTRAINT "spell_to_class_table_spell_id_spells_table_id_fk" FOREIGN KEY ("spell_id") REFERENCES "public"."spells_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "spell_to_class_table" ADD CONSTRAINT "spell_to_class_table_class_id_class_table_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."class_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
