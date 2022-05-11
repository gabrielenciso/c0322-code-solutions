SELECT "firstName", "lastName", "amount"
    FROM "customers"
    JOIN "payments" using ("customerId")
    ORDER BY "amount" desc
    LIMIT 10
