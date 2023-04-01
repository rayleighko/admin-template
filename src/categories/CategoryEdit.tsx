import {
  Datagrid,
  Edit,
  EditButton,
  Labeled,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  useRecordContext,
  useTranslate,
} from "react-admin"

import ProductRefField from "../products/ProductRefField"
import ThumbnailField from "../products/ThumbnailField"
import { Category } from "../types"

const CategoryEdit = () => (
  <Edit title={<CategoryTitle />}>
    <SimpleForm>
      <TextInput source="name" />
      <Labeled label="resources.categories.fields.products" fullWidth>
        <ReferenceManyField
          reference="products"
          target="category_id"
          perPage={20}>
          <Datagrid
            sx={{
              "& .column-thumbnail": {
                width: 25,
                padding: 0,
              },
            }}>
            <ThumbnailField source="thumbnail" label="" />
            <ProductRefField source="reference" />
            <NumberField
              source="price"
              options={{ style: "currency", currency: "USD" }}
            />
            <NumberField
              source="width"
              options={{ minimumFractionDigits: 2 }}
            />
            <NumberField
              source="height"
              options={{ minimumFractionDigits: 2 }}
            />
            <NumberField source="stock" />
            <NumberField source="sales" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Labeled>
    </SimpleForm>
  </Edit>
)

const CategoryTitle = () => {
  const record = useRecordContext<Category>()
  const translate = useTranslate()

  return record ? (
    <span>
      {translate("resources.categories.name", { smart_count: 1 })} &quot;
      {record.name}&quot;
    </span>
  ) : null
}

export default CategoryEdit
