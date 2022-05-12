SELECT "c"."firstName", "c"."lastName", sum("amount") as "total Paid"
    FROM "customers" as "c"
    JOIN "payments" using ("customerId")
  GROUP BY "c"."firstName", "c"."lastName"
  ORDER BY "total Paid" desc
