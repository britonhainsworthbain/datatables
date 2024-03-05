// Reexport your entry components here
import DataHandler  from './local/DataHandler'
import Datatable    from './local/Datatable.svelte'
import Th           from './local/Th.svelte'
import ThFilter     from './local/ThFilter.svelte'
import Td           from './local/Td.svelte'
import Pagination   from './local/Pagination.svelte'
import RowCount     from './local/RowCount.svelte'
import RowsPerPage  from './local/RowsPerPage.svelte'
import Search       from './local/Search.svelte'
import { check }    from './local/Comparator'
import type { Internationalization, Row, Field, Comparator, Filter, Sort, Selectable, Order, FilterBy, OrderBy  } from './local'

export { DataHandler, check, Datatable, Th, ThFilter, Td, Pagination, RowCount, RowsPerPage, Search }

export type  {
    Internationalization,
    Row,
    Field,
    Comparator,
    Filter,
    Sort,

    // deprecated
    Selectable,
    Order,
    OrderBy,
    FilterBy,
}