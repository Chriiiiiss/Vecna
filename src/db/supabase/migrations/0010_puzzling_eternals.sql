CREATE TABLE IF NOT EXISTS "traits_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"caracteristics" text,
	"modifier" integer,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "traits_to_character_table" (
	"trait_id" integer NOT NULL,
	"character_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "traits_to_race_table" (
	"trait_id" integer NOT NULL,
	"race_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "traits_to_sub_race_table" (
	"trait_id" integer NOT NULL,
	"sub_race_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "characters_table" ADD COLUMN "sub_race_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_character_table" ADD CONSTRAINT "traits_to_character_table_trait_id_traits_table_id_fk" FOREIGN KEY ("trait_id") REFERENCES "public"."traits_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_character_table" ADD CONSTRAINT "traits_to_character_table_character_id_characters_table_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_race_table" ADD CONSTRAINT "traits_to_race_table_trait_id_traits_table_id_fk" FOREIGN KEY ("trait_id") REFERENCES "public"."traits_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_race_table" ADD CONSTRAINT "traits_to_race_table_race_id_races_table_id_fk" FOREIGN KEY ("race_id") REFERENCES "public"."races_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_sub_race_table" ADD CONSTRAINT "traits_to_sub_race_table_trait_id_traits_table_id_fk" FOREIGN KEY ("trait_id") REFERENCES "public"."traits_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "traits_to_sub_race_table" ADD CONSTRAINT "traits_to_sub_race_table_sub_race_id_sub_races_table_id_fk" FOREIGN KEY ("sub_race_id") REFERENCES "public"."sub_races_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "characters_table" ADD CONSTRAINT "characters_table_sub_race_id_sub_races_table_id_fk" FOREIGN KEY ("sub_race_id") REFERENCES "public"."sub_races_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
