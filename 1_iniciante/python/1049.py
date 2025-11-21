"""
@source Beecrowd
@problem 1049 - Animal
@subject Selection
 
@author Letícia Cruz
@date 2024-05-12
"""

categoria1 = input()
categoria2 = input()
categoria3 = input()

if categoria1 == "vertebrado": 
   if categoria2 == "ave": 
       if categoria3 == "carnivoro":
         animal = "aguia"
       else: 
         animal = "pomba"
   else:
       if categoria3 == "onivoro":
           animal = "homem"
       else:
           animal = "vaca"
else:
    if categoria2 == "inseto":
        if categoria3 == "hematofago":
            animal = "pulga"
        else:
            animal = "lagarta"
    else:
         if categoria3 == "hematofago":
            animal = "sanguessuga"
         else:
            animal = "minhoca"
           
print(animal)