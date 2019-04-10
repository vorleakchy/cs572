1. Find all the zip codes in Washington state
db.zips.aggregate([
    { $match: { state: 'WA' }},
    { $project: { _id: 0, zipcode: '$_id'}}  
])

2. Find all the zip codes with a population less than 5000
db.zips.aggregate([
    { $match: { pop: { $lt: 5000 }}},
    { $project: {_id: 0, zipcode: '$_id'}}
])

3. Find all cities that have more than one zip code, sort the results by state and city name
db.zips.aggregate([
    { $group: { _id: { state: '$state', city: '$city' },
                count: { $sum: 1 }}},
    { $match: { count: { $gt: 1 }}},
    { $sort: { '_id.state': 1, '_id.city': 1 }},
    { $project: { _id: 0, state: '$_id.state', city: '$_id.city' }}
])

4. Display the least populated city in each state
db.zips.aggregate([
    { $group: { _id: {state: '$state', city: '$city' },
                population: { $sum: '$pop' }}},
    { $sort: { '_id.state': 1, 'population': 1}},
    { $group: { _id: '$_id.state',
                city: {$first: '$_id.city'},
                population: {$first: '$population'}}},
    { $sort: {'_id': 1}}
])