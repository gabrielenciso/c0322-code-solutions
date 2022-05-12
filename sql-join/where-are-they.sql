SELECT "line1" as "address", "city"."name" as "city", "district", "country"."name" as "country"
    FROM "addresses"
    JOIN "cities" as "city" using ("cityId")
    JOIN "countries" as "country" using ("countryId");
