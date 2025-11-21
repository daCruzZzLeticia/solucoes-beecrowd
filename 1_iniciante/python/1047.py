"""
@source Beecrowd
@problem 1047 - Game Time with Minutes
@subject Selection
 
@author Letícia Cruz
@date 2024-08-27
"""

# Entrada
Hi, Mi, Hf, Mf = input().split()
horaInicial = int(Hi)
minutoInicial = int(Mi)
horaFinal = int(Hf)
minutoFinal = int(Mf)

# Cálculo das horas e minutos
horasJogo = horaFinal - horaInicial
minutosJogo = minutoFinal - minutoInicial

# Ajustes para caso os minutos sejam negativos
if minutosJogo < 0:
    minutosJogo += 60
    horasJogo -= 1

# Ajustes para caso as horas sejam negativas OU caso o jogo dure exatamente 24 horas
if horasJogo < 0 or horaInicial == horaFinal and minutoInicial == minutoFinal:
    horasJogo += 24

# Saída
print(f'O JOGO DUROU {horasJogo} HORA(S) E {minutosJogo} MINUTO(S)')
