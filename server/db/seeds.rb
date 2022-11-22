u1 = User.new(email: "user1.email.com", password: "password")
u1.user_id = SecureRandom.uuid
u1.save
u2 = User.new(email: "user2.email.com", password: "password")
u2.user_id = SecureRandom.uuid
u2.save

r1 = Restaurant.create(name: "rest1", address: "address1")
r2 = Restaurant.create(name: "rest2", address: "address2")


d1 = r1.dishes.create(name: "eggs")
d2 = r1.dishes.create(name: "bacon")
d3 = r1.dishes.create(name: "waffles")
d4 = r1.dishes.create(name: "pancakes")

d5 = r2.dishes.create(name: "pork")
d6 = r2.dishes.create(name: "beef")
d7 = r2.dishes.create(name: "chicken")
d8 = r2.dishes.create(name: "beans")


p1 = u1.posts.new()
p1.image.attach(
    io: File.open('public/seed_images/karsten-winegeart-ZBUesmAQapY-unsplash.jpg'),
    filename: "post-#{p1.id}.jpg"
)
d1.posts << p1

p2 = u1.posts.new()
p2.image.attach(
    io: File.open('public/seed_images/pexels-quang-nguyen-vinh-2132095.jpg'),
    filename: "post-#{p2.id}.jpg"
)
d2.posts << p2

p3 = u1.posts.new()
p3.image.attach(
    io: File.open('public/seed_images/neil-mark-thomas-bDqMvgFazD0-unsplash.jpg'),
    filename: "post-#{p3.id}.jpg"
)
d3.posts << p3

p4 = u1.posts.new()
p4.image.attach(
    io: File.open('public/seed_images/pexels-josh-sorenson-1478527.jpg'),
    filename: "post-#{p4.id}.jpg"
)
d4.posts << p4
u1.save


p5 = u2.posts.new()
p5.image.attach(
    io: File.open('public/seed_images/pexels-pixabay-460621.jpg'),
    filename: "post-#{p5.id}.jpg"
)
d5.posts << p5

p6 = u2.posts.new()
p6.image.attach(
    io: File.open('public/seed_images/pexels-snapwire-6992.jpg'),
    filename: "post-#{p6.id}.jpg"
)
d6.posts << p6

p7 = u2.posts.new()
p7.image.attach(
    io: File.open('public/seed_images/pexels-trace-hudson-2529973.jpg'),
    filename: "post-#{p7.id}.jpg"
)
d7.posts << p7

p8 = u2.posts.new()
p8.image.attach(
    io: File.open('public/seed_images/sergei-a--heLWtuAN3c-unsplash.jpg'),
    filename: "post-#{p8.id}.jpg"
)
d8.posts << p8
u2.save



