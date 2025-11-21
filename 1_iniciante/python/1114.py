"""
@source Beecrowd
@problem 1114 - Fixed Password
@subject Repetition
 
@author Letícia Cruz
@date 2025-05-29
"""

senha = 2002
entrada = int(input())

while entrada != senha:
    print("Senha Invalida")
    entrada = int(input())

print("Acesso Permitido")