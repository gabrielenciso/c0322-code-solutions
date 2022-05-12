SELECT "countries"."name" as "country", count("countryId") as "numberOfCities"
    FROM "countries"
    JOIN "cities" using ("countryId")
  GROUP BY "countries"."name"
