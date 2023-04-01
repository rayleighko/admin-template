import { Chip, Stack } from "@mui/material"
import { FieldProps, useRecordContext, useTranslate } from "react-admin"

import segments from "../segments/data"
import { Customer } from "../types"

const segmentsById = segments.reduce((acc, segment) => {
  acc[segment.id] = segment
  return acc
}, {} as { [key: string]: any })

const SegmentsField = (props: FieldProps) => {
  const translate = useTranslate()
  const record = useRecordContext<Customer>()
  if (!record || !record.groups) {
    return null
  }
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {record.groups.map((segmentId) => (
        <Chip
          size="small"
          key={segmentId}
          label={translate(segmentsById[segmentId].name as string)}
        />
      ))}
    </Stack>
  )
}

export default SegmentsField
