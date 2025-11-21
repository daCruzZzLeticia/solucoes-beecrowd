"""
@source Beecrowd
@problem 1045 - Triangle Types
@subject Selection

@author Letícia Cruz
@date 2025-07-14
"""

# Entrada
a, b, c = input().split()
a = float(a)
b = float(b)
c = float(c)

# Maior valor em a
if a<b:
      aux = a
      if b>c: a = b; b = aux
      else: a = c; c = aux
elif a<c:  aux = a; a = c; c = aux


a2 = a**2; b2 = b**2; c2 = c**2
if a>= b+c: print("NAO FORMA TRIANGULO")
else:
      # Verificação do ângulo
      if a2==b2+c2: print("TRIANGULO RETANGULO")
      elif a2>b2+c2: print("TRIANGULO OBTUSANGULO")
      else: print("TRIANGULO ACUTANGULO")

      # Verificação dos lados
      if a==b and b == c: print("TRIANGULO EQUILATERO")
      elif a==b or a==c or b==c: print("TRIANGULO ISOSCELES")
