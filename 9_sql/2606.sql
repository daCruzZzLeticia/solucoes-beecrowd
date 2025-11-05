/* - - - - - - - - - - - - - - -
@source Beecrowd
@problem 2606 - Categories
@subject Data Selection

@author Letícia Cruz
@date 2021-10-30
- - - - - - - - - - - - - - - */

select prod.id, prod.name
from products prod
    join categories catg on (prod.id_categories = catg.id)
where
    catg.name like 'super%';