"""
@source Beecrowd
@problem 1009 - Salary with Bonus
@subject Sequential

@author Letícia Cruz
@date 2025-05-14
"""

nome = input()
salarioFixo = float(input())
vendasEfetuadas = float(input())

totalReceber = salarioFixo + vendasEfetuadas*0.15

print(f'TOTAL = R$ {totalReceber:.2f}')