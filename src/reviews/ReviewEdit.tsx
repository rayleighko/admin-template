import CloseIcon from "@mui/icons-material/Close"
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import {
  DateField,
  EditBase,
  EditProps,
  Labeled,
  SimpleForm,
  TextInput,
  useTranslate,
} from "react-admin"

import ProductReferenceField from "../products/ProductReferenceField"
import { Review } from "../types"
import CustomerReferenceField from "../visitors/CustomerReferenceField"
import ReviewEditToolbar from "./ReviewEditToolbar"
import StarRatingField from "./StarRatingField"

interface Props extends EditProps<Review> {
  onCancel: () => void
}

const ReviewEdit = ({ onCancel, ...props }: Props) => {
  const translate = useTranslate()
  return (
    <EditBase {...props}>
      <Box pt={5} width={{ xs: "100vW", sm: 400 }} mt={{ xs: 2, sm: 1 }}>
        <Stack direction="row" p={2}>
          <Typography variant="h6" flex="1">
            {translate("resources.reviews.detail")}
          </Typography>
          <IconButton onClick={onCancel} size="small">
            <CloseIcon />
          </IconButton>
        </Stack>
        <SimpleForm sx={{ pt: 0, pb: 0 }} toolbar={<ReviewEditToolbar />}>
          <Grid container rowSpacing={1} mb={1}>
            <Grid item xs={6}>
              <Labeled>
                <CustomerReferenceField />
              </Labeled>
            </Grid>
            <Grid item xs={6}>
              <Labeled>
                <ProductReferenceField />
              </Labeled>
            </Grid>
            <Grid item xs={6}>
              <Labeled>
                <DateField source="date" />
              </Labeled>
            </Grid>
            <Grid item xs={6}>
              <Labeled>
                <StarRatingField />
              </Labeled>
            </Grid>
          </Grid>
          <TextInput source="comment" maxRows={15} multiline fullWidth />
        </SimpleForm>
      </Box>
    </EditBase>
  )
}

export default ReviewEdit
