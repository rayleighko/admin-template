import { FieldProps, Link, useRecordContext } from "react-admin"

import { Customer } from "../types"
import FullNameField from "./FullNameField"

const CustomerLinkField = (props: FieldProps<Customer>) => {
  const record = useRecordContext<Customer>()
  if (!record) {
    return null
  }
  return (
    <Link to={`/customers/${record.id}`}>
      <FullNameField />
    </Link>
  )
}

CustomerLinkField.defaultProps = {
  source: "customer_id",
}

export default CustomerLinkField
