SELECT "releaseYear", "genres"."name" as "genre"
    FROM "films"
    JOIN "filmGenre" using ("filmId")
    JOIN "genres" using ("genreId")
  WHERE "title" = 'Boogie Amelie';
