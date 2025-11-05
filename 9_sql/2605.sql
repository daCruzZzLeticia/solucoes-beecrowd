/* - - - - - - - - - - - - - - -
@source Beecrowd
@problem 2605 - Executive Representatives
@subject Data Selection

@author Letícia Cruz
@date 2021-10-30
- - - - - - - - - - - - - - - */

select prod.name, prov.name
from products prod
    join providers prov on (prod.id_providers = prov.id)
where
    prod.id_categories = 6;