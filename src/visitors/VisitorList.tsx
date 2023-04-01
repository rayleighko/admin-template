import { Theme, useMediaQuery } from "@mui/material"
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  List,
  NullableBooleanInput,
  NumberField,
  SearchInput,
} from "react-admin"

import ColoredNumberField from "./ColoredNumberField"
import CustomerLinkField from "./CustomerLinkField"
import MobileGrid from "./MobileGrid"
import SegmentInput from "./SegmentInput"
import SegmentsField from "./SegmentsField"
import VisitorListAside from "./VisitorListAside"

const visitorFilters = [
  <SearchInput key={1} source="q" alwaysOn />,
  <DateInput key={2} source="last_seen_gte" />,
  <NullableBooleanInput key={3} source="has_ordered" />,
  <NullableBooleanInput key={4} source="has_newsletter" defaultValue />,
  <SegmentInput key={5} source="groups" />,
]

const VisitorList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"))
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"))
  return (
    <List
      filters={isSmall ? visitorFilters : undefined}
      sort={{ field: "last_seen", order: "DESC" }}
      perPage={25}
      aside={<VisitorListAside />}>
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid
          optimized
          rowClick="edit"
          sx={{
            "& .column-groups": {
              md: { display: "none" },
              lg: { display: "table-cell" },
            },
          }}>
          <CustomerLinkField />
          <DateField source="last_seen" />
          <NumberField
            source="nb_commands"
            label="resources.customers.fields.commands"
            sx={{ color: "purple" }}
          />
          <ColoredNumberField
            source="total_spent"
            options={{ style: "currency", currency: "USD" }}
          />
          <DateField source="latest_purchase" showTime />
          <BooleanField source="has_newsletter" label="News." />
          <SegmentsField source="groups" />
        </Datagrid>
      )}
    </List>
  )
}

export default VisitorList
