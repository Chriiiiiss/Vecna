DO $$ BEGIN
 ALTER TABLE "characters_table" ADD CONSTRAINT "characters_table_class_id_class_table_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."class_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
