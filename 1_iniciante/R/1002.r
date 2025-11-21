#' @source   Beecrowd
#' @problem  1002 - Area of a Circle
#' @subject  Sequential
#'
#' @author   Letícia Cruz
#' @date     2025-08-15

input <- file('stdin', 'r')
raio <- as.double(readLines(input, n=1)) # tranforma entrada em double

π = 3.14159

area <- π * (raio ^ 2) # usa ^ para potência

# cat não coloca espaço entre os itens: A=valor 
cat(sprintf("A=%.4f\n", area)) # sprintf para formatação das casas decimais

# cat mais usado para texto em console e write para escrever em arquivos (geralmente dados estruturados)