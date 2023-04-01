import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  Identifier,
  TextField,
} from "react-admin"

import ProductReferenceField from "../products/ProductReferenceField"
import CustomerReferenceField from "../visitors/CustomerReferenceField"
import BulkAcceptButton from "./BulkAcceptButton"
import BulkRejectButton from "./BulkRejectButton"
import rowStyle from "./rowStyle"
import StarRatingField from "./StarRatingField"

export interface ReviewListDesktopProps {
  selectedRow?: Identifier
}

const ReviewsBulkActionButtons = () => (
  <>
    <BulkAcceptButton />
    <BulkRejectButton />
    <BulkDeleteButton />
  </>
)

const ReviewListDesktop = ({ selectedRow }: ReviewListDesktopProps) => (
  <Datagrid
    rowClick="edit"
    rowStyle={rowStyle(selectedRow)}
    optimized
    bulkActionButtons={<ReviewsBulkActionButtons />}
    sx={{
      "& .RaDatagrid-thead": {
        borderLeftColor: "transparent",
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
      },
      "& .column-comment": {
        maxWidth: "18em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    }}>
    <DateField source="date" />
    <CustomerReferenceField link={false} />
    <ProductReferenceField link={false} />
    <StarRatingField size="small" />
    <TextField source="comment" />
    <TextField source="status" />
  </Datagrid>
)

export default ReviewListDesktop
