"""
@source Beecrowd
@problem 1323 - Feynman
@subject Math, Combinatorics

@author Letícia Cruz
@date 2025-07-14
"""

n = int(input())

while n>0:
	somaQuadrados = 0
	
	for i in range(n, 0, -1):
		somaQuadrados+=i*i
		
	print(somaQuadrados)
	n = int(input())
