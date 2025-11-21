#' @source   Beecrowd
#' @problem  1001 - Extremely Basic
#' @subject  Sequential
#'
#' @author   Letícia Cruz
#' @date     2025-08-12

# recebe entrada
input <- file('stdin', 'r')

# tranformação da entrada para inteiro
a <- as.integer(readLines(input, n=1))
b <- as.integer(readLines(input, n=1))

soma = a + b

# paste concatena "X =" com soma e adiciona um espaço entre eles: X = valor
writeLines(paste("X =", soma))