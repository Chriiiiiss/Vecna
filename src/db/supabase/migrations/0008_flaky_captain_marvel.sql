CREATE TABLE IF NOT EXISTS "races_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sub_races_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"race_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sub_races_table" ADD CONSTRAINT "sub_races_table_race_id_races_table_id_fk" FOREIGN KEY ("race_id") REFERENCES "public"."races_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "characters_table" ADD CONSTRAINT "characters_table_race_id_races_table_id_fk" FOREIGN KEY ("race_id") REFERENCES "public"."races_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
