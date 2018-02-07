# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(user_name: "Jon", email: "J@yahoo.com", password: "password")
user2 = User.create!(user_name: "Bill", email: "B@aol.com", password: "password")
user3 = User.create!(user_name: "Kate", email: "K@aol.com", password: "password")
user4 = User.create!(user_name: "Jess", email: "J@gmail.com", password: "password")

campaign1 = Campaign.create!(name: "Alpha Squad", description: "All the biggest badasses from the Fellowship", dm: user1)
campaign2 = Campaign.create!(name: "Omega Squad", description: "Here are some other guys you may like", dm: user1)
campaign3 = Campaign.create!(name: "Hobbit Time", description: "Chilling with the little dudes", dm: user4)

pc1 = Pc.create!(user: user2, name: "Galadriel", campaign: campaign1)
pc1 = Pc.create!(user: user3, name: "Aragorn", campaign: campaign1)
pc1 = Pc.create!(user: user4, name: "Gandalph", campaign: campaign1)
pc1 = Pc.create!(user: user2, name: "Gimli", campaign: campaign2)
pc1 = Pc.create!(user: user3, name: "Legolas", campaign: campaign2)
pc1 = Pc.create!(user: user4, name: "Boromir", campaign: campaign2)
pc1 = Pc.create!(user: user1, name: "Frodo", campaign: campaign3)
pc1 = Pc.create!(user: user2, name: "Merry", campaign: campaign3)
pc1 = Pc.create!(user: user3, name: "Pippin", campaign: campaign3)
