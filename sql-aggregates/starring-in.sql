SELECT "genres"."name" as "genre", count("genreId") as "numMovies"
    FROM "genres"
    JOIN "filmGenre" using ("genreId")
    JOIN "castMembers" using ("filmId")
    JOIN "actors" using ("actorId")
  WHERE "firstName" = 'Lisa' and
        "lastName" = 'Monroe'
  GROUP BY "genres"."name"
