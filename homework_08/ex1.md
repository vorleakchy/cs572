1. Display all documents
db.restaurants.find({})

2. Display certain fields of restaurants with _id
db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1})

3. Display certain fields of restaurants without _id
db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

4. Display certain fields of restaurants with address -> zipcode
db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, zipcode: 1, _id: 0})

5. Display restaurants in the district of Bronx
db.restaurants.find({district: 'Bronx'})

6. Display the first 5 restaurants in the district of Bronx
db.restaurants.find({district: 'Bronx'}).limit(5)

7. Display the next 5 restaurants in the district of Bronx and skip 5
db.restaurants.find({district: 'Bronx'}).skip(5).limit(5)

8. Find restaurants in coord value less than -95.754168
db.restaurants.find({'address.coord': { $elemMatch: { $lt: -95.754168}}}) 

9. Non-American, grade score > 70, coord value < -65.754168
db.restaurants.find({cuisine: {$ne: 'American '}, 'grades.score': {$gt: 70}, 'address.coord': {$elemMatch: {$lt: -65.754168}}})

10. Name starts with 'Wil'
db.restaurants.find({name: {$regex: '^Wil'}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

11. Name ends with 'ces'
db.restaurants.find({name: {$regex: 'ces$'}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

12. Name contains 'Reg'
db.restaurants.find({name: {$regex: 'Reg'}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

13. District of Bronx and cuisine is either 'American ' or 'Chinese'
db.restaurants.find({district: 'Bronx', cuisine: {$in: ['American ', 'Chinese']}})

14. District belongs to 'Staten Island', 'Queens', 'Bronx' or 'Brooklyn'
db.restaurants.find({district: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

15. District doesn't belong to 'Staten Island', 'Queens', 'Bronx' and 'Brooklyn'
db.restaurants.find({district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

16. grades -> score less than 10
db.restaurants.find({'grades.score': {$lt: 10}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

17. The 2nd coord > 42 and <= 52
db.restaurants.find({'address.coord.1': {$gt: 42, $lte: 52}}, {restaurant_id: 1, name: 1, address: 1, cuisine: 1, _id: 0})

18. Sort by name ascending
db.restaurants.find({}).sort({name: 1})

19. Sort by name descending
db.restaurants.find({}).sort({name: -1})

20. Sort by cuisine ascending and district descending
db.restaurants.find({}).sort({cuisine: 1, district: -1})

21. address contains street
db.restaurants.find({'address.street': { $exists: true }})

22. type of coord is double
db.restaurants.find({'address.coord': {$type: 'double'}})

23. name starts with 'Mad'
db.restaurants.find({name: {$regex: '^Mad'}}, {name: 1, district: 1, 'address.coord': 1, cuisine: 1})

