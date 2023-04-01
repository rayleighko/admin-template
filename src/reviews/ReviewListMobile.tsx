import { List } from "@mui/material"
import PropTypes from "prop-types"
import { RecordContextProvider, useListContext } from "react-admin"

import { Review } from "./../types"
import { ReviewItem } from "./ReviewItem"

const ReviewListMobile = () => {
  const { data, isLoading, total } = useListContext<Review>()
  if (isLoading || Number(total) === 0) {
    return null
  }
  return (
    <List sx={{ width: "100vw" }}>
      {data.map((review) => (
        <RecordContextProvider value={review} key={review.id}>
          <ReviewItem />
        </RecordContextProvider>
      ))}
    </List>
  )
}

ReviewListMobile.propTypes = {
  data: PropTypes.any,
  hasBulkActions: PropTypes.bool.isRequired,
  ids: PropTypes.array,
  onToggleItem: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
}

ReviewListMobile.defaultProps = {
  hasBulkActions: false,
  selectedIds: [],
}

export default ReviewListMobile
